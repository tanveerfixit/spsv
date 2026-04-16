'use client';

import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { FileText, ChevronRight, CheckCircle, Clock, Lock } from 'lucide-react';

const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

const TESTS = [
  {
    title: 'Terminology Test',
    description: 'Test your knowledge of key SPSV industry terms and definitions.',
    questions: 25,
    time: '25 mins',
    available: true
  },
  {
    title: 'Chapter 1 Test',
    description: 'Assess your understanding of the SPSV industry, NTA role, and licensing.',
    questions: 10,
    time: '10 mins',
    available: true
  },
  {
    title: 'Chapter 2 Test',
    description: 'Test your knowledge on SPSV driver licensing, rights, and responsibilities.',
    questions: 30,
    time: '30 mins',
    available: true
  },
  {
    title: 'Chapter 3 Test',
    description: 'Test your knowledge on vehicle standards, inspections, and equipment requirements.',
    questions: 50,
    time: '50 mins',
    available: true
  },
  {
    title: 'Industry Knowledge Test',
    description: 'Comprehensive test covering all chapters of the Official Manual.',
    questions: 54,
    time: '60 mins',
    available: false
  },
  {
    title: 'Area Knowledge Test',
    description: 'Test your knowledge of the local area, routes, and landmarks.',
    questions: 36,
    time: '45 mins',
    available: false
  },
  {
    title: 'Full Mock Exam',
    description: 'Simulate the real SPSV test with both Industry and Area Knowledge sections.',
    questions: 90,
    time: '105 mins',
    available: false
  }
];

export default function AssessmentPage() {
  const { data: session, status } = useSession();
  const isAuthenticated = !!session?.user;

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header Section */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-lg flex items-center justify-center flex-shrink-0">
          <FileText className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">Assessments</h2>
          <p className="text-xs text-gray-500 dark:text-gray-400">Test your knowledge and track your progress</p>
        </div>
      </div>

      {/* Auth Gate / Notice */}
      {!isAuthenticated && (
        <div className="mb-8 p-6 bg-slate-50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-800 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm shadow-green-200 dark:shadow-none">
              <Lock className="w-5 h-5" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">Registration Required</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 max-w-md">
                Practice tests are available for registered users. Create an account to save your scores and track your SPSV readiness.
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                <Link href="/login" className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-bold rounded-lg transition-all shadow-sm">
                  Sign In
                </Link>
                <Link href="/signup" className="px-5 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white text-sm font-bold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
                  Join Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Assessment Grid */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 ${!isAuthenticated ? 'opacity-50 pointer-events-none grayscale' : ''}`}>
        {TESTS.map((test) => {
          const href = `/assessment/practice-tests/${slugify(test.title)}`;
          
          if (!test.available) {
            return (
              <div 
                key={test.title}
                className="group flex flex-col p-4 bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800 rounded-xl opacity-60 relative overflow-hidden"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-sm font-bold text-gray-700 dark:text-gray-300">{test.title}</h3>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded uppercase tracking-wider">Soon</span>
                </div>
                <p className="text-[11px] leading-relaxed text-gray-500 dark:text-gray-500 mb-4 flex-grow">
                  {test.description}
                </p>
                <div className="flex items-center gap-3 text-[10px] font-bold text-gray-400 uppercase tracking-tight">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>{test.questions} Qs</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{test.time}</span>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <Link 
              key={test.title}
              href={href}
              className="group flex flex-col p-4 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl hover:shadow-lg hover:shadow-green-500/5 hover:border-green-500 dark:hover:border-green-500/50 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  {test.title}
                </h3>
                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-green-500 transition-all transform group-hover:translate-x-0.5" />
              </div>
              <p className="text-[11px] leading-relaxed text-gray-500 dark:text-gray-400 mb-4 flex-grow">
                {test.description}
              </p>
              <div className="flex items-center gap-3 text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-tight">
                <div className="flex items-center gap-1 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>{test.questions} Qs</span>
                </div>
                <div className="flex items-center gap-1 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{test.time}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
