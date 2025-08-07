'use client';

import React from 'react';
import { useTheme } from '@/app/ThemeContext';

const Footer: React.FC = () => {
  const { currentTheme } = useTheme(); // ✅ use the theme from context

  return (
    <footer
      style={{
        backgroundColor: currentTheme.footerBg,
        color: 'white',
        padding: '3rem 0',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Social */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-red-400">
                SPELLCHECK
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Improve your spelling skills with fun, timed challenges.
            </p>
            <div className="flex gap-4">
              {/* Social Icons... (same as before) */}
              {/* Facebook */}
              <a href="#" className="text-gray-400 hover:text-white">
                {/* SVG */}
              </a>
              {/* Twitter */}
              <a href="#" className="text-gray-400 hover:text-white">
                {/* SVG */}
              </a>
              {/* Instagram */}
              <a href="#" className="text-gray-400 hover:text-white">
                {/* SVG */}
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Reviews</a></li>
              <li><a href="#download" className="hover:text-white">Download</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/help-center" className="hover:text-white">Help Center</a></li>
              <li><a href="/contact-us" className="hover:text-white">Contact Us</a></li>
              <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and news.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white outline-none"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} VOLTIS LABS | All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-white">Terms of Service</a>
            <a href="/cookie-policy" className="hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
