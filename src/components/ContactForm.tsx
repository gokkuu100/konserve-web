'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { api } from '@/services/api';

// Inquiry types
const inquiryTypes = [
  { value: 'partner', label: 'Partner Inquiry' },
  { value: 'media', label: 'Media Inquiry' },
  { value: 'support', label: 'Support' },
  { value: 'general', label: 'General Inquiry' },
];

// Form field interface
interface FormField {
  value: string;
  error: string | null;
  touched: boolean;
}

// Initial form state
const initialFormState = {
  name: { value: '', error: null as string | null, touched: false },
  email: { value: '', error: null as string | null, touched: false },
  inquiryType: { value: '', error: null as string | null, touched: false },
  message: { value: '', error: null as string | null, touched: false },
};

const ContactForm = () => {
  const [formState, setFormState] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);
  
  // Update form field handler
  const handleChange = (field: keyof typeof formState, value: string) => {
    setFormState(prev => ({
      ...prev,
      [field]: {
        ...prev[field],
        value,
        touched: true,
        error: validateField(field, value),
      }
    }));
  };
  
  // Field validation
  const validateField = (field: keyof typeof formState, value: string): string | null => {
    switch (field) {
      case 'name':
        return value.trim() === '' ? 'Name is required' : null;
      case 'email':
        return value.trim() === '' 
          ? 'Email is required' 
          : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value) 
            ? 'Invalid email address' 
            : null;
      case 'inquiryType':
        return value === '' ? 'Please select an inquiry type' : null;
      case 'message':
        return value.trim() === '' 
          ? 'Message is required' 
          : value.length < 10 
            ? 'Message must be at least 10 characters' 
            : null;
      default:
        return null;
    }
  };
  
  // Form submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newFormState = { ...formState };
    let hasErrors = false;
    
    (Object.keys(formState) as Array<keyof typeof formState>).forEach(field => {
      const error = validateField(field, formState[field].value);
      newFormState[field] = {
        ...newFormState[field],
        error,
        touched: true,
      };
      
      if (error) hasErrors = true;
    });
    
    setFormState(newFormState);
    
    if (hasErrors) {
      setSubmitResult({
        success: false,
        message: 'Please fix the errors in the form.'
      });
      return;
    }
    
    // Submit form
    try {
      setIsSubmitting(true);
      setSubmitResult(null);
      
      // Transform form data for API call
      const formData = {
        name: formState.name.value,
        email: formState.email.value,
        inquiryType: formState.inquiryType.value,
        message: formState.message.value,
      };
      
      const result = await api.submitContactForm(formData);
      setSubmitResult(result);
      
      // Reset form on success
      if (result.success) {
        setFormState(initialFormState);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitResult({
        success: false,
        message: 'An error occurred while submitting the form. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-20 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">Contact Us</h2>
            <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Have questions about Konserve? Reach out to our team and we'll get back to you as soon as possible.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid md:grid-cols-5">
              {/* Contact Info Section */}
              <div className="md:col-span-2 bg-primary-500 text-white p-8">
                <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-full">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-white/80">info@konserve.co.ke</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-full">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-white/80">+254 700 000 000</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-full">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Address</h4>
                      <p className="text-white/80">123 Eco Street, Nairobi, Kenya</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h4 className="font-semibold mb-4">Follow Us</h4>
                  <div className="flex gap-4">
                    <a href="https://twitter.com" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors" aria-label="Twitter">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="https://linkedin.com" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors" aria-label="LinkedIn">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a href="https://instagram.com" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors" aria-label="Instagram">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="md:col-span-3 p-8">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">Send Us a Message</h3>
                
                {submitResult && (
                  <div className={`p-4 mb-6 rounded-lg ${
                    submitResult.success 
                      ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400' 
                      : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400'
                  }`}>
                    {submitResult.message}
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label 
                      htmlFor="name" 
                      className="block mb-2 text-sm font-medium text-neutral-900 dark:text-white"
                    >
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      value={formState.name.value}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white ${
                        formState.name.error && formState.name.touched
                          ? 'border-red-500 focus:ring-red-200'
                          : 'border-neutral-300 dark:border-neutral-700 focus:ring-primary-200 dark:focus:ring-primary-800 focus:border-primary-400'
                      }`}
                      placeholder="John Doe"
                    />
                    {formState.name.error && formState.name.touched && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{formState.name.error}</p>
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <label 
                      htmlFor="email" 
                      className="block mb-2 text-sm font-medium text-neutral-900 dark:text-white"
                    >
                      Your Email
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      value={formState.email.value}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white ${
                        formState.email.error && formState.email.touched
                          ? 'border-red-500 focus:ring-red-200'
                          : 'border-neutral-300 dark:border-neutral-700 focus:ring-primary-200 dark:focus:ring-primary-800 focus:border-primary-400'
                      }`}
                      placeholder="john@example.com"
                    />
                    {formState.email.error && formState.email.touched && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{formState.email.error}</p>
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <label 
                      htmlFor="inquiryType" 
                      className="block mb-2 text-sm font-medium text-neutral-900 dark:text-white"
                    >
                      Type of Inquiry
                    </label>
                    <select 
                      id="inquiryType"
                      value={formState.inquiryType.value}
                      onChange={(e) => handleChange('inquiryType', e.target.value)}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white ${
                        formState.inquiryType.error && formState.inquiryType.touched
                          ? 'border-red-500 focus:ring-red-200'
                          : 'border-neutral-300 dark:border-neutral-700 focus:ring-primary-200 dark:focus:ring-primary-800 focus:border-primary-400'
                      }`}
                    >
                      <option value="">Select an inquiry type</option>
                      {inquiryTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                    {formState.inquiryType.error && formState.inquiryType.touched && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{formState.inquiryType.error}</p>
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <label 
                      htmlFor="message" 
                      className="block mb-2 text-sm font-medium text-neutral-900 dark:text-white"
                    >
                      Your Message
                    </label>
                    <textarea 
                      id="message"
                      value={formState.message.value}
                      onChange={(e) => handleChange('message', e.target.value)}
                      rows={5}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white ${
                        formState.message.error && formState.message.touched
                          ? 'border-red-500 focus:ring-red-200'
                          : 'border-neutral-300 dark:border-neutral-700 focus:ring-primary-200 dark:focus:ring-primary-800 focus:border-primary-400'
                      }`}
                      placeholder="Your message here..."
                    ></textarea>
                    {formState.message.error && formState.message.touched && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{formState.message.error}</p>
                    )}
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 rounded-md font-medium text-white transition-colors ${
                      isSubmitting 
                        ? 'bg-primary-400 cursor-not-allowed'
                        : 'bg-primary-500 hover:bg-primary-600'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 