import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/dark-mode.css";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Konserve | Waste Management Platform",
  description: "Konserve connects Organizations, Collection Agencies, and Waste Buyers for efficient waste management and recycling.",
  keywords: "waste management, recycling, collection agencies, waste buyers, environmental impact",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
