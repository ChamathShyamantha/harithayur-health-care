import { FlowerLotus, HandHeart, Leaf, Plant } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

// Pills, not a bordered table. Moved out of the hero so the hero holds one message.
// Each credential carries a botanical mark, which is what stops the row reading as
// four numbers floating on an empty band.
const credentials = [
  { icon: Plant, value: "25+", label: "Years of Ayurvedic practice" },
  { icon: Leaf, value: "100%", label: "Natural ingredients" },
  { icon: FlowerLotus, value: "Hela", label: "Wedakama lineage" },
  { icon: HandHeart, value: "1:1", label: "Personalized consultation" },
];

export function TrustBand() {
  return (
    <section aria-label="Credentials" className="pb-16 md:pb-24">
      <Container>
        <dl className="flex flex-wrap justify-center gap-3 md:gap-4">
          {credentials.map(({ icon: Icon, value, label }, index) => (
            <Reveal
              key={label}
              delay={index * 0.07}
              className="flex items-center gap-3.5 rounded-pill bg-sage-deep py-3.5 pl-3.5 pr-6 md:pr-7"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest text-lichen">
                <Icon size={19} weight="duotone" aria-hidden />
              </span>
              <span className="flex flex-col">
                <dt className="display text-2xl leading-none text-forest md:text-[1.75rem]">
                  {value}
                </dt>
                <dd className="mt-1 max-w-[11rem] text-[0.8125rem] leading-snug text-text-muted">
                  {label}
                </dd>
              </span>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
