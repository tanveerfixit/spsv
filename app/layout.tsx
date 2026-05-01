import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles
import AppLayout from '@/components/AppLayout';
import { SettingsProvider } from '@/components/SettingsProvider';
import SessionProvider from '@/components/providers/SessionProvider';
import { ErrorBoundary } from '@/components/ErrorBoundary';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'SPSV Study & Mock Test - Pass Your NTA Driver Entrance Test',
  description: 'The definitive platform for SPSV Industry and Area Knowledge Test preparation in Ireland. Expert-led study guides, calculations, and full-length mock exams.',
  keywords: 'SPSV test, SPSV mock exam, taxi theory test Ireland, Industry Knowledge Test, Area Knowledge Ireland, SPSV manual study, NTA test preparation, Irish taxi license',
  authors: [{ name: 'SPSV Study & Test' }],
  creator: 'SPSV Study & Test',
  publisher: 'SPSV Study & Test',
  metadataBase: new URL('https://spsv.clarelab.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SPSV Study & Mock Test - Industry Knowledge Ireland',
    description: 'Expert-led study guides and full-length mock exams for the Irish SPSV Driver Entrance Test.',
    url: 'https://spsv.clarelab.com',
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
      <body className={`${inter.className} ${inter.variable} antialiased`} suppressHydrationWarning>
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
