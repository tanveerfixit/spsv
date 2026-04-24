import React from 'react';
import { terminologyData } from '@/lib/data/terminology';

export default function Introduction() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Welcome Section */}
      <section className="mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">Introduction</h1>
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 rounded-3xl shadow-xl mb-8 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-4">Welcome to Your SPSV Journey</h2>
            <p className="text-blue-50 leading-relaxed text-lg max-w-2xl">
              The Small Public Service Vehicle (SPSV) industry is a vital part of Ireland&apos;s transport network. 
              This manual is your definitive guide to becoming a professional, licensed operator.
            </p>
          </div>
          {/* Subtle decorative circle */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4">
          <p>
            To provide a professional service, you must understand the rules, regulations, and terminology 
            used in the industry. This introduction covers the essential language you&apos;ll encounter 
            throughout your study and your career.
          </p>
        </div>
      </section>

      {/* Terminology Section */}
      <section className="mt-16 pt-16 border-t border-gray-200 dark:border-gray-800">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Terminology used in SPSV industry</h2>
          <p className="text-gray-600 dark:text-gray-400">
            The following terms and language are used frequently in the Manual and the SPSV industry.
          </p>
        </div>
        
        <div className="grid gap-6">
          {terminologyData.map((item, index) => (
            <div 
              key={index} 
              className="group p-6 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {item.term}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2 block">Handbook Definition</span>
                  <div className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl border-l-4 border-gray-300 dark:border-gray-600 italic text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    &quot;{item.bookText}&quot;
                  </div>
                </div>
                
                <div>
                  <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2 block">Simple Explanation</span>
                  <div className="p-4 bg-blue-50/50 dark:bg-blue-900/10 rounded-xl border-l-4 border-blue-500/50 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {item.simpleExplanation}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
