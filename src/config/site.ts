// Site configuration settings

interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    instagram: string;
    linkedin: string;
    facebook: string;
  };
  contacts: {
    email: string;
    phone: string;
    address: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Konserve",
  title: "Konserve | Waste Management Platform",
  description: "Konserve connects Organizations, Collection Agencies, and Waste Buyers for efficient waste management and recycling.",
  url: "https://konserve.example.com",
  ogImage: "/placeholder-logo.svg",
  links: {
    twitter: "https://twitter.com/konserve",
    instagram: "https://instagram.com/konserve",
    linkedin: "https://www.linkedin.com/company/konserve",
    facebook: "https://facebook.com/konserve",
  },
  contacts: {
    email: "info@konserve.example.com",
    phone: "+254-000-000-000",
    address: "Nairobi, Kenya",
  },
};
