'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* TODO: Replace with actual logo */}
          <div className="h-10 w-10 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold text-xl">K</div>
          <span className="text-xl font-bold text-neutral-900 dark:text-white">Konserve</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#how-it-works" className="text-neutral-700 hover:text-primary-500 dark:text-neutral-200 dark:hover:text-primary-400 transition-colors">
            How It Works
          </Link>
          <Link href="#about" className="text-neutral-700 hover:text-primary-500 dark:text-neutral-200 dark:hover:text-primary-400 transition-colors">
            About
          </Link>
          <Link href="#impact" className="text-neutral-700 hover:text-primary-500 dark:text-neutral-200 dark:hover:text-primary-400 transition-colors">
            Our Impact
          </Link>
          <Link href="#join" className="text-neutral-700 hover:text-primary-500 dark:text-neutral-200 dark:hover:text-primary-400 transition-colors">
            Join Us
          </Link>
          <Link href="#contact" className="text-neutral-700 hover:text-primary-500 dark:text-neutral-200 dark:hover:text-primary-400 transition-colors">
            Contact
          </Link>
          <Link 
            href="#signup" 
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span className={`block w-6 h-0.5 bg-neutral-800 dark:bg-white transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-neutral-800 dark:bg-white transition-opacity ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-neutral-800 dark:bg-white transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white dark:bg-neutral-900 shadow-lg transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0'
        }`}
      >
        <nav className="container mx-auto px-4 flex flex-col gap-4">
          <Link 
            href="#how-it-works" 
            className="py-2 text-neutral-700 hover:text-primary-500 dark:text-neutral-200 dark:hover:text-primary-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            How It Works
          </Link>
          <Link 
            href="#about" 
            className="py-2 text-neutral-700 hover:text-primary-500 dark:text-neutral-200 dark:hover:text-primary-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            href="#impact" 
            className="py-2 text-neutral-700 hover:text-primary-500 dark:text-neutral-200 dark:hover:text-primary-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Our Impact
          </Link>
          <Link 
            href="#join" 
            className="py-2 text-neutral-700 hover:text-primary-500 dark:text-neutral-200 dark:hover:text-primary-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Join Us
          </Link>
          <Link 
            href="#contact" 
            className="py-2 text-neutral-700 hover:text-primary-500 dark:text-neutral-200 dark:hover:text-primary-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link 
            href="#signup" 
            className="mt-2 bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-md text-center transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar; 