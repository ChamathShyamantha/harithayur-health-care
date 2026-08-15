import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Blob } from "@/components/ui/Blob";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Four items, four cells, unequal spans, every cell carrying a photograph.
 *
 * Two treatments rather than one, so the grid does not read as four identical dark
 * cards: the two tall cells sink under a forest gradient and carry pale text, the two
 * short cells lift under a warm scrim and carry dark text. Each photograph was shot
 * with the copy area left deliberately empty, so the scrim only has to do a little
 * work and the image stays legible underneath.
 */
const TILES = [
  {
    title: "Holistic healing",
    body: "Treating the root cause, not just the symptoms.",
    image: "/assets/blog-hela-wedakama.webp",
    span: "lg:col-span-7",
    tone: "dark" as const,
    position: "50% 50%",
  },
  {
    title: "Personalized care",
    body: "Every individual is unique, so is our approach.",
    image: "/assets/benefit-personalized.webp",
    span: "lg:col-span-5",
    tone: "dark" as const,
    // Hands sit centre-left in the source; nudge them up into the clear zone.
    position: "45% 35%",
  },
  {
    title: "Trusted by thousands",
    body: "Join our community of health-conscious individuals.",
    image: "/assets/benefit-trusted.webp",
    span: "lg:col-span-5",
    tone: "light" as const,
    position: "50% 72%",
  },
  {
    title: "Sustainable wellness",
    body: "Balanced living for a healthier body, mind and soul.",
    image: "/assets/benefit-sustainable.webp",
    span: "lg:col-span-7",
    tone: "light" as const,
    position: "22% 40%",
  },
];

export function BenefitsStrip() {
  return (
    <section className="relative isolate overflow-hidden py-20 md:py-28">
      <Blob
        variant="b"
        className="-right-48 top-32 h-[30rem] w-[30rem] bg-warm-white"
      />

      <Container>
        <SectionHeading
          heading="Care that treats the whole person"
          description="Ayurveda does not chase symptoms. It looks for what put the body out of balance, then works patiently to restore it."
          className="mb-14 md:mb-20"
        />

        <div className="grid gap-4 lg:grid-cols-12">
          {TILES.map((tile, index) => {
            const dark = tile.tone === "dark";
            return (
              <Reveal
                key={tile.title}
                delay={index * 0.06}
                className={`relative flex flex-col justify-end overflow-hidden rounded-plush p-8 md:p-10 ${tile.span} ${
                  dark ? "min-h-[380px]" : "min-h-[320px]"
                }`}
              >
                <Image
                  src={tile.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 58vw, 92vw"
                  style={{ objectPosition: tile.position }}
                  className="object-cover"
                />
                <div
                  aria-hidden
                  /* Solid where the text sits, clearing quickly above it so the
                     photograph is actually visible rather than washed flat. */
                  className={`absolute inset-0 ${
                    dark
                      ? "bg-linear-to-t from-forest-deep/92 from-5% via-forest-deep/45 via-38% to-transparent to-62%"
                      : "bg-linear-to-t from-warm-white from-5% via-warm-white/90 via-32% to-transparent to-55%"
                  }`}
                />
                <div className="relative flex flex-col gap-3">
                  <h3
                    className={`display text-3xl md:text-4xl ${
                      dark ? "text-warm-white" : "text-forest-deep"
                    }`}
                  >
                    {tile.title}
                  </h3>
                  <p
                    className={`max-w-[38ch] text-sm leading-relaxed ${
                      dark ? "text-warm-white/80" : "text-text-muted"
                    }`}
                  >
                    {tile.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
