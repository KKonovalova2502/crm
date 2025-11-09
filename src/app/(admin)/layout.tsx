import React from 'react';
import Sidebar from '@/app/components/sidebar';

export interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  console.log('rendering Layout');
  return (
    <>
      <Sidebar />
      <div className="ml-60">{children}</div>{' '}
    </>
  );
}
