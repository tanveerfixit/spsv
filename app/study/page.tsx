import Link from 'next/link';
import { BookOpen, ChevronRight } from 'lucide-react';

const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

const CHAPTERS = [
  {
    title: 'Introduction',
    subCategories: ['Welcome', 'Terminology']
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
];

export default function StudyPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center">
          <BookOpen className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Official Manual</h2>
          <p className="text-gray-600 dark:text-gray-400">Select a chapter to begin studying</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {CHAPTERS.map((chapter) => {
          const firstSub = chapter.subCategories[0];
          const href = `/official-manual/${slugify(chapter.title)}/${slugify(firstSub)}`;
          
          return (
            <Link 
              key={chapter.title}
              href={href}
              className="flex items-center justify-between p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-md hover:border-blue-500 dark:hover:border-blue-500 transition-all group"
            >
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {chapter.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {chapter.subCategories.length} topics
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
