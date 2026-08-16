import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

/**
 * What the practice will not do.
 *
 * Every wellness brand publishes a list of values, and they are interchangeable —
 * "Integrity, Sustainability, Authenticity" says nothing a competitor could not
 * also say. A list of refusals cannot be copied without cost, because each line
 * closes a door that most of the market leaves open. It is the same claim as the
 * values band, made falsifiable.
 *
 * Every line here is drawn from something the site already commits to elsewhere —
 * zero synthetic fillers, consultation before sale, batches signed by a practitioner
 * — rather than invented for this section.
 *
 * Set on the forest ground with the refusal struck through, so the eye reads the
 * crossed-out thing first and the reason second.
 */
const REFUSALS = [
  {
    no: "Synthetic fillers",
    why: "Nothing goes in to bulk a bottle out. If a jar is smaller this month, the harvest was smaller.",
  },
  {
    no: "Selling before asking",
    why: "No remedy leaves here without a practitioner knowing who it is for and what else you are taking.",
  },
  {
    no: "Machine grinding",
    why: "Blades heat the herb and change what it does. Stone is slower and we have not found a way around it.",
  },
  {
    no: "Curing anything",
    why: "Ayurveda restores balance. Anyone promising a cure for a named disease is selling you something else.",
  },
];

export function NotThis() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="surface-dark rounded-plush bg-forest-deep px-6 py-14 sm:px-8 sm:py-16 md:px-14 md:py-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="flex flex-col items-start gap-5 lg:col-span-4">
              <span className="eyebrow text-lichen">Where we draw the line</span>
              <h2 className="display text-[clamp(2rem,3.4vw,2.75rem)] text-warm-white">
                Four things we will not do
              </h2>
              <p className="max-w-[36ch] text-[0.9375rem] leading-relaxed text-warm-white/70">
                Values are easy to publish and hard to check. These are the
                refusals behind ours, which are harder to publish and easier to
                hold us to.
              </p>
            </Reveal>

            <dl className="flex flex-col lg:col-span-8">
              {REFUSALS.map((item, index) => (
                <Reveal
                  key={item.no}
                  delay={index * 0.07}
                  className="flex flex-col gap-2.5 border-t border-warm-white/15 py-7 first:border-t-0 first:pt-0 last:pb-0"
                >
                  <dt className="display text-[1.625rem] leading-none text-warm-white/45 line-through decoration-lichen/70 decoration-[1.5px]">
                    {item.no}
                  </dt>
                  <dd className="max-w-[54ch] text-[0.9375rem] leading-relaxed text-warm-white/75">
                    {item.why}
                  </dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
