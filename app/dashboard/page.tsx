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
  wrongAnswers?: number;
  skippedAnswers?: number;
  timeSpentSeconds: number;
  responses?: any[];
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
      <div className="-m-3 md:-m-6 lg:-m-10 flex flex-col items-center justify-center min-h-[70vh] bg-[#F2F5F7] p-6">
        <div className="bg-white border-2 border-[#003057] p-10 rounded-sm shadow-2xl max-w-md w-full relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#99cc33]" />
          <h2 className="text-3xl font-black text-[#003057] uppercase italic tracking-tighter mb-4">Track Progress</h2>
          <p className="text-sm text-slate-500 font-bold mb-8 uppercase tracking-widest leading-relaxed">
            Sign in to securely record your study sessions and verify your industry knowledge.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Link href="/login" className="px-6 py-4 bg-[#003057] text-white text-xs font-black uppercase tracking-[0.2em] rounded-sm hover:bg-black transition-all text-center border-b-4 border-black/20">Sign In</Link>
            <Link href="/signup" className="px-6 py-4 bg-slate-100 text-[#003057] text-xs font-black uppercase tracking-[0.2em] rounded-sm hover:bg-slate-200 transition-all text-center border-2 border-slate-200">New Account</Link>
          </div>
        </div>
      </div>
    );
  }

  // Calculate statistics
  const totalTests = results.length;
  const totalQuestions = results.reduce((acc, r) => acc + r.totalQuestions, 0);
  const totalCorrect = results.reduce((acc, r) => acc + r.score, 0);
  const totalWrong = results.reduce((acc, r) => acc + (r.wrongAnswers || 0), 0);
  const totalSkipped = results.reduce((acc, r) => acc + (r.skippedAnswers || 0), 0);
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

  // Analyze frequently missed questions
  const questionAnalysis = results.flatMap(r => r.responses || []).reduce((acc, resp) => {
    if (!resp.questionId) return acc;
    if (!acc[resp.questionId]) {
      acc[resp.questionId] = { 
        id: resp.questionId, 
        text: resp.question, 
        wrongCount: 0, 
        totalCount: 0,
        chapter: resp.chapter
      };
    }
    acc[resp.questionId].totalCount += 1;
    if (!resp.isCorrect) {
      acc[resp.questionId].wrongCount += 1;
    }
    return acc;
  }, {} as Record<string, any>);

  const missedQuestions = Object.values(questionAnalysis)
    .filter((q: any) => q.wrongCount > 0)
    .sort((a: any, b: any) => b.wrongCount - a.wrongCount)
    .slice(0, 5);

  return (
    <div className="-m-3 md:-m-6 lg:-m-10 min-h-screen bg-[#F2F5F7]">
      {/* Top Bar (Prometric Style) */}
      <div className="bg-[#003057] border-b-4 border-[#99cc33] shrink-0 shadow-xl">
        <div className="flex items-center justify-between px-6 h-14 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-3 text-white">
            <BarChart3 className="w-5 h-5 text-[#99cc33]" />
            <h1 className="text-sm font-black uppercase tracking-tight">Personal Performance Dashboard</h1>
          </div>
          <div className="text-[10px] font-black text-[#99cc33] uppercase tracking-widest bg-white/10 px-3 py-1 rounded-sm border border-white/20">
            {totalTests} SESSIONS LOGGED
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-b-2 border-slate-200 bg-white">
        <div className="p-6 border-r-2 border-slate-100">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-4 h-4 text-[#003057]" />
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Correct</span>
          </div>
          <span className="text-3xl font-black text-[#99cc33] tracking-tighter italic">{totalCorrect}</span>
        </div>
        <div className="p-6 md:border-r-2 border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="w-4 h-4 text-red-600" />
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Wrong</span>
          </div>
          <span className="text-3xl font-black text-red-600 tracking-tighter italic">{totalWrong}</span>
        </div>
        <div className="p-6 border-r-2 border-slate-100 border-t-2 md:border-t-0">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-[#003057]" />
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Accuracy</span>
          </div>
          <span className="text-3xl font-black text-[#003057] tracking-tighter italic">{averageScore}%</span>
        </div>
        <div className="p-6 border-t-2 md:border-t-0 bg-slate-50/50">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-4 h-4 text-[#003057]" />
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Total Time</span>
          </div>
          <span className="text-3xl font-black text-[#003057] tracking-tighter italic">{formatTime(totalTimeSeconds)}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 min-h-screen">
        {/* Recent Tests — Full Width Table */}
        <div className="lg:col-span-2 lg:border-r-2 border-slate-200 bg-white">
          <div className="px-6 py-4 bg-slate-50 border-b-2 border-slate-200 flex items-center justify-between">
            <h3 className="text-xs font-black text-[#003057] uppercase tracking-[0.2em]">Recent Activity Log</h3>
            <div className="h-1 w-12 bg-[#99cc33]" />
          </div>

          {results.length === 0 ? (
            <div className="py-16 text-center bg-white dark:bg-gray-900">
              <p className="text-sm text-gray-500 dark:text-gray-400">No tests taken yet. Head to the Assessment section to get started!</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50/50 border-b-2 border-slate-100">
                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Date</th>
                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Category</th>
                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Performance</th>
                    <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest hidden sm:table-cell">Duration</th>
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
        <div className="bg-[#F2F5F7] border-t lg:border-t-0 border-slate-200">
          <div className="px-6 py-4 bg-slate-50 border-b-2 border-slate-200 flex items-center justify-between">
            <h3 className="text-xs font-black text-[#003057] uppercase tracking-[0.2em]">Knowledge Gaps</h3>
            <AlertCircle className="w-4 h-4 text-red-500" />
          </div>

          <div className="p-4 md:p-6 space-y-8">
            {/* Weak Categories */}
            <div>
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Weak Categories</h4>
              {weakCategories.length === 0 ? (
                <div className="text-center py-6 bg-white border border-slate-100 rounded-sm">
                  <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <p className="text-[10px] text-gray-500 uppercase font-bold">All categories stable</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {weakCategories.map((weak) => (
                    <div key={weak.category} className="bg-white p-4 border-2 border-slate-200 rounded-sm relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-red-500" />
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-black text-[#003057] uppercase tracking-wider">{weak.category}</span>
                        <span className="text-xs font-black text-red-600 italic">{weak.percentage}%</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div className="h-full bg-red-500 transition-all duration-700" style={{ width: `${weak.percentage}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Missed Questions */}
            <div>
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Frequently Missed</h4>
              {missedQuestions.length === 0 ? (
                <div className="text-center py-6 bg-white border border-slate-100 rounded-sm">
                  <Target className="w-8 h-8 text-[#99cc33] mx-auto mb-2" />
                  <p className="text-[10px] text-gray-500 uppercase font-bold">No common mistakes found</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {missedQuestions.map((q: any) => (
                    <div key={q.id} className="bg-white p-4 border border-slate-200 rounded-sm shadow-sm group hover:border-[#003057] transition-all">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[9px] font-black text-[#99cc33] uppercase tracking-widest bg-[#003057] px-2 py-0.5 rounded-sm">
                          {q.chapter?.split(' ')[1] ? `CH ${q.chapter.split(' ')[1]}` : 'MISC'}
                        </span>
                        <span className="text-[10px] font-black text-red-500 uppercase tracking-tighter">Missed {q.wrongCount}x</span>
                      </div>
                      <p className="text-xs font-bold text-[#003057] leading-tight line-clamp-2">
                        {q.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
