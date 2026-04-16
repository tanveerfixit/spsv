'use client';

import React, { useEffect, useState } from 'react';
import { Loader2, Search, X } from 'lucide-react';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  order: number;
}

export default function FAQPage() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);
  const [openId, setOpenId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchFaqs();
  }, []);

  const fetchFaqs = async () => {
    try {
      const res = await fetch('/api/faq');
      if (res.ok) {
        const data = await res.json();
        setFaqs(data);
      }
    } catch (error) {
      console.error('Error fetching FAQs:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Simple helper to render bold text and lists from stored strings
  const renderAnswer = (text: string) => {
    if (!text) return null;
    
    // Split by newlines and process each line
    return text.split('\n').map((line, i) => {
      // Check for bullet points
      const isBullet = line.trim().startsWith('•') || line.trim().startsWith('- ');
      
      // Process bold markers **text** or __text__
      let processedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      processedLine = processedLine.replace(/__(.*?)__/g, '<strong>$1</strong>');

      return (
        <span 
          key={i} 
          className={`block ${isBullet ? 'pl-4' : ''} ${line.trim() === '' ? 'h-4' : 'mb-1 last:mb-0'}`}
          dangerouslySetInnerHTML={{ __html: processedLine }} 
        />
      );
    });
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <Loader2 className="w-12 h-12 animate-spin text-[#004d40]" />
        <p className="text-gray-500 font-medium">Loading FAQs...</p>
      </div>
    );
  }

  return (
    <div className="w-full font-sans selection:bg-blue-500/10 selection:text-blue-600">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <style jsx global>{`
        :root {
          --primary-accent: #2563eb;
          --text-main: #111827;
          --text-muted: #4b5563;
          --border-light: #f3f4f6;
          --transition-smooth: 0.25s;
        }

        .faq-content-grid {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows var(--transition-smooth) ease-out;
        }

        .faq-content-grid.active {
          grid-template-rows: 1fr;
        }

        strong {
          color: var(--primary-accent);
          font-weight: 600;
        }
      `}</style>

      {/* Hero Header */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 px-5 pt-8 pb-10 md:px-8 md:pt-12 md:pb-16 transition-colors">
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Common Questions
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl font-medium">
            Everything you need to know about preparing for your Irish SPSV Industry and Area Knowledge Test.
          </p>
          
          <div className="relative w-full max-w-md group mt-2">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
            <input
              type="text"
              placeholder="Search by topic or question..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-10 py-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 rounded-2xl outline-none text-base font-medium transition-all dark:text-white"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* FAQ List Area */}
      <div className="w-full bg-white dark:bg-gray-900 transition-colors min-h-screen">
        {filteredFaqs.length > 0 ? (
          <div className="divide-y divide-gray-100 dark:divide-gray-800">
            {filteredFaqs.map((faq) => (
              <div key={faq.id} className="group">
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between px-5 py-6 md:px-8 text-left transition-colors hover:bg-gray-50/50 dark:hover:bg-gray-800/20 gap-6"
                  aria-expanded={openId === faq.id}
                >
                  <span className={`text-lg md:text-xl font-bold leading-[1.3] transition-colors ${openId === faq.id ? 'text-blue-600 dark:text-blue-400' : 'text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400'}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${openId === faq.id ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 rotate-180' : 'bg-gray-100 dark:bg-gray-800 text-gray-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/10 group-hover:text-blue-500'}`}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <div className={`faq-content-grid overflow-hidden ${openId === faq.id ? 'active' : ''}`}>
                  <div className="min-h-0">
                    <div className="px-5 pb-8 md:px-8 text-gray-600 dark:text-gray-300 text-[1.1rem] leading-[1.6]">
                      <div className="prose prose-blue dark:prose-invert max-w-none">
                        {renderAnswer(faq.answer)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-24 px-5 text-center">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-xl font-bold text-gray-900 dark:text-white mb-2">No matching questions</p>
            <p className="text-gray-500 dark:text-gray-400 mb-6 font-medium">We couldn't find any results for "{searchTerm}"</p>
            <button 
              onClick={() => setSearchTerm('')}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20"
            >
              Show all questions
            </button>
          </div>
        )}

        {/* Footer Accent */}
        <div className="py-12 px-5 border-t border-gray-100 dark:border-gray-800 bg-gray-50/30 dark:bg-gray-800/10 text-center">
          <p className="text-gray-500 dark:text-gray-400 font-medium">
            Still have questions? Feel free to contact our support team.
          </p>
        </div>
      </div>
    </div>
  );
}
