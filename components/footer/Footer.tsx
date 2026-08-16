import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { FacebookLogo, InstagramLogo, YoutubeLogo } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { footerCompanyLinks, footerQuickLinks } from "@/data/navigation";
import { siteConfig } from "@/data/site";

const socialIcons = {
  Instagram: InstagramLogo,
  Facebook: FacebookLogo,
  YouTube: YoutubeLogo,
};

export function Footer() {
  return (
    <footer className="surface-dark curve-top mt-4 bg-forest-deep text-warm-white/90">
      <Container>
        {/* Oversized wordmark closes the page. Cheaper than another band, and it is the
            last thing the eye holds — so it arrives rather than sitting there. The
            letters set themselves one after another as the footer scrolls up and the
            rule draws in beneath them; see the closing wordmark block in globals.css.

            Split per letter and hidden from assistive tech. The name is already
            announced by the logo link directly below, and a screen reader handed ten
            inline-block spans will sometimes spell a word out one letter at a time. */}
        <div className="wordmark relative py-14 md:py-16">
          <p
            aria-hidden
            className="display text-[clamp(3.5rem,13vw,11rem)] leading-[0.85] text-warm-white/[0.18]"
          >
            {[...siteConfig.name].map((letter, index) => (
              <span
                key={`${letter}-${index}`}
                className="wordmark-letter inline-block"
                style={
                  {
                    "--letter-from": `${index * 5}%`,
                    "--letter-to": `${index * 5 + 40}%`,
                  } as CSSProperties
                }
              >
                {letter}
              </span>
            ))}
          </p>
          {/* Was a border-b. A border cannot be drawn on, so it is a span that
              scales from its left edge instead. */}
          <span
            aria-hidden
            className="wordmark-rule absolute inset-x-0 bottom-0 h-px origin-left bg-warm-white/10"
          />
        </div>

        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div className="flex flex-col items-start gap-5">
            <Link
              href="/"
              className="focus-ring flex w-fit items-center gap-3 rounded-pill"
              aria-label={`${siteConfig.name} home`}
            >
              <Image
                src={siteConfig.logo}
                alt=""
                width={80}
                height={80}
                className="h-9 w-9 rounded-full object-cover"
              />
              <span className="display text-xl text-warm-white">{siteConfig.name}</span>
            </Link>
            <p className="max-w-[30ch] text-sm leading-relaxed text-warm-white/70">
              Ancient wisdom. Pure ingredients. Personalized wellness.
            </p>
            <div className="flex items-center gap-2 pt-1">
              {siteConfig.social.map((item) => {
                const Icon = socialIcons[item.label as keyof typeof socialIcons];
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-warm-white/20 text-warm-white/80 transition-colors duration-200 hover:border-lichen hover:text-lichen"
                  >
                    <Icon size={16} aria-hidden />
                  </a>
                );
              })}
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="eyebrow mb-6 text-lichen">Explore</h2>
            {/* py-2 rather than a larger gap: the links keep their vertical rhythm
                but each one carries a 36px hit area, which is a thumb target
                rather than a 20px line of text. */}
            <ul className="flex flex-col gap-1">
              {footerQuickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="focus-ring inline-block rounded-pill py-2 text-sm text-warm-white/75 transition-colors duration-200 hover:text-lichen"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company links">
            <h2 className="eyebrow mb-6 text-lichen">Company</h2>
            <ul className="flex flex-col gap-1">
              {footerCompanyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="focus-ring inline-block rounded-pill py-2 text-sm text-warm-white/75 transition-colors duration-200 hover:text-lichen"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col items-start gap-4">
            <h2 className="eyebrow text-lichen">Consultation</h2>
            <p className="display text-2xl text-warm-white">
              Talk to our Ayurvedic experts
            </p>
            <a
              href={`tel:${siteConfig.contact.whatsappNumber}`}
              className="focus-ring -my-1 rounded-pill py-2 text-sm text-warm-white/75 transition-colors duration-200 hover:text-lichen"
            >
              {siteConfig.contact.whatsappDisplay}
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="focus-ring -my-1 rounded-pill py-2 text-sm text-warm-white/75 transition-colors duration-200 hover:text-lichen"
            >
              {siteConfig.contact.email}
            </a>
            <p className="text-sm text-warm-white/70">
              {siteConfig.contact.businessDays}, {siteConfig.contact.businessHours}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-warm-white/10 py-7 text-xs text-warm-white/65 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <div className="-my-2 flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="focus-ring rounded-pill py-2 transition-colors duration-200 hover:text-lichen"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="focus-ring rounded-pill py-2 transition-colors duration-200 hover:text-lichen"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
