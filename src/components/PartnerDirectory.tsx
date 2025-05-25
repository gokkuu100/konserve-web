'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Partner {
  id: string;
  name: string;
  logo: string;
  category: string;
  location: string;
  description: string;
  wasteTypes: string[];
  rating: number;
  partneredSince: string;
}

const PartnerDirectory = () => {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [filteredPartners, setFilteredPartners] = useState<Partner[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  // Available filter options
  const categories = ['All', 'Collection Agency', 'Recycling Station', 'Corporate Partner', 'NGO'];
  const locations = ['All', 'Nairobi', 'Mombasa', 'Eldoret', 'Kisumu', 'Nakuru'];
  
  useEffect(() => {
    // Simulate fetching partners data
    const fetchPartners = async () => {
      // In a real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock data for demonstration
      const mockPartners: Partner[] = [
        {
          id: 'eco-collectors',
          name: 'Eco Collectors Ltd',
          logo: '/placeholder-logo.svg',
          category: 'Collection Agency',
          location: 'Nairobi',
          description: 'Specializing in residential and commercial waste collection with a focus on plastic and paper recycling.',
          wasteTypes: ['Plastic', 'Paper', 'Metal'],
          rating: 4.8,
          partneredSince: 'May 2022'
        },
        {
          id: 'green-process',
          name: 'Green Process Industries',
          logo: '/placeholder-logo.svg',
          category: 'Recycling Station',
          location: 'Mombasa',
          description: 'State-of-the-art recycling facility that processes various types of waste into reusable materials.',
          wasteTypes: ['Plastic', 'Glass', 'E-waste', 'Metal'],
          rating: 4.6,
          partneredSince: 'January 2023'
        },
        {
          id: 'clean-future',
          name: 'Clean Future Initiative',
          logo: '/placeholder-logo.svg',
          category: 'NGO',
          location: 'Eldoret',
          description: 'Non-profit organization focused on environmental education and community-based recycling programs.',
          wasteTypes: ['Paper', 'Plastic'],
          rating: 4.9,
          partneredSince: 'August 2022'
        },
        {
          id: 'circular-solutions',
          name: 'Circular Solutions',
          logo: '/placeholder-logo.svg',
          category: 'Collection Agency',
          location: 'Kisumu',
          description: 'Innovative collection service using mobile apps to coordinate efficient waste pickup schedules.',
          wasteTypes: ['Paper', 'Plastic', 'Organic', 'Metal'],
          rating: 4.5,
          partneredSince: 'March 2023'
        },
        {
          id: 'recycle-tech',
          name: 'RecycleTech',
          logo: '/placeholder-logo.svg',
          category: 'Recycling Station',
          location: 'Nairobi',
          description: 'Specializes in electronic waste recycling and responsible disposal of hazardous materials.',
          wasteTypes: ['E-waste', 'Batteries', 'Metals'],
          rating: 4.7,
          partneredSince: 'June 2022'
        },
        {
          id: 'waste-management-group',
          name: 'Waste Management Group',
          logo: '/placeholder-logo.svg',
          category: 'Corporate Partner',
          location: 'Nakuru',
          description: 'Corporate partner providing end-to-end waste management solutions for businesses.',
          wasteTypes: ['All Types'],
          rating: 4.4,
          partneredSince: 'November 2022'
        },
      ];
      
      setPartners(mockPartners);
      setFilteredPartners(mockPartners);
      setIsLoading(false);
    };
    
    fetchPartners();
  }, []);
  
  // Filter partners when filters change
  useEffect(() => {
    let results = partners;
    
    // Filter by category
    if (selectedCategory !== 'All') {
      results = results.filter(partner => partner.category === selectedCategory);
    }
    
    // Filter by location
    if (selectedLocation !== 'All') {
      results = results.filter(partner => partner.location === selectedLocation);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(partner => 
        partner.name.toLowerCase().includes(query) || 
        partner.description.toLowerCase().includes(query) ||
        partner.wasteTypes.some(type => type.toLowerCase().includes(query))
      );
    }
    
    setFilteredPartners(results);
  }, [selectedCategory, selectedLocation, searchQuery, partners]);
  
  // Generate star rating display
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className="text-yellow-400">★</span>
        ))}
        {halfStar && <span className="text-yellow-400">★</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} className="text-gray-300 dark:text-gray-600">★</span>
        ))}
      </div>
    );
  };
  
  if (isLoading) {
    return (
      <div className="flex justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }
  
  return (
    <section id="partner-directory" className="py-20 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Partner Directory
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Explore our network of verified waste management partners and find the perfect match for your recycling needs.
          </p>
        </motion.div>
        
        {/* Search and Filter Controls */}
        <div className="mb-8 space-y-6">
          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input 
                type="text"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:border-primary-500 dark:focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-500 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white"
                placeholder="Search partners..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute left-3 top-3.5 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Filter Controls */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="inline-block">
              <label className="text-sm text-gray-600 dark:text-gray-400 mb-1 block">Partner Type</label>
              <select 
                className="bg-white dark:bg-neutral-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            
            <div className="inline-block">
              <label className="text-sm text-gray-600 dark:text-gray-400 mb-1 block">Location</label>
              <select 
                className="bg-white dark:bg-neutral-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        {/* Results Count */}
        <p className="text-center mb-8 text-gray-600 dark:text-gray-400">
          Found {filteredPartners.length} partners
        </p>
        
        {/* Partners Grid */}
        {filteredPartners.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPartners.map((partner, index) => (
              <motion.div
                key={partner.id}
                className="bg-white dark:bg-neutral-800 rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      <div className="h-12 w-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mr-3">
                        <img 
                          src={partner.logo} 
                          alt={`${partner.name} logo`}
                          className="h-8 w-8"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{partner.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{partner.category}</p>
                      </div>
                    </div>
                    <span className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300">
                      {partner.location}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {partner.description}
                  </p>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Accepts:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {partner.wasteTypes.map(type => (
                        <span
                          key={`${partner.id}-${type}`}
                          className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-2 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center">
                      <span className="text-gray-700 dark:text-gray-300 mr-1 text-sm">{partner.rating}</span>
                      <span className="text-sm">
                        {renderStars(partner.rating)}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Partner since {partner.partneredSince}
                    </span>
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-neutral-750 px-6 py-3">
                  <button className="w-full py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium rounded transition-colors">
                    Contact Partner
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            <p className="text-xl mb-4">No partners found matching your criteria</p>
            <p>Try adjusting your filters or search terms</p>
          </div>
        )}
        
        {/* Become a Partner CTA */}
        <motion.div 
          className="mt-12 bg-primary-50 dark:bg-neutral-800 rounded-xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Want to Join Our Partner Network?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            If you're a collection agency, recycling station, or organization committed to sustainable waste management, we'd love to have you in our network.
          </p>
          <button className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg">
            Apply to Become a Partner
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerDirectory;
