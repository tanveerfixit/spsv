import React from 'react';
import { terminologyData } from '@/lib/data/terminology';

export default function Terminology() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Terms Used by the SPSV Industry</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-8">
        The following terms and language are used frequently in the Manual and the SPSV industry.
      </p>
      
      <div className="space-y-8">
        {terminologyData.map((item, index) => (
          <div key={index} className="border-b border-gray-200 dark:border-gray-800 pb-6 last:border-0">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">{item.term}</h3>
            
            <div className="mb-4">
              <span className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1 block">Handbook Definition</span>
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed border-l-2 border-gray-300 dark:border-gray-600 pl-3 text-sm md:text-base">
                {item.bookText}
              </p>
            </div>
            
            <div>
              <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1 block">Simple Explanation</span>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed bg-blue-50/50 dark:bg-blue-900/20 p-3 rounded-sm text-sm md:text-base">
                {item.simpleExplanation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
