import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

/**
 * The hair and skin range, introduced through the three plants it is built on.
 *
 * Presented as herbarium sheets — specimen, Sinhala name, botanical binomial, use —
 * because that is a layout family the rest of the page does not use, and because it
 * is the honest way to introduce a range whose products are not all named yet. The
 * plants are real, the binomials are real, and nothing here claims an outcome.
 *
 * Sinhala first, Latin second, English third. In Sri Lanka these plants are known by
 * their Sinhala names in every household that uses them, and leading with karapincha
 * rather than "curry leaf" is the difference between a local practice and an export
 * product. It is also the one place on the site where the language itself does work.
 *
 * PLACEHOLDER ART throughout — see image-prompts/16 to 19. Every file in place is a
 * flat sage gradient at final dimensions, so the layout is finished; drop the real
 * photographs in at the same paths.
 */
const SPECIMENS = [
  {
    sinhala: "Karapincha",
    binomial: "Murraya koenigii",
    english: "Curry leaf",
    use: "Warmed into coconut oil for the scalp. The oldest hair preparation in the Sri Lankan kitchen, and still the most used.",
    image: "/assets/plant-karapincha.webp",
    alt: "Fresh curry leaf sprigs on a pale wooden surface",
  },
  {
    sinhala: "Keekirindiya",
    binomial: "Eclipta prostrata",
    english: "Bhringraj",
    use: "Pressed for the dark green oil that Ayurveda reaches for first where hair thins at the parting.",
    image: "/assets/plant-keekirindiya.webp",
    alt: "Small white-flowered bhringraj stems on undyed cloth",
  },
  {
    sinhala: "Kohomba",
    binomial: "Azadirachta indica",
    english: "Neem",
    use: "Bitter, cooling and cleansing. Works on scalp and skin alike, which is why it appears in both halves of the range.",
    image: "/assets/plant-kohomba.webp",
    alt: "Neem leaves and a small heap of ground neem powder",
  },
];

export function BeautyBand() {
  return (
    <section className="border-b border-sage-line py-20 md:py-28">
      <Container className="flex flex-col gap-14 md:gap-16">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
          <Reveal className="flex flex-col items-start gap-5 lg:col-span-7">
            <span className="eyebrow">Hair &amp; beauty</span>
            <h2 className="display text-[clamp(2rem,4vw,3.25rem)] text-forest-deep">
              Hair oil before shampoo, and three plants before either
            </h2>
          </Reveal>

          <Reveal
            delay={0.1}
            className="flex flex-col items-start gap-6 lg:col-span-5"
          >
            <p className="max-w-[46ch] text-[0.9375rem] leading-relaxed text-text-muted">
              Our hair and skin preparations come out of the same practice as
              the remedies: a handful of plants, prepared slowly, matched to the
              person. Oils, cleansers and balms, made in small batches.
            </p>
            <Button href="/contact" variant="secondary">
              Ask about the range
            </Button>
          </Reveal>
        </div>

        {/* The ritual, given the width it deserves. Hair oiling in Sri Lanka is
            something done for someone rather than to yourself, and a product shot
            cannot carry that. */}
        <Reveal>
          <figure className="flex flex-col gap-4">
            <div className="shape-capsule relative aspect-16/9 w-full overflow-hidden bg-sage-deep md:aspect-21/9">
              <Image
                src="/assets/beauty-ritual.webp"
                alt="A woman's long dark hair being sectioned and oiled by another pair of hands"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="max-w-[52ch] text-[0.8125rem] leading-relaxed text-text-muted">
              Oiling is done for someone, not to yourself. Most women who come to
              us learned it sitting on the floor in front of a mother or
              grandmother.
            </figcaption>
          </figure>
        </Reveal>

        <ul className="grid gap-10 md:grid-cols-3 md:gap-6">
          {SPECIMENS.map((s, index) => (
            <Reveal
              key={s.sinhala}
              as="li"
              delay={index * 0.08}
              className="flex flex-col gap-5"
            >
              <div className="shape-arch relative aspect-3/4 w-full overflow-hidden bg-sage-deep">
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 768px) 31vw, 92vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col gap-2.5 border-t border-sage-line pt-5">
                <h3 className="display text-[1.75rem] leading-none text-forest-deep">
                  {s.sinhala}
                </h3>
                <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="display text-[0.9375rem] italic text-botanical-ink">
                    {s.binomial}
                  </span>
                  <span className="eyebrow">{s.english}</span>
                </p>
                <p className="text-[0.875rem] leading-relaxed text-text-muted">
                  {s.use}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
