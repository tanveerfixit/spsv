import Link from 'next/link';
import { FileText, ChevronRight, CheckCircle, Clock } from 'lucide-react';

const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

const TESTS = [
  {
    title: 'Terminology Test',
    description: 'Test your knowledge of key SPSV industry terms and definitions.',
    questions: 25,
    time: '25 mins',
    available: true
  },
  {
    title: 'Chapter 1 Test',
    description: 'Assess your understanding of the SPSV industry, NTA role, and licensing.',
    questions: 10,
    time: '10 mins',
    available: true
  },
  {
    title: 'Chapter 2 Test',
    description: 'Test your knowledge on SPSV driver licensing, rights, and responsibilities.',
    questions: 30,
    time: '30 mins',
    available: true
  },
  {
    title: 'Industry Knowledge Test',
    description: 'Comprehensive test covering all chapters of the Official Manual.',
    questions: 54,
    time: '60 mins',
    available: false
  },
  {
    title: 'Area Knowledge Test',
    description: 'Test your knowledge of the local area, routes, and landmarks.',
    questions: 36,
    time: '45 mins',
    available: false
  },
  {
    title: 'Full Mock Exam',
    description: 'Simulate the real SPSV test with both Industry and Area Knowledge sections.',
    questions: 90,
    time: '105 mins',
    available: false
  }
];

export default function AssessmentPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center">
          <FileText className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Assessments</h2>
          <p className="text-gray-600 dark:text-gray-400">Test your knowledge and track your progress</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {TESTS.map((test) => {
          const href = `/assessment/practice-tests/${slugify(test.title)}`;
          
          if (!test.available) {
            return (
              <div 
                key={test.title}
                className="flex flex-col justify-between p-6 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl opacity-70"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{test.title}</h3>
                    <span className="text-xs font-medium px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">Coming Soon</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {test.description}
                  </p>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4" />
                    <span>{test.questions} Qs</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{test.time}</span>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <Link 
              key={test.title}
              href={href}
              className="flex flex-col justify-between p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-md hover:border-green-500 dark:hover:border-green-500 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    {test.title}
                  </h3>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors" />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {test.description}
                </p>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" />
                  <span>{test.questions} Qs</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{test.time}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
