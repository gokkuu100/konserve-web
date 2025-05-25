module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Earth-tone color palette as specified in planning.md
        primary: {
          50: '#f4f7f3',
          100: '#e6ede4',
          200: '#cfdeca',
          300: '#b1c9a8',
          400: '#8aac7e',
          500: '#688e5c', // Main primary green
          600: '#507347',
          700: '#405c39',
          800: '#364b31',
          900: '#2d3f2a',
        },
        secondary: {
          50: '#f8f6f3',
          100: '#f0ebe2',
          200: '#e1d4c0',
          300: '#cdb499',
          400: '#b89173',
          500: '#a67755', // Earth brown
          600: '#8c5e43',
          700: '#734c38',
          800: '#5f3f31',
          900: '#50362b',
        },
        neutral: {
          50: '#f7f7f6',
          100: '#e9e8e6',
          200: '#d3d1ce',
          300: '#b5b2ad',
          400: '#918e87',
          500: '#7a756d', // Neutral earth tone
          600: '#615d57',
          700: '#4e4a45',
          800: '#413e3a',
          900: '#353432',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}