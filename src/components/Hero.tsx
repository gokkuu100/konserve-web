'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background image/pattern */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* TODO: Replace with actual hero background image */}
        <div className="bg-gradient-to-br from-primary-100 via-primary-50 to-secondary-50 h-full w-full opacity-70"></div>
        <div className="absolute inset-0 bg-[url('/placeholder-pattern.svg')] bg-repeat opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 pt-10 pb-20 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center">
          {/* Hero Content */}
          <div className="md:w-1/2 mb-12 md:mb-0">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-neutral-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Rethinking Waste <span className="text-primary-500">Management</span> for a Greener Future
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Konserve connects Organizations, Collection Agencies, and Waste Buyers in a seamless ecosystem that transforms waste into value while making a positive environmental impact.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="#signup-org" className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-6 rounded-md transition-colors text-center">
                Join as Organization
              </Link>
              <Link href="#signup-agency" className="bg-secondary-500 hover:bg-secondary-600 text-white font-medium py-3 px-6 rounded-md transition-colors text-center">
                Join as Collection Agency
              </Link>
              <Link href="#signup-buyer" className="bg-neutral-800 hover:bg-neutral-900 text-white font-medium py-3 px-6 rounded-md transition-colors text-center">
                Join as Waste Buyer
              </Link>
            </motion.div>
          </div>

          {/* Hero Illustration */}
          <div className="md:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full max-w-lg"
            >
              {/* TODO: Replace with actual illustration */}
              <div className="aspect-square max-w-md mx-auto rounded-2xl bg-primary-100 flex items-center justify-center">
                <div className="text-primary-500 text-9xl opacity-40">♻️</div>
              </div>
              
              {/* Floating Elements Animation */}
              <motion.div 
                className="absolute -top-8 left-10 p-3 bg-white rounded-xl shadow-lg"
                animate={{ 
                  y: [0, -15, 0],
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut"
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                    <span className="text-primary-500 text-xl">🌱</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Eco-Friendly</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-4 -right-4 p-3 bg-white rounded-xl shadow-lg"
                animate={{ 
                  y: [0, 15, 0],
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut"
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-secondary-100 flex items-center justify-center">
                    <span className="text-secondary-500 text-xl">💰</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Rewarding</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut"
        }}
      >
        <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-2">Discover More</p>
        <div className="w-6 h-10 border-2 border-neutral-400 rounded-full flex justify-center pt-2">
          <motion.div 
            className="w-1.5 h-1.5 bg-neutral-600 rounded-full"
            animate={{ 
              y: [0, 6, 0],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 