import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { sendEmail } from '@/lib/mail';
import crypto from 'crypto';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ message: 'Email is required' }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      // For security, don't reveal if user exists or not
      return NextResponse.json({ message: 'If an account exists with this email, an OTP has been sent.' });
    }

    // Check resend limit (1 minute)
    const now = new Date();
    if (user.resetTokenLastSentAt) {
      const diff = now.getTime() - new Date(user.resetTokenLastSentAt).getTime();
      if (diff < 60000) {
        const remaining = Math.ceil((60000 - diff) / 1000);
        return NextResponse.json({ 
          message: `Please wait ${remaining} seconds before resending.` 
        }, { status: 429 });
      }
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpires = new Date(now.getTime() + 15 * 60000); // 15 minutes

    await prisma.user.update({
      where: { email },
      data: {
        resetToken: otp,
        resetTokenExpires: otpExpires,
        resetTokenLastSentAt: now,
      },
    });

    // Send email
    await sendEmail({
      to: email,
      subject: 'Your Password Reset OTP',
      text: `Your OTP for password reset is: ${otp}. It will expire in 15 minutes.`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #003057; text-align: center;">Password Reset</h2>
          <p>Hello,</p>
          <p>You requested to reset your password. Use the OTP below to proceed:</p>
          <div style="background: #f4f4f4; padding: 20px; text-align: center; font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #003057;">
            ${otp}
          </div>
          <p>This OTP will expire in 15 minutes.</p>
          <p>If you didn't request this, you can safely ignore this email.</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 12px; color: #666; text-align: center;">SPSV Study Platform Support</p>
        </div>
      `,
    });

    return NextResponse.json({ message: 'If an account exists with this email, an OTP has been sent.' });
  } catch (error) {
    console.error('Forgot password error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
