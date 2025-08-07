'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  UserCheck, 
  Database, 
  Globe, 
  Mail,
  Calendar,
  FileText,
  AlertTriangle
} from 'lucide-react';
import { useTheme } from '@/app/ThemeContext';

const PrivacyPolicyPage: React.FC = () => {
  const { darkMode, currentTheme } = useTheme();

  const sections = [
    {
      id: 'information-we-collect',
      title: 'Information We Collect',
      icon: <Database className="h-6 w-6" />,
      content: [
        {
          subtitle: 'Personal Information',
          text: 'When you create an account, we collect your name, email address, and age range to personalize your spelling practice experience. This information helps us provide age-appropriate content and track your progress.'
        },
        {
          subtitle: 'Usage Data',
          text: 'We automatically collect information about how you use SpellCheck, including your spelling performance, time spent in challenges, difficulty levels completed, and feature usage patterns. This data helps us improve the app and provide personalized recommendations.'
        },
        {
          subtitle: 'Device Information',
          text: 'We may collect information about your device, including device type, operating system, app version, and unique device identifiers. This helps us optimize performance and troubleshoot technical issues.'
        },
        {
          subtitle: 'Contact Information',
          text: 'When you contact our support team, we collect the information you provide in your communications with us, including your email address and the content of your messages.'
        }
      ]
    },
    {
      id: 'how-we-use-information',
      title: 'How We Use Your Information',
      icon: <UserCheck className="h-6 w-6" />,
      content: [
        {
          subtitle: 'Service Provision',
          text: 'We use your information to provide, maintain, and improve SpellCheck services, including personalizing your learning experience, tracking progress, and delivering age-appropriate content.'
        },
        {
          subtitle: 'Communication',
          text: 'We may use your email address to send you important updates about the app, respond to your inquiries, and provide customer support. You can opt out of non-essential communications at any time.'
        },
        {
          subtitle: 'Analytics and Improvement',
          text: 'We analyze usage patterns to understand how users interact with SpellCheck, identify areas for improvement, and develop new features that enhance the learning experience.'
        },
        {
          subtitle: 'Safety and Security',
          text: 'We use information to protect the safety and security of our users, prevent fraud, and ensure compliance with our terms of service and applicable laws.'
        }
      ]
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing and Disclosure',
      icon: <Globe className="h-6 w-6" />,
      content: [
        {
          subtitle: 'Third-Party Service Providers',
          text: 'We may share information with trusted third-party service providers who help us operate SpellCheck, such as cloud hosting services, analytics providers, and customer support platforms. These providers are contractually obligated to protect your information.'
        },
        {
          subtitle: 'Legal Requirements',
          text: 'We may disclose information if required by law, court order, or government request, or if we believe disclosure is necessary to protect our rights, your safety, or the safety of others.'
        },
        {
          subtitle: 'Business Transfers',
          text: 'In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity, subject to the same privacy protections outlined in this policy.'
        },
        {
          subtitle: 'Aggregated Data',
          text: 'We may share aggregated, anonymized data that cannot identify individual users for research, analytics, or business purposes.'
        }
      ]
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: <Lock className="h-6 w-6" />,
      content: [
        {
          subtitle: 'Encryption',
          text: 'We use industry-standard encryption to protect your personal information both in transit and at rest. All data transmission between your device and our servers is encrypted using SSL/TLS protocols.'
        },
        {
          subtitle: 'Access Controls',
          text: 'We implement strict access controls to ensure that only authorized personnel can access your personal information, and only when necessary for providing our services.'
        },
        {
          subtitle: 'Regular Security Audits',
          text: 'We regularly review and update our security practices, conduct security audits, and monitor for potential vulnerabilities to ensure your data remains protected.'
        },
        {
          subtitle: 'Data Minimization',
          text: 'We collect only the information necessary to provide our services and delete data that is no longer needed for legitimate business purposes.'
        }
      ]
    },
    {
      id: 'your-rights',
      title: 'Your Privacy Rights',
      icon: <Eye className="h-6 w-6" />,
      content: [
        {
          subtitle: 'Access and Portability',
          text: 'You have the right to access the personal information we have about you and request a copy of your data in a portable format.'
        },
        {
          subtitle: 'Correction',
          text: 'You can update or correct your personal information at any time through your account settings or by contacting our support team.'
        },
        {
          subtitle: 'Deletion',
          text: 'You have the right to request deletion of your personal information. We will delete your data within 30 days of your request, except where we are required to retain it for legal reasons.'
        },
        {
          subtitle: 'Opt-Out',
          text: 'You can opt out of non-essential communications and certain data collection practices through your account settings.'
        }
      ]
    },
    {
      id: 'children-privacy',
      title: "Children's Privacy",
      icon: <Shield className="h-6 w-6" />,
      content: [
        {
          subtitle: 'COPPA Compliance',
          text: 'SpellCheck is designed to be safe for children. We comply with the Children\'s Online Privacy Protection Act (COPPA) and do not knowingly collect personal information from children under 13 without parental consent.'
        },
        {
          subtitle: 'Parental Controls',
          text: 'Parents can review, modify, or delete their child\'s information by contacting us. We provide tools for parents to manage their child\'s account and privacy settings.'
        },
        {
          subtitle: 'Limited Data Collection',
          text: 'For users under 13, we collect only the minimum information necessary to provide the spelling practice service, such as progress data and basic account information.'
        },
        {
          subtitle: 'No Behavioral Advertising',
          text: 'We do not engage in behavioral advertising directed at children or use children\'s personal information for marketing purposes.'
        }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Information We Collect', href: '#information-we-collect' },
    { name: 'How We Use Information', href: '#how-we-use-information' },
    { name: 'Information Sharing', href: '#information-sharing' },
    { name: 'Data Security', href: '#data-security' },
    { name: 'Your Rights', href: '#your-rights' },
    { name: "Children's Privacy", href: '#children-privacy' }
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
                <Shield className="h-8 w-8" />
              </div>
            </div>
            <h1 style={{ 
              fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
              fontWeight: 800,
              color: currentTheme.text,
              lineHeight: 1.2,
              marginBottom: '1.5rem'
            }}>
              Privacy <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#467091] to-[#A53E3E]">Policy</span>
            </h1>
            <p style={{ 
              fontSize: '1.25rem',
              color: currentTheme.textSecondary,
              maxWidth: '48rem',
              margin: '0 auto 2rem'
            }}>
              We're committed to protecting your privacy and being transparent about how we collect, use, and protect your personal information when you use SpellCheck.
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
                Questions About This Privacy Policy?
              </h3>
              <p style={{ 
                color: currentTheme.textSecondary,
                marginBottom: '1.5rem',
                lineHeight: 1.6
              }}>
                If you have any questions about this Privacy Policy, our data practices, or would like to exercise your privacy rights, please don't hesitate to contact us.
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
        
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;