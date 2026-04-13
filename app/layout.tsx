import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles
import AppLayout from '@/components/AppLayout';
import { SettingsProvider } from '@/components/SettingsProvider';
import SessionProvider from '@/components/providers/SessionProvider';
import { ErrorBoundary } from '@/components/ErrorBoundary';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SPSV Study & Mock Test - Industry Knowledge Ireland',
  description: 'The definitive platform for SPSV Industry and Area Knowledge Test preparation in Ireland. Access calculations, regulations, and full mock exams to pass your SPSV driver licence test with confidence.',
  keywords: 'SPSV test, SPSV mock exam, Industry Knowledge Test Ireland, Area Knowledge ireland, SPSV manual study, SPSV driver license, NTA test preparation',
  authors: [{ name: 'SPSV Study Platform' }],
  creator: 'SPSV Study Platform',
  publisher: 'SPSV Study Platform',
  metadataBase: new URL('https://spsv.ie'), // Replace with actual production URL
  openGraph: {
    title: 'Pass your SPSV Test with Confidence',
    description: 'Expert-led study guides and full-length mock exams for the Irish SPSV Driver Entrance Test.',
    url: 'https://spsv.ie',
    siteName: 'SPSV Study & Test',
    locale: 'en_IE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SPSV Study & Mock Test Ireland',
    description: 'Master the Industry and Area Knowledge tests for your SPSV driver licence.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <ErrorBoundary>
          <SessionProvider>
            <SettingsProvider>
              <AppLayout>{children}</AppLayout>
            </SettingsProvider>
          </SessionProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
