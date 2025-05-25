'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { api } from '@/services/api';

// Interface for metrics data
interface MetricsData {
  wasteRecycled: number;
  usersRegistered: number;
  rewardsGiven: number;
  partners: number;
}

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
  const [metrics, setMetrics] = useState<MetricsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Fetch metrics data when component mounts
  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        setLoading(true);
        const data = await api.getMetrics();
        setMetrics(data);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch metrics:', err);
        setError('Failed to load metrics data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchMetrics();
    
    // Optionally set up periodic refresh for "live" data
    const intervalId = setInterval(fetchMetrics, 60000); // Refresh every minute
    
    return () => clearInterval(intervalId);
  }, []);
  
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
            Real-time metrics showing Konserve&apos;s growing impact on waste management and environmental sustainability.
          </p>
        </motion.div>
        
        {loading && !metrics ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
          </div>
        ) : error ? (
          <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-4 rounded-lg text-center mb-8">
            {error}
          </div>
        ) : (
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
                {metrics && <AnimatedCounter value={metrics.wasteRecycled} suffix=" kg" />}
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
                {metrics && <AnimatedCounter value={metrics.usersRegistered} />}
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
                {metrics && <AnimatedCounter value={metrics.rewardsGiven} prefix="KES " />}
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
                {metrics && <AnimatedCounter value={metrics.partners} />}
              </h3>
              <p className="text-neutral-500 dark:text-neutral-400">Partnered Recycling Stations</p>
            </motion.div>
          </div>
        )}
        
        {/* Removed Impact Report Download section - now using dedicated FullImpactReportDownload component */}
      </div>
    </section>
  );
};

export default Metrics; 