'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Moon, Sun, Type } from 'lucide-react';
import { useSettings } from './SettingsProvider';

export default function SettingsMenu() {
  const [isFontMenuOpen, setIsFontMenuOpen] = useState(false);
  const { theme, setTheme, fontSize, setFontSize } = useSettings();
  const fontMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (fontMenuRef.current && !fontMenuRef.current.contains(event.target as Node)) {
        setIsFontMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="flex items-center gap-2">
      {/* Theme Toggle Button */}
      <button 
        onClick={toggleTheme} 
        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-all shadow-sm border border-gray-200 dark:border-gray-700 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Toggle Theme"
        title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        {theme === 'dark' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
      </button>

      {/* Font Size Dropdown */}
      <div className="relative" ref={fontMenuRef}>
        <button 
          onClick={() => setIsFontMenuOpen(!isFontMenuOpen)} 
          className={`p-2 rounded-full transition-all shadow-sm border flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 ${isFontMenuOpen ? 'bg-blue-50 border-blue-200 text-blue-600 dark:bg-blue-900/40 dark:border-blue-800 dark:text-blue-400' : 'bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
          aria-label="Font Size"
          title="Adjust Font Size"
        >
          <Type className="w-5 h-5" />
        </button>

        {isFontMenuOpen && (
          <div className="absolute right-0 mt-3 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-xl rounded-2xl p-3 z-50 animate-in fade-in zoom-in duration-200 origin-top-right">
            <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest px-2 mb-2">Font Size</h3>
            <div className="grid gap-1">
              {[
                { label: 'Small', value: 'default', size: 'text-xs' },
                { label: 'Medium', value: 'medium', size: 'text-sm' },
                { label: 'Large', value: 'large', size: 'text-base' }
              ].map((opt) => (
                <button 
                  key={opt.value}
                  onClick={() => {
                    setFontSize(opt.value as any);
                    setIsFontMenuOpen(false);
                  }} 
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left transition-colors ${fontSize === opt.value ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50'}`}
                >
                  <span className={opt.size}>{opt.label}</span>
                  {fontSize === opt.value && <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
