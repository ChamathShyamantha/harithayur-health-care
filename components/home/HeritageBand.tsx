import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Highlighter } from "@/components/ui/Highlighter";

/**
 * Rhythm break. The image is masked into a wide capsule and a cream panel overlaps
 * its left end, so the section reads as two layered shapes rather than a banner
 * with text on top.
 */
export function HeritageBand() {
  return (
    <section className="curve-top relative bg-sage-deep py-20 md:py-28">
      <Container>
        <div className="relative">
          <div className="shape-capsule relative aspect-16/9 w-full overflow-hidden bg-warm-white md:aspect-21/9">
            <Image
              src="/assets/heritage-preparation.webp"
              alt="Herbs being ground by hand in a stone mortar on a worn wooden workbench"
              fill
              sizes="100vw"
              className="parallax object-cover"
            />
          </div>

          <Reveal className="relative mx-auto -mt-16 w-[92%] rounded-plush bg-warm-white p-8 shadow-[0_20px_50px_rgba(18,59,34,0.14)] md:-mt-24 md:w-[70%] md:p-12 lg:ml-0 lg:mr-auto lg:w-[54%]">
            <p className="display text-[clamp(1.5rem,2.8vw,2.25rem)] text-forest-deep">
              Every formulation begins the way it did four generations ago. Herbs
              are identified by hand, ground by hand, and{" "}
              <Highlighter action="underline" strokeWidth={2}>
                blended to the person in front of us
              </Highlighter>
              .
            </p>
            <p className="mt-6 max-w-[46ch] text-sm leading-relaxed text-text-muted">
              Hela Wedakama is Sri Lanka&apos;s own healing tradition, older than
              the texts that record it. We practise it as it was taught, and we
              keep the record of what we use in every batch.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
