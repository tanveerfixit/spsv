'use client';

import React, { useState, useEffect } from 'react';
import NoticeBar from './NoticeBar';
import Header from './Header';
import Footer from './Footer';
import { usePathname, useRouter } from 'next/navigation';

export default function AppLayout({ children }: { children: React.ReactNode }) {
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
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950 font-sans text-gray-900 dark:text-gray-100">
      {showNoticeBar && <NoticeBar />}

      <Header onMenuClick={() => {}} />

      <main className="flex-1 flex flex-col min-w-0">
        <div className={`flex-1 ${pathname === '/faq' ? 'p-0' : 'p-3 md:p-6 lg:p-10'} max-w-7xl mx-auto w-full`}>
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}
