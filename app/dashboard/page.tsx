'use client';

import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { Clock, CheckCircle, Target, TrendingUp, AlertCircle, Loader2 } from 'lucide-react';

interface TestResult {
  id: string;
  category: string;
  score: number;
  totalQuestions: number;
  timeSpentSeconds: number;
  completedAt: string;
}

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const [results, setResults] = useState<TestResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      if (status !== 'authenticated') {
        if (status === 'unauthenticated') setLoading(false);
        return;
      }

      try {
        const res = await fetch('/api/results');
        if (res.ok) {
          const data = await res.json();
          setResults(data);
        }
      } catch (error) {
        console.error('Error fetching results:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [status]);

  if (status === 'loading' || loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
        <Loader2 className="w-10 h-10 animate-spin text-blue-500" />
        <p className="text-gray-600 dark:text-gray-400">Loading your progress...</p>
      </div>
    );
  }

  if (status === 'unauthenticated') {
    return (
      <div className="max-w-3xl mx-auto text-center py-20">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Track Your Progress</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto">
          Sign in to your account to save your test scores, view statistics, and identify areas for improvement.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link href="/login" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20">
            Sign In
          </Link>
          <Link href="/signup" className="px-8 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-bold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
            Create Account
          </Link>
        </div>
      </div>
    );
  }

  // Calculate statistics
  const totalTests = results.length;
  const totalQuestions = results.reduce((acc, r) => acc + r.totalQuestions, 0);
  const totalCorrect = results.reduce((acc, r) => acc + r.score, 0);
  const averageScore = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
  const totalTimeSeconds = results.reduce((acc, r) => acc + (r.timeSpentSeconds || 0), 0);
  
  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    if (h > 0) return `${h}h ${m}m`;
    return `${m}m`;
  };

  // Group by category to find weak areas
  const categoryStats = results.reduce((acc, r) => {
    if (!acc[r.category]) {
      acc[r.category] = { totalQuestions: 0, totalCorrect: 0 };
    }
    acc[r.category].totalQuestions += r.totalQuestions;
    acc[r.category].totalCorrect += r.score;
    return acc;
  }, {} as Record<string, { totalQuestions: number, totalCorrect: number }>);

  const weakCategories = Object.entries(categoryStats)
    .map(([category, stats]) => ({
      category,
      percentage: Math.round((stats.totalCorrect / stats.totalQuestions) * 100)
    }))
    .filter(c => c.percentage < 80) // Consider anything under 80% a weak area
    .sort((a, b) => a.percentage - b.percentage);

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">My Progress Dashboard</h2>

      {/* Top Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col">
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-2">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Tests Taken</span>
          </div>
          <span className="text-2xl font-bold text-gray-900 dark:text-white">{totalTests}</span>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col">
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-2">
            <Target className="w-4 h-4" />
            <span className="text-sm font-medium">Average Score</span>
          </div>
          <span className="text-2xl font-bold text-gray-900 dark:text-white">{averageScore}%</span>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col">
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-2">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">Questions Answered</span>
          </div>
          <span className="text-2xl font-bold text-gray-900 dark:text-white">{totalQuestions}</span>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col">
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-2">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">Time Spent</span>
          </div>
          <span className="text-2xl font-bold text-gray-900 dark:text-white">{formatTime(totalTimeSeconds)}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column: Recent Tests */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Recent Tests</h3>
          {results.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 text-center text-gray-500 dark:text-gray-400">
              You haven&apos;t taken any tests yet. Head over to the Assessment section to get started!
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700">
                      <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Date</th>
                      <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Category</th>
                      <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Score</th>
                      <th className="p-4 text-sm font-semibold text-gray-600 dark:text-gray-300">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.slice(0, 10).map((result) => {
                      const percentage = Math.round((result.score / result.totalQuestions) * 100);
                      const date = new Date(result.completedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
                      return (
                        <tr key={result.id} className="border-b border-gray-100 dark:border-gray-800 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                          <td className="p-4 text-sm text-gray-600 dark:text-gray-400">{date}</td>
                          <td className="p-4 text-sm font-medium text-gray-900 dark:text-white">{result.category}</td>
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              <span className={`text-sm font-bold ${percentage >= 80 ? 'text-green-600 dark:text-green-400' : percentage >= 60 ? 'text-yellow-600 dark:text-yellow-400' : 'text-red-600 dark:text-red-400'}`}>
                                {percentage}%
                              </span>
                              <span className="text-xs text-gray-500 dark:text-gray-500">({result.score}/{result.totalQuestions})</span>
                            </div>
                          </td>
                          <td className="p-4 text-sm text-gray-600 dark:text-gray-400">
                            {result.timeSpentSeconds ? `${Math.floor(result.timeSpentSeconds / 60)}m ${result.timeSpentSeconds % 60}s` : '-'}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Areas for Improvement */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Needs Practice</h3>
          <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
            {weakCategories.length === 0 ? (
              <div className="text-center py-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mb-3">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {totalTests > 0 ? "Great job! You're scoring above 80% in all categories." : "Take some tests to see your weak areas here."}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {weakCategories.map((weak) => (
                  <div key={weak.category} className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 dark:text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white">{weak.category}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-red-500 dark:bg-red-400 rounded-full" 
                            style={{ width: `${weak.percentage}%` }}
                          />
                        </div>
                        <span className="text-xs font-bold text-gray-700 dark:text-gray-300 w-8">{weak.percentage}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
