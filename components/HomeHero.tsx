'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function HomeHero() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="text-left md:text-center mb-6 md:mb-16 transition-all duration-200">
      <h2 className="font-heading text-4xl md:text-6xl font-black mb-3 md:mb-6 text-[#003057] tracking-tighter leading-tight">
        Master your <span className="text-[#99cc33]">knowledge</span>
      </h2>

      <div className="max-w-2xl mx-auto">
        {/* Mobile View: Expandable */}
        <div className="md:hidden">
          <p className="text-base text-gray-700 leading-relaxed font-bold">
            {isExpanded 
              ? "Your independent study hub for SPSV Industry and Area Knowledge preparation. Build your understanding through interactive modules." 
              : "Your independent study hub for SPSV"}
          </p>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 inline-flex items-center gap-1.5 text-[#003057] font-bold text-xs tracking-widest hover:text-[#99cc33] transition-colors"
            aria-expanded={isExpanded}
          >
            {isExpanded ? (
              <>
                <span>Show less</span>
                <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                <span>Read more</span>
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        </div>

        {/* Desktop View: Full and Centered */}
        <p className="hidden md:block text-xl text-gray-700 leading-relaxed px-4 font-bold tracking-tight">
          Your independent study hub for SPSV Industry and Area Knowledge preparation.
          Build your understanding through interactive modules and track your progress.
        </p>
      </div>
    </div>
  );
}
