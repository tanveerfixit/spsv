import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { allQuestions } from '@/lib/data/allQuestions';

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);
  const userId = (session?.user as any)?.id;

  if (!userId) {
    return NextResponse.json({ message: 'User ID not found in session' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const type = searchParams.get('type'); // 'industry-test' or 'weak'

  try {
    if (type === 'industry-test') {
      const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 54);
      return NextResponse.json(selected);
    }

    if (type === 'weak') {
      // Fetch all results with responses and completion date
      const results = await prisma.testResult.findMany({
        where: { userId },
        select: { 
          responses: true,
          completedAt: true 
        },
        orderBy: {
          completedAt: 'desc'
        }
      });

      // Track the latest status of each question
      // Key: question text, Value: isCorrect (boolean)
      const latestQuestionStatus = new Map<string, boolean>();
      
      results.forEach((r: any) => {
        try {
          const responses = typeof r.responses === 'string' ? JSON.parse(r.responses) : r.responses;
          
          if (Array.isArray(responses)) {
            responses.forEach((resp: any) => {
              if (resp.question && !latestQuestionStatus.has(resp.question)) {
                // The first time we see a question, it's the most recent one (due to ORDER BY desc)
                latestQuestionStatus.set(resp.question, resp.isCorrect);
              }
            });
          }
        } catch (parseError) {
          // Skip malformed records
        }
      });

      const weakQuestionTexts = new Set<string>();
      latestQuestionStatus.forEach((isCorrect, question) => {
        if (!isCorrect) {
          weakQuestionTexts.add(question);
        }
      });

      const weakQuestions = allQuestions.filter(q => q.question && weakQuestionTexts.has(q.question));
      const shuffledWeak = [...weakQuestions].sort(() => 0.5 - Math.random());
      return NextResponse.json(shuffledWeak);
    }

    return NextResponse.json({ message: 'Invalid type' }, { status: 400 });
  } catch (error: any) {
    console.error('Error fetching special questions:', error);
    return NextResponse.json({ 
      message: 'Error fetching questions', 
      error: error.message
    }, { status: 500 });
  }
}
