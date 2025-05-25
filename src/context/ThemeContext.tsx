'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Initialize theme from localStorage or system preference
  const [theme, setTheme] = useState<Theme>('light');
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // On component mount, read the initial theme preference
    try {
      const storedTheme = localStorage.getItem('theme') as Theme | null;
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      if (storedTheme === 'dark' || storedTheme === 'light') {
        setTheme(storedTheme);
      } else if (systemPrefersDark) {
        setTheme('dark');
      }
      
      // Mark as loaded after initial theme is set to prevent flickering
      setIsLoaded(true);
      
      // Set up listener for system preference changes
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e: MediaQueryListEvent) => {
        // Only update theme if user hasn't explicitly set a preference
        if (!localStorage.getItem('theme')) {
          setTheme(e.matches ? 'dark' : 'light');
        }
      };
      
      // Add listener with the correct API based on browser support
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', handleChange);
      } else {
        // Fallback for Safari < 14
        mediaQuery.addListener(handleChange);
      }
      
      return () => {
        if (mediaQuery.removeEventListener) {
          mediaQuery.removeEventListener('change', handleChange);
        } else {
          // Fallback for Safari < 14
          mediaQuery.removeListener(handleChange);
        }
      };
    } catch (error) {
      console.error('Error in theme initialization:', error);
      setIsLoaded(true);
      return () => {};
    }
  }, []);
  
  useEffect(() => {
    // Only apply theme after initial load to prevent hydration mismatch
    if (!isLoaded) return;
    
    // Update document when theme changes
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.add('dark-mode'); // For backward compatibility
    } else {
      root.classList.remove('dark');
      root.classList.remove('dark-mode');
    }
    
    // Store the preference
    localStorage.setItem('theme', theme);
  }, [theme, isLoaded]);
  
  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  
  const value = {
    theme,
    toggleTheme,
    setTheme,
  };
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}