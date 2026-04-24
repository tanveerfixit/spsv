'use client';

import React, { useEffect, useState } from 'react';

export default function NoticeBar() {
  const [notice, setNotice] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const res = await fetch('/api/settings?key=NOTICE_TEXT');
        if (res.ok) {
          const data = await res.json();
          setNotice(data.value || '');
        }
      } catch (error) {
        console.error('Failed to fetch notice:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotice();
    
    // Refresh every 5 minutes
    const interval = setInterval(fetchNotice, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (loading || !notice) return null;

  return (
    <div className="bg-red-600 text-white overflow-hidden py-1.5 border-b border-red-700 shadow-sm relative z-50">
      <div className="whitespace-nowrap inline-block animate-marquee hover:pause whitespace-nowrap">
        <span className="inline-block px-4 font-bold text-sm">
          {notice}
        </span>
        {/* Duplicate for seamless looping */}
        <span className="inline-block px-4 font-bold text-sm">
          {notice}
        </span>
        <span className="inline-block px-4 font-bold text-sm">
          {notice}
        </span>
        <span className="inline-block px-4 font-bold text-sm">
          {notice}
        </span>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 20s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
