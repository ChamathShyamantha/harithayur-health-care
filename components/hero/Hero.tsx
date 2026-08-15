import Image from "next/image";
import Link from "next/link";
import { Flask, FlowerLotus, HandHeart, Leaf, Play } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const trustIndicators = [
  { icon: FlowerLotus, label: "Rooted in Ayurveda" },
  { icon: Leaf, label: "100% Natural Ingredients" },
  { icon: Flask, label: "Clinically Researched" },
  { icon: HandHeart, label: "Personalized for You" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-10 md:pb-24">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col items-start gap-6">
            <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-border-subtle bg-cream px-4 py-2 text-forest">
              <Leaf size={14} weight="fill" className="text-botanical" />
              Nature&apos;s Healing Touch
            </span>

            <h1 className="font-serif text-5xl leading-[1.15] text-forest-deep md:text-6xl lg:text-[4.25rem]">
              Ancient Wisdom
              <br />
              for <em className="text-botanical italic">Modern Wellness</em>
            </h1>

            <p className="max-w-[46ch] text-base leading-relaxed text-text-muted md:text-lg">
              Personalized Ayurvedic care, crafted by nature and rooted in
              centuries of healing traditions.
            </p>

            <div className="flex flex-wrap items-center gap-5 pt-2">
              <Button href="/products" variant="primary">
                Explore Remedies
              </Button>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 text-sm font-semibold text-forest-deep transition-colors duration-200 hover:text-forest"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-forest-deep/25">
                  <Play size={14} weight="fill" />
                </span>
                Our Philosophy
              </Link>
            </div>

            <dl className="mt-4 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-border-subtle pt-6 sm:grid-cols-4">
              {trustIndicators.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream text-forest">
                    <Icon size={18} />
                  </span>
                  <dt className="text-xs leading-snug text-text-muted">{label}</dt>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-tl-[6rem] rounded-tr-3xl rounded-br-3xl rounded-bl-3xl md:rounded-tl-[9rem] shadow-[0_30px_60px_rgba(18,59,34,0.14)]">
              <Image
                src="/assets/hero-ayurvedic-mortar.webp"
                alt="Traditional wooden mortar and pestle with fresh Ayurvedic herbs, roots and botanicals"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>

            <div className="absolute -top-4 right-4 flex w-36 flex-col items-center gap-1 rounded-3xl bg-warm-white px-5 py-5 text-center shadow-[0_16px_40px_rgba(18,59,34,0.16)] md:right-0 md:translate-x-6">
              <span className="font-serif text-4xl text-forest-deep">25+</span>
              <span className="text-xs leading-snug text-text-muted">
                Years of Ayurvedic Trust
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
