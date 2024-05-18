import Navbar from '@/components/nav-bar';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { BackgroundBeams } from './ui/background-beams';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'jagger.dev',
  description: 'Developer portfolio site',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="night" lang="en">
      <body className={`antialiased ${inter.className}`}>
        <main>
          <Navbar />
          <div className="flex flex-col justify-center items-center flex-grow">
            {children}
            <Analytics />
            <SpeedInsights />
          </div>
          <BackgroundBeams className="absolute inset-0 z-0" />
        </main>
      </body>
    </html>
  );
}
