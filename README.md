This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Dark Mode Implementation

This project includes a complete dark mode implementation with the following features:

### Usage

- **Toggle Button**: Click the sun/moon icon in the navigation bar to switch between light and dark modes
- **Theme Selector**: Use the `<ThemeSelector />` component for more explicit theme selection
- **System Preference**: On first load, the theme will match the user's system preference
- **Persistence**: Theme choice is saved in localStorage

### Implementation Details

- **Tailwind Integration**: Uses Tailwind's `dark:` variant with `darkMode: 'class'` config
- **CSS Variables**: Custom CSS variables provide consistent theming 
- **Smooth Transitions**: Includes transitions for a smooth theme switch experience
- **No Flash of Wrong Theme**: Server/client hydration handled properly to prevent flash of wrong theme

### For Developers

To use dark mode in your components:

```tsx
// Use Tailwind's dark variant
<div className="bg-white dark:bg-neutral-900 text-black dark:text-white">
  Dark mode compatible content
</div>

// Access current theme in components
import { useTheme } from '@/context/ThemeContext';

function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div>
      Current theme: {theme}
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
}
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
