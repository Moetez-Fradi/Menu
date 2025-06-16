'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import MaxWidthWrapper from './MaxWidthWrapper';
import {
  LoginLink,
  RegisterLink,
  LogoutLink,
  useKindeAuth,
} from '@kinde-oss/kinde-auth-nextjs';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated, isLoading } = useKindeAuth();

  const pathname = usePathname();
  const isLandingPage = pathname === '/';

  // Track hash for highlighting in-page sections
  const [hash, setHash] = useState<string>(typeof window !== 'undefined' ? window.location.hash : '');
  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  if (isLoading) {
    return (
      <nav className="sticky top-0 z-30 w-full bg-white/80 backdrop-blur-lg shadow-sm">
        <MaxWidthWrapper>
          <p className="p-4 text-center">Loading...</p>
        </MaxWidthWrapper>
      </nav>
    );
  }

  const linkClass = (active: boolean) =>
    `text-gray-700 hover:text-purple-600 transition-colors ${
      active ? 'text-purple-600 font-semibold' : ''
    }`;

  return (
    <nav className="sticky top-0 z-30 w-full bg-white/80 backdrop-blur-lg transition-shadow shadow-sm">
      <MaxWidthWrapper>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href={isLandingPage ? '#home' : '/'}
            className="z-40 font-bold text-xl text-purple-600 hover:text-purple-700"
          >
            Menu-ARchitect
          </Link>

          {/* Desktop Links */}
          <div className="hidden min-[900px]:flex space-x-10">
            {isAuthenticated && (
              <Link href="/dashboard" className={linkClass(pathname === '/dashboard')}>
                Dashboard
              </Link>
            )}
            {isLandingPage ? (
              <>
                <a href="#features" className={linkClass(hash === '#features')}>
                  Features
                </a>
                <a href="#pricing" className={linkClass(hash === '#pricing')}>
                  Pricing
                </a>
                <a href="#about" className={linkClass(hash === '#about')}>
                  About
                </a>
                <a href="#contact" className={linkClass(hash === '#contact')}>
                  Contact
                </a>
              </>
            ) : (
              <>
              </>
            )}
          </div>

          {/* Auth Buttons Desktop */}
          <div className="hidden min-[900px]:flex space-x-4">
            {isAuthenticated ? (
              <LogoutLink className="px-4 py-2 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-md transition">
                Logout
              </LogoutLink>
            ) : (
              <>
                <LoginLink className="px-4 py-2 text-sm font-medium text-purple-600 hover:text-white hover:bg-purple-600 rounded-md transition">
                  Sign In
                </LoginLink>
                <RegisterLink className="px-4 py-2 text-sm font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-md transition">
                  Get Started
                </RegisterLink>
              </>
            )}
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="hidden max-[900px]:flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </MaxWidthWrapper>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="hidden max-[900px]:block bg-white/95 backdrop-blur-lg absolute inset-x-0 top-20 z-20 shadow-lg">
          <div className="flex flex-col items-center space-y-6 py-6">
            {isAuthenticated && (
              <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)} className={linkClass(pathname === '/dashboard')}>
                Dashboard
              </Link>
            )}
            {isLandingPage ? (
              <>
                <a href="#features" onClick={() => setMobileMenuOpen(false)} className={linkClass(hash === '#features')}>
                  Features
                </a>
                <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className={linkClass(hash === '#pricing')}>
                  Pricing
                </a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className={linkClass(hash === '#about')}>
                  About
                </a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className={linkClass(hash === '#contact')}>
                  Contact
                </a>
              </>
            ) : (
              <>
                            <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)} className={linkClass(pathname === '/dashboard')}>
                PP on the PP
              </Link>
              </>
            )}

            <div className="pt-4 border-t border-gray-200 w-full flex flex-col items-center space-y-4">
              {isAuthenticated ? (
                <LogoutLink onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-md transition">
                  Logout
                </LogoutLink>
              ) : (
                <>
                  <LoginLink onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 text-sm font-medium text-purple-600 hover:text-white hover:bg-purple-600 rounded-md transition">
                    Sign In
                  </LoginLink>
                  <RegisterLink onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 text-sm font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-md transition">
                    Get Started
                  </RegisterLink>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
