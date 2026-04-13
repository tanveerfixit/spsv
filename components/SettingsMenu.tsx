'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Settings, Moon, Sun, Type, Check } from 'lucide-react';
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

  const fontOptions = [
    { id: 'default', label: 'Small', icon: 'A', class: 'text-xs' },
    { id: 'medium', label: 'Medium', icon: 'A', class: 'text-base' },
    { id: 'large', label: 'Large', icon: 'A', class: 'text-xl' },
  ];

  return (
    <div className="relative" ref={menuRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className={`p-2 rounded-xl transition-all duration-300 flex items-center justify-center focus:outline-none ring-offset-2 focus:ring-2 focus:ring-blue-500/50 ${
          isOpen 
            ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
            : 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-750 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 shadow-sm'
        }`}
        aria-label="Settings"
      >
        <Settings className={`w-5 h-5 transition-transform duration-500 ${isOpen ? 'rotate-90' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-3 md:right-auto md:left-0 md:bottom-full md:mb-3 md:mt-0 w-72 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200 dark:border-gray-800 shadow-2xl rounded-2xl p-5 z-50 animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">Preferences</h3>
            <div className="h-1 w-8 bg-blue-500 rounded-full" />
          </div>

          <div className="space-y-6">
            {/* Font Size Section */}
            <div>
              <div className="flex items-center gap-2 mb-3 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                <Type className="w-3.5 h-3.5" /> Appearance
              </div>
              <div className="grid grid-cols-3 gap-2 bg-gray-50 dark:bg-gray-800/50 p-1 rounded-xl border border-gray-100 dark:border-gray-800">
                {fontOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setFontSize(opt.id as any)}
                    className={`relative flex flex-col items-center justify-center py-2 rounded-lg transition-all ${
                      fontSize === opt.id 
                        ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm' 
                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                    }`}
                  >
                    <span className={`font-bold ${opt.class}`}>{opt.icon}</span>
                    <span className="text-[10px] mt-1 font-medium">{opt.label}</span>
                    {fontSize === opt.id && <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-blue-500 rounded-full" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Theme Section */}
            <div>
              <div className="flex items-center gap-2 mb-3 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                {theme === 'dark' ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />} Display Mode
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => setTheme('light')} 
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border transition-all ${
                    theme === 'light' 
                      ? 'bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-900/30 dark:border-blue-800 dark:text-blue-300' 
                      : 'border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/30 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <Sun className={`w-4 h-4 ${theme === 'light' ? 'animate-spin-slow' : ''}`} />
                  <span className="text-sm font-bold">Light</span>
                </button>
                <button 
                  onClick={() => setTheme('dark')} 
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border transition-all ${
                    theme === 'dark' 
                      ? 'bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-900/30 dark:border-blue-800 dark:text-blue-300' 
                      : 'border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/30 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <Moon className={`w-4 h-4 ${theme === 'dark' ? 'animate-pulse' : ''}`} />
                  <span className="text-sm font-bold">Dark</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 text-[10px] text-center text-gray-400 font-medium">
            Settings apply instantly to your session
          </div>
        </div>
      )}
    </div>
  );
}
