'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Settings, Moon, Sun, Type, LucideIcon } from 'lucide-react';
import { useSettings } from './SettingsProvider';

interface SegmentedControlProps {
  options: { label: string | React.ReactNode; value: string }[];
  currentValue: string;
  onChange: (value: any) => void;
  Icon: LucideIcon;
  title: string;
}

const SegmentedControl = ({ options, currentValue, onChange, Icon, title }: SegmentedControlProps) => (
  <div className="mb-4 last:mb-0">
    <div className="flex items-center gap-2 mb-2 px-1">
      <Icon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
      <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">{title}</span>
    </div>
    <div className="relative flex bg-gray-100 dark:bg-gray-900/50 p-1 rounded-xl border border-gray-200/50 dark:border-gray-700/50">
      <div 
        className="absolute top-1 bottom-1 bg-white dark:bg-gray-800 rounded-lg shadow-sm transition-all duration-300 ease-out"
        style={{
          width: `${100 / options.length}%`,
          left: `${(options.findIndex(o => o.value === currentValue) * 100) / options.length}%`
        }}
      />
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={`relative flex-1 py-1.5 text-sm font-medium transition-colors z-10 ${
            currentValue === option.value 
              ? 'text-blue-600 dark:text-blue-400' 
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  </div>
);

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
        className={`p-2.5 rounded-xl transition-all duration-300 border flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
          isOpen 
            ? 'bg-blue-50 dark:bg-blue-900/40 border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 shadow-inner' 
            : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 shadow-sm'
        }`}
        aria-label="Settings"
      >
        <Settings className={`w-5 h-5 transition-transform duration-500 ${isOpen ? 'rotate-90' : 'rotate-0'}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-3 md:right-auto md:left-0 md:bottom-full md:mb-3 md:mt-0 w-64 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl border border-gray-200 dark:border-gray-700 shadow-2xl rounded-2xl p-5 z-50 animate-in fade-in zoom-in-95 duration-200 origin-top-right md:origin-bottom-left">
          <div className="flex items-center justify-between mb-5 px-1">
            <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <div className="w-1 h-4 bg-blue-600 rounded-full" />
              Settings
            </h3>
            <span className="text-[10px] font-black text-blue-600/50 dark:text-blue-400/50 uppercase tracking-[0.2em]">SPSV v1.0</span>
          </div>

          <SegmentedControl 
            title="Text Size"
            Icon={Type}
            currentValue={fontSize}
            onChange={setFontSize}
            options={[
              { label: 'Small', value: 'default' },
              { label: 'Medium', value: 'medium' },
              { label: 'Large', value: 'large' }
            ]}
          />

          <div className="h-px bg-gray-100 dark:bg-gray-700/50 my-5" />

          <SegmentedControl 
            title="Appearance"
            Icon={theme === 'dark' ? Moon : Sun}
            currentValue={theme}
            onChange={setTheme}
            options={[
              { label: <div className="flex items-center justify-center gap-2"><Sun className="w-3.5 h-3.5" /> Light</div>, value: 'light' },
              { label: <div className="flex items-center justify-center gap-2"><Moon className="w-3.5 h-3.5" /> Dark</div>, value: 'dark' }
            ]}
          />
        </div>
      )}
    </div>
  );
}
