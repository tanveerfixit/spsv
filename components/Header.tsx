'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, LogIn, LogOut, BarChart, Users, HelpCircle, BookOpen, FileText, User } from 'lucide-react';
import { useSession, signOut } from 'next-auth/react';
import SettingsMenu from './SettingsMenu';

const MANUAL_CHAPTERS = [
  { title: 'Introduction', href: '/official-manual/introduction/welcome' },
  { title: 'Ch 1 – SPSV Industry', href: '/official-manual/chapter-1-the-spsv-industry/1-1-about-the-nta' },
  { title: 'Ch 2 – Driver Licensing', href: '/official-manual/chapter-2-spsv-driver-licensing/2-1-introduction-to-the-spsv-driver-licence' },
  { title: 'Ch 3 – Choosing a Vehicle', href: '/official-manual/chapter-3-choosing-a-vehicle/3-1-vehicle-standards-for-spsvs' },
  { title: 'Ch 4 – Vehicle Licensing', href: '/official-manual/chapter-4-vehicle-licensing/4-1-about-the-spsv-vehicle-licence' },
  { title: 'Ch 5 – Working as Operator', href: '/official-manual/chapter-5-working-as-an-spsv-operator/5-1-vehicle-requirements' },
  { title: 'Ch 6 – Finding Your Way', href: '/official-manual/chapter-6-finding-your-way-around/6-1-the-importance-of-route-planning' },
  { title: 'Ch 7 – Fares', href: '/official-manual/chapter-7-fares/7-1-taxi-fares' },
  { title: 'Ch 8 – Customer Service', href: '/official-manual/chapter-8-delivering-customer-satisfaction/8-1-nta-s-role-in-customer-service' },
  { title: 'Ch 9 – Your Business', href: '/official-manual/chapter-9-your-spsv-business/9-1-working-in-the-spsv-industry' },
  { title: 'Ch 10 – Staying Safe', href: '/official-manual/chapter-10-staying-safe/10-1-nta-s-role-in-safety' },
  { title: 'Ch 11 – Preparing for Test', href: '/official-manual/chapter-11-preparing-for-your-test/11-1-testing-in-the-skills-development-programme' },
];

const ASSESSMENT_ITEMS = [
  { title: 'Terminology Test', href: '/assessment/practice-tests/terminology-test' },
  { title: 'Chapter 1 Test', href: '/assessment/practice-tests/chapter-1-test' },
  { title: 'Chapter 2 Test', href: '/assessment/practice-tests/chapter-2-test' },
  { title: 'Chapter 3 Test', href: '/assessment/practice-tests/chapter-3-test' },
  { title: 'Chapter 4 Test', href: '/assessment/practice-tests/chapter-4-test' },
  { title: 'Chapter 5 Test', href: '/assessment/practice-tests/chapter-5-test' },
  { title: 'Industry Knowledge', href: '/assessment/practice-tests/industry-knowledge-test' },
  { title: 'Area Knowledge', href: '/assessment/practice-tests/area-knowledge-test' },
  { title: 'Full Mock Exam', href: '/assessment/practice-tests/full-mock-exam' },
];

export default function Header({ onMenuClick }: { onMenuClick: () => void }) {
  const pathname = usePathname();
  const { data: session } = useSession();
  const user = session?.user;
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const handleLogout = async () => {
    await signOut({ callbackUrl: '/' });
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(prev => prev === name ? null : name);
  };

  const userInitial = user?.email?.[0]?.toUpperCase() || 'U';

  return (
    <header className="sticky top-0 z-40 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800" ref={navRef}>
      <div className="flex h-12 items-center px-4">
        {/* Mobile: Hamburger */}
        <button
          onClick={() => { setMobileMenuOpen(!mobileMenuOpen); onMenuClick(); }}
          className="md:hidden p-1.5 mr-3 text-gray-600 dark:text-gray-400"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Logo */}
        <Link href="/" className="mr-6 shrink-0">
          <span className="font-bold text-base text-gray-900 dark:text-white tracking-tight">SPSV <span className="text-blue-600">PRO</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-0.5 flex-1 h-full text-[13px]">
          {/* Manual Dropdown */}
          <div className="relative h-full flex items-center">
            <button
              onClick={() => toggleDropdown('manual')}
              className={`flex items-center gap-1 px-2.5 h-full font-medium transition-colors border-b-2 ${activeDropdown === 'manual' ? 'border-blue-600 text-blue-600 dark:text-blue-400' : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              Manual
              <ChevronDown className={`w-3 h-3 transition-transform duration-150 ${activeDropdown === 'manual' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`absolute top-full left-0 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md py-1 z-50 transition-all duration-150 origin-top ${activeDropdown === 'manual' ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'}`}>
              {MANUAL_CHAPTERS.map(ch => (
                <Link key={ch.title} href={ch.href} onClick={() => setActiveDropdown(null)}
                  className="block px-3 py-1.5 text-[13px] text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  {ch.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Assessment Dropdown */}
          <div className="relative h-full flex items-center">
            <button
              onClick={() => toggleDropdown('assessment')}
              className={`flex items-center gap-1 px-2.5 h-full font-medium transition-colors border-b-2 ${activeDropdown === 'assessment' ? 'border-blue-600 text-blue-600 dark:text-blue-400' : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
            >
              <FileText className="w-3.5 h-3.5" />
              Tests
              <ChevronDown className={`w-3 h-3 transition-transform duration-150 ${activeDropdown === 'assessment' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`absolute top-full left-0 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md py-1 z-50 transition-all duration-150 origin-top ${activeDropdown === 'assessment' ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'}`}>
              {ASSESSMENT_ITEMS.map(item => (
                <Link key={item.title} href={item.href} onClick={() => setActiveDropdown(null)}
                  className="block px-3 py-1.5 text-[13px] text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <Link href="/faq"
            className={`flex items-center gap-1 px-2.5 h-full font-medium border-b-2 transition-colors ${pathname === '/faq' ? 'border-blue-600 text-blue-600 dark:text-blue-400' : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}>
            <HelpCircle className="w-3.5 h-3.5" />
            FAQ
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-1.5 ml-auto">
          <SettingsMenu />

          {user ? (
            <>
              <Link href="/dashboard" title="My Progress"
                className="w-8 h-8 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <BarChart className="w-4 h-4" />
              </Link>
              {(user as any)?.role === 'ADMIN' && (
                <Link href="/admin" title="Admin"
                  className="w-8 h-8 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Users className="w-4 h-4" />
                </Link>
              )}
              <div className="flex items-center gap-1 ml-1 pl-1.5 border-l border-gray-200 dark:border-gray-700">
                <div className="w-7 h-7 bg-blue-600 text-white flex items-center justify-center text-xs font-bold rounded-full">{userInitial}</div>
                <button onClick={handleLogout} title="Sign Out"
                  className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors">
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            </>
          ) : (
            <Link href="/login"
              className="px-3 py-1 text-[13px] font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors flex items-center gap-1.5">
              <LogIn className="w-3.5 h-3.5" />
              Sign In
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu — slides down from header, not a sidebar */}
      <div className={`md:hidden overflow-hidden transition-all duration-200 ease-out border-t border-gray-100 dark:border-gray-800 ${mobileMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0 border-t-0'}`}>
        <nav className="bg-white dark:bg-gray-900 overflow-y-auto max-h-[80vh]">
          {/* Manual Section */}
          <div className="border-b border-gray-100 dark:border-gray-800">
            <button onClick={() => toggleDropdown('m-manual')}
              className="flex items-center justify-between w-full px-4 py-3 text-sm font-semibold text-gray-800 dark:text-gray-200">
              <span className="flex items-center gap-2"><BookOpen className="w-4 h-4 text-blue-600" /> Official Manual</span>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-150 ${activeDropdown === 'm-manual' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-200 ease-out ${activeDropdown === 'm-manual' ? 'max-h-[500px]' : 'max-h-0'}`}>
              {MANUAL_CHAPTERS.map(ch => (
                <Link key={ch.title} href={ch.href}
                  className="block px-4 pl-10 py-2 text-[13px] text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  {ch.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Assessment Section */}
          <div className="border-b border-gray-100 dark:border-gray-800">
            <button onClick={() => toggleDropdown('m-assessment')}
              className="flex items-center justify-between w-full px-4 py-3 text-sm font-semibold text-gray-800 dark:text-gray-200">
              <span className="flex items-center gap-2"><FileText className="w-4 h-4 text-blue-600" /> Practice Tests</span>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-150 ${activeDropdown === 'm-assessment' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-200 ease-out ${activeDropdown === 'm-assessment' ? 'max-h-[400px]' : 'max-h-0'}`}>
              {ASSESSMENT_ITEMS.map(item => (
                <Link key={item.title} href={item.href}
                  className="block px-4 pl-10 py-2 text-[13px] text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <Link href="/faq"
            className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b border-gray-100 dark:border-gray-800 ${pathname === '/faq' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-800 dark:text-gray-200'}`}>
            <HelpCircle className="w-4 h-4 text-blue-600" /> FAQ
          </Link>

          {/* User Section */}
          <div className="px-4 py-3 flex items-center justify-between">
            {user ? (
              <div className="flex items-center gap-3 w-full">
                <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center text-sm font-bold rounded-full shrink-0">{userInitial}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{user.email?.split('@')[0]}</p>
                </div>
                <Link href="/dashboard" className="p-2 text-gray-500 hover:text-blue-600 transition-colors"><BarChart className="w-4 h-4" /></Link>
                <button onClick={handleLogout} className="p-2 text-gray-400 hover:text-red-500 transition-colors"><LogOut className="w-4 h-4" /></button>
              </div>
            ) : (
              <Link href="/login" className="w-full text-center py-2 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                Sign In
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
