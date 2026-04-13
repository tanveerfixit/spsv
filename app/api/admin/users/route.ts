import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import prisma from '@/lib/prisma';

// Ensure only admins can access these routes
async function isAdmin() {
  const session = await getServerSession(authOptions);
  return session?.user && (session.user as any).role === 'ADMIN';
}

export async function GET() {
  if (!(await isAdmin())) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const users = await prisma.$queryRaw`
      SELECT id, name, email, mobile, role, isBlocked, isWhitelisted, createdAt, expiresAt 
      FROM User 
      ORDER BY createdAt DESC
    `;
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching users' }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  if (!(await isAdmin())) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id, isBlocked, isWhitelisted, expiresAt, name } = await req.json();

    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        isBlocked,
        isWhitelisted,
        expiresAt: expiresAt ? new Date(expiresAt) : undefined,
        name
      }
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json({ message: 'Error updating user' }, { status: 500 });
  }
}
