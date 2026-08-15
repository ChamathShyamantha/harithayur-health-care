import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Blob } from "@/components/ui/Blob";
import { Enter } from "@/components/motion/Enter";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-10 pb-20 md:pt-14 md:pb-28">
      {/* Two fields at different depths. The near one sits inside the left column so
          the empty side of the composition still carries weight. */}
      <Blob
        variant="a"
        drift
        className="-left-52 top-4 h-[36rem] w-[36rem] bg-warm-white md:-left-32"
      />
      <Blob
        variant="b"
        className="left-[2%] bottom-[-11rem] hidden h-[26rem] w-[26rem] bg-sage-deep/45 lg:block"
      />

      <Container>
        <div className="grid items-center gap-y-16 lg:grid-cols-12 lg:gap-x-12">
          {/* Entrance runs in the order the hero argues in: claim, then support,
              then the action. */}
          <div className="flex flex-col items-start gap-7 lg:col-span-6">
            <Enter>
              <h1 className="display text-[clamp(3rem,5.6vw,4.75rem)] text-forest-deep">
                Ancient wisdom
                <br />
                for{" "}
                <em className="pb-1 italic text-botanical">modern wellness</em>
              </h1>
            </Enter>

            <Enter delay={140}>
              <p className="max-w-[40ch] text-base leading-relaxed text-text-muted md:text-lg">
                Personalized Ayurvedic care, crafted by nature and rooted in
                centuries of healing traditions.
              </p>
            </Enter>

            <Enter delay={260}>
              <div className="flex flex-wrap items-center gap-4">
                <Button href="/products" variant="primary">
                  Explore Remedies
                  <ArrowRight size={15} aria-hidden />
                </Button>
                <Button href="/about" variant="secondary">
                  Our Philosophy
                </Button>
              </div>
            </Enter>
          </div>

          <Enter delay={180} className="relative lg:col-span-6">
            <div className="relative mx-auto w-full max-w-[27rem] lg:max-w-none">
              {/* Outline arch echoing the image, offset behind it. Gives the column
                  depth without another photograph competing for attention. */}
              <div
                aria-hidden
                className="shape-arch absolute -left-4 -top-4 h-full w-full border border-sage-line md:-left-6 md:-top-6"
              />
              {/* Petal field, drifting slowly so the layers breathe against each
                  other rather than sitting still. */}
              <div
                aria-hidden
                className="shape-leaf blob-drift absolute -right-5 -top-6 h-[74%] w-[82%] bg-botanical-light/45 md:-right-8"
              />

              {/* The arch reads as a doorway rather than a frame: the scene drifts
                  slowly inside it, warm light spills in from the upper left, leaf
                  shadows move across it, and an inner shadow gives the opening
                  depth. All decorative layers are transform and opacity only. */}
              <div className="shape-arch threshold relative aspect-4/5 max-h-[56vh] w-full overflow-hidden bg-sage-deep shadow-[0_24px_60px_rgba(18,59,34,0.16)]">
                <div className="ambient absolute inset-0">
                  <Image
                    src="/assets/hero-ayurvedic-mortar.webp"
                    alt="Traditional wooden mortar and pestle with fresh Ayurvedic herbs, roots and botanicals"
                    fill
                    priority
                    sizes="(min-width: 1024px) 46vw, 90vw"
                    className="object-cover"
                  />
                </div>
                <div aria-hidden className="dapple absolute -inset-8" />
                <div aria-hidden className="light-spill absolute inset-0" />
              </div>

              {/* Badge sits on the arch's edge, bridging the two columns. */}
              <div className="absolute -bottom-5 -left-3 flex h-28 w-28 flex-col items-center justify-center rounded-full bg-forest text-warm-white shadow-[0_14px_36px_rgba(18,59,34,0.28)] md:-left-8 md:h-32 md:w-32">
                <span className="display text-3xl md:text-4xl">25+</span>
                <span className="max-w-[7rem] px-2 text-center text-[0.625rem] leading-tight text-warm-white/80">
                  Years of Ayurvedic trust
                </span>
              </div>
            </div>
          </Enter>
        </div>
      </Container>
    </section>
  );
}
