'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, LogIn, LogOut, BarChart, Users, HelpCircle, BookOpen, FileText, User, GraduationCap } from 'lucide-react';
import { useSession, signOut } from 'next-auth/react';

const MANUAL_CHAPTERS = [
  { title: 'Introduction', href: '/official-manual/introduction/welcome' },
  { title: 'Ch 1 – SPSV Industry', href: '/official-manual/chapter-1-the-spsv-industry/1-1-about-the-nta' },
  { title: 'Ch 2 – Driver Licensing', href: '/official-manual/chapter-2-spsv-driver-licensing/2-1-introduction-to-the-spsv-driver-licence' },
  { title: 'Ch 3 – Choosing a Vehicle', href: '/official-manual/chapter-3-choosing-a-vehicle/3-1-vehicle-standards-for-spsvs' },
  { title: 'Ch 4 – Vehicle Licensing', href: '/official-manual/chapter-4-vehicle-licensing/4-1-about-the-spsv-vehicle-licence' },
  { title: 'Ch 5 – Working as Operator', href: '/official-manual/chapter-5-working-as-an-operator/5-1-vehicle-requirements' },
  { title: 'Ch 6 – Finding Your Way', href: '/official-manual/chapter-6-finding-your-way/6-1-the-importance-of-route-planning' },
  { title: 'Ch 7 – Fares', href: '/official-manual/chapter-7-fares/7-1-taxi-fares' },
  { title: 'Ch 8 – Customer Service', href: '/official-manual/chapter-8-customer-satisfaction/8-1-nta-s-role-in-customer-service' },
  { title: 'Ch 9 – Your Business', href: '/official-manual/chapter-9-your-spsv-business/9-1-working-in-the-spsv-industry' },
  { title: 'Ch 10 – Staying Safe', href: '/official-manual/chapter-10-staying-safe/10-1-nta-s-role-in-safety' },
  { title: 'Ch 11 – Module Overview', href: '/official-manual/chapter-11-preparing-for-test/11-1-testing-in-the-skills-development-programme' },
];

const ASSESSMENT_ITEMS = [
  { title: 'Terminology', href: '/assessment/practice-tests/terminology-test' },
  { title: 'Chapter 1 Review', href: '/assessment/practice-tests/chapter-1-test' },
  { title: 'Chapter 2 Review', href: '/assessment/practice-tests/chapter-2-test' },
  { title: 'Chapter 3 Review', href: '/assessment/practice-tests/chapter-3-test' },
  { title: 'Chapter 4 Review', href: '/assessment/practice-tests/chapter-4-test' },
  { title: 'Chapter 5 Review', href: '/assessment/practice-tests/chapter-5-test' },
  { title: 'Chapter 6 Review', href: '/assessment/practice-tests/chapter-6-test' },
  { title: 'Chapter 7 Review', href: '/assessment/practice-tests/chapter-7-test' },
  { title: 'Chapter 8 Review', href: '/assessment/practice-tests/chapter-8-test' },
  { title: 'Chapter 9 Review', href: '/assessment/practice-tests/chapter-9-test' },
  { title: 'Chapter 10 Review', href: '/assessment/practice-tests/chapter-10-test' },
  { title: 'Industry Knowledge', href: '/assessment/practice-tests/industry-knowledge-test' },
  { title: 'Area Knowledge', href: '/assessment/practice-tests/area-knowledge-test' },
  { title: 'Final Mock Test', href: '/assessment/final-mock' },
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
        setMobileMenuOpen(false);
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
    <header className="sticky top-0 z-40 w-full bg-[#003057] border-b-4 border-[#99cc33] shadow-lg" ref={navRef}>
      <div className="flex h-14 items-center px-4 max-w-7xl mx-auto">
        {/* Mobile: Hamburger */}
        <button
          onClick={() => { setMobileMenuOpen(!mobileMenuOpen); onMenuClick(); }}
          className="md:hidden p-1.5 mr-3 text-white hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <Link href="/" className="mr-8 shrink-0">
          <span className="font-black text-xl text-white tracking-tighter leading-none">SPSV <span className="text-[#99cc33]">PRO</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 flex-1 h-full text-[13px]">
          {/* Manual Dropdown */}
          <div className="relative h-full flex items-center">
            <button
              onClick={() => toggleDropdown('manual')}
              className={`flex items-center gap-2 px-4 h-full font-bold uppercase tracking-wider transition-all border-b-2 ${activeDropdown === 'manual' ? 'border-[#99cc33] text-[#99cc33] bg-white/5' : 'border-transparent text-gray-300 hover:text-white hover:bg-white/5'}`}
            >
              Study
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${activeDropdown === 'manual' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`absolute top-full left-0 w-64 bg-[#003057] border-2 border-t-0 border-[#99cc33] shadow-2xl py-1 z-50 transition-all duration-150 origin-top ${activeDropdown === 'manual' ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'}`}>
              {MANUAL_CHAPTERS.map(ch => (
                <Link key={ch.title} href={ch.href} onClick={() => setActiveDropdown(null)}
                  className="block px-4 py-2 text-[12px] font-bold text-gray-300 hover:text-white hover:bg-[#99cc33]/10 transition-colors border-l-4 border-transparent hover:border-[#99cc33]">
                  {ch.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Assessment Dropdown */}
          <div className="relative h-full flex items-center">
            <button
              onClick={() => toggleDropdown('assessment')}
              className={`flex items-center gap-2 px-4 h-full font-bold uppercase tracking-wider transition-all border-b-2 ${activeDropdown === 'assessment' ? 'border-[#99cc33] text-[#99cc33] bg-white/5' : 'border-transparent text-gray-300 hover:text-white hover:bg-white/5'}`}
            >
              Practice
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${activeDropdown === 'assessment' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`absolute top-full left-0 w-56 bg-[#003057] border-2 border-t-0 border-[#99cc33] shadow-2xl py-1 z-50 transition-all duration-150 origin-top ${activeDropdown === 'assessment' ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'}`}>
              {ASSESSMENT_ITEMS.map(item => (
                <Link key={item.title} href={item.href} onClick={() => setActiveDropdown(null)}
                  className="block px-4 py-2 text-[12px] font-bold text-gray-300 hover:text-white hover:bg-[#99cc33]/10 transition-colors border-l-4 border-transparent hover:border-[#99cc33]">
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <Link href="/faq"
            className={`flex items-center gap-2 px-4 h-full font-bold uppercase tracking-wider border-b-2 transition-all ${pathname === '/faq' ? 'border-[#99cc33] text-[#99cc33] bg-white/5' : 'border-transparent text-gray-300 hover:text-white hover:bg-white/5'}`}>
            FAQ
          </Link>
        </nav>

        <div className="flex items-center gap-2 ml-auto">
          {/* Profile Dropdown */}
          <div className="relative h-full flex items-center">
            <button
              onClick={() => toggleDropdown('profile')}
              className={`flex items-center justify-center w-10 h-10 rounded-sm border-2 transition-all ${activeDropdown === 'profile' ? 'border-[#99cc33] bg-white/10 text-[#99cc33]' : 'border-transparent text-gray-300 hover:text-white hover:bg-white/5'}`}
              title="Account Registry"
            >
              <User className="w-5 h-5" />
            </button>
            
            <div className={`absolute top-full right-0 w-48 bg-[#003057] border-2 border-t-0 border-[#99cc33] shadow-2xl py-2 z-50 transition-all duration-150 origin-top-right ${activeDropdown === 'profile' ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
              {user ? (
                <>
                  <div className="px-4 py-2 border-b border-white/10 mb-2">
                    <p className="text-[10px] font-black text-[#99cc33] uppercase tracking-widest truncate">{user.email?.split('@')[0]}</p>
                  </div>
                  <Link href="/dashboard" onClick={() => setActiveDropdown(null)}
                    className="block px-4 py-2 text-[12px] font-bold text-gray-300 hover:text-white hover:bg-[#99cc33]/10 border-l-4 border-transparent hover:border-[#99cc33] transition-all">
                    My Progress
                  </Link>
                  {(user as any)?.role === 'ADMIN' && (
                    <Link href="/admin" onClick={() => setActiveDropdown(null)}
                      className="block px-4 py-2 text-[12px] font-bold text-gray-300 hover:text-white hover:bg-[#99cc33]/10 border-l-4 border-transparent hover:border-[#99cc33] transition-all">
                      Admin Center
                    </Link>
                  )}
                  <div className="mt-2 pt-2 border-t border-white/10">
                    <button onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-[12px] font-bold text-red-400 hover:bg-red-400/10 border-l-4 border-transparent hover:border-red-400 transition-all">
                      Logout Session
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <Link href="/login" onClick={() => setActiveDropdown(null)}
                    className="block px-4 py-2 text-[12px] font-bold text-gray-300 hover:text-white hover:bg-[#99cc33]/10 border-l-4 border-transparent hover:border-[#99cc33] transition-all">
                    User Login
                  </Link>
                  <Link href="/login?mode=signup" onClick={() => setActiveDropdown(null)}
                    className="block px-4 py-2 text-[12px] font-bold text-gray-300 hover:text-white hover:bg-[#99cc33]/10 border-l-4 border-transparent hover:border-[#99cc33] transition-all">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu — slides down from header */}
      <div className={`md:hidden overflow-hidden transition-all duration-200 ease-out border-t-2 border-white/10 ${mobileMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0 border-t-0'}`}>
        <nav className="bg-[#003057] overflow-y-auto max-h-[80vh]">
          {/* Manual Section */}
          <div className="border-b-2 border-white/5">
            <button onClick={() => toggleDropdown('m-manual')}
              className="flex items-center justify-between w-full px-6 py-4 text-[11px] font-black uppercase tracking-widest text-white">
              <span className="flex items-center gap-3">Study Modules</span>
              <ChevronDown className={`w-4 h-4 text-[#99cc33] transition-transform duration-150 ${activeDropdown === 'm-manual' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden bg-black/10 transition-all duration-200 ease-out ${activeDropdown === 'm-manual' ? 'max-h-[600px]' : 'max-h-0'}`}>
              {MANUAL_CHAPTERS.map(ch => (
                <Link key={ch.title} href={ch.href}
                  className="block px-6 pl-12 py-3 text-[11px] font-bold text-gray-300 hover:text-white hover:bg-[#99cc33]/10 border-l-4 border-transparent hover:border-[#99cc33] transition-all">
                  {ch.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Assessment Section */}
          <div className="border-b-2 border-white/5">
            <button onClick={() => toggleDropdown('m-assessment')}
              className="flex items-center justify-between w-full px-6 py-4 text-[11px] font-black uppercase tracking-widest text-white">
              <span className="flex items-center gap-3">Practice Checks</span>
              <ChevronDown className={`w-4 h-4 text-[#99cc33] transition-transform duration-150 ${activeDropdown === 'm-assessment' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden bg-black/10 transition-all duration-200 ease-out ${activeDropdown === 'm-assessment' ? 'max-h-[500px]' : 'max-h-0'}`}>
              {ASSESSMENT_ITEMS.map(item => (
                <Link key={item.title} href={item.href}
                  className="block px-6 pl-12 py-3 text-[11px] font-bold text-gray-300 hover:text-white hover:bg-[#99cc33]/10 border-l-4 border-transparent hover:border-[#99cc33] transition-all">
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <Link href="/faq"
            className={`flex items-center gap-3 px-6 py-4 text-[11px] font-black uppercase tracking-widest border-b-2 border-white/5 transition-all ${pathname === '/faq' ? 'text-[#99cc33] bg-white/5' : 'text-white'}`}>
            FAQ Registry
          </Link>

          {/* User Section */}
          <div className="px-6 py-5 flex items-center justify-between bg-black/20">
            {user ? (
              <div className="flex items-center gap-4 w-full">
                <div className="w-10 h-10 bg-[#99cc33] text-[#003057] flex items-center justify-center text-sm font-black rounded-sm border-2 border-white/20 shrink-0">{userInitial}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-black text-white/40 uppercase tracking-widest truncate">{user.email?.split('@')[0]}</p>
                </div>
                <div className="flex items-center gap-1">
                  <Link href="/dashboard" className="p-2 text-white hover:text-[#99cc33] transition-colors">Progress</Link>
                  <button onClick={handleLogout} className="p-2 text-white/40 hover:text-red-400 transition-colors">Logout</button>
                </div>
              </div>
            ) : (
              <Link href="/login" className="w-full text-center py-4 text-xs font-black uppercase tracking-[0.2em] bg-[#99cc33] text-[#003057] hover:bg-[#88bb22] transition-colors rounded-sm">
                Initiate Sign In
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
