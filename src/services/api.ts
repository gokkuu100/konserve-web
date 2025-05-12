// Mock API interface for metrics data
interface MetricsData {
  wasteRecycled: number; // kg
  usersRegistered: number;
  rewardsGiven: number; // KES
  partners: number;
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
}; 