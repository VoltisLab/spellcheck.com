'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Cookie, 
  Shield, 
  Settings, 
  BarChart, 
  Users, 
  Globe, 
  CheckCircle,
  XCircle,
  ToggleLeft,
  ToggleRight,
  Calendar,
  Mail,
  FileText,
  Info,
  Eye
} from 'lucide-react';
import { useTheme } from '@/app/ThemeContext';

type CookieCategory = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  required: boolean;
  enabled: boolean;
  details: string[];
  examples: string[];
};

const CookiePolicyPage: React.FC = () => {
  const { darkMode, currentTheme } = useTheme();
  const [cookiePreferences, setCookiePreferences] = useState<{[key: string]: boolean}>({
    necessary: true,
    functional: true,
    analytics: false,
    marketing: false
  });

  const cookieCategories: CookieCategory[] = [
    {
      id: 'necessary',
      title: 'Necessary Cookies',
      description: 'Essential for the website to function properly. These cannot be disabled.',
      icon: <Shield className="h-6 w-6" />,
      required: true,
      enabled: cookiePreferences.necessary,
      details: [
        'Authentication and login status',
        'Security tokens and session management',
        'Basic website functionality',
        'User interface preferences (language, theme)',
        'Form submission and error handling'
      ],
      examples: [
        'session_id - Maintains your login session',
        'csrf_token - Protects against security threats',
        'theme_preference - Remembers light/dark mode setting'
      ]
    },
    {
      id: 'functional',
      title: 'Functional Cookies',
      description: 'Enhance your experience by remembering your preferences and settings.',
      icon: <Settings className="h-6 w-6" />,
      required: false,
      enabled: cookiePreferences.functional,
      details: [
        'Game settings and preferences',
        'Progress tracking and saved data',
        'Customized user experience',
        'Feature usage optimization',
        'Performance improvements'
      ],
      examples: [
        'difficulty_level - Remembers your preferred difficulty',
        'sound_settings - Stores audio preferences',
        'tutorial_completed - Tracks onboarding progress'
      ]
    },
    {
      id: 'analytics',
      title: 'Analytics Cookies',
      description: 'Help us understand how you use SpellCheck to improve our service.',
      icon: <BarChart className="h-6 w-6" />,
      required: false,
      enabled: cookiePreferences.analytics,
      details: [
        'Usage statistics and patterns',
        'Performance monitoring',
        'Feature popularity tracking',
        'Error reporting and diagnostics',
        'A/B testing for improvements'
      ],
      examples: [
        '_ga - Google Analytics tracking',
        'session_duration - Time spent in app',
        'feature_usage - Which features are used most'
      ]
    },
    {
      id: 'marketing',
      title: 'Marketing Cookies',
      description: 'Used to deliver relevant content and measure advertising effectiveness.',
      icon: <Users className="h-6 w-6" />,
      required: false,
      enabled: cookiePreferences.marketing,
      details: [
        'Personalized content recommendations',
        'Social media integration',
        'Advertising campaign tracking',
        'Cross-platform user identification',
        'Conversion tracking'
      ],
      examples: [
        'fb_pixel - Facebook advertising',
        'campaign_source - Track marketing campaigns',
        'referral_id - Identify traffic sources'
      ]
    }
  ];

  const sections = [
    {
      id: 'what-are-cookies',
      title: 'What Are Cookies?',
      icon: <Info className="h-6 w-6" />,
      content: [
        {
          subtitle: 'Cookie Definition',
          text: 'Cookies are small text files that are stored on your device when you visit websites or use mobile apps. They contain information that helps websites remember your preferences, improve functionality, and provide a better user experience.'
        },
        {
          subtitle: 'How Cookies Work',
          text: 'When you visit SpellCheck, we may place cookies on your device. These cookies store information such as your login status, game preferences, and usage patterns. This information is retrieved when you return to help provide a seamless experience.'
        },
        {
          subtitle: 'Cookie Lifespan',
          text: 'Cookies can be temporary (session cookies) that expire when you close the app, or persistent cookies that remain on your device for a specified period or until you delete them manually.'
        }
      ]
    },
    {
      id: 'how-we-use-cookies',
      title: 'How We Use Cookies',
      icon: <Eye className="h-6 w-6" />,
      content: [
        {
          subtitle: 'Essential Functionality',
          text: 'We use necessary cookies to ensure SpellCheck works properly, including maintaining your login session, preserving your game progress, and providing security features.'
        },
        {
          subtitle: 'User Experience Enhancement',
          text: 'Functional cookies help us remember your preferences, such as difficulty level, sound settings, and interface customizations, so you don\'t have to reconfigure them each time.'
        },
        {
          subtitle: 'Service Improvement',
          text: 'Analytics cookies provide insights into how SpellCheck is used, helping us identify popular features, detect issues, and make data-driven improvements to enhance the learning experience.'
        },
        {
          subtitle: 'Content Personalization',
          text: 'With your consent, we may use marketing cookies to provide personalized content recommendations and measure the effectiveness of our communications.'
        }
      ]
    },
    {
      id: 'managing-cookies',
      title: 'Managing Your Cookie Preferences',
      icon: <Settings className="h-6 w-6" />,
      content: [
        {
          subtitle: 'Cookie Consent',
          text: 'When you first use SpellCheck, you\'ll be asked to consent to our use of cookies. You can accept all cookies, reject non-essential cookies, or customize your preferences for different types of cookies.'
        },
        {
          subtitle: 'Changing Preferences',
          text: 'You can modify your cookie preferences at any time through the cookie settings in the app or by accessing your browser\'s cookie management tools. Changes will take effect immediately.'
        },
        {
          subtitle: 'Browser Controls',
          text: 'Most browsers allow you to control cookies through their settings. You can choose to block all cookies, allow only first-party cookies, or receive notifications when cookies are set.'
        },
        {
          subtitle: 'Impact of Disabling Cookies',
          text: 'Disabling certain cookies may affect your experience with SpellCheck. Essential cookies cannot be disabled as they\'re required for basic functionality, but you can opt out of others.'
        }
      ]
    },
    {
      id: 'third-party-cookies',
      title: 'Third-Party Cookies',
      icon: <Globe className="h-6 w-6" />,
      content: [
        {
          subtitle: 'Analytics Partners',
          text: 'We work with analytics providers like Google Analytics to understand app usage patterns. These services may set their own cookies to collect information about your interactions across different websites and apps.'
        },
        {
          subtitle: 'Social Media Integration',
          text: 'If you choose to share content or connect through social media platforms, these services may place their own cookies on your device to enable sharing functionality and track engagement.'
        },
        {
          subtitle: 'Advertising Networks',
          text: 'With your consent, we may work with advertising networks that use cookies to deliver relevant ads and measure campaign effectiveness. You can opt out of these cookies through your preferences.'
        },
        {
          subtitle: 'Third-Party Control',
          text: 'Please note that we don\'t control third-party cookies. For information about these cookies and how to manage them, please refer to the privacy policies of the respective third-party services.'
        }
      ]
    }
  ];

  const toggleCookiePreference = (categoryId: string) => {
    if (categoryId === 'necessary') return; // Cannot disable necessary cookies
    
    setCookiePreferences(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const acceptAllCookies = () => {
    setCookiePreferences({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true
    });
  };

  const rejectAllOptional = () => {
    setCookiePreferences({
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false
    });
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
                <Cookie className="h-8 w-8" />
              </div>
            </div>
            <h1 style={{ 
              fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
              fontWeight: 800,
              color: currentTheme.text,
              lineHeight: 1.2,
              marginBottom: '1.5rem'
            }}>
              Cookie <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#467091] to-[#A53E3E]">Policy</span>
            </h1>
            <p style={{ 
              fontSize: '1.25rem',
              color: currentTheme.textSecondary,
              maxWidth: '48rem',
              margin: '0 auto 2rem'
            }}>
              Learn about how SpellCheck uses cookies to enhance your experience and how you can control your preferences.
            </p>
            <div style={{ 
              padding: '1rem 1.5rem',
              backgroundColor: currentTheme.bgSecondary,
              borderRadius: '0.75rem',
              border: `1px solid ${darkMode ? '#374151' : '#E5E7EB'}`,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <Calendar className="h-4 w-4" style={{ color: currentTheme.blue }} />
              <span style={{ fontSize: '0.875rem', color: currentTheme.textSecondary }}>
                Last updated: December 15, 2024
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cookie Preferences Panel */}
      <section style={{ 
        padding: '3rem 0',
        backgroundColor: currentTheme.bgSecondary,
        transition: 'all 0.3s ease'
      }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div style={{ 
              padding: '2rem',
              backgroundColor: currentTheme.bgMain,
              borderRadius: '1rem',
              border: `2px solid ${currentTheme.blue}`,
              marginBottom: '2rem'
            }}>
              <div className="flex items-center gap-3 mb-6">
                <div style={{
                  padding: '0.75rem',
                  backgroundColor: currentTheme.blue,
                  borderRadius: '0.75rem',
                  color: 'white'
                }}>
                  <Settings className="h-6 w-6" />
                </div>
                <h2 style={{ 
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  color: currentTheme.text
                }}>
                  Cookie Preferences
                </h2>
              </div>

              <p style={{ 
                color: currentTheme.textSecondary,
                marginBottom: '2rem',
                lineHeight: 1.6
              }}>
                Customize your cookie preferences below. You can change these settings at any time.
              </p>

              {/* Cookie Categories */}
              <div className="space-y-4 mb-6">
                {cookieCategories.map((category, index) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    style={{ 
                      padding: '1.5rem',
                      backgroundColor: currentTheme.bgSecondary,
                      borderRadius: '0.75rem',
                      border: `1px solid ${darkMode ? '#374151' : '#E5E7EB'}`
                    }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3 flex-1">
                        <div style={{
                          padding: '0.5rem',
                          backgroundColor: category.required ? '#10B981' : currentTheme.blue,
                          borderRadius: '0.5rem',
                          color: 'white',
                          flexShrink: 0
                        }}>
                          {category.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 style={{ 
                              fontSize: '1.125rem',
                              fontWeight: 600,
                              color: currentTheme.text
                            }}>
                              {category.title}
                            </h3>
                            {category.required && (
                              <span style={{
                                padding: '0.125rem 0.5rem',
                                backgroundColor: '#10B981',
                                color: 'white',
                                borderRadius: '0.25rem',
                                fontSize: '0.75rem',
                                fontWeight: 600
                              }}>
                                Required
                              </span>
                            )}
                          </div>
                          <p style={{ 
                            color: currentTheme.textSecondary,
                            marginBottom: '1rem',
                            lineHeight: 1.5
                          }}>
                            {category.description}
                          </p>
                          
                          {/* Details */}
                          <details style={{ marginBottom: '1rem' }}>
                            <summary style={{ 
                              cursor: 'pointer',
                              fontWeight: 600,
                              color: currentTheme.blue,
                              fontSize: '0.875rem'
                            }}>
                              View Details
                            </summary>
                            <div style={{ marginTop: '0.75rem' }}>
                              <h4 style={{ 
                                fontWeight: 600,
                                fontSize: '0.875rem',
                                color: currentTheme.text,
                                marginBottom: '0.5rem'
                              }}>
                                Used for:
                              </h4>
                              <ul style={{ 
                                listStyle: 'disc',
                                paddingLeft: '1.5rem',
                                marginBottom: '1rem'
                              }}>
                                {category.details.map((detail, i) => (
                                  <li key={i} style={{ 
                                    color: currentTheme.textSecondary,
                                    fontSize: '0.875rem',
                                    marginBottom: '0.25rem'
                                  }}>
                                    {detail}
                                  </li>
                                ))}
                              </ul>
                              <h4 style={{ 
                                fontWeight: 600,
                                fontSize: '0.875rem',
                                color: currentTheme.text,
                                marginBottom: '0.5rem'
                              }}>
                                Examples:
                              </h4>
                              <ul style={{ 
                                listStyle: 'disc',
                                paddingLeft: '1.5rem'
                              }}>
                                {category.examples.map((example, i) => (
                                  <li key={i} style={{ 
                                    color: currentTheme.textSecondary,
                                    fontSize: '0.875rem',
                                    marginBottom: '0.25rem',
                                    fontFamily: 'monospace'
                                  }}>
                                    {example}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </details>
                        </div>
                      </div>
                      
                      {/* Toggle */}
                      <motion.button
                        onClick={() => toggleCookiePreference(category.id)}
                        disabled={category.required}
                        whileTap={{ scale: category.required ? 1 : 0.95 }}
                        style={{
                          padding: '0.25rem',
                          backgroundColor: 'transparent',
                          border: 'none',
                          cursor: category.required ? 'not-allowed' : 'pointer',
                          opacity: category.required ? 0.6 : 1
                        }}
                      >
                        {category.enabled ? (
                          <ToggleRight 
                            className="h-8 w-8" 
                            style={{ color: category.required ? '#10B981' : currentTheme.blue }} 
                          />
                        ) : (
                          <ToggleLeft 
                            className="h-8 w-8" 
                            style={{ color: currentTheme.textSecondary }} 
                          />
                        )}
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <motion.button
                  onClick={acceptAllCookies}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    padding: '0.75rem 2rem',
                    backgroundColor: currentTheme.blue,
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.5rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <CheckCircle className="h-4 w-4" />
                  Accept All Cookies
                </motion.button>
                
                <motion.button
                  onClick={rejectAllOptional}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    padding: '0.75rem 2rem',
                    backgroundColor: 'transparent',
                    color: currentTheme.red,
                    border: `2px solid ${currentTheme.red}`,
                    borderRadius: '0.5rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <XCircle className="h-4 w-4" />
                  Reject Optional
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ 
        padding: '4rem 0 6rem',
        backgroundColor: currentTheme.bgMain,
        transition: 'all 0.3s ease'
      }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {sections.map((section, sectionIndex) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
                style={{ marginBottom: '3rem' }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div style={{ 
                    width: '3rem',
                    height: '3rem',
                    backgroundColor: currentTheme.blue,
                    borderRadius: '9999px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}>
                    {section.icon}
                  </div>
                  <h2 style={{ 
                    fontSize: '1.875rem',
                    fontWeight: 700,
                    color: currentTheme.text
                  }}>
                    {section.title}
                  </h2>
                </div>

                <div className="space-y-6">
                  {section.content.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                      viewport={{ once: true }}
                      style={{ 
                        padding: '1.5rem',
                        backgroundColor: currentTheme.bgSecondary,
                        borderRadius: '0.75rem',
                        border: `1px solid ${darkMode ? '#374151' : '#E5E7EB'}`
                      }}
                    >
                      <h3 style={{ 
                        fontSize: '1.25rem',
                        fontWeight: 600,
                        color: currentTheme.text,
                        marginBottom: '0.75rem'
                      }}>
                        {item.subtitle}
                      </h3>
                      <p style={{ 
                        color: currentTheme.textSecondary,
                        lineHeight: 1.7
                      }}>
                        {item.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{ 
                padding: '2rem',
                backgroundColor: currentTheme.bgSecondary,
                borderRadius: '1rem',
                border: `2px solid ${currentTheme.blue}`,
                textAlign: 'center',
                marginTop: '3rem'
              }}
            >
              <div className="flex justify-center mb-4">
                <div style={{ 
                  width: '3rem',
                  height: '3rem',
                  backgroundColor: currentTheme.blue,
                  borderRadius: '9999px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white'
                }}>
                  <Mail className="h-6 w-6" />
                </div>
              </div>
              <h3 style={{ 
                fontSize: '1.5rem',
                fontWeight: 700,
                color: currentTheme.text,
                marginBottom: '1rem'
              }}>
                Questions About Cookies?
              </h3>
              <p style={{ 
                color: currentTheme.textSecondary,
                marginBottom: '1.5rem',
                lineHeight: 1.6
              }}>
                If you have any questions about our use of cookies or need help managing your preferences, please contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:privacy@spellcheck.app"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ 
                    padding: '0.75rem 1.5rem',
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
                  <Mail className="h-4 w-4" />
                  privacy@spellcheck.app
                </motion.a>
                <motion.a
                  href="/privacy-policy"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ 
                    padding: '0.75rem 1.5rem',
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
                  <FileText className="h-4 w-4" />
                  Privacy Policy
                </motion.a>
              </div>
            </motion.div>

            {/* Important Notice */}
        
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicyPage;