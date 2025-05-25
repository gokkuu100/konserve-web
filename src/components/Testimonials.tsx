'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// User types for filtering
type UserType = 'All' | 'Organization' | 'Collection Agency' | 'Waste Buyer';

// Sample testimonial data with user types
const testimonials = [
  {
    id: 1,
    name: 'Sarah Kamau',
    role: 'Operations Manager',
    organization: 'EcoTech Solutions',
    userType: 'Organization',
    rating: 5,
    quote: 'Konserve has transformed how we handle our waste. The platform is intuitive, and the rewards system has motivated our entire team to participate in recycling efforts.',
    image: '/placeholder-avatar.png', // Replace with actual images
  },
  {
    id: 2,
    name: 'John Mwangi',
    role: 'Owner',
    organization: 'Green Collections Ltd',
    userType: 'Collection Agency',
    rating: 4,
    quote: 'The route optimization and scheduling features have made our collection process 40% more efficient. We\'ve been able to serve more clients without adding vehicles to our fleet.',
    image: '/placeholder-avatar.png',
  },
  {
    id: 3,
    name: 'Amina Hassan',
    role: 'Procurement Director',
    organization: 'Recycle Kenya',
    userType: 'Waste Buyer',
    rating: 5,
    quote: 'Konserve provides us with consistent quality materials for our recycling plant. The transparent tracking system ensures we know exactly what we\'re getting and when.',
    image: '/placeholder-avatar.png',
  },
  {
    id: 4,
    name: 'David Ochieng',
    role: 'Sustainability Lead',
    organization: 'Nairobi University',
    userType: 'Organization',
    rating: 5,
    quote: 'Implementing Konserve across our campus has helped us reduce waste sent to landfills by 75%. Students love the gamification aspects and compete to recycle more.',
    image: '/placeholder-avatar.png',
  },
  {
    id: 5,
    name: 'Wanjiku Njeri',
    role: 'CEO',
    organization: 'EcoWaste Solutions',
    userType: 'Collection Agency',
    rating: 4,
    quote: 'Konserve has helped us grow our collection business by connecting us with organizations looking for reliable waste management partners. The payment system is seamless.',
    image: '/placeholder-avatar.png',
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // Auto-rotate testimonials
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isPaused]);
  
  // Render stars based on rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg 
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };
  
  // Filter testimonials by user type
  const [filter, setFilter] = useState('All');
  const filteredTestimonials = filter === 'All' 
    ? testimonials 
    : testimonials.filter(t => t.userType === filter);
  
  return (
    <section id="testimonials" className="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">What Our Users Say</h2>
          <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Hear from organizations, collection agencies, and waste buyers who have transformed their approach to waste management with Konserve.
          </p>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {['All', 'Organization', 'Collection Agency', 'Waste Buyer'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === type
                    ? 'bg-primary-500 text-white'
                    : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-primary-50 dark:hover:bg-neutral-700'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </motion.div>
        
        {/* Testimonials Carousel */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden relative rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {filteredTestimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="min-w-full p-1"
                >
                  <motion.div 
                    className="bg-white dark:bg-neutral-800 p-8 rounded-xl shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Quote */}
                    <div className="mb-6">
                      <svg className="w-10 h-10 text-primary-200 dark:text-primary-800 mb-4" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 8c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 8-3.582 8-8s-3.582-8-8-8zm0 14c-3.314 0-6-2.686-6-6s2.686-6 6-6c3.314 0 6 2.686 6 6s-2.686 6-6 6zm22-6c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-14 0c0 3.314 2.686 6 6 6s6-2.686 6-6-2.686-6-6-6-6 2.686-6 6z" />
                      </svg>
                      <p className="text-neutral-700 dark:text-neutral-300 text-lg italic">"{testimonial.quote}"</p>
                    </div>
                    
                    {/* Rating */}
                    <div className="flex mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                    
                    {/* User info */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center overflow-hidden">
                        {/* Placeholder avatar */}
                        <span className="text-primary-500 text-xl">👤</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-neutral-900 dark:text-white">{testimonial.name}</h4>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">{testimonial.role}, {testimonial.organization}</p>
                        <span className="inline-block mt-1 text-xs px-2 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full">
                          {testimonial.userType}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {filteredTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex
                    ? 'bg-primary-500'
                    : 'bg-neutral-300 dark:bg-neutral-700 hover:bg-primary-300 dark:hover:bg-primary-700'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={() => setActiveIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length)}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-white dark:bg-neutral-800 rounded-full p-2 shadow-md hover:bg-primary-50 dark:hover:bg-neutral-700 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-neutral-700 dark:text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setActiveIndex((prev) => (prev + 1) % filteredTestimonials.length)}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 md:translate-x-8 bg-white dark:bg-neutral-800 rounded-full p-2 shadow-md hover:bg-primary-50 dark:hover:bg-neutral-700 transition-colors"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-neutral-700 dark:text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <a 
            href="#join" 
            className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium hover:underline"
          >
            <span>Join our growing community</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 