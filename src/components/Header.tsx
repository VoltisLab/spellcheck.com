'use client';

import React, { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/app/ThemeContext';

const Header: React.FC = () => {
  const { darkMode, toggleDarkMode, currentTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/#features' },
    { name: 'How It Works', href: '/#how-it-works' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Download', href: '/#download' },
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: currentTheme.navBg,
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#467091] to-[#A53E3E] mr-2">
              SPELLCHECK
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                style={{
                  color: currentTheme.textSecondary,
                  fontWeight: 500,
                }}
                className="hover:text-[#467091]"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {/* Toggle theme button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              style={{
                padding: '0.5rem',
                borderRadius: '9999px',
                backgroundColor: darkMode ? '#1F2937' : '#F3F4F6',
                color: darkMode ? '#D1D5DB' : '#4B5563',
              }}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            {/* Download button (desktop only) */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#download"
              style={{
                display: 'none',
                padding: '0.5rem 1rem',
                backgroundColor: '#A53E3E',
                color: 'white',
                fontWeight: 500,
                borderRadius: '0.5rem',
              }}
              className="hidden md:block hover:bg-[#8a3434]"
            >
              Download Now
            </motion.a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                padding: '0.5rem',
                borderRadius: '0.5rem',
                backgroundColor: darkMode ? '#1F2937' : '#F3F4F6',
                color: darkMode ? '#D1D5DB' : '#4B5563',
              }}
              className="md:hidden"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              backgroundColor: currentTheme.navBg,
              borderTop: `1px solid ${darkMode ? '#374151' : '#E5E7EB'}`,
            }}
            className="md:hidden"
          >
            <div className="container mx-auto px-4 py-2">
              <nav className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    style={{
                      padding: '0.5rem 0',
                      color: currentTheme.textSecondary,
                    }}
                    className="hover:text-[#467091] font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="#download"
                  style={{
                    padding: '0.5rem 0',
                    textAlign: 'center',
                    backgroundColor: '#A53E3E',
                    color: 'white',
                    fontWeight: 500,
                    borderRadius: '0.5rem',
                  }}
                  className="hover:bg-[#8a3434]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Download Now
                </a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
