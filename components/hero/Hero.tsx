import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Blob } from "@/components/ui/Blob";
import { Reveal } from "@/components/motion/Reveal";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-10 pb-20 md:pt-14 md:pb-28">
      <Blob
        variant="a"
        className="-left-40 top-10 h-[34rem] w-[34rem] bg-cream md:-left-24"
      />

      <Container>
        <div className="grid items-center gap-y-16 lg:grid-cols-12 lg:gap-x-14">
          <div className="flex flex-col items-start gap-7 lg:col-span-6">
            <Reveal>
              <h1 className="display text-[clamp(2.75rem,5vw,4.25rem)] text-forest-deep">
                Ancient wisdom
                <br />
                for{" "}
                <em className="pb-1 italic text-botanical">modern wellness</em>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="max-w-[42ch] text-[0.9375rem] leading-relaxed text-text-muted md:text-base">
                Personalized Ayurvedic care, crafted by nature and rooted in
                centuries of healing traditions.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="flex flex-wrap items-center gap-4">
                <Button href="/products" variant="primary">
                  Explore Remedies
                  <ArrowRight size={15} aria-hidden />
                </Button>
                <Button href="/about" variant="secondary">
                  Our Philosophy
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="relative lg:col-span-6">
            {/* Arch-masked hero image with a petal-shaped field behind it, offset
                so the two shapes read as layered rather than stacked. */}
            <div
              aria-hidden
              className="shape-leaf absolute -right-6 -top-8 h-[78%] w-[86%] bg-botanical-light/45 md:-right-10"
            />
            <div className="shape-arch relative mx-auto aspect-4/5 w-full max-h-[62vh] max-w-[30rem] overflow-hidden bg-cream shadow-[0_24px_60px_rgba(18,59,34,0.16)] lg:max-w-none">
              <Image
                src="/assets/hero-ayurvedic-mortar.webp"
                alt="Traditional wooden mortar and pestle with fresh Ayurvedic herbs, roots and botanicals"
                fill
                priority
                sizes="(min-width: 1024px) 46vw, 90vw"
                className="object-cover"
              />
            </div>

            {/* Circular badge breaking the arch's edge. */}
            <div className="absolute -bottom-4 left-0 flex h-28 w-28 flex-col items-center justify-center rounded-full bg-forest text-warm-white shadow-[0_14px_36px_rgba(18,59,34,0.28)] md:left-4 md:h-32 md:w-32">
              <span className="display text-3xl md:text-4xl">25+</span>
              <span className="max-w-[7rem] px-2 text-center text-[0.625rem] leading-tight text-warm-white/80">
                Years of Ayurvedic trust
              </span>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
