// Mock API interfaces for all data

// Declare gtag as a property on the window object for TypeScript
declare global {
  interface Window {
    gtag: (command: string, action: string, params?: any) => void;
  }
}

// Basic metrics data
interface MetricsData {
  wasteRecycled: number; // kg
  usersRegistered: number;
  rewardsGiven: number; // KES
  partners: number;
}

// Waste category breakdown data
interface WasteCategory {
  name: string;
  amount: number; // kg
  percentage: number;
  color: string;
}

// User rewards data
interface UserRewards {
  totalPoints: number;
  badges: Array<{
    id: string;
    name: string;
    icon: string;
    achieved: boolean;
    progress?: number;
    requirement: string;
  }>;
  milestones: Array<{
    id: string;
    name: string;
    points: number;
    reached: boolean;
  }>;
  statistics: {
    rank: string;
    wasteRecycled: number;
    rewardsEarned: number;
    monthlyProgress: { month: string; amount: number }[];
  };
}

// Partner directory data
interface Partner {
  id: string;
  name: string;
  logo: string;
  category: string;
  location: {
    city: string;
    country: string;
    coordinates: [number, number]; // [lat, lng]
  };
  description: string;
  contactInfo: {
    email?: string;
    phone?: string;
    website?: string;
  };
  specialties: string[];
}

// Media mention data
interface MediaMention {
  id: string;
  title: string;
  outlet: string;
  date: string;
  image: string;
  url: string;
  excerpt: string;
  type: 'news' | 'blog' | 'press' | 'video';
}

// Mock API service that simulates backend data fetching
export const api = {
  // Get metrics data with random variation to simulate live updates
  async getMetrics(): Promise<MetricsData> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Base values
    const baseMetrics = {
      wasteRecycled: 350000,
      usersRegistered: 5200,
      rewardsGiven: 120000,
      partners: 45,
    };
    
    // Add some random variation to simulate "live" data
    return {
      wasteRecycled: Math.floor(baseMetrics.wasteRecycled + Math.random() * 5000),
      usersRegistered: Math.floor(baseMetrics.usersRegistered + Math.random() * 50),
      rewardsGiven: Math.floor(baseMetrics.rewardsGiven + Math.random() * 2000),
      partners: Math.floor(baseMetrics.partners + Math.random() * 3),
    };
  },
  
  // Get waste category breakdown data
  async getWasteCategories(timePeriod: string = 'all'): Promise<WasteCategory[]> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 600));
    
    // Base categories with different proportions based on time period
    const categories = [
      {
        name: 'Plastic',
        color: '#3B82F6',
        basePercentage: timePeriod === 'month' ? 45 : timePeriod === 'quarter' ? 42 : 40
      },
      {
        name: 'Paper',
        color: '#10B981',
        basePercentage: timePeriod === 'month' ? 25 : timePeriod === 'quarter' ? 28 : 30
      },
      {
        name: 'Glass',
        color: '#6366F1',
        basePercentage: timePeriod === 'month' ? 15 : timePeriod === 'quarter' ? 14 : 12
      },
      {
        name: 'Metal',
        color: '#F59E0B',
        basePercentage: timePeriod === 'month' ? 10 : timePeriod === 'quarter' ? 11 : 13
      },
      {
        name: 'E-waste',
        color: '#EC4899',
        basePercentage: timePeriod === 'month' ? 5 : timePeriod === 'quarter' ? 5 : 5
      }
    ];
    
    // Calculate total waste for the categories
    const totalWaste = 350000; // kg
    
    return categories.map(category => {
      // Add small random variation to percentages
      const variation = (Math.random() - 0.5) * 2;
      const percentage = Math.max(1, category.basePercentage + variation);
      const amount = Math.floor((percentage / 100) * totalWaste);
      
      return {
        name: category.name,
        amount,
        percentage,
        color: category.color
      };
    });
  },
  
  // Get user rewards and gamification data
  async getUserRewards(): Promise<UserRewards> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 700));
    
    return {
      totalPoints: 2350,
      badges: [
        {
          id: 'eco-warrior',
          name: 'Eco Warrior',
          icon: '🌱',
          achieved: true,
          requirement: 'Recycle 10 kg of waste'
        },
        {
          id: 'plastic-crusher',
          name: 'Plastic Crusher',
          icon: '♻️',
          achieved: true,
          requirement: 'Recycle 50 kg of plastic'
        },
        {
          id: 'consistent-recycler',
          name: 'Consistent Recycler',
          icon: '📆',
          achieved: false,
          progress: 70,
          requirement: 'Recycle for 30 consecutive days'
        },
        {
          id: 'community-leader',
          name: 'Community Leader',
          icon: '👑',
          achieved: false,
          progress: 40,
          requirement: 'Refer 5 friends to the platform'
        }
      ],
      milestones: [
        {
          id: 'milestone-1',
          name: '100kg Recycled',
          points: 500,
          reached: true
        },
        {
          id: 'milestone-2',
          name: '500kg Recycled',
          points: 1500,
          reached: false
        },
        {
          id: 'milestone-3',
          name: '10 Collection Scheduled',
          points: 350,
          reached: true
        }
      ],
      statistics: {
        rank: 'Silver',
        wasteRecycled: 235,
        rewardsEarned: 1200,
        monthlyProgress: [
          { month: 'Jan', amount: 35 },
          { month: 'Feb', amount: 42 },
          { month: 'Mar', amount: 38 },
          { month: 'Apr', amount: 50 },
          { month: 'May', amount: 70 }
        ]
      }
    };
  },
  
  // Get partner directory data with filtering capabilities
  async getPartners(filters: { category?: string, location?: string, search?: string } = {}): Promise<Partner[]> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const allPartners: Partner[] = [
      {
        id: 'partner-1',
        name: 'EcoRecycle Solutions',
        logo: '/placeholder-logo.svg',
        category: 'Collection Agency',
        location: {
          city: 'Nairobi',
          country: 'Kenya',
          coordinates: [-1.2921, 36.8219]
        },
        description: 'Leading waste collection agency specializing in residential and commercial recycling services.',
        contactInfo: {
          email: 'info@ecorecycle.example.com',
          phone: '+254-700-000-001',
          website: 'https://ecorecycle.example.com'
        },
        specialties: ['Plastic', 'Paper', 'Metal']
      },
      {
        id: 'partner-2',
        name: 'GreenTech Materials',
        logo: '/placeholder-logo.svg',
        category: 'Waste Buyer',
        location: {
          city: 'Mombasa',
          country: 'Kenya',
          coordinates: [-4.0435, 39.6682]
        },
        description: 'Purchases recycled materials to create new sustainable products and packaging.',
        contactInfo: {
          email: 'procurement@greentech.example.com',
          website: 'https://greentech.example.com'
        },
        specialties: ['Plastic', 'Textiles']
      },
      {
        id: 'partner-3',
        name: 'Circular Economy Foundation',
        logo: '/placeholder-logo.svg',
        category: 'Organization',
        location: {
          city: 'Nairobi',
          country: 'Kenya',
          coordinates: [-1.3031, 36.8262]
        },
        description: 'Non-profit dedicated to promoting circular economy principles across Kenya.',
        contactInfo: {
          email: 'contact@circulareconomy.example.org',
          phone: '+254-700-000-003',
          website: 'https://circulareconomy.example.org'
        },
        specialties: ['Education', 'Community Outreach', 'Policy']
      },
      {
        id: 'partner-4',
        name: 'WasteTech Innovations',
        logo: '/placeholder-logo.svg',
        category: 'Collection Agency',
        location: {
          city: 'Eldoret',
          country: 'Kenya',
          coordinates: [0.5143, 35.2698]
        },
        description: 'Technology-driven waste collection service with real-time tracking and efficient sorting.',
        contactInfo: {
          email: 'operations@wastetech.example.com',
          phone: '+254-700-000-004',
          website: 'https://wastetech.example.com'
        },
        specialties: ['E-waste', 'Plastic', 'Glass']
      },
      {
        id: 'partner-5',
        name: 'Eco-Packaging Industries',
        logo: '/placeholder-logo.svg',
        category: 'Waste Buyer',
        location: {
          city: 'Nakuru',
          country: 'Kenya',
          coordinates: [-0.2833, 36.0667]
        },
        description: 'Transforms recycled paper and plastic into eco-friendly packaging solutions.',
        contactInfo: {
          email: 'sales@ecopackaging.example.com',
          website: 'https://ecopackaging.example.com'
        },
        specialties: ['Paper', 'Plastic']
      }
    ];
    
    // Apply filters
    return allPartners.filter(partner => {
      // Filter by category
      if (filters.category && partner.category !== filters.category) {
        return false;
      }
      
      // Filter by location
      if (filters.location && !partner.location.city.toLowerCase().includes(filters.location.toLowerCase())) {
        return false;
      }
      
      // Filter by search term
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        return (
          partner.name.toLowerCase().includes(searchTerm) ||
          partner.description.toLowerCase().includes(searchTerm) ||
          partner.specialties.some(s => s.toLowerCase().includes(searchTerm))
        );
      }
      
      return true;
    });
  },
  
  // Get media mentions with filtering capabilities
  async getMediaMentions(type?: 'news' | 'blog' | 'press' | 'video'): Promise<MediaMention[]> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 600));
    
    const allMentions: MediaMention[] = [
      {
        id: 'media-1',
        title: 'Konserve Leads Recycling Innovation in East Africa',
        outlet: 'Tech Africa Today',
        date: '2025-04-15',
        image: '/placeholder-pattern.svg',
        url: 'https://example.com/konserve-innovation',
        excerpt: 'Konserve\'s waste management platform is revolutionizing how organizations handle waste in Kenya...',
        type: 'news'
      },
      {
        id: 'media-2',
        title: 'Sustainable Solutions: The Konserve Story',
        outlet: 'Eco Business Journal',
        date: '2025-03-22',
        image: '/placeholder-pattern.svg',
        url: 'https://example.com/konserve-story',
        excerpt: 'How a small startup is making big environmental impacts across major African cities...',
        type: 'blog'
      },
      {
        id: 'media-3',
        title: 'Konserve Announces Partnership with National Environmental Agency',
        outlet: 'Business Daily',
        date: '2025-02-10',
        image: '/placeholder-pattern.svg',
        url: 'https://example.com/konserve-partnership',
        excerpt: 'The partnership aims to improve waste management infrastructure across Kenya...',
        type: 'press'
      },
      {
        id: 'media-4',
        title: 'Inside Konserve\'s Tech-Driven Approach to Waste Management',
        outlet: 'EcoTech TV',
        date: '2025-01-30',
        image: '/placeholder-pattern.svg',
        url: 'https://example.com/konserve-tech',
        excerpt: 'Watch our interview with the founders of Konserve as they demonstrate their innovative platform...',
        type: 'video'
      },
      {
        id: 'media-5',
        title: 'Konserve Receives Environmental Innovation Award 2025',
        outlet: 'Green Business Awards',
        date: '2025-05-05',
        image: '/placeholder-pattern.svg',
        url: 'https://example.com/konserve-award',
        excerpt: 'Konserve was recognized for its substantial contribution to sustainable waste management...',
        type: 'press'
      }
    ];
    
    // Apply type filter if provided
    if (type) {
      return allMentions.filter(mention => mention.type === type);
    }
    
    return allMentions;
  },
  
  // Generate and fetch impact report PDF data
  async getImpactReport(): Promise<{ url: string, fileSize: string }> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    // In a real implementation, this would generate and return a PDF URL
    return {
      url: '/sample-impact-report.pdf', // Would be a real PDF URL in production
      fileSize: '2.4 MB'
    };
  },
  
  // Submit contact form (mock)
  async submitContactForm(data: any): Promise<{success: boolean, message: string}> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulate successful submission
    return {
      success: true,
      message: 'Thank you for your message! We will get back to you soon.'
    };
  },
  
  // Track analytics event (would integrate with Google Analytics in production)
  trackEvent(category: string, action: string, label?: string, value?: number): void {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      });
    }
  }
};