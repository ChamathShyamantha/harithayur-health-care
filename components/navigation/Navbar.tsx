import Image from "next/image";
import Link from "next/link";
import { MagnifyingGlass, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { mainNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 pt-4 px-4 md:pt-6 md:px-6">
      <Container className="!px-0">
        <div className="flex items-center justify-between gap-4 rounded-full border border-border-subtle bg-warm-white/80 backdrop-blur-md px-4 py-2 md:px-6 md:py-2.5 shadow-[0_4px_24px_rgba(18,59,34,0.06)]">
          <Link href="/" className="flex items-center gap-2 shrink-0" aria-label={`${siteConfig.name} home`}>
            <Image
              src={siteConfig.logo}
              alt={`${siteConfig.name} logo`}
              width={112}
              height={112}
              priority
              className="h-12 w-12 md:h-14 md:w-14 rounded-full object-cover"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-sm font-medium text-text-dark hover:text-forest transition-colors duration-200 after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-forest after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/products"
              aria-label="Search remedies"
              className="flex h-10 w-10 items-center justify-center rounded-full text-forest-deep hover:bg-cream transition-colors duration-200"
            >
              <MagnifyingGlass size={18} />
            </Link>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full text-forest-deep hover:bg-cream transition-colors duration-200"
            >
              <WhatsappLogo size={18} weight="fill" />
            </a>
            <WhatsAppButton />
          </div>

          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
