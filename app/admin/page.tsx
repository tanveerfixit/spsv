'use client';

import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Users, Shield, ShieldOff, Edit, Trash2, Search, Loader2, CheckCircle, XCircle, Clock, Mail, Server, Key, Send, Eye, EyeOff, Settings } from 'lucide-react';

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

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [updating, setUpdating] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'users' | 'smtp'>('users');

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

  useEffect(() => {
    if (status === 'unauthenticated' || (session?.user && (session.user as any).role !== 'ADMIN')) {
      router.push('/dashboard');
    } else if (status === 'authenticated') {
      fetchUsers();
      fetchSmtpConfig();
    }
  }, [status, session, router]);

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
        <Loader2 className="w-12 h-12 animate-spin text-blue-500" />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <Shield className="w-8 h-8 text-blue-600" />
            Admin Control Center
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Manage system security, users, and configurations.</p>
        </div>

        <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab('users')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'users' ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
          >
            <Users className="w-4 h-4" />
            Users
          </button>
          <button
            onClick={() => setActiveTab('smtp')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'smtp' ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
          >
            <Settings className="w-4 h-4" />
            SMTP Settings
          </button>
        </div>

        {activeTab === 'users' && (
          <div className="relative max-w-sm w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
            />
          </div>
        )}
      </div>

      {activeTab === 'users' ? (
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
                <th className="p-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Contact</th>
                <th className="p-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                <th className="p-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Trial Expires</th>
                <th className="p-4 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors">
                  <td className="p-4">
                    <div className="flex flex-col">
                      <span className="font-bold text-gray-900 dark:text-white">{user.name || 'No Name'}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{user.email}</span>
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-0.5">{user.mobile || 'No Mobile'}</span>
                      <span className="text-[10px] mt-1 px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 w-fit font-bold uppercase tracking-wider">
                        {user.role}
                      </span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        {user.isBlocked ? (
                          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-bold uppercase transition-all shadow-sm shadow-red-500/10">
                            <ShieldOff className="w-3 h-3" /> Blocked
                          </span>
                        ) : (
                          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-bold uppercase transition-all shadow-sm shadow-green-500/10">
                            <Shield className="w-3 h-3" /> Active
                          </span>
                        )}
                        {user.isWhitelisted && (
                          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-xs font-bold uppercase transition-all shadow-sm shadow-yellow-500/10">
                            <CheckCircle className="w-3 h-3" /> Whitelisted
                          </span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Clock className="w-4 h-4 text-gray-400" />
                      {user.role === 'ADMIN' ? 'Never' : user.expiresAt ? new Date(user.expiresAt).toLocaleDateString() : 'N/A'}
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleUpdateUser(user, { isWhitelisted: !user.isWhitelisted })}
                        disabled={updating === user.id}
                        className="p-2 text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors"
                        title={user.isWhitelisted ? 'Remove Whitelist' : 'Whitelist User'}
                      >
                        <CheckCircle className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleUpdateUser(user, { isBlocked: !user.isBlocked })}
                        disabled={updating === user.id}
                        className={`p-2 transition-colors ${user.isBlocked ? 'text-green-500 hover:text-green-600' : 'text-gray-400 hover:text-red-600'}`}
                        title={user.isBlocked ? 'Unblock User' : 'Block User'}
                      >
                        {user.isBlocked ? <Shield className="w-5 h-5" /> : <ShieldOff className="w-5 h-5" />}
                      </button>
                      {updating === user.id && <Loader2 className="w-4 h-4 animate-spin text-blue-500" />}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredUsers.length === 0 && (
          <div className="p-12 text-center text-gray-500 dark:text-gray-400">No users found match your search.</div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                <Server className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">SMTP Configuration</h2>
            </div>

            <form onSubmit={handleSaveSmtp} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">SMTP Host</label>
                  <input
                    type="text"
                    value={smtpConfig.SMTP_HOST}
                    onChange={(e) => setSmtpConfig({ ...smtpConfig, SMTP_HOST: e.target.value })}
                    placeholder="smtp.example.com"
                    className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none dark:text-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">SMTP Port</label>
                  <input
                    type="text"
                    value={smtpConfig.SMTP_PORT}
                    onChange={(e) => setSmtpConfig({ ...smtpConfig, SMTP_PORT: e.target.value })}
                    placeholder="465"
                    className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none dark:text-white"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">SMTP Username</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={smtpConfig.SMTP_USER}
                    onChange={(e) => setSmtpConfig({ ...smtpConfig, SMTP_USER: e.target.value })}
                    placeholder="noreply@example.com"
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none dark:text-white"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">SMTP Password</label>
                <div className="relative">
                  <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type={showPass ? 'text' : 'password'}
                    value={smtpConfig.SMTP_PASS}
                    onChange={(e) => setSmtpConfig({ ...smtpConfig, SMTP_PASS: e.target.value })}
                    placeholder="Your SMTP Password"
                    className="w-full pl-10 pr-12 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none dark:text-white"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                  >
                    {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={smtpLoading}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 mt-4"
              >
                {smtpLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Save SMTP Settings'}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                  <Send className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Test Delivery</h2>
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                Enter an email address to send a verification message using the current or unsaved settings above.
              </p>

              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Recipient Email</label>
                  <input
                    type="email"
                    value={testEmail}
                    onChange={(e) => setTestEmail(e.target.value)}
                    placeholder="your-email@example.com"
                    className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none dark:text-white"
                  />
                </div>
                <button
                  onClick={handleTestSmtp}
                  disabled={testLoading || !testEmail}
                  className="w-full py-3 bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white font-bold rounded-xl transition-all shadow-lg shadow-green-500/20 flex items-center justify-center gap-2"
                >
                  {testLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Send Test Email'}
                </button>
              </div>
            </div>

            {smtpMessage && (
              <div className={`p-4 rounded-xl border flex items-start gap-3 animate-in fade-in slide-in-from-top-4 duration-300 ${
                smtpMessage.type === 'success' 
                  ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-600 dark:text-green-400' 
                  : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-600 dark:text-red-400'
              }`}>
                {smtpMessage.type === 'success' ? <CheckCircle className="w-5 h-5 shrink-0" /> : <XCircle className="w-5 h-5 shrink-0" />}
                <p className="text-sm font-medium">{smtpMessage.text}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
