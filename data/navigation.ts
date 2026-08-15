import { NavigationItem } from "@/types";

// Labels are condensed so the bar holds one line at lg. "Our Heritage" is an anchor
// inside /about, so it lives in the footer rather than taking a top-level slot.
export const mainNavigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Remedies", href: "/products" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const footerQuickLinks: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Remedies", href: "/products" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const footerCompanyLinks: NavigationItem[] = [
  { label: "Our Heritage", href: "/about#heritage" },
  { label: "Certifications & Quality", href: "/about#heritage" },
  { label: "Sustainability", href: "/about#heritage" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];
