'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const locations = [
  'Nairobi', 'Mombasa', 'Eldoret', 'Kisumu', 'Nakuru'
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-6">About Konserve</h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-6">
              Konserve was founded with a clear mission: to revolutionize waste management in Kenya and beyond by connecting Organizations, Collection Agencies, and Waste Buyers in a seamless, transparent ecosystem.
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 mb-6">
              Our platform uses modern technology to track waste from generation to recycling, ensuring accountability and rewarding responsible waste management practices.
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 mb-8">
              We believe that waste is not just something to be discarded but a valuable resource that, when properly managed, can create economic opportunities while preserving our environment for future generations.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {locations.map((location, index) => (
                <span 
                  key={location}
                  className="bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm"
                >
                  {location}
                </span>
              ))}
            </div>
            <a 
              href="/about" 
              className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium hover:underline"
            >
              Learn more about our story
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              {/* TODO: Replace with actual map or image */}
              <div className="aspect-video bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                <div className="text-primary-500 text-9xl">🗺️</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Coverage Map</h3>
                  <p className="text-white/80">
                    Konserve currently operates in 5 major counties across Kenya, with plans to expand nationwide.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-white dark:bg-neutral-800 p-4 rounded-xl shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-500">
                    <span className="text-xl">🌍</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 dark:text-white">Eco-Friendly</h4>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Committed to sustainability</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-neutral-800 p-4 rounded-xl shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary-100 dark:bg-secondary-900/30 flex items-center justify-center text-secondary-500">
                    <span className="text-xl">🚀</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 dark:text-white">Innovative</h4>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">Technology-driven solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 