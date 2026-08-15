import { siteConfig } from "@/data/site";

export function getWhatsAppUrl(message?: string): string {
  const number = siteConfig.contact.whatsappNumber.replace(/[^\d]/g, "");
  const text = encodeURIComponent(message ?? siteConfig.whatsappDefaultMessage);
  return `https://wa.me/${number}?text=${text}`;
}
