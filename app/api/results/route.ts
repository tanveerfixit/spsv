import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import prisma from '@/lib/prisma';

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const results = await prisma.testResult.findMany({
      where: { userId: (session.user as any).id },
      orderBy: { completedAt: 'desc' },
    });
    return NextResponse.json(results);
  } catch (error) {
    console.error('Error fetching results:', error);
    return NextResponse.json({ message: 'Error fetching results' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { category, score, totalQuestions, timeSpentSeconds } = await req.json();

    const newResult = await prisma.testResult.create({
      data: {
        userId: (session.user as any).id,
        category,
        score,
        totalQuestions,
        timeSpentSeconds,
      },
    });

    return NextResponse.json(newResult);
  } catch (error) {
    console.error('Error saving result:', error);
    return NextResponse.json({ message: 'Error saving result' }, { status: 500 });
  }
}
