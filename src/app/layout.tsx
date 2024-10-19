import React from 'react';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import '@/app/globals.css';

import ClientLayout from './client-layout';

export const metadata: Metadata = {
  title: 'Harapay',
  description: 'Bridging The Gap Between Blockchain and Traditional Services in Africa',
  icons: {
    icon: '/logo.ico',
    apple: '/logo.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <link rel="icon" href="/logo.ico" sizes="any" />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
