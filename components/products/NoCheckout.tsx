import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Highlighter } from "@/components/ui/Highlighter";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

/**
 * The catalogue has no add-to-cart, and a visitor will notice. This says why before
 * they decide it is an oversight.
 *
 * Kept on the light ground on purpose: the consult band that closes the page is a
 * forest panel, and two dark panels in a row flatten the end of the page.
 *
 * The three points are questions rather than claims. A wellness page that asserts
 * outcomes reads as a supplement advert; a page that shows what it needs to know
 * reads as a practice.
 */
const ASKED = [
  {
    question: "What is actually happening?",
    answer:
      "Not the label you have arrived with, but what changed, and when it started.",
  },
  {
    question: "What have you already tried?",
    answer:
      "Including anything prescribed elsewhere, so nothing works against anything else.",
  },
  {
    question: "What does an ordinary day look like?",
    answer:
      "Sleep, food, work and season shape the remedy as much as the complaint does.",
  },
];

export function NoCheckout() {
  return (
    <section className="border-b border-sage-line py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="flex flex-col items-start gap-6 lg:col-span-6">
            <span className="eyebrow">How to order</span>
            <h2 className="display text-[clamp(2rem,3.6vw,3rem)] text-forest-deep">
              There is no add-to-cart, and that is{" "}
              <Highlighter padding={5}>deliberate</Highlighter>
            </h2>
            <p className="max-w-[46ch] text-[0.9375rem] leading-relaxed text-text-muted">
              The same remedy suits one person and not the next, and a shop
              front cannot tell the difference. So a practitioner reads what you
              send, asks what is missing, and recommends a starting point. If
              nothing here is right for you, they will say so.
            </p>
            <WhatsAppButton label="Start a consultation" />
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-6 lg:pt-4">
            <dl className="flex flex-col">
              {ASKED.map((item) => (
                <div
                  key={item.question}
                  className="flex flex-col gap-2 border-t border-sage-line py-7 last:border-b"
                >
                  <dt className="display text-[1.375rem] leading-snug text-forest-deep">
                    {item.question}
                  </dt>
                  <dd className="max-w-[46ch] text-[0.875rem] leading-relaxed text-text-muted">
                    {item.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
