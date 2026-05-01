'use client';

import React from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { ArrowLeft, Trophy, Brain, ChevronRight, CheckCircle, Clock, Zap, Sparkles, Lock } from 'lucide-react';

export default function FinalMockPage() {
  const { data: session } = useSession();
  const isAuthenticated = !!session?.user;

  return (
    <div className="max-w-3xl mx-auto">

      {/* Back Link */}
      <Link
        href="/assessment"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors mb-6 group"
      >
        <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
        Back to Assessments
      </Link>

      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 text-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-md shadow-orange-200 dark:shadow-none">
          <Trophy className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">Final Mock Test</h2>
          <p className="text-xs text-gray-500 dark:text-gray-400">Full exam simulation — choose your test mode below</p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-amber-200 via-orange-200 to-transparent dark:from-amber-900/40 dark:via-orange-900/30 mb-8 mt-4" />

      {/* Auth Gate */}
      {!isAuthenticated && (
        <div className="mb-8 p-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/40 rounded-2xl">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-amber-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-0.5">Sign In Required</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                You need an account to take the Final Mock Test and save your results.{' '}
                <Link href="/login" className="text-amber-600 dark:text-amber-400 font-bold hover:underline">Sign In</Link>
                {' '}or{' '}
                <Link href="/signup" className="text-amber-600 dark:text-amber-400 font-bold hover:underline">Join Now</Link>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Cards */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-5 ${!isAuthenticated ? 'opacity-50 pointer-events-none grayscale' : ''}`}>

        {/* Standard Mock Exam */}
        <Link
          href="/assessment/practice-tests/standard-mock-exam"
          className="group relative flex flex-col p-6 bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 rounded-2xl hover:border-green-500 dark:hover:border-green-500/60 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300"
        >
          {/* Icon badge */}
          <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center mb-4 shadow-md shadow-green-200 dark:shadow-none group-hover:scale-105 transition-transform duration-200">
            <CheckCircle className="w-6 h-6 text-white" />
          </div>

          <h3 className="text-base font-extrabold text-gray-900 dark:text-white mb-1.5 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
            Standard Mock Exam
          </h3>
          <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400 mb-5 flex-grow">
            A full 90-question simulation of the official SPSV entrance exam covering all chapters and categories.
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-tight text-gray-400 dark:text-gray-500">
              <span className="flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5" /> 90 Questions
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> 105 mins
              </span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-green-500 group-hover:translate-x-0.5 transition-all" />
          </div>

          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-green-50 dark:from-green-900/20 to-transparent rounded-2xl" />
        </Link>

        {/* AI Weak Area Test */}
        <Link
          href="/assessment/practice-tests/ai-weakness-test"
          className="group relative flex flex-col p-6 bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 rounded-2xl hover:border-purple-500 dark:hover:border-purple-500/60 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300"
        >
          {/* Icon badge */}
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 shadow-md shadow-purple-200 dark:shadow-none group-hover:scale-105 transition-transform duration-200">
            <Brain className="w-6 h-6 text-white" />
          </div>

          {/* AI badge */}
          <span className="absolute top-4 right-4 inline-flex items-center gap-1 px-2 py-0.5 bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 text-[9px] font-black uppercase tracking-widest rounded-full border border-purple-200 dark:border-purple-800/50">
            <Sparkles className="w-2.5 h-2.5" />
            AI Powered
          </span>

          <h3 className="text-base font-extrabold text-gray-900 dark:text-white mb-1.5 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            AI Weak Area Test
          </h3>
          <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400 mb-5 flex-grow">
            A dynamic exam intelligently focused on your weakest chapters, built from your previous test performance.
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-tight text-gray-400 dark:text-gray-500">
              <span className="flex items-center gap-1">
                <Zap className="w-3.5 h-3.5" /> Personalised
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> ~60 mins
              </span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-purple-500 group-hover:translate-x-0.5 transition-all" />
          </div>

          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-50 dark:from-purple-900/20 to-transparent rounded-2xl" />
        </Link>

      </div>

      {/* Footer note */}
      <p className="mt-8 text-center text-[11px] text-gray-400 dark:text-gray-600">
        Results are saved to your account after completing the exam.
      </p>
    </div>
  );
}
