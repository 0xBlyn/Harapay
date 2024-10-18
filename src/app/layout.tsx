import React from 'react';
import { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'Harapay',
  description: 'Accept payments by cards, receive them in cryptocurrency',
  icons: {
    icon: '/logo.png',
  },
};

import ClientLayout from './client-layout';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>;
}
