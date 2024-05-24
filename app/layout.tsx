import { Metadata } from 'next';
import './globals.css';
import VideoHeader from './components/VideoHeader';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Derz1',
  description: 'Building the future',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <VideoHeader />
        <div>{children}</div>
      </body>
    </html>
  );
}
