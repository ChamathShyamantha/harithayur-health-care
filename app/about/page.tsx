import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: { absolute: "About Harithayur | Rooted in Ayurvedic Tradition" },
  description:
    "Harithayur is dedicated to reviving ancient Ayurvedic knowledge through carefully crafted natural wellness solutions.",
};

const stats = [
  { value: "25+", label: "Years of experience" },
  { value: "100%", label: "Natural Ayurvedic approach" },
  { value: "Zero", label: "Synthetic fillers" },
  { value: "Hela", label: "Wedakama lineage" },
];

const values = [
  "Integrity",
  "Sustainability",
  "Authenticity",
  "Care",
  "Well-being",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Harithayur"
        heading="Healing the world, the natural way."
        description="Four generations of practice, one way of working: identify the imbalance, then treat the person rather than the symptom."
      />

      <section className="pb-4">
        <Container>
          <div className="shape-capsule relative aspect-16/9 w-full overflow-hidden bg-sage-deep md:aspect-21/9">
            <Image
              src="/assets/about-heritage.webp"
              alt="Traditional Ayurvedic preparations arranged on a wooden apothecary shelf"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="border-b border-sage-line py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-6">
              <h2 className="display text-[clamp(2rem,3.6vw,3rem)] text-forest-deep">
                Reviving ancient wisdom for modern life
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="flex flex-col gap-5 lg:col-span-6">
              <p className="text-[0.9375rem] leading-relaxed text-text-muted">
                Harithayur is dedicated to reviving ancient Ayurvedic knowledge
                through carefully crafted natural wellness solutions, bridging
                generations of healing tradition with the needs of modern living.
              </p>
              <p className="text-[0.9375rem] leading-relaxed text-text-muted">
                Nothing leaves our workshop that a practitioner has not put their
                name to. That is the whole of our quality process, and it has not
                changed in the time we have been doing this.
              </p>
            </Reveal>
          </div>

          <dl className="mt-16 grid grid-cols-2 lg:mt-24 lg:grid-cols-4">
            {stats.map((item, index) => (
              <Reveal
                key={item.label}
                delay={index * 0.06}
                className={`flex flex-col gap-2 border-t border-sage-line py-8 ${
                  index % 2 === 1 ? "border-l pl-6" : "pr-6"
                } ${index === 2 ? "lg:border-l lg:pl-6" : ""}`}
              >
                <dt className="display text-[1.75rem] leading-none text-botanical md:text-[2.25rem]">
                  {item.value}
                </dt>
                <dd className="text-[0.8125rem] leading-snug text-text-muted">
                  {item.label}
                </dd>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      <section
        id="heritage"
        className="scroll-mt-24 border-b border-sage-line py-20 md:py-28"
      >
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-6">
              <div className="relative shape-leaf aspect-4/3 w-full overflow-hidden bg-sage-deep">
                <Image
                  src="/assets/blog-hela-wedakama.webp"
                  alt="Rain-wet tropical foliage and a traditional clay vessel"
                  fill
                  sizes="(min-width: 1024px) 48vw, 92vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal
              delay={0.1}
              className="flex flex-col items-start gap-5 lg:col-span-6"
            >
              <span className="eyebrow">Our Heritage</span>
              <h2 className="display text-[clamp(2rem,3.6vw,3rem)] text-forest-deep">
                Rooted in Sri Lankan Ayurvedic tradition
              </h2>
              <p className="max-w-[46ch] text-[0.9375rem] leading-relaxed text-text-muted">
                Our approach draws deeply from traditional Ayurvedic knowledge and
                Sri Lankan heritage, honouring the indigenous practice of Hela
                Wedakama passed down through generations of healers.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-b border-sage-line py-20 md:py-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <Reveal className="flex flex-col gap-4 border-t border-sage-line pt-8">
              <h2 className="display text-[clamp(1.75rem,2.8vw,2.25rem)] text-forest-deep">
                To be a trusted leader in natural healthcare
              </h2>
              <p className="max-w-[42ch] text-[0.9375rem] leading-relaxed text-text-muted">
                Through authentic Ayurvedic experience, practised properly rather
                than borrowed as a marketing language.
              </p>
            </Reveal>
            <Reveal
              delay={0.1}
              className="flex flex-col gap-4 border-t border-sage-line pt-8"
            >
              <h2 className="display text-[clamp(1.75rem,2.8vw,2.25rem)] text-forest-deep">
                Natural, safe and effective wellness
              </h2>
              <p className="max-w-[42ch] text-[0.9375rem] leading-relaxed text-text-muted">
                To provide wellness solutions rooted in authentic Ayurvedic
                knowledge, with every ingredient accounted for.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="surface-dark rounded-plush bg-forest px-8 py-14 md:px-14 md:py-16">
            <ul className="flex flex-wrap items-baseline gap-x-10 gap-y-4">
              {values.map((value, index) => (
                <Reveal
                  key={value}
                  as="li"
                  delay={index * 0.05}
                  className="display text-[clamp(1.5rem,3.4vw,2.75rem)] text-warm-white"
                >
                  {value}
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <Reveal>
            <p className="display max-w-[20ch] text-[clamp(2.25rem,5vw,4rem)] text-forest-deep">
              Honest products. Transparent practices. Better lives naturally.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
