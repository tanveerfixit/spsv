'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Loader2, AlertCircle, CheckCircle, ArrowLeft } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  const router = useRouter();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [resendTimer]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (resendTimer > 0) return;
    
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
        setResendTimer(60);
        setTimeout(() => {
          router.push(`/reset-password?email=${encodeURIComponent(email)}`);
        }, 3000);
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
            
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-black text-[#003057] uppercase italic tracking-tighter leading-none mb-2">
                Forgot Password
              </h2>
              <div className="h-1 w-12 bg-[#99cc33] mb-4 mx-auto" />
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed">
                Enter your email to receive a reset code.
              </p>
            </div>

          {success ? (
            <div className="text-center space-y-8 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-20 h-20 bg-green-50 text-green-600 rounded-sm flex items-center justify-center mx-auto border-2 border-green-100">
                <CheckCircle className="w-10 h-10" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-[#003057] uppercase tracking-tighter italic">Check your email</h3>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed">
                  We&apos;ve sent a reset code to <br/>
                  <span className="text-[#003057] font-black">{email}</span>
                </p>
                <div className="pt-4 flex flex-col items-center gap-2">
                   <p className="text-[10px] font-black text-[#003057] uppercase tracking-[0.2em] animate-pulse">Redirecting to Reset Page...</p>
                   <Loader2 className="w-4 h-4 animate-spin text-[#003057]" />
                </div>
              </div>
              <div className="pt-4">
                <Link 
                  href="/login"
                  className="w-full py-4 px-8 bg-[#003057] text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-sm hover:bg-black transition-all flex items-center justify-center gap-3 border-b-4 border-black/20"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Login
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="flex items-start gap-3 p-4 bg-red-50 text-red-700 border-2 border-red-100 rounded-sm text-[10px] font-black uppercase tracking-tight">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <p>{error}</p>
                </div>
              )}

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Email Address</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#003057] transition-colors" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-4 text-sm font-bold bg-slate-50 border-2 border-slate-100 rounded-sm focus:border-[#003057] outline-none transition-all placeholder:text-slate-400 shadow-sm"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading || resendTimer > 0}
                className="w-full py-5 bg-[#003057] hover:bg-black disabled:opacity-50 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-sm transition-all flex items-center justify-center gap-3 border-b-4 border-black/20"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : (
                  <>
                    <span>{resendTimer > 0 ? `Resend in ${resendTimer}s` : 'Send Reset Code'}</span>
                  </>
                )}
              </button>

              <div className="text-center pt-6">
                <Link 
                  href="/login"
                  className="inline-flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] hover:text-[#003057] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Login
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

