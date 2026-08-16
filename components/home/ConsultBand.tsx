import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/data/site";

/**
 * Closing band. A forest panel that floats inside the page rather than spanning it
 * edge to edge, so the warm ground stays visible around all four sides.
 */
export function ConsultBand() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="surface-dark relative isolate overflow-hidden rounded-plush bg-forest px-6 py-14 text-warm-white sm:px-8 sm:py-16 md:px-14 md:py-20">
          {/* Leaf texture keeps the flat green panel from reading as a plain block. */}
          <Image
            src="/assets/texture-botanical.webp"
            alt=""
            fill
            sizes="100vw"
            className="-z-10 object-cover opacity-[0.07] mix-blend-luminosity"
          />
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <h2 className="display text-[clamp(2rem,4vw,3.25rem)] text-warm-white">
                Not sure where to begin?
              </h2>
            </Reveal>

            <Reveal
              delay={0.1}
              className="flex flex-col items-start gap-6 lg:col-span-5"
            >
              <p className="max-w-[42ch] text-[0.9375rem] leading-relaxed text-warm-white/75">
                Tell us what you are dealing with. Dr. Rasanjana Ilangkoon reads
                these personally and will recommend where to start.
              </p>
              <div className="flex flex-col gap-3">
                <WhatsAppButton label="Consult on WhatsApp" variant="onDark" />
                {/* The name is the reassurance; the hours say when to expect it. */}
                <span className="text-[0.8125rem] text-warm-white/65">
                  Degree in Ayurveda, University of Kelaniya ·{" "}
                  {siteConfig.contact.businessDays},{" "}
                  {siteConfig.contact.businessHours}
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
