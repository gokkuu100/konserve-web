'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface WasteCategory {
  id: string;
  name: string;
  amount: number;
  unit: string;
  icon: string;
  color: string;
  percentage: number;
  trend: 'up' | 'down' | 'stable';
  trendValue: number;
}

interface WasteStats {
  totalWaste: number;
  wastePerDay: number;
  mostRecycled: string;
  leastRecycled: string;
}

const WasteCategoryTracker = () => {
  const [categories, setCategories] = useState<WasteCategory[]>([]);
  const [stats, setStats] = useState<WasteStats>({
    totalWaste: 0,
    wastePerDay: 0,
    mostRecycled: '',
    leastRecycled: ''
  });
  const [timeframe, setTimeframe] = useState('month');
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate fetching waste category data
    const fetchWasteData = async () => {
      // In a real app, this would be an API call that uses the timeframe
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock data for demonstration
      const mockCategories: WasteCategory[] = [
        {
          id: 'plastic',
          name: 'Plastic',
          amount: 120500,
          unit: 'kg',
          icon: '♻️',
          color: '#3B82F6', // blue
          percentage: 32,
          trend: 'up',
          trendValue: 8.5
        },
        {
          id: 'paper',
          name: 'Paper',
          amount: 98700,
          unit: 'kg',
          icon: '📄',
          color: '#10B981', // green
          percentage: 26,
          trend: 'up',
          trendValue: 4.2
        },
        {
          id: 'metal',
          name: 'Metal',
          amount: 72300,
          unit: 'kg',
          icon: '🔧',
          color: '#6B7280', // gray
          percentage: 19,
          trend: 'stable',
          trendValue: 0.3
        },
        {
          id: 'glass',
          name: 'Glass',
          amount: 45200,
          unit: 'kg',
          icon: '🥤',
          color: '#8B5CF6', // purple
          percentage: 12,
          trend: 'down',
          trendValue: 3.1
        },
        {
          id: 'ewaste',
          name: 'E-waste',
          amount: 26800,
          unit: 'kg',
          icon: '💻',
          color: '#EC4899', // pink
          percentage: 7,
          trend: 'up',
          trendValue: 12.7
        },
        {
          id: 'other',
          name: 'Other',
          amount: 15000,
          unit: 'kg',
          icon: '📦',
          color: '#F59E0B', // amber
          percentage: 4,
          trend: 'stable',
          trendValue: 0.8
        }
      ];
      
      const mockStats: WasteStats = {
        totalWaste: 378500,
        wastePerDay: 12617,
        mostRecycled: 'Plastic',
        leastRecycled: 'E-waste'
      };
      
      setCategories(mockCategories);
      setStats(mockStats);
      setIsLoading(false);
    };
    
    fetchWasteData();
    // If this were real, we'd fetch new data when timeframe changes
  }, [timeframe]);
  
  // Helper for formatting large numbers
  const formatAmount = (amount: number): string => {
    if (amount >= 1000000) {
      return `${(amount / 1000000).toFixed(1)}M`;
    } else if (amount >= 1000) {
      return `${(amount / 1000).toFixed(1)}K`;
    }
    return amount.toString();
  };
  
  if (isLoading) {
    return (
      <div className="flex justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }
  
  return (
    <section id="waste-breakdown" className="py-20 bg-gray-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Waste Category Breakdown
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Track detailed analytics on the types of waste being recycled through our platform.
          </p>
        </motion.div>
        
        {/* Summary Stats */}
        <motion.div 
          className="mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md p-6">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Total Waste Recycled</p>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {formatAmount(stats.totalWaste)} kg
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">All time</p>
          </div>
          
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md p-6">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Daily Average</p>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {formatAmount(stats.wastePerDay)} kg
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Last 30 days</p>
          </div>
          
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md p-6">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Most Recycled</p>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {stats.mostRecycled}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">This month</p>
          </div>
          
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md p-6">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Needs Improvement</p>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {stats.leastRecycled}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Low recycling rates</p>
          </div>
        </motion.div>
        
        {/* Time Period Selector */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex rounded-md shadow-sm bg-white dark:bg-neutral-800 p-1">
            {['week', 'month', 'quarter', 'year'].map((period) => (
              <button
                key={period}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  timeframe === period
                    ? 'bg-primary-500 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-700'
                }`}
                onClick={() => setTimeframe(period)}
              >
                {period.charAt(0).toUpperCase() + period.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        {/* Category Breakdown */}
        <div className="mb-12">
          {categories.map((category, index) => (
            <motion.div 
              key={category.id}
              className="mb-6 last:mb-0"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <span className="text-xl mr-2">{category.icon}</span>
                  <span className="font-medium text-gray-900 dark:text-white">{category.name}</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="mr-2 font-semibold">{formatAmount(category.amount)} {category.unit}</span>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 dark:bg-neutral-700">
                    {category.percentage}%
                  </span>
                </div>
              </div>
              
              <div className="h-3 rounded-full bg-gray-200 dark:bg-neutral-700 overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-500 ease-out"
                  style={{ 
                    width: `${category.percentage}%`,
                    backgroundColor: category.color
                  }}
                ></div>
              </div>
              
              <div className="flex justify-end mt-1">
                <div className={`flex items-center text-xs ${
                  category.trend === 'up' ? 'text-green-600 dark:text-green-400' : 
                  category.trend === 'down' ? 'text-red-600 dark:text-red-400' : 
                  'text-gray-500 dark:text-gray-400'
                }`}>
                  {category.trend === 'up' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                    </svg>
                  )}
                  {category.trend === 'down' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 13l-5 5m0 0l-5-5m5 5V6" />
                    </svg>
                  )}
                  {category.trend === 'stable' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14" />
                    </svg>
                  )}
                  {category.trendValue}% compared to last {timeframe}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Download and Full Report CTA */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.button 
            className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
            </svg>
            Download Full Report
          </motion.button>
          
          <motion.button 
            className="px-6 py-3 bg-white dark:bg-neutral-800 hover:bg-gray-100 dark:hover:bg-neutral-750 text-gray-800 dark:text-gray-200 font-medium rounded-lg border border-gray-300 dark:border-gray-700 transition-colors shadow-sm hover:shadow flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            View Interactive Analytics
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default WasteCategoryTracker;
