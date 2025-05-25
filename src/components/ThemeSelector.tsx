'use client';

import { useTheme } from '@/context/ThemeContext';
import { useEffect, useState } from 'react';

interface ThemeSelectorProps {
  className?: string;
}

const ThemeSelector = ({ className = '' }: ThemeSelectorProps) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // After mounting, we can safely show the theme selector
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={`h-10 ${className}`} />; // Prevent layout shift
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <label htmlFor="theme-selector" className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
        Theme:
      </label>
      <select
        id="theme-selector"
        value={theme}
        onChange={(e) => setTheme(e.target.value as 'light' | 'dark')}
        className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md py-1.5 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 transition-colors"
        aria-label="Select theme"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="system" disabled>
          System (coming soon)
        </option>
      </select>
    </div>
  );
};

export default ThemeSelector;
