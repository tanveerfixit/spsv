import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SPSV Mock Exams & Practice Tests | Industry Knowledge Ireland',
  description: 'Free and full-length SPSV mock exams. Practice Industry and Area Knowledge tests to pass your NTA driver entrance exam.',
  keywords: 'SPSV mock exam, taxi practice test ireland, industry knowledge test practice, SPSV exam simulator',
};

export default function AssessmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
