'use client';

import Header from './Header';
import Footer from './Footer';
import { useTheme } from '@/app/ThemeContext';





export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { currentTheme } = useTheme();
  
  return (
    <div
      style={{
        backgroundColor: currentTheme.navBg,
        color: currentTheme.text,
        transition: 'all 0.3s ease',
      }}
    >
      <Header
       
      />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
