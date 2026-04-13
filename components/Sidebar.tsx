'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, BookOpen, FileText, ChevronDown, ChevronRight, LogIn, LogOut, BarChart, Users } from 'lucide-react';
import { useSession, signIn, signOut } from 'next-auth/react';
import SettingsMenu from './SettingsMenu';

const SPSV_DATA = [
  {
    title: 'Official Manual',
    icon: <BookOpen className="w-4 h-4" />,
    categories: [
      {
        title: 'Introduction',
        subCategories: ['Welcome']
      },
      {
        title: 'Chapter 1: The SPSV industry',
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
        title: 'Chapter 2: SPSV driver licensing',
        subCategories: [
          '2.1 Introduction to the SPSV driver licence',
          '2.2 Requirements to get an SPSV driver licence',
          '2.3 SPSV driver licence application process',
          '2.4 Renewing your SPSV driver licence',
          '2.5 Your rights and responsibilities'
        ]
      },
      {
        title: 'Chapter 3: Choosing a vehicle',
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
        title: 'Chapter 5: Working as an SPSV operator',
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
        title: 'Chapter 6: Finding your way around',
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
        title: 'Chapter 8: Delivering customer satisfaction',
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
        title: 'Chapter 11: Preparing for your test',
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
        subCategories: ['Terminology Test', 'Chapter 1 Test', 'Industry Knowledge Test', 'Area Knowledge Test', 'Full Mock Exam']
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

  const sidebarContent = (
    <div className="flex flex-col h-full bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 text-sm transition-colors duration-200">
      <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
        <Link href="/" onClick={() => setMobileOpen(false)}>
          <h1 className="font-semibold text-gray-900 dark:text-white">SPSV Study & Test</h1>
        </Link>
        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <SettingsMenu />
          </div>
          <button className="md:hidden p-1" onClick={() => setMobileOpen(false)}>
            <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-2">
        {SPSV_DATA.map((topic) => (
          <div key={topic.title} className="mb-2">
            <button 
              onClick={() => toggleTopic(topic.title)}
              className="flex items-center justify-between w-full p-2 text-left text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium rounded-md transition-colors"
            >
              <div className="flex items-center gap-2">
                {topic.icon}
                <span>{topic.title}</span>
              </div>
              {expandedTopics[topic.title] ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>
            
            {expandedTopics[topic.title] && (
              <div className="ml-2 pl-2 border-l border-gray-200 dark:border-gray-700 mt-1">
                {topic.categories.map((category) => (
                  <div key={category.title} className="mb-1">
                    <button
                      onClick={() => toggleCategory(category.title)}
                      className="flex items-center justify-between w-full p-2 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
                    >
                      <span>{category.title}</span>
                      {expandedCategories[category.title] ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
                    </button>
                    
                    {expandedCategories[category.title] && (
                      <div className="ml-2 pl-2 border-l border-gray-200 dark:border-gray-700 mt-1">
                        {category.subCategories.map((sub) => {
                          const href = `/${slugify(topic.title)}/${slugify(category.title)}/${slugify(sub)}`;
                          const isActive = pathname === href;
                          
                          return (
                            <Link
                              key={sub}
                              href={href}
                              onClick={() => setMobileOpen(false)}
                              className={`block w-full p-2 text-left rounded-md transition-colors ${isActive ? 'text-blue-600 dark:text-blue-400 font-medium bg-blue-50 dark:bg-blue-900/30' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400'}`}
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
      </div>

      <div className="p-4 border-t border-gray-200 dark:border-gray-800">
        {user ? (
          <div className="flex flex-col gap-2">
            <span className="text-gray-600 dark:text-gray-400 truncate mb-2">{user.email}</span>
            <Link 
              href="/dashboard"
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-2 p-2 w-full text-left rounded-md transition-colors ${pathname === '/dashboard' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
            >
              <BarChart className="w-4 h-4" />
              <span>My Progress</span>
            </Link>
            {(user as any)?.role === 'ADMIN' && (
              <Link 
                href="/admin"
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-2 p-2 w-full text-left rounded-md transition-colors ${pathname === '/admin' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
              >
                <Users className="w-4 h-4" />
                <span>Admin Panel</span>
              </Link>
            )}
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 p-2 w-full text-left rounded-md transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </div>
        ) : (
          <button 
            onClick={handleLogin}
            className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-2 w-full text-left rounded-md transition-colors"
          >
            <LogIn className="w-4 h-4" />
            <span>Sign In</span>
          </button>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-64 h-screen sticky top-0 shrink-0">
        {sidebarContent}
      </aside>

      {/* Mobile Sidebar Overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <aside className="relative w-64 max-w-[80%] h-full">
            {sidebarContent}
          </aside>
        </div>
      )}
    </>
  );
}
