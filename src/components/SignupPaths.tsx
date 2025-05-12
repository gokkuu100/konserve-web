'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const userTypes = [
  {
    id: 'organization',
    title: 'Organization',
    description: 'For businesses, schools, and institutions looking to manage their waste sustainably and responsibly while earning rewards.',
    icon: '🏢',
    color: 'primary',
    benefits: ['Cost-effective waste management', 'Environmental compliance', 'Social responsibility badges'],
  },
  {
    id: 'agency',
    title: 'Collection Agency',
    description: 'For waste collectors, recycling stations, and waste management companies looking to expand their network and streamline operations.',
    icon: '🚚',
    color: 'secondary',
    benefits: ['Access to a wider client base', 'Digital route planning', 'Transparent payment system'],
  },
  {
    id: 'buyer',
    title: 'Waste Buyer',
    description: 'For recycling plants, manufacturers, and businesses that purchase recyclable materials for processing or production.',
    icon: '🏭',
    color: 'neutral',
    benefits: ['Direct access to quality materials', 'Transparent supply chain', 'Volume-based discounts'],
  },
];

const SignupPaths = () => {
  return (
    <section id="join" className="py-20 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">Join the Konserve Ecosystem</h2>
          <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Choose your path and become part of the circular economy that values waste as a resource.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {userTypes.map((type, index) => (
            <motion.div 
              key={type.id}
              id={`signup-${type.id}`}
              className={`bg-white dark:bg-neutral-800 border ${
                type.color === 'primary' 
                  ? 'border-primary-200 dark:border-primary-800' 
                  : type.color === 'secondary'
                  ? 'border-secondary-200 dark:border-secondary-800'
                  : 'border-neutral-200 dark:border-neutral-700'
              } rounded-xl shadow-md overflow-hidden`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div 
                className={`py-6 px-6 ${
                  type.color === 'primary' 
                    ? 'bg-primary-50 dark:bg-primary-900/30' 
                    : type.color === 'secondary'
                    ? 'bg-secondary-50 dark:bg-secondary-900/30'
                    : 'bg-neutral-50 dark:bg-neutral-800'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
                      type.color === 'primary' 
                        ? 'bg-primary-100 dark:bg-primary-800/50 text-primary-600 dark:text-primary-400' 
                        : type.color === 'secondary'
                        ? 'bg-secondary-100 dark:bg-secondary-800/50 text-secondary-600 dark:text-secondary-400'
                        : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400'
                    }`}
                  >
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                    {type.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                  {type.description}
                </p>
                
                <h4 className="font-medium text-neutral-900 dark:text-white mb-3">Benefits:</h4>
                <ul className="space-y-2 mb-6">
                  {type.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span 
                        className={`mt-1 ${
                          type.color === 'primary' 
                            ? 'text-primary-500' 
                            : type.color === 'secondary'
                            ? 'text-secondary-500'
                            : 'text-neutral-500'
                        }`}
                      >
                        ✓
                      </span>
                      <span className="text-neutral-600 dark:text-neutral-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href={`/signup/${type.id}`} 
                  className={`block w-full text-center py-3 px-4 rounded-md font-medium transition-colors ${
                    type.color === 'primary' 
                      ? 'bg-primary-500 hover:bg-primary-600 text-white' 
                      : type.color === 'secondary'
                      ? 'bg-secondary-500 hover:bg-secondary-600 text-white'
                      : 'bg-neutral-800 hover:bg-neutral-900 text-white'
                  }`}
                >
                  Sign Up as {type.title}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-neutral-600 dark:text-neutral-400 mb-4">
            Not sure which option is right for you?
          </p>
          <Link 
            href="#contact" 
            className="inline-flex items-center gap-2 font-medium text-primary-600 dark:text-primary-400 hover:underline"
          >
            <span>Contact our team for guidance</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SignupPaths; 