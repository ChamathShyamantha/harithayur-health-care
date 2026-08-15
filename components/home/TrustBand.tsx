import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

// Pills, not a bordered table. Moved out of the hero so the hero holds one message.
const credentials = [
  { value: "25+", label: "Years of Ayurvedic practice" },
  { value: "100%", label: "Natural ingredients" },
  { value: "Hela", label: "Wedakama lineage" },
  { value: "1:1", label: "Personalized consultation" },
];

export function TrustBand() {
  return (
    <section aria-label="Credentials" className="pb-16 md:pb-24">
      <Container>
        <dl className="flex flex-wrap justify-center gap-3 md:gap-4">
          {credentials.map((item, index) => (
            <Reveal
              key={item.label}
              delay={index * 0.07}
              className="flex items-center gap-3 rounded-pill bg-cream px-6 py-4 md:px-7"
            >
              <dt className="display text-2xl leading-none text-forest md:text-[1.75rem]">
                {item.value}
              </dt>
              <dd className="max-w-[11rem] text-[0.8125rem] leading-snug text-text-muted">
                {item.label}
              </dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
