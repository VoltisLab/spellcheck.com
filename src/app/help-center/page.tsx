'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HelpCircle, 
  ChevronDown, 
  Book,
  Settings,
  CreditCard,
  Smartphone,
  Users,
  Shield,
  MessageCircle,
  Mail,

  PlayCircle,
  Clock,
  Download
} from 'lucide-react';
import { useTheme } from '@/app/ThemeContext';
import Link from 'next/link';

type FAQItem = {
  id: string;
  question: string;
  answer: string;
  category: string;
};

type HelpCategory = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  articles: number;
};

const HelpCenterPage: React.FC = () => {
  const { darkMode, currentTheme } = useTheme();
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories: HelpCategory[] = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      description: 'Learn the basics of using SpellCheck',
      icon: <Book className="h-6 w-6" />,
      color: currentTheme.blue,
      articles: 8,
    },
    {
      id: 'account-settings',
      title: 'Account & Settings',
      description: 'Manage your account and preferences',
      icon: <Settings className="h-6 w-6" />,
      color: '#10B981',
      articles: 6
    },
    {
      id: 'billing',
      title: 'Billing & Subscriptions',
      description: 'Payment, pricing, and subscription help',
      icon: <CreditCard className="h-6 w-6" />,
      color: '#F59E0B',
      articles: 5
    },
    {
      id: 'technical',
      title: 'Technical Support',
      description: 'Troubleshooting and technical issues',
      icon: <Smartphone className="h-6 w-6" />,
      color: currentTheme.red,
      articles: 7
    },
    {
      id: 'privacy',
      title: 'Privacy & Security',
      description: 'Data protection and security information',
      icon: <Shield className="h-6 w-6" />,
      color: '#8B5CF6',
      articles: 4
    }
  ];

  const faqs: FAQItem[] = [
    {
      id: '1',
      category: 'getting-started',
      question: 'How do I start my first spelling challenge?',
      answer: 'To start your first challenge, open SpellCheck and tap "START GAME" on the main screen. You\'ll begin with Level 1, which includes 5 basic words. Each challenge lasts 60 seconds, and you need to spell each word correctly to advance.'
    },
    {
      id: '2',
      category: 'getting-started',
      question: 'What are the different difficulty levels?',
      answer: 'SpellCheck has 10 difficulty levels, starting from basic elementary words to advanced vocabulary. As you successfully complete challenges, you unlock higher levels with more challenging words. Each level contains different word categories and complexity.'
    },
    {
      id: '3',
      category: 'getting-started',
      question: 'How does the scoring system work?',
      answer: 'You earn points for each correctly spelled word, with bonus points for speed and accuracy. Consecutive correct answers build up a streak multiplier. Your total score determines your ranking and unlocks achievements.'
    },
    {
      id: '4',
      category: 'account-settings',
      question: 'How do I create an account?',
      answer: 'Tap "Create Account" on the welcome screen, then enter your name, email, and age range. You\'ll receive a confirmation email to verify your account. Creating an account allows you to save progress and sync across devices.'
    },
    {
      id: '5',
      category: 'account-settings',
      question: 'Can I change my difficulty level?',
      answer: 'Yes! Go to Settings > Game Preferences and select "Difficulty Level." You can choose to start from any level you\'ve previously unlocked, or reset your progress to begin from Level 1.'
    },
    {
      id: '6',
      category: 'account-settings',
      question: 'How do I sync my progress across devices?',
      answer: 'Sign in with the same account on all your devices. Your progress, achievements, and settings will automatically sync when you\'re connected to the internet. Make sure to complete challenges while online for best sync results.'
    },
    {
      id: '7',
      category: 'billing',
      question: 'What\'s included in the premium subscription?',
      answer: 'Premium includes: ad-free experience, unlimited challenges, advanced progress analytics, exclusive word sets, custom word lists, and priority customer support. You also get access to upcoming features first.'
    },
    {
      id: '8',
      category: 'billing',
      question: 'How do I cancel my subscription?',
      answer: 'Go to your device\'s app store (App Store or Google Play), find your subscriptions, and cancel SpellCheck Premium. Your subscription will remain active until the end of your current billing period.'
    },
    {
      id: '9',
      category: 'billing',
      question: 'Can I get a refund?',
      answer: 'Refunds are handled through your app store (Apple App Store or Google Play Store). Contact their support directly for refund requests. Generally, refunds are available within a certain time frame of purchase.'
    },
    {
      id: '10',
      category: 'technical',
      question: 'The app is running slowly. What can I do?',
      answer: 'Try these steps: 1) Close and restart the app, 2) Restart your device, 3) Ensure you have the latest app version, 4) Clear some device storage if it\'s full, 5) Check your internet connection for sync features.'
    },
    {
      id: '11',
      category: 'technical',
      question: 'My progress isn\'t saving. How do I fix this?',
      answer: 'Make sure you\'re signed in to your account and have an internet connection. Go to Settings > Account and verify you\'re logged in. If the problem persists, try logging out and back in, or contact support.'
    },
    {
      id: '12',
      category: 'technical',
      question: 'The keyboard isn\'t responding properly.',
      answer: 'This is usually a device-specific issue. Try: 1) Switching to a different keyboard in your device settings, 2) Restarting the app, 3) Checking if your device\'s keyboard needs an update, 4) Restarting your device.'
    },
    {
      id: '13',
      category: 'privacy',
      question: 'What data does SpellCheck collect?',
      answer: 'We collect minimal data needed to provide our service: your progress, game statistics, and basic account information. We never share personal data with third parties for marketing. See our Privacy Policy for complete details.'
    },
    {
      id: '14',
      category: 'privacy',
      question: 'Is SpellCheck safe for children?',
      answer: 'Yes! SpellCheck is designed to be safe for all ages. We comply with COPPA regulations, don\'t collect unnecessary data from children, and don\'t include any inappropriate content or external links.'
    }
  ];

  const quickActions = [
    {
      title: 'Video Tutorials',
      description: 'Watch step-by-step guides',
      icon: <PlayCircle className="h-6 w-6" />,
      color: currentTheme.blue,
      action: 'Watch Now',
      link: "#"
    },
    {
      title: 'Download App',
      description: 'Get SpellCheck for your device',
      icon: <Download className="h-6 w-6" />,
      color: '#10B981',
      action: 'Download',
      link: "#"
    },
    {
      title: 'Contact Support',
      description: 'Get personalized help',
      icon: <MessageCircle className="h-6 w-6" />,
      color: currentTheme.red,
      action: 'Contact Us',
      link: "/contact-us"
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users',
      icon: <Users className="h-6 w-6" />,
      color: '#F59E0B',
      action: 'Join Forum',
      link: "#"
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
   
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return  matchesCategory;
  });

  const toggleFAQ = (id: string) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: currentTheme.bgMain,
      color: currentTheme.text,
      transition: 'all 0.3s ease'
    }}>
      {/* Hero Section */}
      <section style={{ 
        background: currentTheme.bgHero,
        padding: '3rem 0 4rem',
        transition: 'all 0.3s ease'
      }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div style={{ 
                width: '4rem',
                height: '4rem',
                backgroundColor: currentTheme.blue,
                borderRadius: '9999px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}>
                <HelpCircle className="h-8 w-8" />
              </div>
            </div>
            <h1 style={{ 
              fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
              fontWeight: 800,
              color: currentTheme.text,
              lineHeight: 1.2,
              marginBottom: '1.5rem'
            }}>
              How can we <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#467091] to-[#A53E3E]">help</span> you?
            </h1>
            <p style={{ 
              fontSize: '1.25rem',
              color: currentTheme.textSecondary,
              maxWidth: '32rem',
              margin: '0 auto 2rem'
            }}>
              Find answers to common questions, tutorials, and get support for SpellCheck.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section style={{ 
        padding: '3rem 0',
        backgroundColor: currentTheme.bgSecondary,
        transition: 'all 0.3s ease'
      }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <h2 style={{ 
              fontSize: '1.5rem',
              fontWeight: 700,
              color: currentTheme.text,
              textAlign: 'center',
              marginBottom: '2rem'
            }}>
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickActions.map((action, index) => (
                <Link key={action.title} href={action.link} >

                <motion.div
                  
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ 
                    padding: '1.5rem',
                    backgroundColor: currentTheme.bgMain,
                    borderRadius: '0.75rem',
                    border: `1px solid ${darkMode ? '#374151' : '#E5E7EB'}`,
                    cursor: 'pointer',
                    textAlign: 'center',
                    transition: 'all 0.2s ease'
                  }}
                  className="hover:shadow-lg"
                >
                  <div style={{ 
                    width: '3rem',
                    height: '3rem',
                    backgroundColor: action.color,
                    borderRadius: '9999px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    color: 'white'
                  }}>
                    {action.icon}
                  </div>
                  <h3 style={{ 
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    color: currentTheme.text,
                    marginBottom: '0.5rem'
                  }}>
                    {action.title}
                  </h3>
                  <p style={{ 
                    color: currentTheme.textSecondary,
                    fontSize: '0.875rem',
                    marginBottom: '1rem'
                  }}>
                    {action.description}
                  </p>
                  <span style={{ 
                    color: action.color,
                    fontWeight: 600,
                    fontSize: '0.875rem'
                  }}>
                    {action.action} →
                  </span>
                </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ 
        padding: '4rem 0 6rem',
        backgroundColor: currentTheme.bgSecondary,
        transition: 'all 0.3s ease'
      }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h2 style={{ 
                fontSize: '2rem',
                fontWeight: 700,
                color: currentTheme.text,
                marginBottom: '1rem'
              }}>
                Frequently Asked Questions
              </h2>
              <p style={{ 
                color: currentTheme.textSecondary,
                fontSize: '1.125rem'
              }}>
                {selectedCategory === 'all' ? 'All questions' : 
                 categories.find(cat => cat.id === selectedCategory)?.title || 'Questions'} 
              </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap gap-2 justify-center mb-8"
            >
              <button
                onClick={() => setSelectedCategory('all')}
                style={{ 
                  padding: '0.5rem 1rem',
                  borderRadius: '9999px',
                  border: 'none',
                  backgroundColor: selectedCategory === 'all' ? currentTheme.blue : 'transparent',
                  color: selectedCategory === 'all' ? 'white' : currentTheme.text,
                  fontWeight: 500,
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                className="hover:opacity-80"
              >
                All Categories
              </button>
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  style={{ 
                    padding: '0.5rem 1rem',
                    borderRadius: '9999px',
                    border: 'none',
                    backgroundColor: selectedCategory === category.id ? category.color : 'transparent',
                    color: selectedCategory === category.id ? 'white' : currentTheme.text,
                    fontWeight: 500,
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  className="hover:opacity-80"
                >
                  {category.title}
                </button>
              ))}
            </motion.div>

            {/* FAQ List */}
            <div className="space-y-4">
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    style={{ 
                      backgroundColor: currentTheme.bgMain,
                      borderRadius: '0.75rem',
                      border: `1px solid ${darkMode ? '#374151' : '#E5E7EB'}`,
                      overflow: 'hidden'
                    }}
                  >
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      style={{ 
                        width: '100%',
                        padding: '1.5rem',
                        textAlign: 'left',
                        background: 'none',
                        border: 'none',
                        color: currentTheme.text,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '1rem'
                      }}
                      className="hover:bg-opacity-50"
                    >
                      <span style={{ fontWeight: 600, fontSize: '1.125rem' }}>
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: expandedFAQ === faq.id ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="h-5 w-5" style={{ color: currentTheme.blue }} />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {expandedFAQ === faq.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          style={{ overflow: 'hidden' }}
                        >
                          <div style={{ 
                            padding: '0 1.5rem 1.5rem',
                            color: currentTheme.textSecondary,
                            lineHeight: 1.6
                          }}>
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{ 
                    textAlign: 'center',
                    padding: '3rem 1rem',
                    color: currentTheme.textSecondary
                  }}
                >
                  <HelpCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                    No results found
                  </h3>
                  <p>Try adjusting your search or browse a different category.</p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section style={{ 
        padding: '4rem 0',
        backgroundColor: currentTheme.bgMain,
        transition: 'all 0.3s ease'
      }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ 
              padding: '3rem',
              backgroundColor: currentTheme.bgSecondary,
              borderRadius: '1rem',
              border: `2px solid ${currentTheme.blue}`,
              textAlign: 'center',
              maxWidth: '48rem',
              margin: '0 auto'
            }}
          >
            <div className="flex justify-center mb-6">
              <div style={{ 
                width: '4rem',
                height: '4rem',
                backgroundColor: currentTheme.blue,
                borderRadius: '9999px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}>
                <MessageCircle className="h-8 w-8" />
              </div>
            </div>
            <h3 style={{ 
              fontSize: '1.875rem',
              fontWeight: 700,
              color: currentTheme.text,
              marginBottom: '1rem'
            }}>
              Still Need Help?
            </h3>
            <p style={{ 
              color: currentTheme.textSecondary,
              fontSize: '1.125rem',
              marginBottom: '2rem',
              lineHeight: 1.6
            }}>
              {"Can't find what you're looking for? Our support team is here to help you get the most out of SpellCheck."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact-us"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ 
                  padding: '0.875rem 2rem',
                  backgroundColor: currentTheme.blue,
                  color: 'white',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              >
                <Mail className="h-5 w-5" />
                Contact Support
              </motion.a>
              <motion.a
                href="mailto:support@spellcheck.app"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ 
                  padding: '0.875rem 2rem',
                  backgroundColor: 'transparent',
                  color: currentTheme.blue,
                  border: `2px solid ${currentTheme.blue}`,
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <Mail className="h-5 w-5" />
                Email Us
              </motion.a>
            </div>
            <div style={{ 
              marginTop: '2rem',
              padding: '1rem',
              backgroundColor: darkMode ? '#374151' : '#F9FAFB',
              borderRadius: '0.5rem',
              fontSize: '0.875rem',
              color: currentTheme.textSecondary
            }}>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="h-4 w-4" />
                <span style={{ fontWeight: 600 }}>Support Hours</span>
              </div>
              <p>Monday - Friday: 9AM - 6PM EST</p>
              <p>Weekend: Email support only</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenterPage;