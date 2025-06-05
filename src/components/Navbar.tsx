"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-30 w-full bg-white/80 backdrop-blur-lg transition-shadow shadow-sm">
      <MaxWidthWrapper>
        <div className="flex h-20 items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="z-40 font-bold text-xl text-purple-600 hover:text-purple-700"
          >
            Menu-ARchitect
          </Link>

          {/* Desktop Links (visible only on ≥900px) */}
          <div className="hidden min-[900px]:flex space-x-10">
            <Link
              href="/features"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Action Buttons (Desktop, ≥900px) */}
          <div className="hidden min-[900px]:flex space-x-4">
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-medium text-purple-600 hover:text-white hover:bg-purple-600 rounded-md transition"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 text-sm font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-md transition"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle (visible only on <900px) */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="hidden max-[900px]:flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}  
          </button>
        </div>
      </MaxWidthWrapper>

      {/* Mobile Menu Overlay (<900px) */}
      {mobileMenuOpen && (
        <div className="hidden max-[900px]:block bg-white/95 backdrop-blur-lg absolute inset-x-0 top-20 z-20 shadow-lg">
          <div className="flex flex-col items-center space-y-6 py-6">
            <Link
              href="/features"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl text-gray-700 hover:text-purple-600 transition-colors"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl text-gray-700 hover:text-purple-600 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl text-gray-700 hover:text-purple-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl text-gray-700 hover:text-purple-600 transition-colors"
            >
              Contact
            </Link>
            <div className="pt-4 border-t border-gray-200 w-full flex flex-col items-center space-y-4">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-2 text-lg font-medium text-purple-600 hover:text-white hover:bg-purple-600 rounded-md transition"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-2 text-lg font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-md transition"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
