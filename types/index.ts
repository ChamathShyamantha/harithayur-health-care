export interface ProductBenefit {
  label: string;
}

export interface Product {
  slug: string;
  name: string;
  category: string;
  image: string;
  description: string;
  benefits: string[];
  ingredients: string[];
  howToUse: string[];
  philosophy: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  content?: string[];
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface ContactInformation {
  whatsappNumber: string;
  whatsappDisplay: string;
  email: string;
  businessHours: string;
  businessDays: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  logo: string;
  contact: ContactInformation;
  whatsappDefaultMessage: string;
  social: {
    label: string;
    href: string;
  }[];
}
