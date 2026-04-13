import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { sendEmail } from '@/lib/mail';

async function isAdmin() {
  const session = await getServerSession(authOptions);
  return session?.user && (session.user as any).role === 'ADMIN';
}

export async function POST(req: Request) {
  if (!(await isAdmin())) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { to, config } = await req.json();

    if (!to) {
      return NextResponse.json({ message: 'Recipient email is required' }, { status: 400 });
    }

    // Attempt to send test email
    await sendEmail({
      to,
      subject: 'SMTP Test - SPSV Admin',
      text: 'This is a test email from your SPSV Admin Panel to verify SMTP settings.',
      html: `
        <div style="font-family: sans-serif; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #2563eb;">SMTP Configuration Test</h2>
          <p>This is a test email sent from your <strong>SPSV Study & Test</strong> Admin Panel.</p>
          <p>If you are seeing this email, your SMTP settings are working correctly!</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="color: #999; font-size: 12px;">Timestamp: ${new Date().toLocaleString()}</p>
        </div>
      `,
      config: config // Pass temporary config if provided for testing
    });

    return NextResponse.json({ message: 'Test email sent successfully!' });
  } catch (error: any) {
    console.error('SMTP Test Error:', error);
    return NextResponse.json({ 
      message: 'Failed to send test email', 
      error: error.message 
    }, { status: 500 });
  }
}
