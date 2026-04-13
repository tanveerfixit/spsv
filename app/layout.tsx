import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles
import AppLayout from '@/components/AppLayout';
import { SettingsProvider } from '@/components/SettingsProvider';
import SessionProvider from '@/components/providers/SessionProvider';
import { ErrorBoundary } from '@/components/ErrorBoundary';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SPSV Study & Test',
  description: 'Study and test platform for SPSV Industry Knowledge',
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
