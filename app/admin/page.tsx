'use client';

import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Users, Shield, ShieldOff, Edit, Trash2, Search, Loader2, CheckCircle, XCircle, Clock, Mail, Server, Key, Send, Eye, EyeOff, Settings, Activity, BarChart3, ClipboardList, TrendingUp, User as UserIcon, X, HelpCircle, Plus, ChevronDown, ChevronUp } from 'lucide-react';

interface User {
  id: string;
  name: string | null;
  email: string | null;
  role: string;
  isBlocked: boolean;
  isWhitelisted: boolean;
  mobile: string | null;
  createdAt: string;
  expiresAt: string | null;
}

interface UserStats {
  totalTests: number;
  totalTimeSpent: number;
  averageScorePercent: number;
  chapterProgress: {
    category: string;
    bestScore: number;
    totalScore: number;
    totalQuestions: number;
    attempts: number;
    averageScorePercent: number;
    highestScorePercent: number;
  }[];
  recentActivity: {
    id: string;
    category: string;
    score: number;
    totalQuestions: number;
    timeSpentSeconds: number;
    completedAt: string;
  }[];
}

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  order: number;
  updatedAt: string;
}

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [updating, setUpdating] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'users' | 'smtp' | 'faq' | 'system'>('users');

  // Stats State
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [stats, setStats] = useState<UserStats | null>(null);
  const [loadingStats, setLoadingStats] = useState(false);
  const [showStatsModal, setShowStatsModal] = useState(false);

  // FAQ State
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [faqLoading, setFaqLoading] = useState(false);
  const [editingFaq, setEditingFaq] = useState<FAQ | null>(null);
  const [isAddingFaq, setIsAddingFaq] = useState(false);
  const [faqForm, setFaqForm] = useState({
    question: '',
    answer: '',
    category: 'General',
    order: 0
  });

  // SMTP State
  const [smtpConfig, setSmtpConfig] = useState({
    SMTP_HOST: '',
    SMTP_PORT: '',
    SMTP_USER: '',
    SMTP_PASS: ''
  });
  const [testEmail, setTestEmail] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [smtpLoading, setSmtpLoading] = useState(false);
  const [testLoading, setTestLoading] = useState(false);
  const [smtpMessage, setSmtpMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  
  // Notice State
  const [noticeText, setNoticeText] = useState('');
  const [noticeLoading, setNoticeLoading] = useState(false);

  useEffect(() => {
    if (status === 'unauthenticated' || (session?.user && (session.user as any).role !== 'ADMIN')) {
      router.push('/dashboard');
    } else if (status === 'authenticated') {
      fetchUsers();
      fetchSmtpConfig();
      fetchFaqs();
      fetchNoticeSetting();
    }
  }, [status, session, router]);

  const fetchNoticeSetting = async () => {
    try {
      const res = await fetch('/api/settings?key=NOTICE_TEXT');
      if (res.ok) {
        const data = await res.json();
        setNoticeText(data.value || '');
      }
    } catch (error) {
      console.error('Error fetching notice:', error);
    }
  };

  const handleSaveNotice = async (e: React.FormEvent) => {
    e.preventDefault();
    setNoticeLoading(true);
    try {
      const res = await fetch('/api/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: 'NOTICE_TEXT', value: noticeText }),
      });
      if (res.ok) {
        alert('Notice updated successfully!');
      } else {
        alert('Failed to update notice.');
      }
    } catch (error) {
      console.error('Error saving notice:', error);
      alert('Error saving notice.');
    } finally {
      setNoticeLoading(false);
    }
  };

  const fetchFaqs = async () => {
    setFaqLoading(true);
    try {
      const res = await fetch('/api/admin/faq');
      if (res.ok) {
        const data = await res.json();
        setFaqs(data);
      }
    } catch (error) {
      console.error('Error fetching FAQs:', error);
    } finally {
      setFaqLoading(false);
    }
  };

  const handleCreateFaq = async (e: React.FormEvent) => {
    e.preventDefault();
    setFaqLoading(true);
    try {
      const res = await fetch('/api/admin/faq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(faqForm),
      });
      if (res.ok) {
        await fetchFaqs();
        setIsAddingFaq(false);
        setFaqForm({ question: '', answer: '', category: 'General', order: 0 });
      }
    } catch (error) {
      console.error('Error creating FAQ:', error);
    } finally {
      setFaqLoading(false);
    }
  };

  const handleUpdateFaq = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingFaq) return;
    setFaqLoading(true);
    try {
      const res = await fetch(`/api/admin/faq/${editingFaq.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(faqForm),
      });
      if (res.ok) {
        await fetchFaqs();
        setEditingFaq(null);
        setFaqForm({ question: '', answer: '', category: 'General', order: 0 });
      }
    } catch (error) {
      console.error('Error updating FAQ:', error);
    } finally {
      setFaqLoading(false);
    }
  };

  const handleDeleteFaq = async (id: string) => {
    if (!confirm('Are you sure you want to delete this FAQ?')) return;
    setFaqLoading(true);
    try {
      const res = await fetch(`/api/admin/faq/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        await fetchFaqs();
      }
    } catch (error) {
      console.error('Error deleting FAQ:', error);
    } finally {
      setFaqLoading(false);
    }
  };

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/users');
      const data = await res.json();
      if (Array.isArray(data)) {
        setUsers(data);
      } else {
        console.error('API did not return an array:', data);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateUser = async (user: User, updates: Partial<User>) => {
    setUpdating(user.id);
    try {
      const res = await fetch('/api/admin/users', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: user.id, ...updates }),
      });
      if (res.ok) {
        setUsers(users.map((u) => (u.id === user.id ? { ...u, ...updates } : u)));
      }
    } catch (error) {
      console.error('Error updating user:', error);
    } finally {
      setUpdating(null);
    }
  };

  const fetchUserStats = async (user: User) => {
    setSelectedUser(user);
    setLoadingStats(true);
    setShowStatsModal(true);
    try {
      const res = await fetch(`/api/admin/users/${user.id}/stats`);
      if (res.ok) {
        const data = await res.json();
        setStats(data.stats);
      }
    } catch (error) {
      console.error('Error fetching user stats:', error);
    } finally {
      setLoadingStats(false);
    }
  };

  const fetchSmtpConfig = async () => {
    try {
      const res = await fetch('/api/admin/settings/smtp');
      if (res.ok) {
        const data = await res.json();
        setSmtpConfig({
          SMTP_HOST: data.SMTP_HOST || '',
          SMTP_PORT: data.SMTP_PORT || '',
          SMTP_USER: data.SMTP_USER || '',
          SMTP_PASS: data.SMTP_PASS || ''
        });
      }
    } catch (error) {
      console.error('Error fetching SMTP config:', error);
    }
  };

  const handleSaveSmtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setSmtpLoading(true);
    setSmtpMessage(null);
    try {
      const res = await fetch('/api/admin/settings/smtp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(smtpConfig),
      });
      if (res.ok) {
        setSmtpMessage({ type: 'success', text: 'Settings saved successfully!' });
      } else {
        setSmtpMessage({ type: 'error', text: 'Failed to save settings.' });
      }
    } catch (error) {
      setSmtpMessage({ type: 'error', text: 'Error connecting to server.' });
    } finally {
      setSmtpLoading(false);
    }
  };

  const handleTestSmtp = async () => {
    if (!testEmail) return;
    setTestLoading(true);
    setSmtpMessage(null);
    try {
      const res = await fetch('/api/admin/settings/smtp/test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ to: testEmail, config: smtpConfig.SMTP_PASS === '********' ? undefined : smtpConfig }),
      });
      const data = await res.json();
      if (res.ok) {
        setSmtpMessage({ type: 'success', text: 'Test email sent! Check your inbox.' });
      } else {
        setSmtpMessage({ type: 'error', text: `Test failed: ${data.error || data.message}` });
      }
    } catch (error) {
      setSmtpMessage({ type: 'error', text: 'Error sending test email.' });
    } finally {
      setTestLoading(false);
    }
  };

  const filteredUsers = users.filter((u) =>
    u.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    u.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    u.mobile?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (status === 'loading' || loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  const tabs = [
    { id: 'users' as const, label: 'Users', icon: Users, count: users.length },
    { id: 'smtp' as const, label: 'SMTP', icon: Mail },
    { id: 'faq' as const, label: 'FAQ', icon: HelpCircle, count: faqs.length },
    { id: 'system' as const, label: 'System', icon: Settings },
  ];

  return (
    <div className="-m-3 md:-m-6 lg:-m-10">
      {/* Top Bar */}
      <div className="bg-gray-900 dark:bg-black text-white">
        <div className="flex items-center justify-between px-4 md:px-6 h-12">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-blue-400" />
            <h1 className="text-sm font-bold tracking-wide">Admin Control Center</h1>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            <span className="hidden sm:inline">System Online</span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-t border-gray-800">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 md:px-6 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 ${activeTab === tab.id ? 'border-blue-500 text-white bg-gray-800/50' : 'border-transparent text-gray-500 hover:text-gray-300 hover:bg-gray-800/30'}`}
            >
              <tab.icon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{tab.label}</span>
              {tab.count !== undefined && (
                <span className={`text-[10px] px-1.5 py-0.5 font-bold ${activeTab === tab.id ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-400'}`}>{tab.count}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ══════════════════════════ USERS TAB ══════════════════════════ */}
      {activeTab === 'users' && (
        <div>
          {/* Search Bar */}
          <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 md:px-6 py-3">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, email, or mobile..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none dark:text-white"
              />
            </div>
          </div>

          {/* User Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800/80 border-b border-gray-200 dark:border-gray-700">
                  <th className="px-4 md:px-6 py-3 text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Contact</th>
                  <th className="px-4 md:px-6 py-3 text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                  <th className="px-4 md:px-6 py-3 text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden md:table-cell">Expires</th>
                  <th className="px-4 md:px-6 py-3 text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors">
                    <td className="px-4 md:px-6 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs font-bold text-gray-500 dark:text-gray-400 shrink-0">
                          {user.email?.[0]?.toUpperCase() || '?'}
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-bold text-gray-900 dark:text-white truncate">{user.name || 'No Name'}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{user.email}</p>
                          {user.mobile && <p className="text-xs text-blue-600 dark:text-blue-400">{user.mobile}</p>}
                        </div>
                        <span className="text-[9px] px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider shrink-0">{user.role}</span>
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-3">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {user.isBlocked ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-[10px] font-bold uppercase">
                            <ShieldOff className="w-3 h-3" /> Blocked
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-[10px] font-bold uppercase">
                            <Shield className="w-3 h-3" /> Active
                          </span>
                        )}
                        {user.isWhitelisted && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-[10px] font-bold uppercase">
                            <CheckCircle className="w-3 h-3" /> WL
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-3 hidden md:table-cell">
                      <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                        <Clock className="w-3 h-3" />
                        {user.role === 'ADMIN' ? 'Never' : user.expiresAt ? new Date(user.expiresAt).toLocaleDateString() : 'N/A'}
                      </span>
                    </td>
                    <td className="px-4 md:px-6 py-3 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button onClick={() => fetchUserStats(user)} className="p-1.5 text-gray-400 hover:text-blue-600 transition-colors" title="View Stats">
                          <Activity className="w-4 h-4" />
                        </button>
                        <button onClick={() => handleUpdateUser(user, { isWhitelisted: !user.isWhitelisted })} disabled={updating === user.id} className="p-1.5 text-gray-400 hover:text-yellow-600 transition-colors" title={user.isWhitelisted ? 'Remove Whitelist' : 'Whitelist'}>
                          <CheckCircle className="w-4 h-4" />
                        </button>
                        <button onClick={() => handleUpdateUser(user, { isBlocked: !user.isBlocked })} disabled={updating === user.id} className={`p-1.5 transition-colors ${user.isBlocked ? 'text-green-500 hover:text-green-600' : 'text-gray-400 hover:text-red-600'}`} title={user.isBlocked ? 'Unblock' : 'Block'}>
                          {user.isBlocked ? <Shield className="w-4 h-4" /> : <ShieldOff className="w-4 h-4" />}
                        </button>
                        {updating === user.id && <Loader2 className="w-3.5 h-3.5 animate-spin text-blue-500" />}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredUsers.length === 0 && (
            <div className="py-16 text-center text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-900">No users found.</div>
          )}
        </div>
      )}

      {/* ══════════════════════════ SMTP TAB ══════════════════════════ */}
      {activeTab === 'smtp' && (
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* SMTP Config */}
          <div className="bg-white dark:bg-gray-900 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-gray-800 p-6">
            <div className="flex items-center gap-3 mb-6">
              <Server className="w-5 h-5 text-blue-600" />
              <h2 className="text-base font-bold text-gray-900 dark:text-white">SMTP Configuration</h2>
            </div>
            <form onSubmit={handleSaveSmtp} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Host</label>
                  <input type="text" value={smtpConfig.SMTP_HOST} onChange={(e) => setSmtpConfig({ ...smtpConfig, SMTP_HOST: e.target.value })} placeholder="smtp.example.com"
                    className="w-full px-3 py-2 text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none dark:text-white" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Port</label>
                  <input type="text" value={smtpConfig.SMTP_PORT} onChange={(e) => setSmtpConfig({ ...smtpConfig, SMTP_PORT: e.target.value })} placeholder="465"
                    className="w-full px-3 py-2 text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none dark:text-white" />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Username</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input type="text" value={smtpConfig.SMTP_USER} onChange={(e) => setSmtpConfig({ ...smtpConfig, SMTP_USER: e.target.value })} placeholder="noreply@example.com"
                    className="w-full pl-10 pr-3 py-2 text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none dark:text-white" />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Password</label>
                <div className="relative">
                  <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input type={showPass ? 'text' : 'password'} value={smtpConfig.SMTP_PASS} onChange={(e) => setSmtpConfig({ ...smtpConfig, SMTP_PASS: e.target.value })} placeholder="Your password"
                    className="w-full pl-10 pr-10 py-2 text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none dark:text-white" />
                  <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <button type="submit" disabled={smtpLoading}
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-sm font-bold transition-colors flex items-center justify-center gap-2">
                {smtpLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Save SMTP Settings'}
              </button>
            </form>
          </div>

          {/* Test Delivery */}
          <div className="bg-white dark:bg-gray-900 p-6">
            <div className="flex items-center gap-3 mb-6">
              <Send className="w-5 h-5 text-green-600" />
              <h2 className="text-base font-bold text-gray-900 dark:text-white">Test Delivery</h2>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Send a verification message using the saved SMTP settings.</p>
            <div className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Recipient</label>
                <input type="email" value={testEmail} onChange={(e) => setTestEmail(e.target.value)} placeholder="your-email@example.com"
                  className="w-full px-3 py-2 text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none dark:text-white" />
              </div>
              <button onClick={handleTestSmtp} disabled={testLoading || !testEmail}
                className="w-full py-2.5 bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white text-sm font-bold transition-colors flex items-center justify-center gap-2">
                {testLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Send Test Email'}
              </button>
            </div>

            {smtpMessage && (
              <div className={`mt-6 p-3 border flex items-start gap-2 text-sm ${smtpMessage.type === 'success' ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-700 dark:text-green-400' : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-700 dark:text-red-400'}`}>
                {smtpMessage.type === 'success' ? <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" /> : <XCircle className="w-4 h-4 shrink-0 mt-0.5" />}
                <p>{smtpMessage.text}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ══════════════════════════ SYSTEM TAB ══════════════════════════ */}
      {activeTab === 'system' && (
        <div className="bg-white dark:bg-gray-900">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-3 mb-1">
              <Send className="w-5 h-5 text-red-600" />
              <h2 className="text-base font-bold text-gray-900 dark:text-white">Notice Bar Management</h2>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 ml-8">Update the red scrolling text visible across the site.</p>
          </div>
          <form onSubmit={handleSaveNotice} className="p-6 space-y-4 max-w-2xl">
            <div>
              <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Scrolling Text</label>
              <textarea value={noticeText} onChange={(e) => setNoticeText(e.target.value)} placeholder="Enter notice text (leave empty to hide bar)..."
                rows={3} className="w-full px-3 py-2 text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-red-500 outline-none dark:text-white resize-none" />
              <p className="text-[10px] text-gray-400 mt-1 italic">The bar is hidden when this field is empty.</p>
            </div>
            <button type="submit" disabled={noticeLoading}
              className="px-6 py-2.5 bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white text-sm font-bold transition-colors flex items-center gap-2">
              {noticeLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Update Notice'}
            </button>
          </form>
        </div>
      )}

      {/* ══════════════════════════ FAQ TAB ══════════════════════════ */}
      {activeTab === 'faq' && (
        <div className="bg-white dark:bg-gray-900">
          {/* FAQ Header */}
          <div className="flex items-center justify-between px-4 md:px-6 py-3 border-b border-gray-200 dark:border-gray-800">
            <div>
              <h2 className="text-base font-bold text-gray-900 dark:text-white">FAQ Management</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">Add or edit questions and answers.</p>
            </div>
            <button onClick={() => { setIsAddingFaq(true); setEditingFaq(null); setFaqForm({ question: '', answer: '', category: 'General', order: 0 }); }}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors">
              <Plus className="w-3.5 h-3.5" /> Add FAQ
            </button>
          </div>

          {/* FAQ Form - Inline */}
          {(isAddingFaq || editingFaq) && (
            <div className="border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 p-4 md:p-6">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-4">{editingFaq ? 'Edit FAQ Entry' : 'New FAQ Entry'}</h3>
              <form onSubmit={editingFaq ? handleUpdateFaq : handleCreateFaq} className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Category</label>
                    <input type="text" value={faqForm.category} onChange={(e) => setFaqForm({ ...faqForm, category: e.target.value })} placeholder="e.g. Registration"
                      className="w-full px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none dark:text-white" required />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Display Order</label>
                    <input type="number" value={faqForm.order} onChange={(e) => setFaqForm({ ...faqForm, order: parseInt(e.target.value) })} placeholder="0"
                      className="w-full px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none dark:text-white" />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Question</label>
                  <input type="text" value={faqForm.question} onChange={(e) => setFaqForm({ ...faqForm, question: e.target.value })} placeholder="Enter the question..."
                    className="w-full px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none dark:text-white" required />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Answer</label>
                  <textarea value={faqForm.answer} onChange={(e) => setFaqForm({ ...faqForm, answer: e.target.value })} placeholder="Enter the answer..."
                    rows={3} className="w-full px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none dark:text-white resize-none" required />
                </div>
                <div className="flex gap-2">
                  <button type="submit" disabled={faqLoading}
                    className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold transition-colors">
                    {faqLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : editingFaq ? 'Update' : 'Save'}
                  </button>
                  <button type="button" onClick={() => { setIsAddingFaq(false); setEditingFaq(null); }}
                    className="px-5 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-bold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* FAQ List */}
          <div>
            {faqLoading && !isAddingFaq && !editingFaq ? (
              <div className="py-16 flex justify-center"><Loader2 className="w-6 h-6 animate-spin text-blue-500" /></div>
            ) : (() => {
              const grouped = faqs.reduce((acc, faq) => {
                const cat = faq.category || 'General';
                if (!acc[cat]) acc[cat] = [];
                acc[cat].push(faq);
                return acc;
              }, {} as Record<string, FAQ[]>);
              const entries = Object.entries(grouped).sort();

              if (entries.length === 0) {
                return (
                  <div className="py-20 text-center">
                    <HelpCircle className="w-8 h-8 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
                    <p className="text-sm text-gray-500">No FAQs found. Add your first question above!</p>
                  </div>
                );
              }

              return entries.map(([category, items]) => (
                <div key={category}>
                  <div className="px-4 md:px-6 py-2 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-800">
                    <h3 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.15em]">{category}</h3>
                  </div>
                  {items.map((faq) => (
                    <div key={faq.id} className="px-4 md:px-6 py-3 border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors flex items-start justify-between gap-4">
                      <div className="min-w-0 flex-1">
                        <h4 className="text-sm font-bold text-gray-900 dark:text-white">{faq.question}</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-2">{faq.answer}</p>
                      </div>
                      <div className="flex items-center gap-0.5 shrink-0">
                        <button onClick={() => { setEditingFaq(faq); setIsAddingFaq(false); setFaqForm({ question: faq.question, answer: faq.answer, category: faq.category, order: faq.order }); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                          className="p-1.5 text-gray-400 hover:text-blue-600 transition-colors"><Edit className="w-3.5 h-3.5" /></button>
                        <button onClick={() => handleDeleteFaq(faq.id)}
                          className="p-1.5 text-gray-400 hover:text-red-600 transition-colors"><Trash2 className="w-3.5 h-3.5" /></button>
                      </div>
                    </div>
                  ))}
                </div>
              ));
            })()}
          </div>
        </div>
      )}

      {/* ══════════════════════════ STATS MODAL ══════════════════════════ */}
      {showStatsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => { setShowStatsModal(false); setStats(null); }}>
          <div className="bg-white dark:bg-gray-900 w-full max-w-4xl max-h-[90vh] shadow-2xl overflow-hidden flex flex-col border border-gray-200 dark:border-gray-800 m-4" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-gray-50 dark:bg-gray-800/50">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                  <UserIcon className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-gray-900 dark:text-white">{selectedUser?.name || 'User Activity'}</h2>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{selectedUser?.email}</p>
                </div>
              </div>
              <button onClick={() => { setShowStatsModal(false); setStats(null); }} className="p-1.5 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {loadingStats ? (
                <div className="h-48 flex flex-col items-center justify-center gap-3">
                  <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
                  <p className="text-xs text-gray-500">Analyzing performance...</p>
                </div>
              ) : stats ? (
                <div className="space-y-6">
                  {/* Summary Row */}
                  <div className="grid grid-cols-3 gap-0 border border-gray-200 dark:border-gray-700">
                    <div className="p-4 border-r border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="w-3.5 h-3.5 text-blue-600" />
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Total Time</span>
                      </div>
                      <div className="text-xl font-black text-gray-900 dark:text-white">{Math.floor(stats.totalTimeSpent / 60)}m {stats.totalTimeSpent % 60}s</div>
                    </div>
                    <div className="p-4 border-r border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingUp className="w-3.5 h-3.5 text-green-600" />
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Avg Score</span>
                      </div>
                      <div className="text-xl font-black text-gray-900 dark:text-white">{stats.averageScorePercent}%</div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <ClipboardList className="w-3.5 h-3.5 text-purple-600" />
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Tests</span>
                      </div>
                      <div className="text-xl font-black text-gray-900 dark:text-white">{stats.totalTests}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Chapter Progress */}
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
                        <BarChart3 className="w-4 h-4 text-blue-600" /> Chapter Progress
                      </h3>
                      <div className="space-y-2">
                        {stats.chapterProgress.length > 0 ? (
                          stats.chapterProgress.map((cp, idx) => (
                            <div key={idx} className="p-3 border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/30">
                              <div className="flex justify-between items-center mb-1.5">
                                <span className="text-xs font-bold text-gray-900 dark:text-white capitalize">{cp.category.replace(/-/g, ' ')}</span>
                                <span className="text-[10px] font-bold text-blue-600 bg-blue-100 dark:bg-blue-900/30 px-1.5 py-0.5">{cp.highestScorePercent}%</span>
                              </div>
                              <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 overflow-hidden">
                                <div className="bg-blue-600 h-full transition-all duration-700" style={{ width: `${cp.averageScorePercent}%` }} />
                              </div>
                              <div className="flex justify-between mt-1 text-[9px] font-medium text-gray-500 uppercase tracking-wider">
                                <span>{cp.attempts} attempts</span>
                                <span>Avg: {cp.averageScorePercent}%</span>
                              </div>
                            </div>
                          ))
                        ) : (
                          <p className="text-xs text-gray-500 italic p-4 bg-gray-50 dark:bg-gray-800/50 border border-dashed border-gray-200 dark:border-gray-700">No data yet.</p>
                        )}
                      </div>
                    </div>

                    {/* Recent Activity */}
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
                        <Activity className="w-4 h-4 text-green-600" /> Recent Activity
                      </h3>
                      <div className="space-y-2">
                        {stats.recentActivity.length > 0 ? (
                          stats.recentActivity.map((ra) => (
                            <div key={ra.id} className="p-3 border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 flex items-center justify-between gap-3">
                              <div className="min-w-0">
                                <h4 className="text-xs font-bold text-gray-900 dark:text-white capitalize truncate">{ra.category.replace(/-/g, ' ')}</h4>
                                <p className="text-[10px] text-gray-500 mt-0.5">{new Date(ra.completedAt).toLocaleString()}</p>
                              </div>
                              <div className="text-right shrink-0">
                                <span className={`text-sm font-black ${(ra.score / ra.totalQuestions) >= 0.8 ? 'text-green-600' : 'text-blue-600'}`}>
                                  {ra.score}/{ra.totalQuestions}
                                </span>
                                <p className="text-[9px] text-gray-400">{ra.timeSpentSeconds}s</p>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="p-6 text-center bg-gray-50 dark:bg-gray-800/50 border border-dashed border-gray-200 dark:border-gray-700">
                            <p className="text-xs text-gray-500 italic">No recent activity.</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12"><p className="text-sm text-gray-500">Failed to load statistics.</p></div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/30 flex justify-end">
              <button onClick={() => { setShowStatsModal(false); setStats(null); }}
                className="px-5 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-bold hover:opacity-90 transition-colors">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
