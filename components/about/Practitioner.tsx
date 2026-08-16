import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

/**
 * The practitioner.
 *
 * The site made this promise twice before it made it once with a name on it: that
 * nothing leaves the workshop a practitioner has not put their name to, and that
 * the person who answers a message is the person who prepares the remedies. Both
 * are worth nothing while the name is missing, so the section is built around the
 * name rather than around a biography.
 *
 * Hence the typographic treatment: the name is set at display scale as the largest
 * thing in the section, with the qualification directly under it as a caption. In
 * Ayurveda a formal degree is the line between a practitioner and someone selling
 * herbs, so the credential does more work here than a paragraph of description
 * would, and it is placed where it cannot be skimmed past.
 *
 * The three lines are the site's existing commitments, restated as things a named
 * person does. Nothing here is invented: there is no graduation year, no list of
 * specialisms, no invented quotation, and no claim about outcomes. Anything of that
 * kind has to come from the practitioner.
 */
const COMMITMENTS = [
  {
    label: "Reads every consultation",
    body: "Messages sent through the site and WhatsApp are answered by the practitioner, not by an assistant working from a script.",
  },
  {
    label: "Signs off every batch",
    body: "Nothing leaves the workshop without a practitioner putting their name to it. That is the whole of the quality process.",
  },
  {
    label: "Will tell you when to go elsewhere",
    body: "Ayurveda restores balance and does not replace acute medical care. Where something needs a hospital, you will be told so.",
  },
];

export function Practitioner() {
  return (
    <section
      id="practitioner"
      className="scroll-mt-24 border-b border-sage-line py-20 md:py-28"
    >
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            {/* PLACEHOLDER — see image-prompts/20-practitioner-portrait.md, which is
                a brief for a real photographer rather than a generation prompt. A
                named, real practitioner must not be represented by a synthesised
                face. The file in place is a flat sage panel at the right ratio. */}
            <div className="shape-arch relative aspect-3/4 w-full overflow-hidden bg-sage-deep">
              <Image
                src="/assets/practitioner-rasanjana.webp"
                alt="Dr. Rasanjana Ilangkoon"
                fill
                sizes="(min-width: 1024px) 40vw, 92vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="flex flex-col gap-10 lg:col-span-7 lg:pt-2">
            <Reveal className="flex flex-col items-start gap-4">
              <span className="eyebrow">The practitioner</span>
              <h2 className="display text-[clamp(2.25rem,4.4vw,3.5rem)] leading-[1.05] text-forest-deep">
                Dr. Rasanjana Ilangkoon
              </h2>
              <p className="flex flex-col gap-1 border-l-2 border-botanical pl-4">
                <span className="text-[0.9375rem] leading-snug text-forest-deep">
                  Degree in Ayurveda
                </span>
                <span className="text-[0.875rem] leading-snug text-text-muted">
                  University of Kelaniya, Sri Lanka
                </span>
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <dl className="flex flex-col">
                {COMMITMENTS.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col gap-2 border-t border-sage-line py-6 last:border-b"
                  >
                    <dt className="display text-[1.375rem] leading-snug text-forest-deep">
                      {item.label}
                    </dt>
                    <dd className="max-w-[54ch] text-[0.9375rem] leading-relaxed text-text-muted">
                      {item.body}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.14} className="flex flex-col items-start gap-4">
              <p className="max-w-[46ch] text-[0.9375rem] leading-relaxed text-text-muted">
                Consultations are one to one. Describe what you are dealing with
                and you will get a considered reply rather than a product list.
              </p>
              <WhatsAppButton label="Consult the practitioner" />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
