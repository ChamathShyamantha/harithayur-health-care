import type { Metadata } from "next";
import Image from "next/image";
import {
  FlowerLotus,
  HandHeart,
  Heart,
  Leaf,
  Plant,
  ShieldCheck,
  Sun,
} from "@phosphor-icons/react/dist/ssr";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: { absolute: "About Harithayur | Rooted in Ayurvedic Tradition" },
  description:
    "Harithayur is dedicated to reviving ancient Ayurvedic knowledge through carefully crafted natural wellness solutions.",
};

const stats = [
  { icon: FlowerLotus, label: "25+ Years of Experience" },
  { icon: Leaf, label: "100% Natural Ayurvedic Approach" },
  { icon: Plant, label: "Sustainable Practices" },
  { icon: ShieldCheck, label: "Authentic Ayurvedic Wisdom" },
];

const values = [
  { icon: ShieldCheck, label: "Integrity" },
  { icon: Leaf, label: "Sustainability" },
  { icon: Heart, label: "Authenticity" },
  { icon: HandHeart, label: "Care" },
  { icon: Sun, label: "Well-being" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Harithayur"
        heading="Healing the world, the natural way."
      />

      <section className="pb-16 md:pb-20">
        <Container>
          <div className="relative mx-auto aspect-[16/10] w-full max-w-5xl overflow-hidden rounded-[32px]">
            <Image
              src="/assets/hero-ayurvedic-mortar.webp"
              alt="Traditional wooden mortar and pestle with Ayurvedic herbs and botanicals"
              fill
              priority
              sizes="(min-width: 1024px) 70vw, 90vw"
              className="object-cover object-right"
            />
          </div>
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col gap-4 text-center">
            <span className="eyebrow text-botanical">Our Story</span>
            <h2 className="font-serif text-3xl text-forest-deep md:text-4xl">
              Reviving ancient wisdom for modern life
            </h2>
            <p className="text-base leading-relaxed text-text-muted">
              Harithayur is dedicated to reviving ancient Ayurvedic knowledge
              through carefully crafted natural wellness solutions, bridging
              generations of healing tradition with the needs of modern
              living.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-8 border-t border-border-subtle pt-10 md:grid-cols-4">
            {stats.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-3 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream text-forest">
                  <Icon size={20} />
                </span>
                <span className="text-xs leading-snug text-text-muted">{label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="heritage" className="scroll-mt-28 bg-cream/60 py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px]">
              <Image
                src="/assets/blog-hela-wedakama.webp"
                alt="Traditional Sri Lankan Hela Wedakama healing herbs and mortar"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-4">
              <span className="eyebrow text-botanical">Our Heritage</span>
              <h2 className="font-serif text-3xl text-forest-deep md:text-4xl">
                Rooted in Sri Lankan Ayurvedic tradition
              </h2>
              <p className="text-base leading-relaxed text-text-muted">
                Our approach draws deeply from traditional Ayurvedic knowledge
                and Sri Lankan heritage, honoring the indigenous practice of
                Hela Wedakama passed down through generations of healers.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col gap-4">
              <span className="eyebrow text-botanical">Our Vision</span>
              <h2 className="font-serif text-3xl text-forest-deep">
                To be a trusted leader in natural healthcare
              </h2>
              <p className="text-base leading-relaxed text-text-muted">
                To be a trusted leader in natural healthcare through authentic
                Ayurvedic experience.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <span className="eyebrow text-botanical">Our Mission</span>
              <h2 className="font-serif text-3xl text-forest-deep">
                Natural, safe and effective wellness
              </h2>
              <p className="text-base leading-relaxed text-text-muted">
                To provide natural, safe and effective wellness solutions
                rooted in authentic Ayurvedic knowledge.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-forest-deep py-20 text-warm-white md:py-28">
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
            <span className="eyebrow text-botanical-light">Our Values</span>
            <h2 className="font-serif text-3xl md:text-4xl">
              What guides every remedy we craft
            </h2>
          </div>

          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {values.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-3 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-warm-white/20 text-botanical-light">
                  <Icon size={22} />
                </span>
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
            <span className="eyebrow text-botanical">Our Promise</span>
            <p className="font-serif text-3xl leading-snug text-forest-deep md:text-4xl">
              Honest products. Transparent practices. Better lives naturally.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
