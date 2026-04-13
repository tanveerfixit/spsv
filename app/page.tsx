import Link from 'next/link';
import { BookOpen, FileText } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[70vh] text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Welcome to SPSV Study & Test</h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl">
        Your comprehensive platform to prepare for the SPSV Industry Knowledge and Area Knowledge tests. Choose a path below to get started.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
        <Link 
          href="/study"
          className="flex flex-col items-center p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-500 transition-all group"
        >
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <BookOpen className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">Start Study</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Read through the Official Manual chapters, learn terminology, and build your foundation.
          </p>
        </Link>

        <Link 
          href="/assessment"
          className="flex flex-col items-center p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl hover:shadow-lg hover:border-green-500 dark:hover:border-green-500 transition-all group"
        >
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <FileText className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">Terminology Study and Test</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Take practice tests for each chapter or try a full mock exam to simulate the real test.
          </p>
        </Link>
      </div>
    </div>
  );
}
