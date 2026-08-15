import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Harithayur",
  tagline: "Ancient Wisdom for Modern Wellness",
  description:
    "Personalized Ayurvedic care, crafted by nature and rooted in centuries of healing traditions.",
  url: process.env.NEXT_PUBLIC_API_URL ?? "https://harithayur.com",
  logo: "/assets/harithayur-logo.png",
  contact: {
    whatsappNumber: "+94771234567",
    whatsappDisplay: "+94 77 123 4567",
    email: "info@harithayur.com",
    businessHours: "8:00 AM - 6:00 PM",
    businessDays: "Mon - Sat",
  },
  whatsappDefaultMessage:
    "Hello Harithayur, I would like to consult about your Ayurvedic remedies.",
  social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ],
};
