import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';

// Ensure only admins can access these routes
async function isAdmin() {
  const session = await getServerSession(authOptions);
  return session?.user && (session.user as any).role === 'ADMIN';
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAdmin())) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;

  try {
    const { question, answer, category, order } = await req.json();

    const updatedFaq = await prisma.fAQ.update({
      where: { id },
      data: {
        question,
        answer,
        category,
        order,
      },
    });

    return NextResponse.json(updatedFaq);
  } catch (error) {
    return NextResponse.json({ message: 'Error updating FAQ' }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAdmin())) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;

  try {
    await prisma.fAQ.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'FAQ deleted successfully' });
  } catch (error) {
    return NextResponse.json({ message: 'Error deleting FAQ' }, { status: 500 });
  }
}
