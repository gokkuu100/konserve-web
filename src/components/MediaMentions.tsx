'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface MediaMention {
  id: string;
  title: string;
  source: string;
  date: string;
  excerpt: string;
  image: string;
  url: string;
  category: string;
  featured: boolean;
}

const MediaMentions = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Media categories
  const categories = ['All', 'News', 'Features', 'Awards', 'Interviews'];
  
  // Mock media mentions data
  const mediaMentions: MediaMention[] = [
    {
      id: 'eco-business',
      title: 'Konserve: The Startup Transforming Waste Management in East Africa',
      source: 'EcoBusiness',
      date: 'May 18, 2025',
      excerpt: 'How a small team of environmental entrepreneurs is creating circular economy solutions for Kenya\'s urban waste challenges.',
      image: '/placeholder-pattern.svg',
      url: '#',
      category: 'Features',
      featured: true
    },
    {
      id: 'tech-chronicle',
      title: 'Top 10 GreenTech Startups to Watch in 2025',
      source: 'Tech Chronicle',
      date: 'April 12, 2025',
      excerpt: 'Konserve ranks #3 on our annual list of innovative companies creating technology solutions for environmental challenges.',
      image: '/placeholder-pattern.svg',
      url: '#',
      category: 'Awards',
      featured: true
    },
    {
      id: 'daily-nation',
      title: 'Local Startup Partners with Nairobi County on Waste Initiative',
      source: 'Daily Nation',
      date: 'March 25, 2025',
      excerpt: 'Konserve signs agreement with local government to implement digital waste collection system across residential areas.',
      image: '/placeholder-pattern.svg',
      url: '#',
      category: 'News',
      featured: false
    },
    {
      id: 'green-future',
      title: 'CEO Interview: Konserve\'s Vision for Sustainable Waste Management',
      source: 'Green Future Magazine',
      date: 'February 8, 2025',
      excerpt: 'An in-depth conversation with the founding team about their journey and plans for expansion across East Africa.',
      image: '/placeholder-pattern.svg',
      url: '#',
      category: 'Interviews',
      featured: false
    },
    {
      id: 'impact-investor',
      title: 'Konserve Secures $2.5M in Funding for Expansion',
      source: 'Impact Investor Weekly',
      date: 'January 15, 2025',
      excerpt: 'The waste management platform attracts significant investment to scale operations and enhance their technology platform.',
      image: '/placeholder-pattern.svg',
      url: '#',
      category: 'News',
      featured: true
    },
    {
      id: 'env-awards',
      title: 'Environmental Impact Award Winner: Konserve',
      source: 'Sustainability Excellence Awards',
      date: 'December 5, 2024',
      excerpt: 'The platform recognized for innovation in waste reduction and community engagement across Kenya.',
      image: '/placeholder-pattern.svg',
      url: '#',
      category: 'Awards',
      featured: false
    }
  ];
  
  // Filter mentions by category
  const filteredMentions = activeCategory === 'All'
    ? mediaMentions
    : mediaMentions.filter(mention => mention.category === activeCategory);
  
  // Get featured mentions
  const featuredMentions = mediaMentions.filter(mention => mention.featured);
  
  return (
    <section id="media-mentions" className="py-20 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Media Mentions
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            See what trusted sources and publications are saying about our work.
          </p>
        </motion.div>
        
        {/* Featured Media - Larger Cards */}
        {featuredMentions.length > 0 && (
          <>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Featured Coverage
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {featuredMentions.map((mention, index) => (
                <motion.a 
                  key={mention.id}
                  href={mention.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={mention.image} 
                      alt={mention.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                        {mention.source}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {mention.date}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {mention.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      {mention.excerpt}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 dark:bg-neutral-700 text-gray-800 dark:text-gray-200">
                        {mention.category}
                      </span>
                      <span className="text-primary-600 dark:text-primary-400 text-sm font-medium group-hover:underline">
                        Read more →
                      </span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </>
        )}
        
        {/* Category Filters */}
        <div className="flex overflow-x-auto pb-4 mb-8 scrollbar-hide">
          <div className="flex space-x-2 mx-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`py-1 px-4 rounded-full text-sm font-medium transition-all whitespace-nowrap
                  ${activeCategory === category
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-200 text-gray-800 dark:bg-neutral-700 dark:text-neutral-200 hover:bg-gray-300 dark:hover:bg-neutral-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* All Media Mentions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMentions.map((mention, index) => (
            <motion.a 
              key={mention.id}
              href={mention.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all p-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="h-16 w-16 flex-shrink-0 bg-gray-100 dark:bg-neutral-700 rounded overflow-hidden mr-4">
                <img 
                  src={mention.image} 
                  alt={mention.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-semibold text-primary-600 dark:text-primary-400">
                    {mention.source}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {mention.date}
                  </span>
                </div>
                <h4 className="text-base font-bold text-gray-900 dark:text-white mb-1 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {mention.title}
                </h4>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 dark:bg-neutral-700 text-gray-800 dark:text-gray-200">
                    {mention.category}
                  </span>
                  <span className="text-primary-600 dark:text-primary-400 text-xs font-medium group-hover:underline">
                    Read
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
        
        {/* Press Kit CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block p-8 rounded-xl bg-gray-50 dark:bg-neutral-800">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Media Resources
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl">
              Looking for official logos, team photos, or company information? Download our press kit for approved media assets.
            </p>
            <button className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors flex items-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
              </svg>
              Download Press Kit
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MediaMentions;
