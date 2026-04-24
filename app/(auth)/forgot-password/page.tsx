'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Loader2, AlertCircle, CheckCircle, ArrowLeft, Shield } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Error occurred');
      } else {
        setSuccess(true);
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="-m-3 md:-m-6 lg:-m-10 min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col font-sans">

      <div className="flex-1 flex flex-col items-center justify-center p-6 bg-[#F2F5F7]">
        <div className="w-full max-w-[420px]">
          <div className="bg-white border-2 border-[#003057] rounded-sm p-8 md:p-10 shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#99cc33]" />
            
            <div className="mb-8">
              <h2 className="text-3xl font-black text-[#003057] uppercase italic tracking-tighter leading-none mb-2">
                Reset Access
              </h2>
              <div className="h-1 w-12 bg-[#99cc33] mb-4" />
              <p className="text-xs text-slate-500 font-bold uppercase tracking-widest leading-relaxed">
                Enter your credentials to receive a secure restoration link.
              </p>
            </div>

          {success ? (
            <div className="text-center space-y-8 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-20 h-20 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto shadow-sm border border-green-100 dark:border-green-900/30">
                <CheckCircle className="w-10 h-10" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Check your email</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 medium">
                  We&apos;ve sent reset instructions to <span className="text-gray-900 dark:text-white font-bold">{email}</span>
                </p>
              </div>
              <div className="pt-4">
                <Link 
                  href="/login"
                  className="w-full py-4 px-8 bg-[#003057] text-white text-xs font-black uppercase tracking-[0.2em] rounded-sm hover:bg-black transition-all flex items-center justify-center gap-3 border-b-4 border-black/20"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Return to Registry
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800 rounded-xl text-sm font-medium">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <p>{error}</p>
                </div>
              )}

              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#003057] transition-colors" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ACCOUNT EMAIL"
                  className="w-full pl-12 pr-4 py-4 text-sm font-bold bg-slate-50 border-2 border-slate-100 rounded-sm focus:border-[#003057] outline-none transition-all placeholder:text-slate-300 shadow-sm"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-5 bg-[#003057] hover:bg-black disabled:opacity-50 text-white text-xs font-black uppercase tracking-[0.2em] rounded-sm transition-all flex items-center justify-center gap-3 border-b-4 border-black/20"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Send Reset Command'}
              </button>

              <div className="text-center pt-10">
                <Link 
                  href="/login"
                  className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Sign In
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  </div>
  );
}
