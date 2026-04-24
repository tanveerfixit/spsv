import React from 'react';
import Introduction from '@/components/content/Introduction';
import Chapter1 from '@/components/content/Chapter1';
import TestSimulator from '@/components/content/TestSimulator';
import { maximumSpsvQuestions } from '@/lib/data/terminologyQuestions';
import { chapter1IndustryQuestions } from '@/lib/data/chapter1Questions';
import { chapter2DriverLicensingQuestions } from '@/lib/data/chapter2Questions';
import { chapter3VehicleQuestions } from '@/lib/data/chapter3Questions';
import { chapter4ExamQuestions } from '@/lib/data/chapter4Questions';
import { chapter5SpsvQuestions } from '@/lib/data/chapter5Questions';

export default async function ContentPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const resolvedParams = await params;
  const slugPath = resolvedParams.slug.join('/');

  if (slugPath === 'official-manual/introduction/welcome' || slugPath === 'official-manual/introduction/terminology') {
    return <Introduction />;
  }

  if (slugPath === 'assessment/practice-tests/terminology-test') {
    return <TestSimulator questions={maximumSpsvQuestions as any} category="Terminology Test" />;
  }

  if (slugPath === 'assessment/practice-tests/chapter-1-test') {
    return <TestSimulator questions={chapter1IndustryQuestions} category="Chapter 1 Test" />;
  }

  if (slugPath === 'assessment/practice-tests/chapter-2-test') {
    return <TestSimulator questions={chapter2DriverLicensingQuestions} category="Chapter 2 Test" />;
  }

  if (slugPath === 'assessment/practice-tests/chapter-3-test') {
    return <TestSimulator questions={chapter3VehicleQuestions} category="Chapter 3 Test" />;
  }

  if (slugPath === 'assessment/practice-tests/chapter-4-test') {
    return <TestSimulator questions={chapter4ExamQuestions as any} category="Chapter 4 Test" />;
  }

  if (slugPath === 'assessment/practice-tests/chapter-5-test') {
    return <TestSimulator questions={chapter5SpsvQuestions} category="Chapter 5 Test" />;
  }

  if (slugPath.startsWith('official-manual/chapter-1-the-spsv-industry/')) {
    const section = resolvedParams.slug[2];
    return <Chapter1 section={section} />;
  }

  // Format the title from the last part of the slug
  const rawTitle = resolvedParams.slug[resolvedParams.slug.length - 1];
  const formattedTitle = rawTitle
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Placeholder for other pages
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{formattedTitle}</h2>
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-md">
        <p className="text-gray-600 dark:text-gray-400">
          Content for this section is coming soon. The structure is ready to be populated!
        </p>
      </div>
    </div>
  );
}
