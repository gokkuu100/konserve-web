'use client';

import { motion } from 'framer-motion';

const ImpactReport = () => {
  // Mock impact data to include in the report
  const impactData = {
    totalWasteRecycled: '378,500 kg',
    plasticRecycled: '120,500 kg',
    paperRecycled: '98,700 kg',
    metalRecycled: '72,300 kg',
    co2Emissions: '204,500 kg',
    treesPreserved: '1,675',
    waterSaved: '1.2 million liters',
    energySaved: '875,000 kWh',
    landfillSpace: '950 cubic meters'
  };

  // Handle download of impact report
  const downloadReport = () => {
    // In a real implementation, this would either:
    // 1. Generate a PDF on the fly using a library like pdfmake or jspdf
    // 2. Download a pre-generated PDF from a server
    // 3. Open a modal with the report content
    
    // For now, we'll simulate a download with an alert
    alert('Impact report download started. This would be a real PDF in production.');
    
    // Tracking the download event
    console.log('Impact Report Downloaded');
  };

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-lg">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Environmental Impact Report</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Detailed metrics on Konserve&apos;s environmental contributions
          </p>
        </div>
        <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2.5 py-1 rounded-full">
          May 2025
        </span>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2">
            <h4 className="font-medium text-gray-900 dark:text-white mb-4">Highlights</h4>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-neutral-750 p-4 rounded-lg">
                <p className="text-sm text-gray-500 dark:text-gray-400">Total Waste Recycled</p>
                <p className="text-xl font-bold text-primary-600 dark:text-primary-400">{impactData.totalWasteRecycled}</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-neutral-750 p-4 rounded-lg">
                <p className="text-sm text-gray-500 dark:text-gray-400">CO₂ Emissions Prevented</p>
                <p className="text-xl font-bold text-primary-600 dark:text-primary-400">{impactData.co2Emissions}</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-neutral-750 p-4 rounded-lg">
                <p className="text-sm text-gray-500 dark:text-gray-400">Trees Preserved</p>
                <p className="text-xl font-bold text-primary-600 dark:text-primary-400">{impactData.treesPreserved}</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-neutral-750 p-4 rounded-lg">
                <p className="text-sm text-gray-500 dark:text-gray-400">Water Saved</p>
                <p className="text-xl font-bold text-primary-600 dark:text-primary-400">{impactData.waterSaved}</p>
              </div>
            </div>
            
            <h4 className="font-medium text-gray-900 dark:text-white mt-6 mb-3">What&apos;s Inside</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Detailed breakdown of materials recycled by category
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Environmental impact metrics and calculations
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Geographic distribution of recycling impact
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Community engagement and social impact data
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Progress towards sustainability goals
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 dark:bg-neutral-750 p-5 rounded-xl">
            <div className="flex justify-center mb-4">
              <div className="h-28 w-20 bg-white dark:bg-neutral-800 rounded shadow-sm flex items-center justify-center">
                <span className="text-4xl">📊</span>
              </div>
            </div>
            
            <h4 className="text-center font-medium text-gray-900 dark:text-white mb-4">
              Complete Impact Report
            </h4>
            
            <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-2 mb-5">
              <li className="flex items-center">
                <svg className="w-3.5 h-3.5 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                PDF Format (5.2MB)
              </li>
              <li className="flex items-center">
                <svg className="w-3.5 h-3.5 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                24 Pages with Visuals
              </li>
              <li className="flex items-center">
                <svg className="w-3.5 h-3.5 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Updated Monthly
              </li>
            </ul>
            
            <button 
              onClick={downloadReport}
              className="w-full py-2.5 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg text-sm transition-colors flex items-center justify-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
              Download Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main component to display in metrics section
const FullImpactReportDownload = () => {
  return (
    <section id="impact-report" className="py-16 bg-gray-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Environmental Impact
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Transparency is core to our mission. See the real environmental benefits generated through our platform.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <ImpactReport />
        </motion.div>
      </div>
    </section>
  );
};

export default FullImpactReportDownload;
