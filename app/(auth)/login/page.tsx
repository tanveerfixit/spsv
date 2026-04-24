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
      router.push('/dashboard');
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
          router.push('/dashboard');
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
        router.push('/dashboard');
        
        setTimeout(() => {
          if (window.location.pathname !== '/dashboard') {
            window.location.href = '/dashboard';
          }
        }, 3000);
      }
    }
  };

  return (
    <div className="-m-3 md:-m-6 lg:-m-10 min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col font-sans">
      {/* Professional Top Bar */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shrink-0">
        <div className="flex items-center justify-between px-6 h-14 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">SPSV Study</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
              <span className={`w-2 h-2 rounded-full ${mode === 'login' ? 'bg-green-500' : 'bg-blue-500'}`} />
              {mode === 'login' ? 'Secure Login' : 'New Account'}
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent dark:from-blue-900/10 dark:via-transparent dark:to-transparent">
        <div className={`w-full max-w-[400px] transition-all duration-300 transform ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-2">
              {mode === 'login' ? 'Welcome back' : 'Create an account'}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              {mode === 'login' ? 'Sign in to your dashboard to continue' : 'Get started with your SPSV prep today'}
            </p>
          </div>

          <form onSubmit={handleAuth} className="space-y-4">
            {error && (
              <div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800 rounded-xl text-sm font-medium animate-in fade-in slide-in-from-top-2">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <p>{error}</p>
              </div>
            )}

            {success && (
              <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800 rounded-xl text-sm font-medium">
                <CheckCircle className="w-5 h-5 shrink-0" />
                <p>{mode === 'signup' ? 'Registration successful' : 'Signed in successfully'}</p>
              </div>
            )}

            <div className="space-y-3.5">
              {mode === 'signup' && (
                <div className="relative group">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full pl-11 pr-4 py-3 text-sm font-medium bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all dark:text-white placeholder:text-gray-400 shadow-sm"
                  />
                </div>
              )}

              <div className="relative group">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                <input
                  type="email"
                  required
                  disabled={success}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full pl-11 pr-4 py-3 text-sm font-medium bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all dark:text-white placeholder:text-gray-400 shadow-sm disabled:opacity-50"
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
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  disabled={success}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full pl-11 pr-12 py-3 text-sm font-medium bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 outline-none transition-all dark:text-white disabled:opacity-50 placeholder:text-gray-400 shadow-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
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
                <Link href="/forgot-password" intrinsic-id="recover-link" className="text-xs text-blue-600 dark:text-blue-400 font-bold hover:underline">
                  Forgot password?
                </Link>
              )}
            </div>

            <button
              type="submit"
              disabled={loading || success}
              className={`w-full py-3.5 ${success ? 'bg-green-600' : 'bg-blue-600 hover:bg-blue-700'} disabled:opacity-50 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-3 text-sm shadow-lg ${success ? 'shadow-green-500/10' : 'shadow-blue-500/10'}`}
            >
              {loading && !success && <Loader2 className="w-5 h-5 animate-spin" />}
              <span>
                {success 
                  ? 'Redirecting...' 
                  : loading 
                    ? (mode === 'login' ? 'Signing in...' : 'Creating account...') 
                    : (mode === 'login' ? 'Sign in' : 'Sign up')
                }
              </span>
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-4">
              {mode === 'login' ? "Don't have an account?" : "Already have an account?"}
            </p>
            <button
              onClick={toggleMode}
              className="w-full py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white text-sm font-bold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
            >
              {mode === 'login' ? 'Create an account' : 'Sign in to your account'}
            </button>
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
