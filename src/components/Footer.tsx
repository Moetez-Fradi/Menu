'use client';

import { useState, useEffect } from 'react';
import {
  Mail,
  MapPin,
  PhoneCall,
  ArrowRight,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  ChefHat,
  HelpCircle,
  Menu,
  Gift,
  Globe,
} from 'lucide-react';

export default function ContactSection() {
  const [showQuickLinks, setShowQuickLinks] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 900px)');
    // Set initial state
    setIsWideScreen(mediaQuery.matches);
    // Update on change
    const handler = (e: MediaQueryListEvent) => setIsWideScreen(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <section id="contact">
    <footer className="w-full bg-gradient-to-br from-gray-900 to-gray-950 text-gray-100 py-16 px-6 border-t border-gray-800">
      <div className="mx-auto max-w-7xl">
        {/* Brand Section */}
        <div className="mb-10">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 p-2 rounded-lg">
                <ChefHat className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                TastyAR
              </h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Bringing the future of dining to your restaurant's menu with immersive augmented reality experiences.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 hover:bg-purple-700 p-3 rounded-full transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-all">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-800 p-3 rounded-full transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-700 p-3 rounded-full transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Founded in 2023 • San Francisco, CA
            </p>
          </div>
        </div>

        {/* Links & Contact Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 mb-16">
          {/* Quick Links */}
          <div>
            <button
              onClick={() => !isWideScreen && setShowQuickLinks(prev => !prev)}
              className={`w-full flex items-center justify-between gap-2 text-lg font-semibold mb-4 text-white ${
                isWideScreen ? 'cursor-default' : 'cursor-pointer'
              }`}
              disabled={isWideScreen}
              aria-expanded={isWideScreen || showQuickLinks}
            >
              <Menu className="h-5 w-5 text-purple-400" />
              <span>Quick Links</span>
              <ArrowRight
                className={`h-4 w-4 text-purple-500 transform transition-transform ${
                  isWideScreen || showQuickLinks ? 'rotate-90' : ''
                }`}
              />
            </button>
            <ul
              className={`space-y-4 text-gray-300 block transition-all overflow-hidden ${
                isWideScreen || showQuickLinks ? 'max-h-screen' : 'max-h-0'
              }`}
            >
              {['How It Works', 'Our Technology', 'Case Studies', 'Pricing Plans', 'Careers'].map(item => (
                <li key={item}>
                  <a href="#" className="flex items-center gap-2 hover:text-purple-300 group">
                    <ArrowRight className="h-4 w-4 text-purple-500 group-hover:translate-x-1 transition-transform" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <button
              onClick={() => !isWideScreen && setShowResources(prev => !prev)}
              className={`w-full flex items-center justify-between gap-2 text-lg font-semibold mb-4 text-white ${
                isWideScreen ? 'cursor-default' : 'cursor-pointer'
              }`}
              disabled={isWideScreen}
              aria-expanded={isWideScreen || showResources}
            >
              <Gift className="h-5 w-5 text-purple-400" />
              <span>Resources</span>
              <ArrowRight
                className={`h-4 w-4 text-purple-500 transform transition-transform ${
                  isWideScreen || showResources ? 'rotate-90' : ''
                }`}
              />
            </button>
            <ul
              className={`space-y-4 text-gray-300 block transition-all overflow-hidden ${
                isWideScreen || showResources ? 'max-h-screen' : 'max-h-0'
              }`}
            >
              {['Blog & Articles', 'Documentation', 'API Reference', 'Community Forum', 'Support Center'].map(item => (
                <li key={item}>
                  <a href="#" className="flex items-center gap-2 hover:text-purple-300 group">
                    <ArrowRight className="h-4 w-4 text-purple-500 group-hover:translate-x-1 transition-transform" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <button
              onClick={() => !isWideScreen && setShowContact(prev => !prev)}
              className={`w-full flex items-center justify-between gap-2 text-lg font-semibold mb-4 text-white ${
                isWideScreen ? 'cursor-default' : 'cursor-pointer'
              }`}
              disabled={isWideScreen}
              aria-expanded={isWideScreen || showContact}
            >
              <HelpCircle className="h-5 w-5 text-purple-400" />
              <span>Get in Touch</span>
              <ArrowRight
                className={`h-4 w-4 text-purple-500 transform transition-transform ${
                  isWideScreen || showContact ? 'rotate-90' : ''
                }`}
              />
            </button>
            <div
              className={`space-y-4 text-gray-300 block transition-all overflow-hidden ${
                isWideScreen || showContact ? 'max-h-screen' : 'max-h-0'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="bg-purple-900/50 p-2 rounded-lg">
                  <Mail className="h-5 w-5 text-purple-400" />
                </div>
                <a href="mailto:hello@tastyar.io" className="text-gray-300 text-lg hover:text-white underline underline-offset-4 decoration-purple-500">
                  hello@tastyar.io
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-purple-900/50 p-2 rounded-lg">
                  <MapPin className="h-5 w-5 text-purple-400" />
                </div>
                <span className="text-gray-300 text-lg">
                  123 Tech Street, San Francisco, CA 94103
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-purple-900/50 p-2 rounded-lg">
                  <PhoneCall className="h-5 w-5 text-purple-400" />
                </div>
                <a href="tel:+15551234567" className="text-gray-300 text-lg hover:text-white underline underline-offset-4 decoration-purple-500">
                  (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} TastyAR Technologies. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">
              Cookie Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
    </section>
  );
}
