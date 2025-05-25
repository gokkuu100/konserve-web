import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/dark-mode.css";
import { ThemeProvider } from "@/context/ThemeContext";
import StructuredData from "@/components/StructuredData";
import Analytics from "@/components/Analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Konserve | Waste Management Platform",
  description: "Konserve connects Organizations, Collection Agencies, and Waste Buyers for efficient waste management and recycling.",
  keywords: "waste management, recycling, collection agencies, waste buyers, environmental impact, eco-friendly, sustainability",
  authors: [{ name: "Konserve Team" }],
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    title: "Konserve | Waste Management Platform",
    description: "Connect with recycling partners and make an environmental impact with Konserve's waste management platform.",
    images: [
      {
        url: "/placeholder-logo.svg",
        width: 1200,
        height: 630,
        alt: "Konserve Logo",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Konserve | Waste Management Platform",
    description: "Connect with recycling partners and make an environmental impact with Konserve's waste management platform.",
    images: ["/placeholder-logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Script to avoid flashing of wrong theme on page load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  
                  if (theme === 'dark' || (!theme && systemPrefersDark)) {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.add('dark-mode');
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.remove('dark-mode');
                  }
                } catch (e) {
                  console.error('Theme initialization failed:', e);
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <StructuredData />
        <Analytics measurementId="G-XXXXXXXXXX" />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
