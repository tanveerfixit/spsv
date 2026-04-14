import { BookOpen, List, GraduationCap, BarChart, ChevronRight } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SPSV Study & Mock Test | Pass Your Irish Taxi Test',
  description: 'The #1 platform for Irish SPSV Industry and Area Knowledge Test preparation. Mock exams, study guides, and progress tracking for NTA driver candidates.',
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "SPSV Study & Test Ireland",
    "description": "Comprehensive preparation platform for the Irish SPSV Driver Entrance Test.",
    "url": "https://spsv.clarelab.com",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    }
  };

  const cards = [
    {
      title: 'Start Study',
      description: 'Review the Official Manual chapters and build your foundation.',
      href: '/study',
      icon: <BookOpen className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: 'blue',
    },
    {
      title: 'Chapter wise test',
      description: 'Practice specific chapters to master individual sections.',
      href: '/assessment',
      icon: <List className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: 'green',
    },
    {
      title: 'Full Mock Test',
      description: 'Simulate the real exam with a full timed mock test.',
      href: '/assessment',
      icon: <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: 'purple',
    },
    {
      title: 'My Progress',
      description: 'Track your scores and see your improvement over time.',
      href: '/dashboard',
      icon: <BarChart className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: 'orange',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-6 text-gray-900 dark:text-white tracking-tight px-2">
          Master Your <span className="text-blue-600">SPSV Test</span>
        </h2>
        <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
          Your comprehensive platform for SPSV Industry and Area Knowledge preparation. 
          Follow the path from theory to practice and track your success.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-2 gap-3 sm:gap-6 md:gap-8">
        {cards.map((card) => (
          <Link 
            key={card.title}
            href={card.href}
            className="group relative flex flex-col p-4 sm:p-8 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            {/* Background Decoration */}
            <div className={`absolute -right-8 -top-8 w-32 h-32 bg-${card.color}-500/5 rounded-full group-hover:scale-150 transition-transform duration-500`} />
            
            <div className="flex items-start justify-between mb-3 sm:mb-6">
              <div className={`p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-${card.color}-50 dark:bg-${card.color}-900/30 text-${card.color}-600 dark:text-${card.color}-400 group-hover:rotate-6 transition-transform`}>
                {card.icon}
              </div>
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white group-hover:translate-x-1 transition-all" />
            </div>

            <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-3 text-gray-900 dark:text-white">
              {card.title}
            </h3>
            <p className="text-xs sm:text-base text-gray-600 dark:text-gray-400 leading-tight sm:leading-relaxed line-clamp-2 sm:line-clamp-none">
              {card.description}
            </p>

            <div className={`mt-4 sm:mt-8 w-10 sm:w-12 h-1 bg-${card.color}-500 rounded-full group-hover:w-full transition-all duration-500`} />
          </Link>
        ))}
      </div>

      <div className="mt-12 md:mt-20 p-6 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white text-center shadow-xl shadow-blue-500/20">
        <h3 className="text-2xl font-bold mb-2">Ready to take a full test?</h3>
        <p className="text-blue-100 mb-6">Test your knowledge with our integrated mock examination system.</p>
        <Link 
          href="/assessment" 
          className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors"
        >
          Take Full Mock Now
        </Link>
      </div>
    </div>
  );
}
