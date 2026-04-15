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
    <div className="min-h-screen bg-white font-['Inter',_sans-serif] selection:bg-[#004d40]/10 selection:text-[#004d40]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');

        :root {
          --primary-teal: #004d40;
          --text-main: #1a1a1a;
          --text-body: #374151;
          --border-color: #e5e7eb;
          --transition-speed: 0.35s;
        }

        .georgia-serif {
          font-family: Georgia, serif;
        }

        .faq-icon::before,
        .faq-icon::after {
          content: "";
          position: absolute;
          background-color: var(--primary-teal);
          transition: all var(--transition-speed) ease;
        }

        .faq-icon::before {
          top: 50%;
          left: 0;
          width: 100%;
          height: 1.5px;
          transform: translateY(-50%);
        }

        .faq-icon::after {
          left: 50%;
          top: 0;
          width: 1.5px;
          height: 100%;
          transform: translateX(-50%);
        }

        .active-icon {
          transform: rotate(90deg);
        }

        .active-icon::after {
          opacity: 0;
          transform: translateX(-50%) scaleY(0);
        }

        .faq-content-grid {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows var(--transition-speed) cubic-bezier(0.4, 0, 0.2, 1);
        }

        .faq-content-grid.active {
          grid-template-rows: 1fr;
        }

        strong {
          color: var(--primary-teal);
          font-weight: 600;
        }
      `}</style>

      <div className="max-w-[800px] mx-auto px-6 py-10 md:py-16">
        {/* Header with Small Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="georgia-serif text-4xl md:text-[2.25rem] text-[#004d40] leading-tight font-normal">
              Common Questions
            </h1>
          </div>

          <div className="relative w-full md:w-64 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#004d40] transition-colors" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-8 py-2 bg-gray-50 dark:bg-transparent border border-gray-200 focus:border-[#004d40] focus:ring-1 focus:ring-[#004d40]/20 rounded-lg outline-none text-sm font-medium transition-all"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

        {/* FAQ List */}
        <div className="border-t border-gray-200">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => (
              <div key={faq.id} className="border-b border-gray-200">
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between py-7 text-left group gap-4"
                  aria-expanded={openId === faq.id}
                >
                  <span className={`georgia-serif text-[1.25rem] leading-[1.4] font-medium transition-colors ${openId === faq.id ? 'text-[#004d40]' : 'text-[#1a1a1a] group-hover:text-[#004d40]'}`}>
                    {faq.question}
                  </span>
                  <div className={`faq-icon relative w-[18px] h-[18px] shrink-0 transition-transform duration-350 ${openId === faq.id ? 'active-icon' : ''}`} aria-hidden="true" />
                </button>
                
                <div className={`faq-content-grid overflow-hidden ${openId === faq.id ? 'active' : ''}`}>
                  <div className="min-h-0">
                    <div className="pb-8 text-[#374151] text-[1.05rem] leading-[1.7] max-w-[68ch]">
                      {renderAnswer(faq.answer)}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="py-20 text-center">
              <p className="text-gray-500 font-medium">No questions found matching your search.</p>
              <button 
                onClick={() => setSearchTerm('')}
                className="mt-4 text-[#004d40] font-semibold hover:underline"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
