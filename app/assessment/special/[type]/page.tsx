'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import TestSimulator from '@/components/content/TestSimulator';
import { Loader2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function SpecialTestPage() {
  const params = useParams();
  const type = params.type as string;
  const [questions, setQuestions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await fetch(`/api/questions/special?type=${type}`);
        if (!res.ok) throw new Error('Failed to fetch questions');
        const data = await res.json();
        setQuestions(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (type) fetchQuestions();
  }, [type]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <Loader2 className="w-10 h-10 animate-spin text-[#003057]" />
        <p className="font-black uppercase tracking-widest text-[#003057] text-xs">Preparing Examination...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-black text-red-600 uppercase mb-4 tracking-tight">Error</h2>
        <p className="text-slate-500 mb-8">{error}</p>
        <Link href="/assessment" className="px-6 py-3 bg-[#003057] text-white font-black uppercase tracking-widest rounded-sm">
          Return to Assessment
        </Link>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="text-center py-20 bg-white border-2 border-[#003057] p-10 shadow-2xl rounded-sm">
        <div className="bg-[#99cc33] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          <ArrowLeft className="w-8 h-8 text-[#003057]" />
        </div>
        <h2 className="text-2xl font-black text-[#003057] uppercase mb-4 tracking-tighter italic">No Questions Found</h2>
        <p className="text-slate-500 mb-10 font-medium uppercase tracking-widest text-xs leading-relaxed max-w-sm mx-auto">
          {type === 'weak' 
            ? "Great work! You haven't made any mistakes yet. Keep practicing to build your knowledge." 
            : "We couldn't load the industry test at this moment. Please try again."}
        </p>
        <Link href="/assessment" className="px-10 py-5 bg-[#003057] text-white font-black uppercase tracking-[0.2em] rounded-sm hover:bg-black transition-all">
          Go Back
        </Link>
      </div>
    );
  }

  const title = type === 'weak' ? 'Re-Practice Weak Questions' : 'Industry Knowledge Test';

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-2">
        <Link href="/assessment" className="p-2 hover:bg-slate-100 rounded-full transition-colors">
          <ArrowLeft className="w-5 h-5 text-slate-500" />
        </Link>
        <h1 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400">Special Assessment / {title}</h1>
      </div>
      
      <TestSimulator 
        questions={questions} 
        category={title} 
        passMark={75}
      />
    </div>
  );
}
