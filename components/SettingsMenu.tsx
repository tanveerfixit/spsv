'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Settings, Moon, Sun, Type } from 'lucide-react';
import { useSettings } from './SettingsProvider';

export default function SettingsMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme, fontSize, setFontSize } = useSettings();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-all shadow-sm border border-gray-200 dark:border-gray-700 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Settings"
      >
        <Settings className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 md:right-auto md:left-0 md:bottom-full md:mb-2 md:mt-0 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-xl rounded-xl p-4 z-50">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Settings</h3>

          <div className="mb-4">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
              <Type className="w-4 h-4" /> Font Size
            </label>
            <div className="flex gap-2">
              <button 
                onClick={() => setFontSize('default')} 
                className={`flex-1 py-1.5 text-sm border rounded-lg font-medium transition-colors ${fontSize === 'default' ? 'bg-blue-50 border-blue-300 text-blue-700 dark:bg-blue-900/40 dark:border-blue-700 dark:text-blue-300' : 'border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
              >
                A
              </button>
              <button 
                onClick={() => setFontSize('medium')} 
                className={`flex-1 py-1.5 text-base border rounded-lg font-medium transition-colors ${fontSize === 'medium' ? 'bg-blue-50 border-blue-300 text-blue-700 dark:bg-blue-900/40 dark:border-blue-700 dark:text-blue-300' : 'border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
              >
                A
              </button>
              <button 
                onClick={() => setFontSize('large')} 
                className={`flex-1 py-1.5 text-lg border rounded-lg font-bold transition-colors ${fontSize === 'large' ? 'bg-blue-50 border-blue-300 text-blue-700 dark:bg-blue-900/40 dark:border-blue-700 dark:text-blue-300' : 'border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
              >
                A
              </button>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
              {theme === 'dark' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />} Theme
            </label>
            <div className="flex gap-2">
              <button 
                onClick={() => setTheme('light')} 
                className={`flex-1 py-1.5 text-sm border rounded-lg font-medium transition-colors ${theme === 'light' ? 'bg-blue-50 border-blue-300 text-blue-700 dark:bg-blue-900/40 dark:border-blue-700 dark:text-blue-300' : 'border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
              >
                Light
              </button>
              <button 
                onClick={() => setTheme('dark')} 
                className={`flex-1 py-1.5 text-sm border rounded-lg font-medium transition-colors ${theme === 'dark' ? 'bg-blue-50 border-blue-300 text-blue-700 dark:bg-blue-900/40 dark:border-blue-700 dark:text-blue-300' : 'border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
              >
                Dark
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
