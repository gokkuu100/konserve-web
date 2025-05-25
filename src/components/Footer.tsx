import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8 dark:bg-neutral-800 dark:text-neutral-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* TODO: Replace with actual logo */}
              <div className="h-10 w-10 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold text-xl">K</div>
              <span className="text-xl font-bold text-white dark:text-neutral-100">Konserve</span>
            </div>
            <p className="text-neutral-400 mb-4 dark:text-neutral-300">
              Connecting organizations, collection agencies, and waste buyers for a sustainable future.
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com" className="text-neutral-400 hover:text-primary-400 transition-colors dark:text-neutral-300 dark:hover:text-primary-300" aria-label="Twitter">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://linkedin.com" className="text-neutral-400 hover:text-primary-400 transition-colors dark:text-neutral-300 dark:hover:text-primary-300" aria-label="LinkedIn">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://instagram.com" className="text-neutral-400 hover:text-primary-400 transition-colors dark:text-neutral-300 dark:hover:text-primary-300" aria-label="Instagram">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 dark:text-neutral-100">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#how-it-works" className="text-neutral-400 hover:text-primary-400 transition-colors dark:text-neutral-300 dark:hover:text-primary-300">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-neutral-400 hover:text-primary-400 transition-colors dark:text-neutral-300 dark:hover:text-primary-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#impact" className="text-neutral-400 hover:text-primary-400 transition-colors dark:text-neutral-300 dark:hover:text-primary-300">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link href="#join" className="text-neutral-400 hover:text-primary-400 transition-colors dark:text-neutral-300 dark:hover:text-primary-300">
                  Join Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-neutral-400 hover:text-primary-400 transition-colors dark:text-neutral-300 dark:hover:text-primary-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 dark:text-neutral-100">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-neutral-400 hover:text-primary-400 transition-colors dark:text-neutral-300 dark:hover:text-primary-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-neutral-400 hover:text-primary-400 transition-colors dark:text-neutral-300 dark:hover:text-primary-300">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/knowledge-base" className="text-neutral-400 hover:text-primary-400 transition-colors dark:text-neutral-300 dark:hover:text-primary-300">
                  Knowledge Base
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-neutral-400 hover:text-primary-400 transition-colors dark:text-neutral-300 dark:hover:text-primary-300">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-neutral-400 hover:text-primary-400 transition-colors dark:text-neutral-300 dark:hover:text-primary-300">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 dark:text-neutral-100">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="h-6 w-6 text-primary-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-neutral-400 dark:text-neutral-300">
                  123 Eco Street, Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-6 w-6 text-primary-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-neutral-400 dark:text-neutral-300">
                  info@konserve.co.ke
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-6 w-6 text-primary-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-neutral-400 dark:text-neutral-300">
                  +254 700 000 000
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 dark:border-neutral-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-500 text-sm mb-4 md:mb-0 dark:text-neutral-400">
              © {currentYear} Konserve. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/privacy" className="text-neutral-500 hover:text-primary-400 text-sm transition-colors dark:text-neutral-400 dark:hover:text-primary-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-neutral-500 hover:text-primary-400 text-sm transition-colors dark:text-neutral-400 dark:hover:text-primary-300">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="text-neutral-500 hover:text-primary-400 text-sm transition-colors dark:text-neutral-400 dark:hover:text-primary-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;