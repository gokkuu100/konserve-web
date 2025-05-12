'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    step: 1,
    title: 'Sign Up',
    description: 'Create an account as an Organization, Collection Agency, or Waste Buyer.',
    icon: '📝',
    color: 'primary',
  },
  {
    step: 2,
    title: 'Schedule a Pickup',
    description: 'Organizations can schedule waste collection through the platform.',
    icon: '📅',
    color: 'secondary',
  },
  {
    step: 3,
    title: 'Waste is Collected',
    description: 'Collection agencies pick up the waste and transport it to processing centers.',
    icon: '🚚',
    color: 'primary',
  },
  {
    step: 4,
    title: 'Waste is Tracked & Rewarded',
    description: 'Track your waste journey and earn rewards for your environmental impact.',
    icon: '🎁',
    color: 'secondary',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">How Konserve Works</h2>
          <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Our simple four-step process makes waste management efficient, transparent, and rewarding for all participants.
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-primary-200 dark:bg-primary-800/30 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={step.step}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div 
                  className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-6 bg-white dark:bg-neutral-800 shadow-md ${
                    step.color === 'primary' 
                      ? 'text-primary-500' 
                      : 'text-secondary-500'
                  }`}
                >
                  <span>{step.icon}</span>
                </div>
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-primary-500 text-white font-bold text-sm mb-4"
                >
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a 
            href="#signup" 
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            <span>Get Started Now</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks; 