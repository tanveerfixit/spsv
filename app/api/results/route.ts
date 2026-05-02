import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
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
    const { 
      id,
      category, 
      score, 
      totalQuestions, 
      wrongAnswers, 
      skippedAnswers, 
      timeSpentSeconds,
      responses 
    } = await req.json();

    const userId = (session.user as any).id;

    if (id) {
      // Update existing result
      const updatedResult = await prisma.testResult.update({
        where: { id },
        data: {
          score,
          totalQuestions,
          wrongAnswers: wrongAnswers || 0,
          skippedAnswers: skippedAnswers || 0,
          timeSpentSeconds,
          responses: responses || [],
        }
      });
      return NextResponse.json(updatedResult);
    }

    // Create new result
    const newResult = await prisma.testResult.create({
      data: {
        userId,
        category,
        score,
        totalQuestions,
        wrongAnswers: wrongAnswers || 0,
        skippedAnswers: skippedAnswers || 0,
        timeSpentSeconds,
        responses: responses || [],
      },
    });

    return NextResponse.json(newResult);
  } catch (error) {
    console.error('Error saving result:', error);
    return NextResponse.json({ message: 'Error saving result' }, { status: 500 });
  }
}
