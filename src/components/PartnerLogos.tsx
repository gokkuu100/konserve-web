'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Sample partner data
const partners = [
  {
    id: 1,
    name: 'EcoTech Solutions',
    logo: '/placeholder-logo.svg', // Replace with actual logo
    category: 'Organization',
  },
  {
    id: 2,
    name: 'Recycle Kenya',
    logo: '/placeholder-logo.svg',
    category: 'Collection Agency',
  },
  {
    id: 3,
    name: 'Green Waste Management',
    logo: '/placeholder-logo.svg',
    category: 'Waste Buyer',
  },
  {
    id: 4,
    name: 'Nairobi Sustainability Initiative',
    logo: '/placeholder-logo.svg',
    category: 'Organization',
  },
  {
    id: 5,
    name: 'Eco Warriors Kenya',
    logo: '/placeholder-logo.svg',
    category: 'NGO',
  },
  {
    id: 6,
    name: 'Plastics Recycling Ltd',
    logo: '/placeholder-logo.svg',
    category: 'Waste Buyer',
  },
  {
    id: 7,
    name: 'Clean City Collectors',
    logo: '/placeholder-logo.svg',
    category: 'Collection Agency',
  },
  {
    id: 8,
    name: 'Green Paper Ltd',
    logo: '/placeholder-logo.svg',
    category: 'Waste Buyer',
  },
];

const PartnerLogos = () => {
  // Filter partners by category
  const [filter, setFilter] = useState('All');
  const filteredPartners = filter === 'All' 
    ? partners 
    : partners.filter(p => p.category === filter);
  
  const categories = ['All', ...new Set(partners.map(p => p.category))];
  
  return (
    <section id="partners" className="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">Our Trusted Partners</h2>
          <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            We collaborate with leading organizations, collection agencies, and waste buyers to build a sustainable waste management ecosystem.
          </p>
          
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category
                    ? 'bg-primary-500 text-white'
                    : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-primary-50 dark:hover:bg-neutral-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>
        
        {/* Partner logos grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredPartners.map((partner, index) => (
            <motion.div
              key={partner.id}
              className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6 flex flex-col items-center justify-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: index * 0.1 % 0.4 }}
            >
              <div className="w-24 h-24 bg-neutral-100 dark:bg-neutral-700 rounded-full flex items-center justify-center mb-4 overflow-hidden">
                {/* Placeholder for logo - replace with actual Image component when you have logos */}
                <div className="text-primary-500 text-4xl">
                  {partner.name.charAt(0)}
                </div>
              </div>
              <h3 className="font-bold text-neutral-900 dark:text-white">{partner.name}</h3>
              <span className="text-xs px-2 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full mt-2">
                {partner.category}
              </span>
            </motion.div>
          ))}
        </div>
        
        {/* Become a partner CTA */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            <span>Become a Partner</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="text-neutral-600 dark:text-neutral-400 mt-4 max-w-lg mx-auto">
            Join our growing network of partners and be part of the sustainable waste management revolution in Kenya.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerLogos; 