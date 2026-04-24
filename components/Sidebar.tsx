'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, BookOpen, FileText, ChevronDown, ChevronRight, LogIn, LogOut, BarChart, Users, HelpCircle } from 'lucide-react';
import { useSession, signOut } from 'next-auth/react';
import SettingsMenu from './SettingsMenu';

const SPSV_DATA = [
  {
    title: 'SPSV Handbook',
    icon: <BookOpen className="w-4 h-4" />,
    categories: [
      {
        title: 'Introduction',
        subCategories: ['Welcome']
      },
      {
        title: 'Chapter 1: The SPSV Industry',
        subCategories: [
          '1.1 About the NTA',
          '1.2 The importance of the SPSV industry',
          '1.3 Licensing vehicles, drivers and dispatch operators',
          '1.4 Rules and regulations for SPSVs and their drivers',
          '1.5 Getting an SPSV on the road',
          '1.6 National SPSV registers'
        ]
      },
      {
        title: 'Chapter 2: SPSV Driver Licensing',
        subCategories: [
          '2.1 Introduction to the SPSV driver licence',
          '2.2 Requirements to get an SPSV driver licence',
          '2.3 SPSV driver licence application process',
          '2.4 Renewing your SPSV driver licence',
          '2.5 Your rights and responsibilities'
        ]
      },
      {
        title: 'Chapter 3: Choosing a Vehicle',
        subCategories: [
          '3.1 Vehicle standards for SPSVs',
          '3.2 Roadworthiness',
          '3.3 SPSV suitability',
          '3.4 Wheelchair accessible vehicles',
          '3.5 Requirements for limousines'
        ]
      },
      {
        title: 'Chapter 4: Vehicle licensing',
        subCategories: [
          '4.1 About the SPSV vehicle licence',
          '4.2 Applying for a vehicle licence',
          '4.3 Renewing a vehicle licence',
          '4.4 Replacing an expired vehicle licence',
          '4.5 Changing the vehicle on a vehicle licence',
          '4.6 Transferring a licence after death',
          '4.7 Changing to another licence category',
          '4.8 Surrendering a vehicle licence'
        ]
      },
      {
        title: 'Chapter 5: Working as an operator',
        subCategories: [
          '5.1 Vehicle requirements',
          '5.2 Operating an SPSV owned by another person',
          '5.3 Maintaining operational data',
          '5.4 Rules of operation',
          '5.5 Operating sustainably',
          '5.6 Using taxi ranks',
          '5.7 Using bus lanes',
          '5.8 Using your roof sign',
          '5.9 Using your cashless payment facility',
          '5.10 Refusing a passenger',
          '5.11 Keeping your vehicle in good condition',
          '5.12 Compliance and following the rules',
          '5.13 Fixed payment offences',
          '5.14 Changing address or contact details'
        ]
      },
      {
        title: 'Chapter 6: Finding your way',
        subCategories: [
          '6.1 The importance of route planning',
          '6.2 Planning your journey',
          '6.3 Reading a map',
          '6.4 How to use your GPS'
        ]
      },
      {
        title: 'Chapter 7: Fares',
        subCategories: [
          '7.1 Taxi fares',
          '7.2 Hackney and limousine fares',
          '7.3 Getting paid',
          '7.4 Staying compliant'
        ]
      },
      {
        title: 'Chapter 8: Customer satisfaction',
        subCategories: [
          '8.1 NTA’s role in customer service',
          '8.2 Good customer service is good for business',
          '8.3 The customer’s rights and responsibilities',
          '8.4 Aspects of good customer service',
          '8.5 Assisting customers with disabilities',
          '8.6 Diversity and equality',
          '8.7 Dealing with complaints',
          '8.8 Dealing with difficult customers',
          '8.9 Lost property'
        ]
      },
      {
        title: 'Chapter 9: Your SPSV business',
        subCategories: [
          '9.1 Working in the SPSV industry',
          '9.2 Choosing the right business model',
          '9.3 Creating a business plan',
          '9.4 Running your own business',
          '9.5 Promoting your business'
        ]
      },
      {
        title: 'Chapter 10: Staying safe',
        subCategories: [
          '10.1 NTA’s role in safety',
          '10.2 Looking after your own safety and customers',
          '10.3 Looking after your personal security',
          '10.4 What to do in a collision or emergency',
          '10.5 Handling and transporting luggage',
          '10.6 Complying with regulations'
        ]
      },
      {
        title: 'Chapter 11: Preparing for test',
        subCategories: [
          '11.1 Testing in the Skills Development Programme',
          '11.2 SPSV Driver Entry Test',
          '11.3 Test administration',
          '11.4 Industry Knowledge module',
          '11.5 Area Knowledge Module'
        ]
      },
      {
        title: 'Appendices',
        subCategories: [
          'Appendix A: Vehicle age rules',
          'Appendix B: Local area hackneys',
          'Appendix C: Dispatch operator licensing'
        ]
      }
    ]
  },
  {
    title: 'Assessment',
    icon: <FileText className="w-4 h-4" />,
    categories: [
      {
        title: 'Practice Tests',
        subCategories: ['Terminology Test', 'Chapter 1 Test', 'Chapter 2 Test', 'Chapter 3 Test', 'Industry Knowledge Test', 'Area Knowledge Test', 'Full Mock Exam']
      }
    ]
  }
];

const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

export default function Sidebar({ mobileOpen, setMobileOpen }: { mobileOpen: boolean, setMobileOpen: (open: boolean) => void }) {
  const pathname = usePathname();
  const { data: session } = useSession();
  const user = session?.user;
  const [expandedTopics, setExpandedTopics] = useState<Record<string, boolean>>({});
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  const toggleTopic = (title: string) => {
    setExpandedTopics(prev => ({ ...prev, [title]: !prev[title] }));
  };

  const toggleCategory = (title: string) => {
    setExpandedCategories(prev => ({ ...prev, [title]: !prev[title] }));
  };

  const handleLogin = () => {
    window.location.href = '/login';
  };

  const handleLogout = async () => {
    await signOut({ callbackUrl: '/' });
  };

  if (!mobileOpen) return null;

  return (
    <div className="md:hidden fixed inset-0 z-[100] flex">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={() => setMobileOpen(false)} 
      />
      
      {/* Sidebar Content */}
      <aside className="relative w-80 max-w-[85vw] h-full bg-white dark:bg-gray-900 shadow-2xl flex flex-col animate-in slide-in-from-left duration-300">
        <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-gray-50/50 dark:bg-gray-800/50">
          <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
            <span className="font-bold text-lg text-gray-900 dark:text-white">SPSV <span className="text-blue-600">PRO</span></span>
          </Link>
          <button className="p-2 -mr-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" onClick={() => setMobileOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4 px-2">
          {SPSV_DATA.map((topic) => (
            <div key={topic.title} className="mb-2">
              <button 
                onClick={() => toggleTopic(topic.title)}
                className="flex items-center justify-between w-full p-3 text-left text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 font-semibold rounded-none transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400">
                    {topic.icon}
                  </div>
                  <span>{topic.title}</span>
                </div>
                {expandedTopics[topic.title] ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </button>
              
              {expandedTopics[topic.title] && (
                <div className="ml-4 pl-4 border-l-2 border-gray-100 dark:border-gray-800 mt-1 space-y-1">
                  {topic.categories.map((category) => (
                    <div key={category.title}>
                      <button
                        onClick={() => toggleCategory(category.title)}
                        className="flex items-center justify-between w-full p-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      >
                        <span className="font-medium">{category.title}</span>
                        {expandedCategories[category.title] ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
                      </button>
                      
                      {expandedCategories[category.title] && (
                        <div className="ml-2 mt-1 space-y-0.5">
                          {category.subCategories.map((sub) => {
                            const topicSlug = topic.title === 'SPSV Handbook' ? 'official-manual' : slugify(topic.title);
                            const catSlug = slugify(category.title);
                            const subSlug = slugify(sub);
                            const href = `/${topicSlug}/${catSlug}/${subSlug}`;
                            const isActive = pathname === href;
                            
                            return (
                              <Link
                                key={sub}
                                href={href}
                                onClick={() => setMobileOpen(false)}
                                className={`block w-full p-2 text-xs transition-colors ${isActive ? 'text-blue-600 dark:text-blue-400 font-bold bg-blue-50 dark:bg-blue-900/30' : 'text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'}`}
                              >
                                {sub}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
            <Link 
              href="/faq"
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 p-3 w-full text-sm font-medium transition-colors ${pathname === '/faq' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
            >
              <HelpCircle className="w-5 h-5" />
              <span>General FAQ</span>
            </Link>
          </div>
        </div>

        <div className="p-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between mb-4 px-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Settings</span>
            <SettingsMenu />
          </div>

          {user ? (
            <div className="space-y-2">
              <div className="px-2 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Signed in as</p>
                <p className="text-sm font-bold text-gray-900 dark:text-white truncate">{user.email}</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Link 
                  href="/dashboard"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 p-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <BarChart className="w-4 h-4" />
                  Progress
                </Link>
                <button 
                  onClick={handleLogout}
                  className="flex items-center justify-center gap-2 p-2 bg-red-50 dark:bg-red-900/20 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors border border-red-100 dark:border-red-900/40"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </div>
            </div>
          ) : (
            <button 
              onClick={handleLogin}
              className="w-full flex items-center justify-center gap-2 p-3 bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors shadow-lg active:scale-[0.98]"
            >
              <LogIn className="w-5 h-5" />
              Sign In
            </button>
          )}
        </div>
      </aside>
    </div>
  );
}
