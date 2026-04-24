'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, FileText, Mail, Info } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Terms', href: '/terms', icon: <FileText className="w-3 h-3" /> },
    { name: 'Privacy', href: '/privacy', icon: <Shield className="w-3 h-3" /> },
    { name: 'About', href: '/about', icon: <Info className="w-3 h-3" /> },
    { name: 'Support', href: '/contact', icon: <Mail className="w-3 h-3" /> },
  ];

  return (
    <footer className="w-full bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-lg text-gray-900 dark:text-white tracking-tight">SPSV <span className="text-blue-600">PRO</span></h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md">
              The professional study platform for Irish SPSV Driver Entry Test preparation. 
              Comprehensive guides, accurate mock exams, and progress monitoring.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-x-8 gap-y-4 md:justify-end">
            {footerLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 dark:text-gray-500">
            &copy; {currentYear} SPSV Study & Test. All rights reserved. Not affiliated with the NTA.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">System Online</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
