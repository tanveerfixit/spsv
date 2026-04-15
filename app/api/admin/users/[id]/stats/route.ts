import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';

// Ensure only admins can access these routes
async function isAdmin() {
  const session = await getServerSession(authOptions);
  return session?.user && (session.user as any).role === 'ADMIN';
}

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAdmin())) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const { id: userId } = await params;

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        mobile: true,
        createdAt: true,
      },
    });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    const testResults = await prisma.testResult.findMany({
      where: { userId },
      orderBy: { completedAt: 'desc' },
    });

    // Aggregation
    const totalTests = testResults.length;
    const totalTimeSpent = testResults.reduce((acc, curr) => acc + curr.timeSpentSeconds, 0);
    
    // Chapter-wise progress
    const chapterProgress: Record<string, any> = {};
    testResults.forEach((result) => {
      const { category, score, totalQuestions } = result;
      if (!chapterProgress[category]) {
        chapterProgress[category] = {
          category,
          bestScore: 0,
          totalScore: 0,
          totalQuestions: 0,
          attempts: 0,
          averageScorePercent: 0,
          highestScorePercent: 0,
        };
      }
      
      const percent = (score / totalQuestions) * 100;
      chapterProgress[category].attempts += 1;
      chapterProgress[category].totalScore += score;
      chapterProgress[category].totalQuestions += totalQuestions;
      if (percent > chapterProgress[category].highestScorePercent) {
        chapterProgress[category].highestScorePercent = percent;
        chapterProgress[category].bestScore = score;
      }
    });

    // Finalize chapter percentages
    const progressList = Object.values(chapterProgress).map((cp: any) => ({
      ...cp,
      averageScorePercent: Math.round((cp.totalScore / cp.totalQuestions) * 100),
      highestScorePercent: Math.round(cp.highestScorePercent),
    }));

    // Overall Average
    const overallTotalScore = testResults.reduce((acc, curr) => acc + curr.score, 0);
    const overallTotalQuestions = testResults.reduce((acc, curr) => acc + curr.totalQuestions, 0);
    const averageScorePercent = overallTotalQuestions > 0 
      ? Math.round((overallTotalScore / overallTotalQuestions) * 100) 
      : 0;

    return NextResponse.json({
      user,
      stats: {
        totalTests,
        totalTimeSpent,
        averageScorePercent,
        chapterProgress: progressList,
        recentActivity: testResults.slice(0, 10), // Last 10 attempts
      },
    });
  } catch (error) {
    console.error('Error fetching user stats:', error);
    return NextResponse.json({ message: 'Error fetching user statistics' }, { status: 500 });
  }
}
