import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
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
    const faqs = await prisma.fAQ.findMany({
      orderBy: { order: 'asc' },
    });
    return NextResponse.json(faqs);
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching FAQs' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  if (!(await isAdmin())) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { question, answer, category, order } = await req.json();

    const newFaq = await prisma.fAQ.create({
      data: {
        question,
        answer,
        category: category || 'General',
        order: order || 0,
      },
    });

    return NextResponse.json(newFaq);
  } catch (error) {
    return NextResponse.json({ message: 'Error creating FAQ' }, { status: 500 });
  }
}
