'use client';

import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useTheme } from '@/app/ThemeContext';

const THEME = {
  light: {
    navBg: '#FFFFFF',
    text: '#1F1F1F',
    textSecondary: '#4B5563',
    footerBg: '#1F2937',
  },
  dark: {
    navBg: '#000000',
    text: '#FFFFFF',
    textSecondary: '#9CA3AF',
    footerBg: '#000000',
  },
};



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
