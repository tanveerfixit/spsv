'use client';

import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { Clock, CheckCircle, Target, TrendingUp, AlertCircle, Loader2, BarChart3 } from 'lucide-react';

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
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-3">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
        <p className="text-sm text-gray-500 dark:text-gray-400">Loading your progress...</p>
      </div>
    );
  }

  if (status === 'unauthenticated') {
    return (
      <div className="-m-3 md:-m-6 lg:-m-10 flex flex-col items-center justify-center min-h-[60vh] bg-gray-50 dark:bg-gray-950">
        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Track Your Progress</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 max-w-md text-center">
          Sign in to save your test scores, view statistics, and identify areas for improvement.
        </p>
        <div className="flex items-center gap-3">
          <Link href="/login" className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold transition-colors">Sign In</Link>
          <Link href="/signup" className="px-6 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white text-sm font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">Create Account</Link>
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
    .filter(c => c.percentage < 80)
    .sort((a, b) => a.percentage - b.percentage);

  return (
    <div className="-m-3 md:-m-6 lg:-m-10">
      {/* Top Bar */}
      <div className="bg-gray-900 dark:bg-black text-white">
        <div className="flex items-center justify-between px-4 md:px-6 h-12">
          <div className="flex items-center gap-3">
            <BarChart3 className="w-5 h-5 text-blue-400" />
            <h1 className="text-sm font-bold tracking-wide">My Progress Dashboard</h1>
          </div>
          <span className="text-xs text-gray-500">{totalTests} tests completed</span>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-b border-gray-200 dark:border-gray-800">
        <div className="p-4 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <div className="flex items-center gap-1.5 mb-1">
            <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Tests Taken</span>
          </div>
          <span className="text-xl font-black text-gray-900 dark:text-white">{totalTests}</span>
        </div>
        <div className="p-4 md:border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <div className="flex items-center gap-1.5 mb-1">
            <Target className="w-3.5 h-3.5 text-green-600" />
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Avg Score</span>
          </div>
          <span className="text-xl font-black text-gray-900 dark:text-white">{averageScore}%</span>
        </div>
        <div className="p-4 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 border-t md:border-t-0">
          <div className="flex items-center gap-1.5 mb-1">
            <TrendingUp className="w-3.5 h-3.5 text-purple-600" />
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Questions</span>
          </div>
          <span className="text-xl font-black text-gray-900 dark:text-white">{totalQuestions}</span>
        </div>
        <div className="p-4 bg-white dark:bg-gray-900 border-t md:border-t-0">
          <div className="flex items-center gap-1.5 mb-1">
            <Clock className="w-3.5 h-3.5 text-orange-600" />
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Time Spent</span>
          </div>
          <span className="text-xl font-black text-gray-900 dark:text-white">{formatTime(totalTimeSeconds)}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Recent Tests — Full Width Table */}
        <div className="lg:col-span-2 lg:border-r border-gray-200 dark:border-gray-800">
          <div className="px-4 md:px-6 py-3 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-800">
            <h3 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.15em]">Recent Tests</h3>
          </div>

          {results.length === 0 ? (
            <div className="py-16 text-center bg-white dark:bg-gray-900">
              <p className="text-sm text-gray-500 dark:text-gray-400">No tests taken yet. Head to the Assessment section to get started!</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                    <th className="px-4 md:px-6 py-2.5 text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                    <th className="px-4 md:px-6 py-2.5 text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Category</th>
                    <th className="px-4 md:px-6 py-2.5 text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Score</th>
                    <th className="px-4 md:px-6 py-2.5 text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden sm:table-cell">Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {results.slice(0, 15).map((result) => {
                    const percentage = Math.round((result.score / result.totalQuestions) * 100);
                    const date = new Date(result.completedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
                    return (
                      <tr key={result.id} className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors">
                        <td className="px-4 md:px-6 py-2.5 text-xs text-gray-500 dark:text-gray-400">{date}</td>
                        <td className="px-4 md:px-6 py-2.5 text-xs font-bold text-gray-900 dark:text-white">{result.category}</td>
                        <td className="px-4 md:px-6 py-2.5">
                          <div className="flex items-center gap-2">
                            <span className={`text-xs font-black ${percentage >= 80 ? 'text-green-600' : percentage >= 60 ? 'text-yellow-600' : 'text-red-600'}`}>
                              {percentage}%
                            </span>
                            <span className="text-[10px] text-gray-400">({result.score}/{result.totalQuestions})</span>
                          </div>
                        </td>
                        <td className="px-4 md:px-6 py-2.5 text-xs text-gray-500 dark:text-gray-400 hidden sm:table-cell">
                          {result.timeSpentSeconds ? `${Math.floor(result.timeSpentSeconds / 60)}m ${result.timeSpentSeconds % 60}s` : '-'}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Needs Practice — Right Panel */}
        <div className="bg-white dark:bg-gray-900 border-t lg:border-t-0 border-gray-200 dark:border-gray-800">
          <div className="px-4 md:px-6 py-3 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-800">
            <h3 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.15em]">Needs Practice</h3>
          </div>

          <div className="p-4 md:p-6">
            {weakCategories.length === 0 ? (
              <div className="text-center py-6">
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {totalTests > 0 ? "All categories above 80%. Keep it up!" : "Take tests to see weak areas here."}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {weakCategories.map((weak) => (
                  <div key={weak.category}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-3.5 h-3.5 text-red-500 shrink-0" />
                        <span className="text-xs font-bold text-gray-900 dark:text-white">{weak.category}</span>
                      </div>
                      <span className="text-[10px] font-bold text-red-600">{weak.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 overflow-hidden">
                      <div className="h-full bg-red-500 transition-all duration-700" style={{ width: `${weak.percentage}%` }} />
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
