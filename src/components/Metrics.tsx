'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// Placeholder data for metrics
const initialMetrics = {
  wasteRecycled: 350000, // kg
  usersRegistered: 5200,
  rewardsGiven: 120000, // KES
  partners: 45,
};

interface CounterProps {
  value: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
}

// Animated counter component
const AnimatedCounter: React.FC<CounterProps> = ({ 
  value, 
  duration = 2, 
  decimals = 0,
  suffix = '',
  prefix = '',
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const inView = useInView(countRef, { once: true, amount: 0.5 });
  
  useEffect(() => {
    if (inView) {
      let start = 0;
      const step = (value / duration) / 60;
      
      const counter = setInterval(() => {
        start += step;
        setCount(Math.min(start, value));
        
        if (start >= value) {
          clearInterval(counter);
        }
      }, 1000 / 60);
      
      return () => clearInterval(counter);
    }
  }, [inView, value, duration]);
  
  const formattedCount = count.toLocaleString('en-US', {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  });
  
  return (
    <span ref={countRef} className="tabular-nums">
      {prefix}{formattedCount}{suffix}
    </span>
  );
};

const Metrics = () => {
  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-primary-50 to-white dark:from-neutral-900 dark:to-neutral-800">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">Our Impact So Far</h2>
          <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Real-time metrics showing Konserve's growing impact on waste management and environmental sustainability.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Total Waste Recycled */}
          <motion.div 
            className="bg-white dark:bg-neutral-800 rounded-xl shadow-md p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-4">
              <span className="text-primary-500 text-2xl">♻️</span>
            </div>
            <h3 className="text-4xl font-bold text-neutral-900 dark:text-white mb-2">
              <AnimatedCounter value={initialMetrics.wasteRecycled} suffix=" kg" />
            </h3>
            <p className="text-neutral-500 dark:text-neutral-400">Total Waste Recycled</p>
          </motion.div>
          
          {/* Number of Registered Users */}
          <motion.div 
            className="bg-white dark:bg-neutral-800 rounded-xl shadow-md p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-14 h-14 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center mb-4">
              <span className="text-secondary-500 text-2xl">👥</span>
            </div>
            <h3 className="text-4xl font-bold text-neutral-900 dark:text-white mb-2">
              <AnimatedCounter value={initialMetrics.usersRegistered} />
            </h3>
            <p className="text-neutral-500 dark:text-neutral-400">Registered Users</p>
          </motion.div>
          
          {/* Rewards Given */}
          <motion.div 
            className="bg-white dark:bg-neutral-800 rounded-xl shadow-md p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-4">
              <span className="text-primary-500 text-2xl">🎁</span>
            </div>
            <h3 className="text-4xl font-bold text-neutral-900 dark:text-white mb-2">
              <AnimatedCounter value={initialMetrics.rewardsGiven} prefix="KES " />
            </h3>
            <p className="text-neutral-500 dark:text-neutral-400">Rewards Given Out</p>
          </motion.div>
          
          {/* Partnered Stations */}
          <motion.div 
            className="bg-white dark:bg-neutral-800 rounded-xl shadow-md p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="w-14 h-14 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center mb-4">
              <span className="text-secondary-500 text-2xl">🏭</span>
            </div>
            <h3 className="text-4xl font-bold text-neutral-900 dark:text-white mb-2">
              <AnimatedCounter value={initialMetrics.partners} />
            </h3>
            <p className="text-neutral-500 dark:text-neutral-400">Partnered Recycling Stations</p>
          </motion.div>
        </div>
        
        {/* Impact Report Download - Optional */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a 
            href="#download-report" 
            className="inline-flex items-center gap-2 bg-white dark:bg-neutral-800 border border-primary-200 dark:border-primary-800 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-neutral-700 font-medium py-2 px-4 rounded-md transition-colors"
          >
            <span>See Full Impact Report</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
            </svg>
          </a>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">PDF Download (1.2MB)</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Metrics; 