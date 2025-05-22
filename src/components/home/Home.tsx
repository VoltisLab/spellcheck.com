'use client'
import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Clock, Trophy, Brain, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Custom theme colors - expanded for comprehensive theming
const THEME = {
  light: {
    red: '#A53E3E',
    blue: '#467091',
    darkBlue: '#3E4C7C',
    primary: '#FFFFFF',
    secondary: '#F5F5F5',
    text: '#1F1F1F',
    textSecondary: '#4B5563',
    accent: '#A53E3E',
    // Additional colors for specific sections
    bgMain: '#FFFFFF',
    bgSecondary: '#F5F5F5',
    bgHero: 'linear-gradient(to bottom, #FFFFFF, #F5F5F5)',
    bgCard: '#F5F5F5',
    navBg: '#FFFFFF',
    footerBg: '#1F2937'
  },
  dark: {
    red: '#A53E3E',
    blue: '#467091',
    darkBlue: '#3E4C7C',
    primary: '#000000',
    secondary: '#1F1F1F',
    text: '#FFFFFF', 
    textSecondary: '#9CA3AF',
    accent: '#A53E3E',
    // Additional colors for specific sections
    bgMain: '#000000',
    bgSecondary: '#1F1F1F',
    bgHero: 'linear-gradient(to bottom, #111827, #000000)',
    bgCard: '#1F1F1F',
    navBg: '#000000',
    footerBg: '#000000'
  }
};

// Define types
type NavItem = {
  name: string;
  href: string;
};

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

type TestimonialType = {
  content: string;
  author: string;
  role: string;
};

// App component
const SpellCheckLandingPage: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true); // Default to dark mode
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<number>(60);
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [currentTheme, setCurrentTheme] = useState(THEME.dark); // Default to dark theme

  // Demo words for animation
  const demoWords: string[] = ["UNTILL", "TRUELY", "TOMMORROW", "RECIEVE", "BELEIVE"];
  const correctWords: string[] = ["UNTIL", "TRULY", "TOMORROW", "RECEIVE", "BELIEVE"];

  // Initialize theme from localStorage or default to dark mode
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    const initialDarkMode = savedMode !== null 
      ? JSON.parse(savedMode) 
      : true; // Default to dark mode
    
    setDarkMode(initialDarkMode);
    setCurrentTheme(initialDarkMode ? THEME.dark : THEME.light);
    
    // Also set the dark class for Tailwind (in case we use any Tailwind dark: classes)
    if (initialDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);
  
  // Handle theme changes
  useEffect(() => {
    setCurrentTheme(darkMode ? THEME.dark : THEME.light);
    
    // Also update the dark class for Tailwind (in case we use any Tailwind dark: classes)
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Store preference in localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    console.log('Theme updated:', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    if (isTyping) {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setIsTyping(false);
            return 60;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isTyping]);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      if (isTyping) {
        setCurrentWordIndex((prev) => (prev + 1) % demoWords.length);
      }
    }, 6000);

    return () => clearInterval(wordInterval);
  }, [isTyping, demoWords.length]);

  const toggleDarkMode = (): void => {
    setDarkMode(prev => !prev);
  };

  const startDemo = (): void => {
    setIsTyping(true);
    setCountdown(60);
    setCurrentWordIndex(0);
  };

  const navItems: NavItem[] = [
    { name: 'Home', href: '#' },
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Download', href: '#download' },
  ];

  const features: Feature[] = [
    {
      title: 'Improve Spelling Skills',
      description: 'Enhance your spelling abilities through challenging and fun word exercises.',
      icon: <Brain className="h-6 w-6 text-blue-500" />,
    },
    {
      title: 'Timed Challenges',
      description: 'Test your speed and accuracy under pressure with our 60-second challenges.',
      icon: <Clock className="h-6 w-6 text-red-500" />,
    },
    {
      title: 'Progressive Difficulty',
      description: 'Start with simple words and advance to more complex spelling challenges as you improve.',
      icon: <Zap className="h-6 w-6 text-yellow-500" />,
    },
    {
      title: 'Track Your Progress',
      description: 'Monitor your improvement over time with detailed performance statistics.',
      icon: <Trophy className="h-6 w-6 text-green-500" />,
    },
  ];

  const testimonials: TestimonialType[] = [
    {
      content: "SpellCheck has transformed my writing skills. I used to make constant spelling errors, but after a few weeks of daily practice, I've seen dramatic improvement!",
      author: "Sarah Johnson",
      role: "College Student"
    },
    {
      content: "As an English teacher, I recommend SpellCheck to all my students. It's a fun, interactive way to improve spelling that feels more like a game than homework.",
      author: "David Parker",
      role: "English Teacher"
    },
    {
      content: "My 12-year-old struggled with spelling for years. Since downloading SpellCheck, his confidence has soared, and his grades have improved significantly.",
      author: "Michelle Torres",
      role: "Parent"
    }
  ];

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: currentTheme.bgMain,
      color: currentTheme.text,
      transition: 'all 0.3s ease'
    }}>
      {/* Navbar */}
      <header style={{ 
        position: 'sticky', 
        top: 0, 
        zIndex: 50, 
        backgroundColor: currentTheme.navBg,
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
        transition: 'all 0.3s ease'
      }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center"
              >
                <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#467091] to-[#A53E3E] mr-2">SPELLCHECK</span>
              </motion.div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  style={{ 
                    color: currentTheme.textSecondary,
                    fontWeight: 500,
                    transition: 'color 0.2s ease'
                  }}
                  className="hover:text-[#467091]"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleDarkMode}
                style={{ 
                  padding: '0.5rem',
                  borderRadius: '9999px', 
                  backgroundColor: darkMode ? '#1F2937' : '#F3F4F6',
                  color: darkMode ? '#D1D5DB' : '#4B5563'
                }}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#download"
                style={{ 
                  display: 'none',
                  padding: '0.5rem 1rem',
                  backgroundColor: THEME.light.accent,
                  color: 'white',
                  fontWeight: 500,
                  borderRadius: '0.5rem',
                  transition: 'background-color 0.2s ease'
                }}
                className="hidden md:block hover:bg-[#8a3434]"
              >
                Download Now
              </motion.a>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{ 
                  padding: '0.5rem',
                  borderRadius: '0.5rem',
                  backgroundColor: darkMode ? '#1F2937' : '#F3F4F6',
                  color: darkMode ? '#D1D5DB' : '#4B5563'
                }}
                className="md:hidden"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              style={{ 
                backgroundColor: currentTheme.navBg,
                borderTop: `1px solid ${darkMode ? '#374151' : '#E5E7EB'}`
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
                        color: currentTheme.textSecondary
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
                      backgroundColor: THEME.light.accent,
                      color: 'white',
                      fontWeight: 500,
                      borderRadius: '0.5rem'
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

      {/* Hero Section */}
      <section style={{ 
        position: 'relative',
        overflow: 'hidden',
        background: currentTheme.bgHero,
        padding: '4rem 0 6rem',
        transition: 'all 0.3s ease'
      }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
            >
              <h1 style={{ 
                fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
                fontWeight: 800,
                color: currentTheme.text,
                lineHeight: 1.2
              }}>
                Improve Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#467091] to-[#A53E3E]">Spelling Skills</span> with Fun Challenges
              </h1>
              <p style={{ 
                marginTop: '1.5rem',
                fontSize: '1.25rem',
                color: currentTheme.textSecondary,
                maxWidth: '32rem'
              }} className="mx-auto lg:mx-0">
                Master the art of spelling through timed challenges. One minute, five words, endless improvement.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#download"
                  style={{
                    padding: '0.75rem 2rem',
                    backgroundColor: THEME.light.blue,
                    color: 'white',
                    fontWeight: 700,
                    borderRadius: '0.5rem',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                    textAlign: 'center'
                  }}
                  className="hover:bg-[#3a5f7a]"
                >
                  Download Free
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={startDemo}
                  style={{
                    padding: '0.75rem 2rem',
                    backgroundColor: THEME.light.red,
                    color: 'white',
                    fontWeight: 700,
                    borderRadius: '0.5rem',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                  }}
                  className="hover:bg-[#8a3434]"
                >
                  Try Demo
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-5/12"
            >
              <div className="relative mx-auto w-full max-w-md">
                {/* Phone frame */}
                <div style={{
                  position: 'relative',
                  borderRadius: '1.5rem',
                  overflow: 'hidden',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                  border: '8px solid #1F2937',
                  backgroundColor: '#1F2937'
                }}>
                  {/* App screen */}
                  <div style={{
                    backgroundColor: darkMode ? '#374151' : '#E5E7EB',
                    height: '600px',
                    width: '100%',
                    overflow: 'hidden'
                  }}>
                    {/* App content */}
                    <div style={{
                      height: '100%',
                      width: '100%',
                      transition: 'all 0.5s ease',
                      backgroundColor: isTyping ? THEME.light.red : (darkMode ? '#374151' : '#E5E7EB')
                    }}>
                      {isTyping ? (
                        <div className="h-full w-full flex flex-col items-center justify-start pt-8 px-4">
                          <div className="w-full flex justify-between items-center mb-4">
                            <button className="text-white text-2xl">II</button>
                            <h2 className="text-white text-2xl font-bold">SPELLCHECK</h2>
                            <div className="text-white text-xl font-bold rounded-full border-2 border-white h-10 w-10 flex items-center justify-center">
                              {countdown}
                            </div>
                          </div>
                          <div className="text-white text-lg mb-2">
                            <span>LEVEL 1</span>
                            <span className="float-right">5 WORDS</span>
                          </div>
                          <div className="w-full bg-white h-2 rounded-full mb-2">
                            <motion.div
                              initial={{ width: "0%" }}
                              animate={{ width: `${currentWordIndex * 20}%` }}
                              style={{ backgroundColor: THEME.light.blue, height: '100%', borderRadius: '9999px' }}
                            />
                          </div>
                          <div className="text-white text-sm">
                            {currentWordIndex}/5
                          </div>
                          <div style={{
                            backgroundColor: '#000000',
                            width: '100%',
                            height: '16rem',
                            borderRadius: '0.5rem',
                            marginTop: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}>
                            <AnimatePresence mode="wait">
                              <motion.div
                                key={currentWordIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col items-center"
                              >
                                <h3 className="text-white text-3xl font-bold mb-8">
                                  {demoWords[currentWordIndex]}
                                </h3>
                                <p style={{ color: THEME.light.red }} className="text-2xl font-bold">
                                  {correctWords[currentWordIndex]}
                                </p>
                              </motion.div>
                            </AnimatePresence>
                          </div>
                          <div className="w-full mt-4">
                            <div style={{ 
                              width: '100%',
                              backgroundColor: THEME.light.blue,
                              padding: '0.5rem 1rem',
                              borderRadius: '0.5rem',
                              color: 'white',
                              textAlign: 'left'
                            }}>
                              ENTER TEXT...
                            </div>
                            <div className="w-full mt-4 grid grid-cols-10 gap-1">
                              {Array.from('QWERTYUIOP').map((char) => (
                                <div 
                                  key={char} 
                                  style={{ 
                                    backgroundColor: THEME.light.blue,
                                    color: 'white',
                                    textAlign: 'center',
                                    padding: '0.5rem 0',
                                    borderRadius: '0.25rem'
                                  }}
                                >
                                  {char}
                                </div>
                              ))}
                            </div>
                            <div className="w-full mt-1 grid grid-cols-10 gap-1">
                              {Array.from('ASDFGHJKL').map((char) => (
                                <div 
                                  key={char} 
                                  style={{ 
                                    backgroundColor: THEME.light.blue,
                                    color: 'white',
                                    textAlign: 'center',
                                    padding: '0.5rem 0',
                                    borderRadius: '0.25rem'
                                  }}
                                >
                                  {char}
                                </div>
                              ))}
                              <div className="col-span-1"></div>
                            </div>
                            <div className="w-full mt-1 grid grid-cols-10 gap-1">
                              {Array.from('ZXCVBNM').map((char) => (
                                <div 
                                  key={char} 
                                  style={{ 
                                    backgroundColor: THEME.light.blue,
                                    color: 'white',
                                    textAlign: 'center',
                                    padding: '0.5rem 0',
                                    borderRadius: '0.25rem'
                                  }}
                                >
                                  {char}
                                </div>
                              ))}
                              <div className="col-span-1"></div>
                              <div className="col-span-1"></div>
                              <div style={{ 
                                backgroundColor: '#EAB308',
                                color: 'white',
                                textAlign: 'center',
                                padding: '0.5rem 0',
                                borderRadius: '0.25rem'
                              }}>
                                ⌫
                              </div>
                            </div>
                            <div className="w-full mt-1 grid grid-cols-1 gap-1">
                              <div className="col-span-1 h-10"></div>
                              <div style={{ 
                                backgroundColor: '#EAB308',
                                color: 'white',
                                textAlign: 'center',
                                padding: '0.5rem 0',
                                borderRadius: '0.25rem'
                              }}>
                                ENTER
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="h-full flex flex-col items-center justify-center p-8">
                          <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#467091] to-[#A53E3E] mb-4"
                          >
                            SPELLCHECK
                          </motion.h2>
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            style={{ color: darkMode ? '#D1D5DB' : '#4B5563' }}
                            className="text-center mb-8"
                          >
                            Improve your spelling skills with
                          </motion.p>
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            style={{ color: darkMode ? 'white' : '#1F2937', fontSize: '1.5rem', fontWeight: 700 }}
                            className="mb-12"
                          >
                            SPELLCHECK
                          </motion.p>
                          <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            onClick={startDemo}
                            style={{
                              width: '100%',
                              padding: '0.75rem 0',
                              backgroundColor: THEME.light.red,
                              color: 'white',
                              fontWeight: 700,
                              borderRadius: '0.5rem',
                              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                              marginBottom: '1rem'
                            }}
                            className="hover:bg-[#8a3434]"
                          >
                            START GAME
                          </motion.button>
                          <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            style={{
                              width: '100%',
                              padding: '0.75rem 0',
                              backgroundColor: THEME.light.blue,
                              color: 'white',
                              fontWeight: 700,
                              borderRadius: '0.5rem',
                              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                              marginBottom: '1rem'
                            }}
                            className="hover:bg-[#3a5f7a]"
                          >
                            INSTRUCTIONS
                          </motion.button>
                          <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            style={{
                              width: '100%',
                              padding: '0.75rem 0',
                              backgroundColor: THEME.light.red,
                              color: 'white',
                              fontWeight: 700,
                              borderRadius: '0.5rem',
                              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                            }}
                            className="hover:bg-[#8a3434]"
                          >
                            SETTINGS
                          </motion.button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div style={{
                  position: 'absolute',
                  left: '-1.5rem',
                  top: '-1.5rem',
                  width: '6rem',
                  height: '6rem',
                  backgroundColor: '#3B82F6',
                  borderRadius: '9999px',
                  opacity: 0.2,
                  filter: 'blur(24px)'
                }}></div>
                <div style={{
                  position: 'absolute',
                  right: '-1.5rem',
                  bottom: '-1.5rem',
                  width: '8rem',
                  height: '8rem',
                  backgroundColor: '#EF4444',
                  borderRadius: '9999px',
                  opacity: 0.2,
                  filter: 'blur(24px)'
                }}></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decoration */}
        <div style={{
          position: 'absolute',
          left: '-8rem',
          bottom: '-8rem',
          width: '16rem',
          height: '16rem',
          backgroundColor: '#3B82F6',
          borderRadius: '9999px',
          opacity: 0.1,
          filter: 'blur(48px)'
        }}></div>
        <div style={{
          position: 'absolute',
          right: '-8rem',
          top: '-8rem',
          width: '16rem',
          height: '16rem',
          backgroundColor: '#EF4444',
          borderRadius: '9999px',
          opacity: 0.1,
          filter: 'blur(48px)'
        }}></div>
      </section>

      {/* Features Section */}
      <section id="features" style={{ 
        padding: '4rem 0 6rem',
        backgroundColor: currentTheme.bgMain,
        transition: 'all 0.3s ease'
      }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 style={{ 
              fontSize: '2.25rem',
              fontWeight: 700,
              color: currentTheme.text,
              marginBottom: '1rem'
            }}>
              Why Choose <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500">SpellCheck</span>?
            </h2>
            <p style={{ 
              fontSize: '1.25rem',
              color: currentTheme.textSecondary
            }}>
              Designed to make spelling practice engaging, effective, and fun for all ages.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ 
                  backgroundColor: currentTheme.bgSecondary,
                  borderRadius: '0.75rem',
                  padding: '1.5rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  transition: 'box-shadow 0.3s ease'
                }}
                className="hover:shadow-lg"
              >
                <div style={{ 
                  width: '3rem',
                  height: '3rem',
                  backgroundColor: darkMode ? '#374151' : 'white',
                  borderRadius: '9999px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  {feature.icon}
                </div>
                <h3 style={{ 
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: currentTheme.text,
                  marginBottom: '0.5rem'
                }}>
                  {feature.title}
                </h3>
                <p style={{ color: currentTheme.textSecondary }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" style={{ 
        padding: '4rem 0 6rem',
        backgroundColor: currentTheme.bgSecondary,
        transition: 'all 0.3s ease'
      }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 style={{ 
              fontSize: '2.25rem',
              fontWeight: 700,
              color: currentTheme.text,
              marginBottom: '1rem'
            }}>
              How <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500">SpellCheck</span> Works
            </h2>
            <p style={{ 
              fontSize: '1.25rem',
              color: currentTheme.textSecondary
            }}>
              Simple, effective, and engaging spelling practice in three easy steps.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div style={{ 
                width: '4rem',
                height: '4rem',
                backgroundColor: '#3B82F6',
                color: 'white',
                borderRadius: '9999px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 700,
                margin: '0 auto 1rem'
              }}>1</div>
              <h3 style={{ 
                fontSize: '1.25rem',
                fontWeight: 700,
                color: currentTheme.text,
                marginBottom: '0.5rem'
              }}>Start a Challenge</h3>
              <p style={{ color: currentTheme.textSecondary }}>
                Begin a 60-second challenge where you&apos;ll be presented with commonly misspelled words one at a time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center relative"
            >
              <div className="hidden md:block absolute left-0 top-8 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              <div style={{ 
                width: '4rem',
                height: '4rem',
                backgroundColor: '#3B82F6',
                color: 'white',
                borderRadius: '9999px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 700,
                margin: '0 auto 1rem',
                position: 'relative',
                zIndex: 10
              }}>2</div>
              <h3 style={{ 
                fontSize: '1.25rem',
                fontWeight: 700,
                color: currentTheme.text,
                marginBottom: '0.5rem'
              }}>Spell Correctly</h3>
              <p style={{ color: currentTheme.textSecondary }}>
                Type the correct spelling of each word before time runs out to advance to the next word.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="hidden md:block absolute right-0 top-8 w-full h-1 bg-gradient-to-r from-blue-500 via-transparent to-transparent"></div>
              <div style={{ 
                width: '4rem',
                height: '4rem',
                backgroundColor: '#3B82F6',
                color: 'white',
                borderRadius: '9999px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 700,
                margin: '0 auto 1rem'
              }}>3</div>
              <h3 style={{ 
                fontSize: '1.25rem',
                fontWeight: 700,
                color: currentTheme.text,
                marginBottom: '0.5rem'
              }}>Level Up</h3>
              <p style={{ color: currentTheme.textSecondary }}>
                Successfully complete challenges to unlock more difficult levels with more challenging words.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" style={{ 
        padding: '4rem 0 6rem',
        backgroundColor: currentTheme.bgMain,
        transition: 'all 0.3s ease'
      }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 style={{ 
              fontSize: '2.25rem',
              fontWeight: 700,
              color: currentTheme.text,
              marginBottom: '1rem'
            }}>
              What Our Users Are Saying
            </h2>
            <p style={{ 
              fontSize: '1.25rem',
              color: currentTheme.textSecondary
            }}>
              Thousands of people have improved their spelling with SpellCheck.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ 
                  backgroundColor: currentTheme.bgSecondary,
                  borderRadius: '0.75rem',
                  padding: '1.5rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  ))}
                </div>
                <p style={{ 
                  color: currentTheme.textSecondary,
                  marginBottom: '1rem',
                  fontStyle: 'italic'
                }}>&quot;{testimonial.content}&quot;</p>
                <div>
                  <p style={{ 
                    fontWeight: 700,
                    color: currentTheme.text
                  }}>{testimonial.author}</p>
                  <p style={{ 
                    fontSize: '0.875rem',
                    color: darkMode ? '#9CA3AF' : '#6B7280'
                  }}>{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" style={{ 
        padding: '4rem 0 6rem',
        background: 'linear-gradient(to right, #2563EB, #DC2626)',
        color: 'white'
      }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 style={{ 
              fontSize: '2.25rem',
              fontWeight: 700,
              marginBottom: '1.5rem'
            }}>
              Ready to Improve Your Spelling?
            </h2>
            <p style={{ 
              fontSize: '1.25rem',
              marginBottom: '2.5rem',
              opacity: 0.9
            }}>
              Download SpellCheck today and start your journey to better spelling.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.75rem 2rem',
                  backgroundColor: darkMode ? 'white' : 'black',
                  color: darkMode ? 'black' : 'white',
                  borderRadius: '0.5rem',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div style={{ marginRight: '0.75rem' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.0754 11.3896C17.0454 8.67766 19.2304 7.47766 19.3254 7.42066C18.0354 5.55166 16.0404 5.42566 15.3404 5.39966C13.2704 5.17366 11.2904 6.68366 10.2304 6.68366C9.15035 6.68366 7.45535 5.42566 5.73535 5.45766C3.52535 5.49066 1.50535 6.77366 0.340352 8.82766C-2.05965 12.9877 -0.209648 19.1397 2.12035 22.5177C3.28035 24.1727 4.64535 26.0167 6.46535 25.9517C8.22535 25.8877 8.86535 24.8207 10.9804 24.8207C13.0904 24.8207 13.6854 25.9517 15.5254 25.9177C17.4154 25.8877 18.5904 24.2327 19.7204 22.5667C21.0604 20.6537 21.5904 18.7747 21.6204 18.6767C21.5904 18.6457 17.1404 16.9577 17.0754 11.3896Z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem' }}>Download on the</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '-0.25rem' }}>App Store</div>
                </div>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.75rem 2rem',
                  backgroundColor: darkMode ? 'white' : 'black',
                  color: darkMode ? 'black' : 'white',
                  borderRadius: '0.5rem',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div style={{ marginRight: '0.75rem' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5ZM16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12ZM20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.53 12.9 20.18 13.18L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81ZM6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem' }}>GET IT ON</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '-0.25rem' }}>Google Play</div>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ 
        padding: '4rem 0 6rem',
        backgroundColor: currentTheme.bgMain,
        transition: 'all 0.3s ease'
      }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 style={{ 
              fontSize: '2.25rem',
              fontWeight: 700,
              color: currentTheme.text,
              marginBottom: '1rem'
            }}>
              Frequently Asked Questions
            </h2>
            <p style={{ 
              fontSize: '1.25rem',
              color: currentTheme.textSecondary
            }}>
              Everything you need to know about SpellCheck.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              style={{ marginBottom: '1.5rem' }}
            >
              <h3 style={{ 
                fontSize: '1.25rem',
                fontWeight: 700,
                color: currentTheme.text,
                marginBottom: '0.5rem'
              }}>
                Is SpellCheck suitable for children?
              </h3>
              <p style={{ color: currentTheme.textSecondary }}>
                Yes! SpellCheck is designed for users of all ages, including children. The app offers different difficulty levels that make it appropriate for various age groups and spelling abilities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              style={{ marginBottom: '1.5rem' }}
            >
              <h3 style={{ 
                fontSize: '1.25rem',
                fontWeight: 700,
                color: currentTheme.text,
                marginBottom: '0.5rem'
              }}>
                How many words are in the SpellCheck database?
              </h3>
              <p style={{ color: currentTheme.textSecondary }}>
                SpellCheck contains over 10,000 commonly misspelled words across all difficulty levels, from elementary to advanced. Our word database is regularly updated with new additions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              style={{ marginBottom: '1.5rem' }}
            >
              <h3 style={{ 
                fontSize: '1.25rem',
                fontWeight: 700,
                color: currentTheme.text,
                marginBottom: '0.5rem'
              }}>
                Can I use SpellCheck offline?
              </h3>
              <p style={{ color: currentTheme.textSecondary }}>
                Yes, once downloaded, SpellCheck works entirely offline. This makes it perfect for use anywhere, anytime, without requiring an internet connection.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 style={{ 
                fontSize: '1.25rem',
                fontWeight: 700,
                color: currentTheme.text,
                marginBottom: '0.5rem'
              }}>
                What&apos;s the difference between the free and premium versions?
              </h3>
              <p style={{ color: currentTheme.textSecondary }}>
                The free version offers basic functionality with advertisements and limited word sets. The premium version removes ads, unlocks all word categories, enables progress tracking, and allows for custom word lists.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        backgroundColor: currentTheme.footerBg,
        color: 'white',
        padding: '3rem 0'
      }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-red-400">SPELLCHECK</span>
              </div>
              <p style={{ color: '#9CA3AF', marginBottom: '1rem' }}>
                Improve your spelling skills with fun, timed challenges.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="#" style={{ color: '#9CA3AF' }} className="hover:text-white transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" style={{ color: '#9CA3AF' }} className="hover:text-white transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" style={{ color: '#9CA3AF' }} className="hover:text-white transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem' }}>Product</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li><a href="#features" style={{ color: '#9CA3AF' }} className="hover:text-white transition-colors duration-200">Features</a></li>
                <li><a href="#" style={{ color: '#9CA3AF' }} className="hover:text-white transition-colors duration-200">Pricing</a></li>
                <li><a href="#" style={{ color: '#9CA3AF' }} className="hover:text-white transition-colors duration-200">Reviews</a></li>
                <li><a href="#download" style={{ color: '#9CA3AF' }} className="hover:text-white transition-colors duration-200">Download</a></li>
              </ul>
            </div>
            
            <div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem' }}>Support</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li><a href="#" style={{ color: '#9CA3AF' }} className="hover:text-white transition-colors duration-200">Help Center</a></li>
                <li><a href="#" style={{ color: '#9CA3AF' }} className="hover:text-white transition-colors duration-200">Contact Us</a></li>
                <li><a href="#" style={{ color: '#9CA3AF' }} className="hover:text-white transition-colors duration-200">Privacy Policy</a></li>
                <li><a href="#" style={{ color: '#9CA3AF' }} className="hover:text-white transition-colors duration-200">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem' }}>Stay Updated</h3>
              <p style={{ color: '#9CA3AF', marginBottom: '1rem' }}>Subscribe to our newsletter for the latest updates and news.</p>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  style={{
                    width: '100%',
                    padding: '0.5rem 1rem',
                    backgroundColor: '#374151',
                    border: '1px solid #4B5563',
                    borderRadius: '0.5rem',
                    outline: 'none',
                    color: 'white'
                  }}
                  className="focus:ring-2 focus:ring-blue-500"
                />
                <button 
                  type="submit" 
                  style={{
                    width: '100%',
                    padding: '0.5rem 1rem',
                    backgroundColor: '#2563EB',
                    borderRadius: '0.5rem',
                    fontWeight: 500,
                    color: 'white'
                  }}
                  className="hover:bg-blue-700 transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
          <div style={{
            borderTop: '1px solid #374151',
            marginTop: '3rem',
            paddingTop: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem'
          }} className="md:flex-row">
            <p style={{ color: '#9CA3AF', marginBottom: '1rem' }} className="md:mb-0">
              &copy; {new Date().getFullYear()} VOLTIS LABS | All rights reserved.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="#" style={{ color: '#9CA3AF' }} className="hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" style={{ color: '#9CA3AF' }} className="hover:text-white transition-colors duration-200">Terms of Service</a>
              <a href="#" style={{ color: '#9CA3AF' }} className="hover:text-white transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SpellCheckLandingPage;