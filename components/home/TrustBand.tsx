import { FlowerLotus, HandHeart, Leaf, Plant } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

// Pills, not a bordered table. Moved out of the hero so the hero holds one message.
// Each credential carries a botanical mark, which is what stops the row reading as
// four numbers floating on an empty band.
//
// Every mark also carries its own idle motion, matched to what it depicts rather
// than applied uniformly: the plant rocks from its base, the leaf swings from its
// stem, the lotus opens and closes, the hand-heart beats. See the credential marks
// block in globals.css for the timing, which is staggered so the four never sync.
const credentials = [
  { icon: Plant, motion: "mark-grow", value: "25+", label: "Years of Ayurvedic practice" },
  { icon: Leaf, motion: "mark-swing", value: "100%", label: "Natural ingredients" },
  { icon: FlowerLotus, motion: "mark-bloom", value: "Hela", label: "Wedakama lineage" },
  { icon: HandHeart, motion: "mark-beat", value: "1:1", label: "Personalized consultation" },
];

export function TrustBand() {
  return (
    <section aria-label="Credentials" className="pb-16 md:pb-24">
      <Container>
        {/* Below sm the four pills stack, so they run full width and align on one
            left edge. Left to wrap freely they centred themselves at four
            different content widths, which read as a broken list rather than a
            row of credentials. */}
        <dl className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:gap-4">
          {credentials.map(({ icon: Icon, motion, value, label }, index) => (
            <Reveal
              key={label}
              delay={index * 0.07}
              className="flex w-full items-center gap-3.5 rounded-pill bg-sage-deep py-3.5 pl-3.5 pr-6 sm:w-auto md:pr-7"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest text-lichen">
                <Icon size={19} weight="duotone" className={motion} aria-hidden />
              </span>
              <span className="flex flex-col">
                <dt className="display text-2xl leading-none text-forest md:text-[1.75rem]">
                  {value}
                </dt>
                <dd className="mt-1 text-[0.8125rem] leading-snug text-text-muted sm:max-w-[11rem]">
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
