'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function HomeHero() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="text-left md:text-center mb-6 md:mb-16 transition-all duration-200">
      <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 animate-pulse">
        <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
        <span className="text-[11px] font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wider">Now Updated: Chapter 4 & 5 Tests</span>
      </div>
      <h2 className="text-3xl md:text-5xl font-extrabold mb-3 md:mb-6 text-gray-900 dark:text-white tracking-tight">
        Master Your <span className="text-blue-600">SPSV Test</span>
      </h2>

      <div className="max-w-2xl mx-auto">
        {/* Mobile View: Expandable */}
        <div className="md:hidden">
          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            {isExpanded 
              ? "Your comprehensive platform for SPSV Industry and Area Knowledge preparation. Follow the path from theory to practice and track your success." 
              : "Your comprehensive platform for SPSV"}
          </p>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 inline-flex items-center gap-1.5 text-blue-600 font-bold text-sm hover:underline"
            aria-expanded={isExpanded}
          >
            {isExpanded ? (
              <>
                <span>Show Less</span>
                <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                <span>Read More</span>
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        </div>

        {/* Desktop View: Full and Centered */}
        <p className="hidden md:block text-xl text-gray-600 dark:text-gray-400 leading-relaxed px-4">
          Your comprehensive platform for SPSV Industry and Area Knowledge preparation.
          Follow the path from theory to practice and track your success.
        </p>
      </div>
    </div>
  );
}
