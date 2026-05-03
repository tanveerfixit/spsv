'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Mail, Lock, Loader2, AlertCircle, CheckCircle, User, Phone, Eye, EyeOff, Shield } from 'lucide-react';

function AuthPageContent() {
  const searchParams = useSearchParams();
  const initialMode = searchParams.get('mode') === 'signup' ? 'signup' : 'login';
  
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/');
    }
  }, [status, router]);

  const toggleMode = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setMode(prev => prev === 'login' ? 'signup' : 'login');
      setError(null);
      setIsTransitioning(false);
    }, 200);
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (mode === 'signup') {
      try {
        const res = await fetch('/api/auth/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password, mobile }),
        });

        const data = await res.json();

        if (!res.ok) {
          setError(data.message || 'Error occurred during signup');
          setLoading(false);
          return;
        }

        const loginResult = await signIn('credentials', {
          redirect: false,
          email,
          password,
        });

        if (loginResult?.error) {
          setError('Signup successful, but login failed. Please sign in manually.');
          setMode('login');
          setLoading(false);
        } else {
          setSuccess(true);
          router.push('/');
        }
      } catch (err) {
        setError('An unexpected error occurred. Please try again.');
        setLoading(false);
      }
    } else {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        setError(result.error);
        setLoading(false);
      } else {
        setSuccess(true);
        router.push('/');
      }
    }
  };

  return (
    <div className="-m-3 md:-m-6 lg:-m-10 min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col font-sans">

      <div className="flex-1 flex flex-col items-center justify-center p-6 bg-[#F2F5F7]">
        <div className={`w-full max-w-[420px] transition-all duration-300 transform ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="bg-white border-2 border-[#003057] rounded-sm p-8 md:p-10 shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#99cc33]" />
            
            <div className="mb-8">
              <h2 className="text-3xl font-black text-[#003057] uppercase italic tracking-tighter leading-none mb-2">
                {mode === 'login' ? 'Sign In' : 'Create Account'}
              </h2>
              <div className="h-1 w-12 bg-[#99cc33] mb-4" />
            </div>

          <form onSubmit={handleAuth} className="space-y-4">
            {error && (
              <div className="flex items-start gap-3 p-4 bg-red-50 text-red-700 border-2 border-red-100 rounded-sm text-xs font-bold uppercase tracking-tight mb-6 animate-in fade-in slide-in-from-top-2">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <p>{error}</p>
              </div>
            )}

            {success && (
              <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800 rounded-xl text-sm font-medium">
                <CheckCircle className="w-5 h-5 shrink-0" />
                <p>{mode === 'signup' ? 'Account created successfully' : 'Signed in successfully'}</p>
              </div>
            )}

            <div className="space-y-3.5">
              {mode === 'signup' && (
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#003057] transition-colors" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full pl-12 pr-4 py-4 text-sm font-bold bg-slate-50 border-2 border-slate-100 rounded-sm focus:border-[#003057] outline-none transition-all placeholder:text-slate-400"
                  />
                </div>
              )}

              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#003057] transition-colors" />
                <input
                  type="email"
                  required
                  disabled={success}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full pl-12 pr-4 py-4 text-sm font-bold bg-slate-50 border-2 border-slate-100 rounded-sm focus:border-[#003057] outline-none transition-all placeholder:text-slate-400 disabled:opacity-50"
                />
              </div>

              {mode === 'signup' && (
                <div className="relative group">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                  <input
                    type="tel"
                    required
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="Mobile Number"
                    className="w-full pl-11 pr-4 py-3 text-sm font-medium bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all dark:text-white placeholder:text-gray-400 shadow-sm"
                  />
                </div>
              )}

              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#003057] transition-colors" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  disabled={success}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full pl-12 pr-12 py-4 text-sm font-bold bg-slate-50 border-2 border-slate-100 rounded-sm focus:border-[#003057] outline-none transition-all placeholder:text-slate-400 disabled:opacity-50"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#003057] transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between px-1">
              {mode === 'login' && (
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800 cursor-pointer"
                  />
                  <label htmlFor="remember-me" className="ml-2 text-xs font-semibold text-gray-600 dark:text-gray-400 cursor-pointer select-none">
                    Remember me
                  </label>
                </div>
              )}
              {mode === 'login' && !success && (
                <Link href="/forgot-password" intrinsic-id="recover-link" className="text-xs text-[#003057] font-black uppercase tracking-widest hover:text-[#99cc33]">
                  Forgot Password?
                </Link>
              )}
            </div>

            <button
              type="submit"
              disabled={loading || success}
              className={`w-full py-5 ${success ? 'bg-[#99cc33]' : 'bg-[#003057] hover:bg-black'} disabled:opacity-50 text-white font-black uppercase tracking-[0.2em] rounded-sm transition-all flex items-center justify-center gap-4 text-xs border-b-4 ${success ? 'border-[#76a125]' : 'border-black/20'}`}
            >
              {loading && !success && <Loader2 className="w-5 h-5 animate-spin" />}
              <span>
                {success 
                  ? 'Success' 
                  : loading 
                    ? (mode === 'login' ? 'Signing In...' : 'Creating Account...') 
                    : (mode === 'login' ? 'Sign In' : 'Create Account')
                }
              </span>
            </button>

            {!success && (
              <button
                type="button"
                onClick={toggleMode}
                className="w-full py-4 text-[#003057] text-[10px] font-black uppercase tracking-[0.2em] hover:text-[#99cc33] transition-colors border-2 border-slate-100 rounded-sm mt-2"
              >
                {mode === 'login' ? 'Don\'t have an account? Sign Up' : 'Already have an account? Sign In'}
              </button>
            )}
          </form>

        </div>
      </div>
    </div>
  </div>
  );
}

export default function AuthPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
        <Loader2 className="w-10 h-10 animate-spin text-blue-600" />
      </div>
    }>
      <AuthPageContent />
    </Suspense>
  );
}
