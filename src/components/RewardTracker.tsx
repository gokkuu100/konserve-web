'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
  isEarned: boolean;
  progress: number;
  target: number;
}

interface UserStats {
  points: number;
  level: number;
  totalRecycled: number;
  streak: number;
  nextLevelPoints: number;
}

const RewardTracker = () => {
  const [badges, setBadges] = useState<Badge[]>([]);
  const [userStats, setUserStats] = useState<UserStats>({
    points: 0,
    level: 0,
    totalRecycled: 0,
    streak: 0,
    nextLevelPoints: 0
  });
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate fetching user rewards data
    const fetchRewards = async () => {
      // In a real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock data for demonstration
      const mockBadges: Badge[] = [
        {
          id: 'first-recycler',
          name: 'First Steps',
          icon: '🌱',
          description: 'Complete your first recycling pickup',
          isEarned: true,
          progress: 1,
          target: 1
        },
        {
          id: 'consistent-recycler',
          name: 'Consistency Champion',
          icon: '🔄',
          description: 'Complete 5 consecutive weeks of recycling',
          isEarned: true,
          progress: 5,
          target: 5
        },
        {
          id: 'plastic-hero',
          name: 'Plastic Hero',
          icon: '♻️',
          description: 'Recycle 50kg of plastic waste',
          isEarned: false,
          progress: 32,
          target: 50
        },
        {
          id: 'community-influencer',
          name: 'Community Influencer',
          icon: '👥',
          description: 'Refer 3 friends who complete their first pickup',
          isEarned: false,
          progress: 1,
          target: 3
        },
        {
          id: 'eco-warrior',
          name: 'Eco Warrior',
          icon: '🛡️',
          description: 'Recycle 100kg of mixed waste materials',
          isEarned: false,
          progress: 87,
          target: 100
        }
      ];
      
      const mockUserStats: UserStats = {
        points: 420,
        level: 3,
        totalRecycled: 87,
        streak: 5,
        nextLevelPoints: 500
      };
      
      setBadges(mockBadges);
      setUserStats(mockUserStats);
      setIsLoading(false);
    };
    
    fetchRewards();
  }, []);
  
  if (isLoading) {
    return (
      <div className="flex justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }
  
  return (
    <section id="rewards" className="py-20 bg-gray-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Your Recycling Journey
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Track your impact, earn badges, and compete with others in your community.
          </p>
        </motion.div>
        
        {/* User Stats Card */}
        <motion.div 
          className="mb-12 bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-700">
            <div className="p-6 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Level</p>
              <div className="text-4xl font-bold text-primary-500 mb-1">{userStats.level}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Next level: {userStats.points}/{userStats.nextLevelPoints} points
              </div>
              <div className="mt-2 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary-500 rounded-full" 
                  style={{ width: `${(userStats.points / userStats.nextLevelPoints) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="p-6 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Points</p>
              <div className="text-4xl font-bold text-primary-500">{userStats.points}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Total points earned</div>
            </div>
            <div className="p-6 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Recycled</p>
              <div className="text-4xl font-bold text-primary-500">{userStats.totalRecycled}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Kilograms</div>
            </div>
            <div className="p-6 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Streak</p>
              <div className="text-4xl font-bold text-primary-500">{userStats.streak}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Weekly pickups</div>
            </div>
            <div className="p-6 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Rank</p>
              <div className="text-4xl font-bold text-primary-500">12</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">In your community</div>
            </div>
          </div>
        </motion.div>
        
        {/* Badges */}
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Your Badges</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {badges.map((badge, index) => (
            <motion.div 
              key={badge.id}
              className={`p-6 rounded-xl shadow-md transition-all ${
                badge.isEarned 
                  ? 'bg-white dark:bg-neutral-800' 
                  : 'bg-gray-100 dark:bg-neutral-850 opacity-75'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className={`text-4xl mr-3 ${badge.isEarned ? '' : 'grayscale opacity-50'}`}>
                  {badge.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {badge.name}
                    {badge.isEarned && (
                      <span className="ml-2 text-sm font-normal text-green-600 dark:text-green-400">
                        ✓ Earned
                      </span>
                    )}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{badge.description}</p>
                </div>
              </div>
              <div className="mt-2">
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                  <span>Progress</span>
                  <span>{badge.progress}/{badge.target}</span>
                </div>
                <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${
                      badge.isEarned ? 'bg-green-500 dark:bg-green-400' : 'bg-primary-500'
                    }`}
                    style={{ width: `${(badge.progress / badge.target) * 100}%` }}
                  ></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg">
            View All Achievements
          </button>
        </div>
      </div>
    </section>
  );
};

export default RewardTracker;
