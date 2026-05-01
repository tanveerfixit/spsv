import { BookOpen, List, GraduationCap, BarChart, ChevronRight, ShieldCheck, Trophy, Target } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
import HomeHero from '@/components/HomeHero';

export const metadata: Metadata = {
  title: 'SPSV PRO | Industry Knowledge & Study Hub',
  description: 'Your independent resource for SPSV Industry and Area Knowledge preparation. Interactive study guides and practice assessments.',
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
      title: 'SPSV HANDBOOK',
      subtitle: 'STUDY MATERIAL',
      description: 'Review the comprehensive study material and build your foundation.',
      href: '/study',
      icon: <BookOpen className="w-8 h-8" />,
    },
    {
      title: 'Chapter Wise Practice test',
      subtitle: 'PRACTICE MODULES',
      description: 'Practice specific chapters to master individual sections.',
      href: '/assessment',
      icon: <List className="w-8 h-8" />,
    },
    {
      title: 'Final Mock Test',
      subtitle: 'PRACTICE EXAM',
      description: 'Verify your knowledge with a full-length practice assessment.',
      href: '/assessment',
      icon: <GraduationCap className="w-8 h-8" />,
    },
    {
      title: 'PERFORMANCE',
      subtitle: 'DASHBOARD',
      description: 'Track your scores and see your improvement over time.',
      href: '/dashboard',
      icon: <BarChart className="w-8 h-8" />,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <HomeHero />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-12">
        {cards.map((card) => (
          <Link 
            key={card.title}
            href={card.href}
            className="group relative flex flex-col p-6 md:p-10 bg-white border-2 border-[#003057] rounded-sm border-b-4 hover:border-[#99cc33] transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-8">
              <div className="bg-[#003057] text-white p-4 rounded-sm group-hover:bg-[#99cc33] group-hover:text-[#003057] transition-all">
                {card.icon}
              </div>
              <div className="text-right">
                <span className="block text-[10px] font-black text-[#99cc33] uppercase tracking-[0.2em]">{card.subtitle}</span>
                <h3 className="text-2xl font-black text-[#003057] tracking-tighter uppercase leading-none mt-1">
                  {card.title}
                </h3>
              </div>
            </div>

            <p className="text-gray-600 font-medium leading-relaxed mb-8 flex-1">
              {card.description}
            </p>

            <div className="flex items-center gap-2 text-[#003057] font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
              <span>Launch Module</span>
              <ChevronRight className="w-4 h-4 text-[#99cc33]" />
            </div>
          </Link>
        ))}
      </div>

      {/* Prometric Simulation CTA */}
      <div className="mt-12 md:mt-20 p-8 md:p-16 bg-[#003057] border-b-8 border-[#99cc33] text-white rounded-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-10 hidden lg:block">
          <ShieldCheck className="w-64 h-64" />
        </div>
        
        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#99cc33]" />
            <span className="text-[#99cc33] font-black uppercase text-xs tracking-[0.3em]">Learning Resource</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight uppercase tracking-tighter italic">
            Ready to <br/> <span className="text-[#99cc33]">Practice</span>?
          </h2>
          
          <p className="text-gray-300 text-lg mb-10 font-medium leading-relaxed">
            Our platform provides a comprehensive learning environment to help you prepare for the SPSV industry requirements. 
            Build your confidence through consistent practice and review.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/assessment" 
              className="inline-flex items-center justify-center px-10 py-5 bg-[#99cc33] text-[#003057] font-black uppercase tracking-widest hover:bg-white transition-all rounded-sm"
            >
              Start Practice Session
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
