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
      {/* Top Bar */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shrink-0">
        <div className="flex items-center justify-between px-6 h-14 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">SPSV Study</h1>
          </div>
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
            Recovery
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent dark:from-blue-900/10 dark:via-transparent dark:to-transparent">
        <div className="w-full max-w-[400px]">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-2">
              Forgot password?
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
              No problem. Enter your email and we&apos;ll send you a link to reset it.
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
                  className="w-full py-4 px-8 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/10"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Return to sign in
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
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full pl-11 pr-4 py-3.5 text-sm font-medium bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all dark:text-white placeholder:text-gray-400 shadow-sm"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-3 text-sm shadow-lg shadow-blue-500/10"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Send reset link'}
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
  );
}
