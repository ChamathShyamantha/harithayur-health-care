import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Blob } from "@/components/ui/Blob";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Four items, four cells, unequal spans. Two cells carry real visual weight
 * (photography, a solid forest field) so it never reads as four identical boxes.
 */
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
          <Reveal className="relative flex min-h-[360px] flex-col justify-end overflow-hidden rounded-plush p-8 md:p-10 lg:col-span-7">
            <Image
              src="/assets/blog-hela-wedakama.webp"
              alt=""
              fill
              sizes="(min-width: 1024px) 58vw, 92vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-linear-to-t from-forest-deep/85 via-forest-deep/40 to-transparent"
            />
            <div className="relative flex flex-col gap-3">
              <h3 className="display text-3xl text-warm-white md:text-4xl">
                Holistic healing
              </h3>
              <p className="max-w-[38ch] text-sm leading-relaxed text-warm-white/80">
                Treating the root cause, not just the symptoms.
              </p>
            </div>
          </Reveal>

          <Reveal
            delay={0.08}
            className="surface-dark flex min-h-[360px] flex-col justify-end gap-3 rounded-plush bg-forest p-8 md:p-10 lg:col-span-5"
          >
            <h3 className="display text-3xl text-warm-white md:text-4xl">
              Personalized care
            </h3>
            <p className="max-w-[34ch] text-sm leading-relaxed text-warm-white/75">
              Every individual is unique, so is our approach.
            </p>
          </Reveal>

          <Reveal
            delay={0.14}
            className="flex min-h-[240px] flex-col justify-end gap-3 rounded-plush bg-sage-deep p-8 md:p-10 lg:col-span-5"
          >
            <h3 className="display text-2xl text-forest-deep md:text-3xl">
              Trusted by thousands
            </h3>
            <p className="max-w-[34ch] text-sm leading-relaxed text-text-muted">
              Join our community of health-conscious individuals.
            </p>
          </Reveal>

          <Reveal
            delay={0.2}
            className="flex min-h-[240px] flex-col justify-end gap-3 rounded-plush border border-border-subtle bg-warm-white p-8 md:p-10 lg:col-span-7"
          >
            <h3 className="display text-2xl text-forest-deep md:text-3xl">
              Sustainable wellness
            </h3>
            <p className="max-w-[40ch] text-sm leading-relaxed text-text-muted">
              Balanced living for a healthier body, mind and soul.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
