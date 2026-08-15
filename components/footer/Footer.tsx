import Image from "next/image";
import Link from "next/link";
import { FacebookLogo, InstagramLogo, YoutubeLogo } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { footerCompanyLinks, footerQuickLinks } from "@/data/navigation";
import { siteConfig } from "@/data/site";

const socialIcons = {
  Instagram: InstagramLogo,
  Facebook: FacebookLogo,
  YouTube: YoutubeLogo,
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest-deep text-warm-white/90">
      <svg
        aria-hidden
        viewBox="0 0 200 200"
        className="pointer-events-none absolute -right-10 -bottom-16 h-72 w-72 text-warm-white/5 md:h-96 md:w-96"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M100 190C60 150 40 110 100 20C160 110 140 150 100 190Z" />
        <path d="M100 190V60" />
        <path d="M100 100C130 90 150 70 155 45" />
        <path d="M100 120C70 110 50 90 45 65" />
      </svg>

      <Container className="relative py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src={siteConfig.logo}
                alt={`${siteConfig.name} logo`}
                width={80}
                height={80}
                className="h-11 w-11 rounded-full object-cover"
              />
              <span className="font-serif text-2xl text-warm-white">{siteConfig.name}</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-warm-white/70">
              Ancient wisdom. Pure ingredients. Personalized wellness.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {siteConfig.social.map((item) => {
                const Icon = socialIcons[item.label as keyof typeof socialIcons];
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-warm-white/20 text-warm-white/80 transition-colors duration-200 hover:bg-warm-white/10"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="eyebrow mb-5 text-botanical-light">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {footerQuickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-warm-white/75 transition-colors duration-200 hover:text-warm-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-5 text-botanical-light">Company</h3>
            <ul className="flex flex-col gap-3">
              {footerCompanyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-warm-white/75 transition-colors duration-200 hover:text-warm-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-warm-white/15 bg-warm-white/5 p-6">
            <h3 className="font-serif text-xl text-warm-white mb-2">
              Talk to Our Ayurvedic Experts
            </h3>
            <p className="text-sm text-warm-white/70 mb-5">{siteConfig.contact.whatsappDisplay}</p>
            <WhatsAppButton label="Chat on WhatsApp" className="w-full" />
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-warm-white/10 pt-6 text-xs text-warm-white/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-warm-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-warm-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
