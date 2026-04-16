'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function HomeHero() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="text-left md:text-center mb-10 md:mb-16">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-6 text-gray-900 dark:text-white tracking-tight px-0 md:px-2">
        Master Your <span className="text-blue-600">SPSV Test</span>
      </h2>
      
      <div className="relative group max-w-2xl mx-auto">
        <div className="md:hidden">
          <p className={`text-base text-gray-600 dark:text-gray-400 leading-relaxed px-0 ${isExpanded ? '' : 'line-clamp-1'}`}>
            Your comprehensive platform for SPSV Industry and Area Knowledge preparation. 
            Follow the path from theory to practice and track your success.
          </p>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 flex items-center gap-1.5 text-blue-600 font-bold text-sm hover:text-blue-700 transition-colors"
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

        {/* Desktop view - always full */}
        <p className="hidden md:block text-xl text-gray-600 dark:text-gray-400 leading-relaxed px-4">
          Your comprehensive platform for SPSV Industry and Area Knowledge preparation. 
          Follow the path from theory to practice and track your success.
        </p>
      </div>
    </div>
  );
}
