import React from 'react';
import Terminology from '@/components/content/Terminology';
import TerminologyTest from '@/components/content/TerminologyTest';
import Chapter1 from '@/components/content/Chapter1';
import Chapter1Test from '@/components/content/Chapter1Test';
import Chapter2Test from '@/components/content/Chapter2Test';

export default async function ContentPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const resolvedParams = await params;
  const slugPath = resolvedParams.slug.join('/');

  if (slugPath === 'official-manual/introduction/terminology') {
    return <Terminology />;
  }

  if (slugPath === 'assessment/practice-tests/terminology-test') {
    return <TerminologyTest />;
  }

  if (slugPath === 'assessment/practice-tests/chapter-1-test') {
    return <Chapter1Test />;
  }

  if (slugPath === 'assessment/practice-tests/chapter-2-test') {
    return <Chapter2Test />;
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
