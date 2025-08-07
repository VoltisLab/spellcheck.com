'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  AlertCircle,
  MessageSquare,
  Users,
  Headphones
} from 'lucide-react';
import { useTheme } from '@/app/ThemeContext';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  inquiryType: string;
};

type FormErrors = {
  [key in keyof FormData]?: string;
};

const ContactUsPage: React.FC = () => {
  const { darkMode, currentTheme } = useTheme();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      content: "support@spellcheck.app",
      description: "We'll respond within 24 hours"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      content: "123 Learning Street, Education City, EC 12345",
      description: "By appointment only"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      content: "Monday - Friday: 9AM - 6PM EST",
      description: "Weekend support via email"
    }
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry', icon: <MessageSquare className="h-4 w-4" /> },
    { value: 'support', label: 'Technical Support', icon: <Headphones className="h-4 w-4" /> },
    { value: 'business', label: 'Business Partnership', icon: <Users className="h-4 w-4" /> },
    { value: 'feedback', label: 'Feedback & Suggestions', icon: <CheckCircle className="h-4 w-4" /> }
  ];

  const validateForm = (): boolean => {
    const errors: FormErrors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
            className="text-center max-w-3xl mx-auto"
          >
            <h1 style={{ 
              fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
              fontWeight: 800,
              color: currentTheme.text,
              lineHeight: 1.2,
              marginBottom: '1.5rem'
            }}>
              Get in <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#467091] to-[#A53E3E]">Touch</span> with Us
            </h1>
            <p style={{ 
              fontSize: '1.25rem',
              color: currentTheme.textSecondary,
              maxWidth: '32rem',
              margin: '0 auto'
            }}>
              Have questions about SpellCheck? Need technical support? We're here to help you improve your spelling journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section style={{ 
        padding: '3rem 0 4rem',
        backgroundColor: currentTheme.bgMain,
        transition: 'all 0.3s ease'
      }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ 
                  backgroundColor: currentTheme.bgSecondary,
                  borderRadius: '0.75rem',
                  padding: '1.5rem',
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }}
                className="hover:shadow-lg"
              >
                <div style={{ 
                  width: '3rem',
                  height: '3rem',
                  backgroundColor: currentTheme.blue,
                  borderRadius: '9999px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  color: 'white'
                }}>
                  {info.icon}
                </div>
                <h3 style={{ 
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  color: currentTheme.text,
                  marginBottom: '0.5rem'
                }}>
                  {info.title}
                </h3>
                <p style={{ 
                  color: currentTheme.text,
                  fontWeight: 600,
                  marginBottom: '0.25rem'
                }}>
                  {info.content}
                </p>
                <p style={{ 
                  color: currentTheme.textSecondary,
                  fontSize: '0.875rem'
                }}>
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
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
              className="text-center mb-12"
            >
              <h2 style={{ 
                fontSize: '2.25rem',
                fontWeight: 700,
                color: currentTheme.text,
                marginBottom: '1rem'
              }}>
                Send Us a Message
              </h2>
              <p style={{ 
                fontSize: '1.125rem',
                color: currentTheme.textSecondary
              }}>
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ 
                backgroundColor: currentTheme.bgMain,
                borderRadius: '1rem',
                padding: '2rem',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}
            >
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ 
                    backgroundColor: '#10B981',
                    color: 'white',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    marginBottom: '2rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <CheckCircle className="h-5 w-5" />
                  <span>Thank you! Your message has been sent successfully. We'll get back to you soon.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ 
                    backgroundColor: '#EF4444',
                    color: 'white',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    marginBottom: '2rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <AlertCircle className="h-5 w-5" />
                  <span>Sorry, there was an error sending your message. Please try again.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Inquiry Type Selection */}
                <div>
                  <label style={{ 
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    color: currentTheme.text,
                    marginBottom: '0.5rem'
                  }}>
                    What can we help you with?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {inquiryTypes.map((type) => (
                      <label key={type.value} className="cursor-pointer">
                        <input
                          type="radio"
                          name="inquiryType"
                          value={type.value}
                          checked={formData.inquiryType === type.value}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div style={{ 
                          padding: '0.75rem',
                          borderRadius: '0.5rem',
                          border: `2px solid ${formData.inquiryType === type.value ? currentTheme.blue : (darkMode ? '#374151' : '#E5E7EB')}`,
                          backgroundColor: formData.inquiryType === type.value ? (darkMode ? '#1F2937' : '#F3F4F6') : 'transparent',
                          transition: 'all 0.2s ease',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}
                        className="hover:border-blue-400"
                        >
                          <span style={{ color: currentTheme.blue }}>
                            {type.icon}
                          </span>
                          <span style={{ 
                            color: currentTheme.text,
                            fontSize: '0.875rem',
                            fontWeight: 500
                          }}>
                            {type.label}
                          </span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label style={{ 
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      color: currentTheme.text,
                      marginBottom: '0.5rem'
                    }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      style={{ 
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: '0.5rem',
                        border: `1px solid ${formErrors.name ? '#EF4444' : (darkMode ? '#374151' : '#D1D5DB')}`,
                        backgroundColor: currentTheme.bgSecondary,
                        color: currentTheme.text,
                        fontSize: '1rem'
                      }}
                      placeholder="Enter your full name"
                      className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                    {formErrors.name && (
                      <p style={{ 
                        color: '#EF4444',
                        fontSize: '0.875rem',
                        marginTop: '0.25rem'
                      }}>
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label style={{ 
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      color: currentTheme.text,
                      marginBottom: '0.5rem'
                    }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      style={{ 
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: '0.5rem',
                        border: `1px solid ${formErrors.email ? '#EF4444' : (darkMode ? '#374151' : '#D1D5DB')}`,
                        backgroundColor: currentTheme.bgSecondary,
                        color: currentTheme.text,
                        fontSize: '1rem'
                      }}
                      placeholder="Enter your email address"
                      className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                    {formErrors.email && (
                      <p style={{ 
                        color: '#EF4444',
                        fontSize: '0.875rem',
                        marginTop: '0.25rem'
                      }}>
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label style={{ 
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    color: currentTheme.text,
                    marginBottom: '0.5rem'
                  }}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    style={{ 
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '0.5rem',
                      border: `1px solid ${formErrors.subject ? '#EF4444' : (darkMode ? '#374151' : '#D1D5DB')}`,
                      backgroundColor: currentTheme.bgSecondary,
                      color: currentTheme.text,
                      fontSize: '1rem'
                    }}
                    placeholder="What's this about?"
                    className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  {formErrors.subject && (
                    <p style={{ 
                      color: '#EF4444',
                      fontSize: '0.875rem',
                      marginTop: '0.25rem'
                    }}>
                      {formErrors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label style={{ 
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    color: currentTheme.text,
                    marginBottom: '0.5rem'
                  }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    style={{ 
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '0.5rem',
                      border: `1px solid ${formErrors.message ? '#EF4444' : (darkMode ? '#374151' : '#D1D5DB')}`,
                      backgroundColor: currentTheme.bgSecondary,
                      color: currentTheme.text,
                      fontSize: '1rem',
                      resize: 'vertical'
                    }}
                    placeholder="Tell us more about your inquiry..."
                    className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  {formErrors.message && (
                    <p style={{ 
                      color: '#EF4444',
                      fontSize: '0.875rem',
                      marginTop: '0.25rem'
                    }}>
                      {formErrors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.875rem 2rem',
                      backgroundColor: isSubmitting ? '#9CA3AF' : currentTheme.blue,
                      color: 'white',
                      fontWeight: 700,
                      borderRadius: '0.5rem',
                      border: 'none',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      fontSize: '1rem',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <div style={{ 
                          width: '1rem',
                          height: '1rem',
                          border: '2px solid white',
                          borderTop: '2px solid transparent',
                          borderRadius: '50%',
                          animation: 'spin 1s linear infinite'
                        }} />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
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
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
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
              fontSize: '1.125rem',
              color: currentTheme.textSecondary
            }}>
              Quick answers to common questions about contacting us.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ marginBottom: '1.5rem' }}
            >
              <h3 style={{ 
                fontSize: '1.25rem',
                fontWeight: 700,
                color: currentTheme.text,
                marginBottom: '0.5rem'
              }}>
                How quickly do you respond to messages?
              </h3>
              <p style={{ color: currentTheme.textSecondary }}>
                We typically respond to all messages within 24 hours during business days. For urgent technical issues, we aim to respond within 4-6 hours.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ marginBottom: '1.5rem' }}
            >
              <h3 style={{ 
                fontSize: '1.25rem',
                fontWeight: 700,
                color: currentTheme.text,
                marginBottom: '0.5rem'
              }}>
                Do you offer phone support?
              </h3>
              <p style={{ color: currentTheme.textSecondary }}>
                Yes, we offer phone support during business hours (Monday-Friday, 9AM-6PM EST). For the fastest response, we recommend using our contact form or email first.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 style={{ 
                fontSize: '1.25rem',
                fontWeight: 700,
                color: currentTheme.text,
                marginBottom: '0.5rem'
              }}>
                Can I schedule a meeting or demo?
              </h3>
              <p style={{ color: currentTheme.textSecondary }}>
                Absolutely! For business partnerships or educational institution inquiries, we're happy to schedule a personalized demo. Use the contact form above and select "Business Partnership" to get started.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default ContactUsPage;