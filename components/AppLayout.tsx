'use client';

import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import NoticeBar from './NoticeBar';
import { Menu } from 'lucide-react';
import SettingsMenu from './SettingsMenu';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Hidden on assessment pages
  const showNoticeBar = !pathname.startsWith('/assessment');

  useEffect(() => {
    if (isInitialLoad) {
      const lastPage = localStorage.getItem('lastVisitedPage');
      if (lastPage && lastPage !== '/' && pathname === '/') {
        router.push(lastPage);
      }
      if (isInitialLoad) {
        setIsInitialLoad(false);
      }
    } else {
      localStorage.setItem('lastVisitedPage', pathname);
    }
  }, [pathname, isInitialLoad, router]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 font-sans text-gray-900 dark:text-gray-100 transition-colors duration-200">
      {showNoticeBar && <NoticeBar />}
      <div className="flex flex-1 min-h-0">
        <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      
      <main className="flex-1 flex flex-col min-w-0">
        <header className="md:hidden flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-colors duration-200">
          <div className="flex items-center">
            <button onClick={() => setMobileOpen(true)} className="p-1 mr-3 text-gray-700 dark:text-gray-300">
              <Menu className="w-6 h-6" />
            </button>
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <h1 className="font-semibold text-gray-900 dark:text-white">SPSV Study & Test</h1>
            </Link>
          </div>
          <SettingsMenu />
        </header>
        
        <div className={`flex-1 overflow-y-auto ${pathname === '/faq' ? 'p-0' : 'p-3 md:p-8'}`}>
          {children}
        </div>
      </main>
      </div>
    </div>
  );
}
