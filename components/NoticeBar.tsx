'use client';

import React, { useEffect, useState } from 'react';

export default function NoticeBar() {
  const [notice, setNotice] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const [textRes, visibleRes] = await Promise.all([
          fetch('/api/settings?key=NOTICE_TEXT'),
          fetch('/api/settings?key=NOTICE_VISIBLE')
        ]);

        if (textRes.ok) {
          const textData = await textRes.json();
          setNotice(textData.value || '');
        }

        if (visibleRes.ok) {
          const visibleData = await visibleRes.json();
          // Hide by default: only show if explicitly set to 'true'
          setVisible(visibleData.value === 'true');
        }
      } catch (error) {
        console.error('Failed to fetch notice settings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotice();
    
    // Refresh every 5 minutes
    const interval = setInterval(fetchNotice, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (loading || !notice || !visible) return null;

  return (
    <div className="bg-[#003057] text-[#99cc33] overflow-hidden py-2 border-b-2 border-[#99cc33] shadow-sm relative z-50">
      <div className="whitespace-nowrap inline-block animate-marquee hover:pause">
        <span className="inline-block px-4 font-bold text-sm">
          {notice}
        </span>
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

