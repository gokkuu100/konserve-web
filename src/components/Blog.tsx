'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: 'The Importance of Responsible Waste Management',
    excerpt: 'Learn how proper waste management can reduce environmental impact and contribute to a circular economy.',
    date: 'May 10, 2025',
    category: 'Waste Management',
    image: '/placeholder-pattern.svg',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Recycling Success Stories from Organizations',
    excerpt: 'How businesses are reducing waste and increasing sustainability through recycling programs.',
    date: 'May 5, 2025',
    category: 'Success Stories',
    image: '/placeholder-pattern.svg',
    readTime: '7 min read',
  },
  {
    id: 3,
    title: 'Tips for Effective Waste Sorting',
    excerpt: 'Simple strategies to improve your waste sorting efficiency and maximize recycling potential.',
    date: 'April 27, 2025',
    category: 'Tips & Tricks',
    image: '/placeholder-pattern.svg',
    readTime: '4 min read',
  },
  {
    id: 4,
    title: 'The Environmental Impact of Plastic Waste',
    excerpt: 'Understanding the long-term effects of plastic pollution and how recycling helps mitigate them.',
    date: 'April 15, 2025',
    category: 'Environmental Impact',
    image: '/placeholder-pattern.svg',
    readTime: '8 min read',
  },
];

// Category filter options
const categories = [
  'All',
  'Waste Management',
  'Success Stories',
  'Tips & Tricks',
  'Environmental Impact',
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Filter posts by category
  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);
  
  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Knowledge Center
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300"
          >
            Latest insights, tips, and success stories from the world of waste management
          </motion.p>
        </div>

        {/* Category Filter */}
        <div className="flex overflow-x-auto pb-4 mb-8 scrollbar-hide">
          <div className="flex space-x-2 mx-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`py-1 px-4 rounded-full text-sm font-medium transition-all whitespace-nowrap
                  ${selectedCategory === category
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 text-gray-800 dark:bg-neutral-700 dark:text-neutral-200 hover:bg-gray-300 dark:hover:bg-neutral-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold py-1 px-2 rounded bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{post.readTime}</span>
                  <button className="text-sm font-medium text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* More Articles Button */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
