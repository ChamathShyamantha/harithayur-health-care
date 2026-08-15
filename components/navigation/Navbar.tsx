import Image from "next/image";
import Link from "next/link";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { NavLinks } from "@/components/navigation/NavLinks";
import { siteConfig } from "@/data/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-6 md:pt-5">
      <Container className="!px-0">
        {/* Floating capsule. 64px tall, inside the 80px cap, one line at lg. */}
        <div className="flex h-16 items-center justify-between gap-6 rounded-pill border border-border-subtle bg-warm-white/80 px-4 shadow-[0_8px_30px_rgba(18,59,34,0.08)] backdrop-blur-xl md:px-6">
          <Link
            href="/"
            className="focus-ring flex shrink-0 items-center gap-3 rounded-pill"
            aria-label={`${siteConfig.name} home`}
          >
            <Image
              src={siteConfig.logo}
              alt=""
              width={80}
              height={80}
              priority
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="display text-[1.375rem] text-forest-deep md:text-2xl">
              {siteConfig.name}
            </span>
          </Link>

          <NavLinks />

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/products"
              aria-label="Search remedies"
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-full text-forest-deep transition-colors duration-200 hover:bg-cream"
            >
              <MagnifyingGlass size={17} aria-hidden />
            </Link>
            <WhatsAppButton label="Consult" />
          </div>

          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
