'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Lock, Loader2, AlertCircle, CheckCircle } from 'lucide-react';

function ResetPasswordForm() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  useEffect(() => {
    if (!token) {
      setError('Invalid or missing reset token.');
    }
  }, [token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Error occurred during password reset');
      } else {
        setSuccess(true);
        setTimeout(() => {
          router.push('/login');
        }, 3000);
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="text-center py-6">
        <div className="w-20 h-20 bg-slate-50 text-[#99cc33] rounded-sm border-2 border-slate-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-12 h-12" />
        </div>
        <h2 className="text-3xl font-black text-[#003057] uppercase italic tracking-tighter mb-4">Code Reset!</h2>
        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-8">
          Credentials updated. Transitioning to Registry...
        </p>
        <Loader2 className="w-6 h-6 animate-spin text-[#003057] mx-auto" />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="flex items-center gap-3 p-4 bg-red-50 text-red-600 border-2 border-red-100 rounded-sm text-[10px] font-black uppercase tracking-widest">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <p>{error}</p>
        </div>
      )}

      <div className="space-y-2">
        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">New Access Code</label>
        <div className="relative group">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#003057] transition-colors" />
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full pl-12 pr-4 py-4 text-sm font-bold bg-slate-50 border-2 border-slate-100 rounded-sm focus:border-[#003057] outline-none transition-all"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Verify Code</label>
        <div className="relative group">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#003057] transition-colors" />
          <input
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full pl-12 pr-4 py-4 text-sm font-bold bg-slate-50 border-2 border-slate-100 rounded-sm focus:border-[#003057] outline-none transition-all"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading || !token}
        className="w-full py-5 bg-[#003057] hover:bg-black disabled:opacity-50 text-white text-xs font-black uppercase tracking-[0.2em] rounded-sm transition-all border-b-4 border-black/20 flex items-center justify-center gap-3"
      >
        {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Confirm Protocol'}
      </button>
    </form>
  );
}

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen bg-[#F2F5F7] flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-[420px]">
        <div className="bg-white border-2 border-[#003057] rounded-sm p-8 md:p-10 shadow-2xl relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#99cc33]" />
          
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black text-[#003057] uppercase italic tracking-tighter leading-none mb-2">Protocol Reset</h1>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Establish new secure access credentials</p>
          </div>

          <Suspense fallback={
            <div className="flex flex-col items-center justify-center py-12 gap-3">
              <Loader2 className="w-8 h-8 animate-spin text-[#003057]" />
              <p className="text-[10px] font-black text-[#003057] uppercase tracking-widest">Validating Channel...</p>
            </div>
          }>
            <ResetPasswordForm />
          </Suspense>

          <div className="text-center pt-8 border-t-2 border-slate-50 mt-8">
            <Link 
              href="/login"
              className="text-[10px] font-black text-[#003057] uppercase tracking-[0.2em] hover:text-[#99cc33] transition-colors"
            >
              Abort & Return to Registry
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
