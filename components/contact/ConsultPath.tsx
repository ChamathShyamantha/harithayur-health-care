import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/data/site";

/**
 * What happens after you send the form.
 *
 * The page's signature, and the one thing a contact page usually leaves out. A form
 * with no stated reply is a form people abandon: the anxiety is not writing the
 * message, it is not knowing whether anyone reads it or what arrives next.
 *
 * Numbered because it is a genuine sequence — each step cannot happen before the one
 * above it. The rule down the left is the spine that says so; the steps are not
 * cards, because cards would let the eye take them in any order.
 *
 * Written as plain commitments in the practice's own voice. Every timing here is a
 * promise the client has to be able to keep, so they are stated in working hours
 * rather than in hours, and none of them names a price.
 */
const STEPS = [
  {
    title: "Dr. Rasanjana Ilangkoon reads it",
    body: "Not a queue and not an auto-reply. The person who answers is the person who prepares the remedies.",
    meta: "Same working day",
  },
  {
    title: "They ask what is missing",
    body: "Usually two or three questions — what you have already tried, how you sleep, what the season is doing to you.",
    meta: "Usually one exchange",
  },
  {
    title: "You get a starting point",
    body: "A recommendation with the reasoning attached, and an honest answer if nothing we make is right for you.",
    meta: "Within two working days",
  },
];

export function ConsultPath() {
  return (
    <section className="border-b border-sage-line py-20 md:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="flex flex-col items-start gap-5 lg:col-span-4">
            <span className="eyebrow">What happens next</span>
            <h2 className="display text-[clamp(2rem,3.4vw,2.75rem)] text-forest-deep">
              Your message goes to a person
            </h2>
            <p className="max-w-[40ch] text-[0.9375rem] leading-relaxed text-text-muted">
              No account, no order number, no automated sequence. Here is the
              whole of it, so you know what you are starting.
            </p>
            <p className="text-[0.8125rem] leading-relaxed text-text-muted">
              {siteConfig.contact.businessDays},{" "}
              {siteConfig.contact.businessHours}
            </p>

            {/* PLACEHOLDER ART — see image-prompts/15-contact-consultation.md.
                The claim of this section is that a person reads your message, and
                the page had no picture of one. The file in place is a flat sage
                gradient at the right ratio; replace it at the same path. */}
            <div className="shape-arch relative mt-2 aspect-4/5 w-full max-w-[19rem] overflow-hidden bg-sage-deep">
              <Image
                src="/assets/contact-consultation.webp"
                alt="A practitioner's hands writing notes beside dried herbs and a brass scale"
                fill
                sizes="(min-width: 1024px) 22vw, 80vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <ol className="relative flex flex-col lg:col-span-8">
            {/* The spine. Sits behind the markers and stops one step short of the
                bottom, so the sequence ends rather than trailing off. */}
            <span
              aria-hidden
              className="absolute bottom-[4.5rem] left-[19px] top-6 w-px bg-sage-line"
            />

            {STEPS.map((step, index) => (
              <Reveal
                key={step.title}
                as="li"
                delay={index * 0.09}
                className="relative flex gap-6 pb-12 last:pb-0"
              >
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest text-[0.8125rem] font-semibold text-lichen">
                  {index + 1}
                </span>

                <span className="flex flex-col gap-2 pt-1">
                  <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="display text-[1.5rem] leading-tight text-forest-deep">
                      {step.title}
                    </h3>
                    <span className="eyebrow text-botanical-ink">
                      {step.meta}
                    </span>
                  </span>
                  <p className="max-w-[52ch] text-[0.9375rem] leading-relaxed text-text-muted">
                    {step.body}
                  </p>
                </span>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
