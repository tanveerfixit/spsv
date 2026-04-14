'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Mail, Lock, Loader2, AlertCircle, CheckCircle, User, Phone, Eye, EyeOff, LayoutPanelTop } from 'lucide-react';

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
  
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/dashboard');
    }
  }, [status, router]);

  const toggleMode = () => {
    setMode(prev => prev === 'login' ? 'signup' : 'login');
    setError(null);
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

        // Auto-login after successful signup
        const loginResult = await signIn('credentials', {
          redirect: false,
          email,
          password,
        });

        if (loginResult?.error) {
          setError('Signup successful, but auto-login failed. Please sign in manually.');
          setMode('login');
          setLoading(false);
        } else {
          setSuccess(true);
          router.push('/dashboard');
        }
      } catch (err) {
        setError('An unexpected error occurred. Please try again.');
        setLoading(false);
      }
    } else {
      // Login mode
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
        router.push('/dashboard');
        
        // Fallback for slow router
        setTimeout(() => {
          if (window.location.pathname !== '/dashboard') {
            window.location.href = '/dashboard';
          }
        }, 3000);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-950 dark:to-gray-900 transition-colors duration-500">
      <div className="w-full max-w-md relative">
        {/* Decorative elements */}
        <div className="absolute -top-12 -left-12 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-indigo-400/10 rounded-full blur-3xl" />
        
        <div className="relative bg-white/70 dark:bg-gray-900/70 backdrop-blur-2xl border border-white/20 dark:border-gray-800 p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transform transition-all hover:scale-[1.01]">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-600/10 dark:bg-blue-400/10 mb-4 animate-pulse">
              <LayoutPanelTop className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">
              {mode === 'login' ? 'Welcome Back' : 'Create Account'}
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              {mode === 'login' ? 'Sign in to access your modules' : 'Join SPSV Study & get 10 days free'}
            </p>
          </div>

          {/* Mode Toggler */}
          <div className="flex p-1 bg-gray-100 dark:bg-gray-800 rounded-xl mb-8">
            <button
              onClick={() => setMode('login')}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${mode === 'login' ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
            >
              Sign In
            </button>
            <button
              onClick={() => setMode('signup')}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${mode === 'signup' ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleAuth} className="space-y-5">
            {error && (
              <div className="flex items-center gap-2 p-4 bg-red-50/50 dark:bg-red-900/10 text-red-600 dark:text-red-400 border border-red-200/50 dark:border-red-800/30 rounded-2xl text-sm animate-shake">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <p>{error}</p>
              </div>
            )}

            {success && (
              <div className="flex items-center gap-2 p-4 bg-green-50/50 dark:bg-green-900/10 text-green-600 dark:text-green-400 border border-green-200/50 dark:border-green-800/30 rounded-2xl text-sm">
                <CheckCircle className="w-4 h-4 shrink-0" />
                <p>{mode === 'signup' ? 'Account created!' : 'Login successful!'} Redirecting...</p>
              </div>
            )}

            {mode === 'signup' && (
              <div className="space-y-1 animate-in fade-in slide-in-from-top-4 duration-300">
                <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider ml-1">Full Name</label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all dark:text-white"
                  />
                </div>
              </div>
            )}

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider ml-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type="email"
                  required
                  disabled={success}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all dark:text-white disabled:opacity-50"
                />
              </div>
            </div>

            {mode === 'signup' && (
              <div className="space-y-1 animate-in fade-in slide-in-from-top-4 duration-300">
                <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider ml-1">Mobile Number</label>
                <div className="relative group">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  <input
                    type="tel"
                    required
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="+353 123 4567"
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all dark:text-white"
                  />
                </div>
              </div>
            )}

            <div className="space-y-1">
              <div className="flex items-center justify-between ml-1">
                <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Password</label>
                {mode === 'login' && !success && (
                  <Link href="/forgot-password" virtual-id="forgot-password-link" className="text-xs text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                    Forgot?
                  </Link>
                )}
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  disabled={success}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3.5 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all dark:text-white disabled:opacity-50"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {mode === 'login' && (
              <div className="flex items-center ml-1">
                <input
                  id="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 transition-all cursor-pointer"
                />
                <label htmlFor="remember-me" className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-400 cursor-pointer select-none">
                  Keep me signed in
                </label>
              </div>
            )}

            <button
              type="submit"
              disabled={loading || success}
              className={`w-full py-4 ${success ? 'bg-green-600 shadow-green-500/20' : 'bg-blue-600 hover:bg-blue-700 hover:-translate-y-0.5 shadow-blue-500/25'} active:scale-[0.98] disabled:opacity-50 disabled:translate-y-0 text-white font-bold rounded-2xl transition-all shadow-xl flex items-center justify-center gap-3`}
            >
              {success ? (
                <CheckCircle className="w-6 h-6 animate-bounce" />
              ) : loading ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                mode === 'login' ? 'Sign In Now' : 'Create My Account'
              )}
              <span className="text-lg">
                {success ? 'Redirecting...' : mode === 'login' ? 'Sign In' : 'Sign Up'}
              </span>
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {mode === 'login' ? "Don't have an account?" : 'Already have an account?'}
              <button
                onClick={toggleMode}
                className="ml-2 text-blue-600 dark:text-blue-400 font-bold hover:underline transition-all"
              >
                {mode === 'login' ? 'Apply Now' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>
        
        {/* Footer text */}
        <p className="mt-8 text-center text-xs text-gray-400 dark:text-gray-600 uppercase tracking-widest font-semibold flex items-center justify-center gap-2">
          <span className="w-8 h-px bg-gray-200 dark:bg-gray-800"></span>
          Secure 256-bit Encrypted
          <span className="w-8 h-px bg-gray-200 dark:bg-gray-800"></span>
        </p>
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
