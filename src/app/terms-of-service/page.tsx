'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Users, 
  CreditCard, 
  Shield, 
  AlertTriangle, 
  Gavel, 
  UserX,
  Calendar,
  Mail,
  Scale,
  Ban,
  Settings,
} from 'lucide-react';
import { useTheme } from '@/app/ThemeContext';

const TermsOfServicePage: React.FC = () => {
  const { darkMode, currentTheme } = useTheme();

  const sections = [
    {
      id: 'acceptance-of-terms',
      title: 'Acceptance of Terms',
      icon: <FileText className="h-6 w-6" />,
      content: [
        {
          subtitle: 'Agreement to Terms',
          text: 'By downloading, installing, or using SpellCheck, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.'
        },
        {
          subtitle: 'Age Requirements',
          text: 'SpellCheck is suitable for users of all ages. However, if you are under 18, you represent that you have your parent or guardian\'s permission to use the service and that they have agreed to these terms on your behalf.'
        },
        {
          subtitle: 'Changes to Terms',
          text: 'We may modify these terms at any time. We will notify users of significant changes via email or in-app notification. Continued use of SpellCheck after changes constitutes acceptance of the new terms.'
        }
      ]
    },
    {
      id: 'description-of-service',
      title: 'Description of Service',
      icon: <Settings className="h-6 w-6" />,
      content: [
        {
          subtitle: 'SpellCheck Service',
          text: 'SpellCheck is an educational mobile application designed to help users improve their spelling skills through timed challenges, progressive difficulty levels, and interactive learning exercises.'
        },
        {
          subtitle: 'Service Features',
          text: 'Our service includes spelling challenges, progress tracking, difficulty progression, performance analytics, and educational content. Premium features may include additional word sets, advanced analytics, and ad-free experience.'
        },
        {
          subtitle: 'Service Availability',
          text: 'We strive to provide continuous service availability, but we do not guarantee uninterrupted access. We may temporarily suspend service for maintenance, updates, or technical issues.'
        },
        {
          subtitle: 'Updates and Modifications',
          text: 'We regularly update SpellCheck to add new features, improve performance, and fix bugs. Some updates may change how features work or introduce new terms of use.'
        }
      ]
    },
    {
      id: 'user-accounts',
      title: 'User Accounts and Responsibilities',
      icon: <Users className="h-6 w-6" />,
      content: [
        {
          subtitle: 'Account Creation',
          text: 'To access certain features, you may need to create an account. You must provide accurate, current, and complete information during registration and keep your account information updated.'
        },
        {
          subtitle: 'Account Security',
          text: 'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Notify us immediately of any unauthorized use of your account.'
        },
        {
          subtitle: 'User Conduct',
          text: 'You agree to use SpellCheck only for lawful purposes and in accordance with these terms. You will not attempt to hack, reverse engineer, or interfere with the service or other users\' experiences.'
        },
        {
          subtitle: 'Content Guidelines',
          text: 'Any content you submit (such as feedback or support requests) must be appropriate, accurate, and not violate any third-party rights or applicable laws.'
        }
      ]
    },
    {
      id: 'payment-terms',
      title: 'Payment Terms and Subscriptions',
      icon: <CreditCard className="h-6 w-6" />,
      content: [
        {
          subtitle: 'Free and Premium Services',
          text: 'SpellCheck offers both free and premium subscription tiers. Free users have access to basic features with advertisements, while premium subscribers enjoy ad-free experience and additional features.'
        },
        {
          subtitle: 'Subscription Billing',
          text: 'Premium subscriptions are billed on a recurring basis (monthly or annually) through your app store account. You will be charged at the beginning of each billing period until you cancel your subscription.'
        },
        {
          subtitle: 'Cancellation and Refunds',
          text: 'You can cancel your subscription at any time through your app store account settings. Cancellation will take effect at the end of your current billing period. Refunds are subject to app store policies.'
        },
        {
          subtitle: 'Price Changes',
          text: 'We may change subscription prices with 30 days\' notice. Price changes will apply to your next billing cycle after the notice period, and you may cancel if you disagree with the new pricing.'
        }
      ]
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property Rights',
      icon: <Shield className="h-6 w-6" />,
      content: [
        {
          subtitle: 'Our Ownership',
          text: 'SpellCheck, including all content, features, functionality, software, and design, is owned by us and protected by copyright, trademark, and other intellectual property laws.'
        },
        {
          subtitle: 'Limited License',
          text: 'We grant you a limited, non-exclusive, non-transferable license to use SpellCheck for personal, educational purposes in accordance with these terms.'
        },
        {
          subtitle: 'Prohibited Uses',
          text: 'You may not copy, modify, distribute, sell, or lease any part of our service or included software, nor may you reverse engineer or attempt to extract the source code of our software.'
        },
        {
          subtitle: 'User-Generated Content',
          text: 'Any feedback, suggestions, or ideas you provide about SpellCheck may be used by us without restriction or compensation to improve our service.'
        }
      ]
    },
    {
      id: 'prohibited-conduct',
      title: 'Prohibited Conduct',
      icon: <Ban className="h-6 w-6" />,
      content: [
        {
          subtitle: 'Misuse of Service',
          text: 'You may not use SpellCheck to violate any laws, infringe on others\' rights, distribute malware, or engage in any fraudulent or deceptive practices.'
        },
        {
          subtitle: 'Technical Interference',
          text: 'You may not interfere with or disrupt the service, servers, or networks connected to SpellCheck, or attempt to gain unauthorized access to any systems or data.'
        },
        {
          subtitle: 'Commercial Use Restrictions',
          text: 'Unless specifically authorized, you may not use SpellCheck for commercial purposes, including reselling access or creating derivative educational products.'
        },
        {
          subtitle: 'Account Violations',
          text: 'Creating multiple accounts to circumvent limitations, sharing accounts, or providing false information during registration is prohibited.'
        }
      ]
    },
    {
      id: 'termination',
      title: 'Termination',
      icon: <UserX className="h-6 w-6" />,
      content: [
        {
          subtitle: 'Termination by You',
          text: 'You may terminate your account at any time by deleting the app and contacting us to request account deletion. Upon termination, your right to use SpellCheck will cease immediately.'
        },
        {
          subtitle: 'Termination by Us',
          text: 'We may terminate or suspend your account immediately, without prior notice, if you violate these terms, engage in prohibited conduct, or for any other reason at our sole discretion.'
        },
        {
          subtitle: 'Effect of Termination',
          text: 'Upon termination, all rights granted to you will cease, and you must stop using SpellCheck. Termination does not relieve you of any obligations incurred prior to termination.'
        },
        {
          subtitle: 'Data Retention',
          text: 'After account termination, we may retain your data for a reasonable period as required by law or for legitimate business purposes, then delete it in accordance with our Privacy Policy.'
        }
      ]
    },
    {
      id: 'disclaimers',
      title: 'Disclaimers and Limitations',
      icon: <AlertTriangle className="h-6 w-6" />,
      content: [
        {
          subtitle: 'Service Disclaimer',
          text: 'SpellCheck is provided "as is" without warranties of any kind. We do not guarantee that the service will be error-free, secure, or continuously available.'
        },
        {
          subtitle: 'Educational Disclaimer',
          text: 'While SpellCheck is designed to help improve spelling skills, we make no guarantees about specific learning outcomes or educational results.'
        },
        {
          subtitle: 'Limitation of Liability',
          text: 'To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of SpellCheck.'
        },
        {
          subtitle: 'Maximum Liability',
          text: 'Our total liability to you for any claims arising from these terms or your use of SpellCheck shall not exceed the amount you paid us in the 12 months preceding the claim.'
        }
      ]
    },
    {
      id: 'governing-law',
      title: 'Governing Law and Disputes',
      icon: <Gavel className="h-6 w-6" />,
      content: [
        {
          subtitle: 'Governing Law',
          text: 'These terms are governed by and construed in accordance with the laws of [Your State/Country], without regard to conflict of law principles.'
        },
        {
          subtitle: 'Dispute Resolution',
          text: 'Any disputes arising from these terms or your use of SpellCheck will be resolved through binding arbitration, except where prohibited by law.'
        },
        {
          subtitle: 'Class Action Waiver',
          text: 'You agree to resolve disputes individually and waive your right to participate in class actions or representative proceedings, where legally permissible.'
        },
        {
          subtitle: 'Jurisdiction',
          text: 'For any disputes not subject to arbitration, you agree to the exclusive jurisdiction of the courts in [Your Jurisdiction].'
        }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Acceptance of Terms', href: '#acceptance-of-terms' },
    { name: 'Service Description', href: '#description-of-service' },
    { name: 'User Accounts', href: '#user-accounts' },
    { name: 'Payment Terms', href: '#payment-terms' },
    { name: 'Intellectual Property', href: '#intellectual-property' },
    { name: 'Prohibited Conduct', href: '#prohibited-conduct' },
    { name: 'Termination', href: '#termination' },
    { name: 'Disclaimers', href: '#disclaimers' },
    { name: 'Governing Law', href: '#governing-law' }
  ];

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
                <Scale className="h-8 w-8" />
              </div>
            </div>
            <h1 style={{ 
              fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
              fontWeight: 800,
              color: currentTheme.text,
              lineHeight: 1.2,
              marginBottom: '1.5rem'
            }}>
              Terms of <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#467091] to-[#A53E3E]">Service</span>
            </h1>
            <p style={{ 
              fontSize: '1.25rem',
              color: currentTheme.textSecondary,
              maxWidth: '48rem',
              margin: '0 auto 2rem'
            }}>
              These Terms of Service govern your use of SpellCheck and outline the rights and responsibilities of both users and our service. Please read them carefully.
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

      {/* Quick Navigation */}
      <section style={{ 
        padding: '2rem 0',
        backgroundColor: currentTheme.bgSecondary,
        borderBottom: `1px solid ${darkMode ? '#374151' : '#E5E7EB'}`,
        transition: 'all 0.3s ease'
      }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <h2 style={{ 
              fontSize: '1.125rem',
              fontWeight: 700,
              color: currentTheme.text,
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              Quick Navigation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  style={{ 
                    padding: '0.75rem 1rem',
                    backgroundColor: currentTheme.bgMain,
                    borderRadius: '0.5rem',
                    border: `1px solid ${darkMode ? '#374151' : '#E5E7EB'}`,
                    textDecoration: 'none',
                    color: currentTheme.text,
                    fontWeight: 500,
                    fontSize: '0.875rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.2s ease'
                  }}
                  className="hover:shadow-md"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FileText className="h-4 w-4" style={{ color: currentTheme.blue }} />
                  {link.name}
                </motion.a>
              ))}
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
                Questions About These Terms?
              </h3>
              <p style={{ 
                color: currentTheme.textSecondary,
                marginBottom: '1.5rem',
                lineHeight: 1.6
              }}>
                If you have any questions about these Terms of Service or need clarification on any points, please contact our legal team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:legal@spellcheck.app"
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
                  legal@spellcheck.app
                </motion.a>
                <motion.a
                  href="/contact-us"
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
                  Contact Form
                </motion.a>
              </div>
            </motion.div>

            {/* Important Notice */}
            

            {/* Additional Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{ 
                padding: '2rem',
                backgroundColor: currentTheme.bgSecondary,
                borderRadius: '0.75rem',
                border: `1px solid ${darkMode ? '#374151' : '#E5E7EB'}`,
                marginTop: '2rem'
              }}
            >
              <h3 style={{ 
                fontSize: '1.25rem',
                fontWeight: 700,
                color: currentTheme.text,
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                Related Policies
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.a
                  href="/privacy-policy"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ 
                    padding: '1rem',
                    backgroundColor: currentTheme.bgMain,
                    borderRadius: '0.5rem',
                    border: `1px solid ${darkMode ? '#374151' : '#E5E7EB'}`,
                    textDecoration: 'none',
                    color: currentTheme.text,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    transition: 'all 0.2s ease'
                  }}
                  className="hover:shadow-md"
                >
                  <Shield className="h-5 w-5" style={{ color: currentTheme.blue }} />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>Privacy Policy</div>
                    <div style={{ fontSize: '0.75rem', color: currentTheme.textSecondary }}>
                      How we protect your data
                    </div>
                  </div>
                </motion.a>
                <motion.a
                  href="/contact-us"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ 
                    padding: '1rem',
                    backgroundColor: currentTheme.bgMain,
                    borderRadius: '0.5rem',
                    border: `1px solid ${darkMode ? '#374151' : '#E5E7EB'}`,
                    textDecoration: 'none',
                    color: currentTheme.text,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    transition: 'all 0.2s ease'
                  }}
                  className="hover:shadow-md"
                >
                  <Mail className="h-5 w-5" style={{ color: currentTheme.blue }} />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>Contact Support</div>
                    <div style={{ fontSize: '0.75rem', color: currentTheme.textSecondary }}>
                      Get help with your account
                    </div>
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfServicePage;