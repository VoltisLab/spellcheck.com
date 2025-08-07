'use client';

import { THEME } from '@/utils/theme';
import React, { createContext, useContext, useEffect, useState } from 'react';



type ThemeContextType = {
  darkMode: boolean;
  currentTheme: typeof THEME.light;
  toggleDarkMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [currentTheme, setCurrentTheme] = useState(THEME.dark);

  useEffect(() => {
    const stored = localStorage.getItem('darkMode');
    const initial = stored ? JSON.parse(stored) : true;
    setDarkMode(initial);
    setCurrentTheme(initial ? THEME.dark : THEME.light);
    document.documentElement.classList.toggle('dark', initial);
  }, []);

  useEffect(() => {
    setCurrentTheme(darkMode ? THEME.dark : THEME.light);
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        currentTheme,
        toggleDarkMode: () => setDarkMode((prev) => !prev),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
