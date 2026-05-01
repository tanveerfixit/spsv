import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import prisma from '@/lib/prisma';
import { sendEmail } from '@/lib/mail';

export async function POST(req: Request) {
  try {
    const { name, email, password, mobile } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    // Hash the password (using native bcrypt which is much faster)
    const hashedPassword = await bcrypt.hash(password, 10);

    // Default Role (Initial Admin)
    const isAdmin = email.toLowerCase() === 'tanveerfixit@gmail.com';
    const role = isAdmin ? 'ADMIN' : 'USER';

    // Trial Calculation (10 days from now)
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 10);

    // Create user
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        mobile,
        role,
        expiresAt: isAdmin ? null : expiresAt, 
        isWhitelisted: isAdmin,
      },
    });

    // Send welcome email (Non-blocking: fire and forget to avoid delaying the response)
    sendEmail({
      to: email,
      subject: 'Welcome to SPSV Study & Test!',
      text: `Hi ${name}, welcome to the platform. Your 10-day trial starts now. Enjoy!`,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>Welcome to SPSV Study & Test!</h2>
          <p>Hi ${name},</p>
          <p>Your account has been created successfully. You have <strong>10 days of free trial access</strong> to the platform.</p>
          <p>Your trial expires on: <strong>${expiresAt.toDateString()}</strong></p>
          <p>Good luck with your study!</p>
        </div>
      `
    }).catch(e => console.error('Error sending welcome email (background):', e));

    return NextResponse.json({ message: 'User created successfully', user: { id: newUser.id, name: newUser.name, email: newUser.email } }, { status: 201 });
  } catch (error) {
    console.error('Error during signup:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
