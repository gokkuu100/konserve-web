'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Location {
  id: string;
  name: string;
  count: number;
  coordinates: { x: number; y: number };
  radius: number;
  partners: number;
}

const CoverageMap = () => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [hover, setHover] = useState<string | null>(null);
  
  // Coverage locations data
  const locations: Location[] = [
    {
      id: 'nairobi',
      name: 'Nairobi',
      count: 42,
      coordinates: { x: 50, y: 48 },
      radius: 12,
      partners: 18
    },
    {
      id: 'mombasa',
      name: 'Mombasa',
      count: 28,
      coordinates: { x: 58, y: 75 },
      radius: 10,
      partners: 12
    },
    {
      id: 'kisumu',
      name: 'Kisumu',
      count: 17,
      coordinates: { x: 32, y: 50 },
      radius: 8,
      partners: 7
    },
    {
      id: 'nakuru',
      name: 'Nakuru',
      count: 14,
      coordinates: { x: 44, y: 45 },
      radius: 7,
      partners: 6
    },
    {
      id: 'eldoret',
      name: 'Eldoret',
      count: 12,
      coordinates: { x: 35, y: 38 },
      radius: 6,
      partners: 5
    },
    {
      id: 'machakos',
      name: 'Machakos',
      count: 8,
      coordinates: { x: 54, y: 52 },
      radius: 5,
      partners: 3
    },
    {
      id: 'malindi',
      name: 'Malindi',
      count: 6,
      coordinates: { x: 66, y: 67 },
      radius: 4,
      partners: 2
    },
  ];
  
  // Get location details
  const getLocationDetails = (id: string): Location | undefined => {
    return locations.find(location => location.id === id);
  };
  
  // Sort locations by count for the sidebar
  const sortedLocations = [...locations].sort((a, b) => b.count - a.count);
  
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Coverage Map</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          Counties and regions where Konserve operates
        </p>
      </div>
      
      <div className="grid md:grid-cols-3">
        {/* Map Visualization */}
        <div className="col-span-2 relative bg-gray-100 dark:bg-neutral-850 h-[500px]">
          {/* Kenya Map Outline (simplified) */}
          <svg 
            viewBox="0 0 100 100" 
            className="w-full h-full"
            style={{ 
              filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))' 
            }}
          >
            <defs>
              <radialGradient id="locationGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="rgba(16, 185, 129, 0.8)" />
                <stop offset="100%" stopColor="rgba(16, 185, 129, 0)" />
              </radialGradient>
            </defs>
            
            {/* Simplified Kenya outline - a real implementation would use an actual map SVG path */}
            <path 
              d="M35,20 L65,25 L75,50 L60,80 L30,75 L20,45 Z" 
              fill="none" 
              stroke={`${selectedLocation ? 'rgba(107, 114, 128, 0.3)' : 'rgba(107, 114, 128, 0.6)'}`}
              strokeWidth="0.5"
              className="dark:stroke-gray-600"
            />
            
            {/* Location Markers */}
            {locations.map((location) => (
              <g 
                key={location.id} 
                onClick={() => setSelectedLocation(location.id === selectedLocation ? null : location.id)}
                onMouseEnter={() => setHover(location.id)}
                onMouseLeave={() => setHover(null)}
                style={{ cursor: 'pointer' }}
              >
                {/* Coverage area indicator */}
                <circle 
                  cx={location.coordinates.x} 
                  cy={location.coordinates.y} 
                  r={location.radius}
                  fill="url(#locationGradient)"
                  opacity={
                    selectedLocation === location.id ? 0.9 :
                    hover === location.id ? 0.7 : 
                    selectedLocation ? 0.3 : 0.5
                  }
                  className="transition-opacity duration-300"
                />
                
                {/* Location dot */}
                <circle 
                  cx={location.coordinates.x} 
                  cy={location.coordinates.y} 
                  r={2}
                  className={`
                    ${selectedLocation === location.id || hover === location.id
                      ? 'fill-primary-500 stroke-white dark:stroke-black'
                      : 'fill-green-600 dark:fill-green-500'
                    }
                    stroke-1 transition-all duration-300
                  `}
                />
                
                {/* Location name */}
                <text 
                  x={location.coordinates.x} 
                  y={location.coordinates.y - 5}
                  textAnchor="middle" 
                  fontSize="3"
                  className={`
                    ${selectedLocation === location.id || hover === location.id
                      ? 'fill-gray-800 dark:fill-white font-bold'
                      : 'fill-gray-600 dark:fill-gray-300'
                    }
                    transition-all duration-300
                  `}
                >
                  {location.name}
                </text>
              </g>
            ))}
          </svg>
          
          {/* Map Legend */}
          <div className="absolute bottom-4 left-4 bg-white dark:bg-neutral-800 p-3 rounded-lg shadow-md text-xs">
            <div className="flex items-center mb-2">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <span className="text-gray-700 dark:text-gray-300">Active Location</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-primary-500 mr-2"></div>
              <span className="text-gray-700 dark:text-gray-300">Selected Location</span>
            </div>
          </div>
        </div>
        
        {/* Location List */}
        <div className="border-l border-gray-200 dark:border-gray-700 overflow-y-auto h-[500px]">
          <div className="p-4">
            <h4 className="font-medium text-gray-900 dark:text-white mb-4">Served Counties</h4>
            <div className="space-y-1">
              {sortedLocations.map((location) => (
                <div
                  key={location.id}
                  className={`p-3 rounded-md transition-all cursor-pointer
                    ${selectedLocation === location.id 
                      ? 'bg-primary-50 dark:bg-primary-900/20 border-l-4 border-primary-500' 
                      : 'hover:bg-gray-100 dark:hover:bg-neutral-750'}
                  `}
                  onClick={() => setSelectedLocation(location.id === selectedLocation ? null : location.id)}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      {location.name}
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200">
                      {location.count} sites
                    </span>
                  </div>
                  
                  {selectedLocation === location.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-700 text-sm"
                    >
                      <div className="flex justify-between text-gray-600 dark:text-gray-400 mb-1">
                        <span>Collection Points:</span>
                        <span>{location.count}</span>
                      </div>
                      <div className="flex justify-between text-gray-600 dark:text-gray-400">
                        <span>Partner Organizations:</span>
                        <span>{location.partners}</span>
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Action Footer */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-neutral-850 flex justify-between items-center">
        <span className="text-gray-600 dark:text-gray-400 text-sm">
          {locations.length} counties covered
        </span>
        <button className="px-3 py-1 text-sm bg-primary-500 hover:bg-primary-600 text-white rounded-md transition-colors">
          View All Locations
        </button>
      </div>
    </div>
  );
};

export default CoverageMap;
