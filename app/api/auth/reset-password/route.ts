import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const { token, password } = await req.json();

    if (!token || !password) {
      return NextResponse.json({ message: 'Token and password are required' }, { status: 400 });
    }

    // Find user by token using Raw SQL
    const users = await prisma.$queryRaw<any[]>`
      SELECT id FROM User 
      WHERE resetToken = ${token} 
      AND resetTokenExpires > ${new Date()}
      LIMIT 1
    `;

    const user = users[0];

    if (!user) {
      return NextResponse.json({ message: 'Invalid or expired token' }, { status: 400 });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update user and clear reset token fields using Raw SQL
    await prisma.$executeRaw`
      UPDATE User 
      SET password = ${hashedPassword}, 
          resetToken = NULL, 
          resetTokenExpires = NULL 
      WHERE id = ${user.id}
    `;

    return NextResponse.json({ message: 'Password reset successful' });
  } catch (error) {
    console.error('Reset password error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
