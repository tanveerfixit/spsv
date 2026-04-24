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
      <div className="mx-auto max-w-7xl px-4 py-6 md:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-x-8 gap-y-3 w-full md:w-auto">
            {footerLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="flex items-center justify-center md:justify-start gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </div>
          
          <p className="text-xs text-gray-500 dark:text-gray-500 text-center md:text-right w-full md:w-auto">
            &copy; {currentYear} SPSV Study & Test. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
