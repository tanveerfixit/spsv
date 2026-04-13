import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Secure Authentication | SPSV Study & Test',
  description: 'Sign in or create an account to access mock exams, track your progress, and save your SPSV study results.',
  robots: 'noindex, follow', // Don't index login/signup pages but follow links
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
