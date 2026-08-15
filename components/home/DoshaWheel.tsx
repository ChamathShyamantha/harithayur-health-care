import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

/**
 * The three doshas as a wheel. This is a real diagram, not an ornament: Ayurveda
 * reads a person as a balance of Vata, Pitta and Kapha, and a consultation is
 * largely the work of finding which one is out of proportion. Round because the
 * subject is round, and the arcs draw themselves as the section scrolls in.
 *
 * Circumference for r=104 is 653.5, so each third is 217.8. Values below are that
 * third minus a gap, expressed as the dash pattern.
 */
const DOSHAS = [
  {
    name: "Vata",
    element: "Air and space",
    governs: "Movement, circulation, the nervous system",
    color: "var(--color-botanical)",
    rotate: -90,
  },
  {
    name: "Pitta",
    element: "Fire and water",
    governs: "Digestion, metabolism, body temperature",
    color: "var(--color-wood)",
    rotate: 30,
  },
  {
    name: "Kapha",
    element: "Earth and water",
    governs: "Structure, immunity, lubrication",
    color: "var(--color-forest)",
    rotate: 150,
  },
];

const ARC_LENGTH = 653.5;
const THIRD = ARC_LENGTH / 3;
const GAP = 26;
const VISIBLE = THIRD - GAP;

export function DoshaWheel() {
  return (
    <section className="border-b border-sage-line py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="flex flex-col items-start gap-5">
              <span className="eyebrow rounded-pill bg-sage-deep px-4 py-2">
                Where a consultation starts
              </span>
              <h2 className="display max-w-[16ch] text-[clamp(2rem,3.8vw,3.25rem)] text-forest-deep">
                Three forces, and the one that has slipped
              </h2>
              <p className="max-w-[46ch] text-[0.9375rem] leading-relaxed text-text-muted">
                Ayurveda reads you as a balance of Vata, Pitta and Kapha. Almost
                nobody is evenly weighted, and the work is finding which one has
                moved out of proportion before anything is prescribed.
              </p>

              <dl className="mt-2 flex w-full flex-col">
                {DOSHAS.map((d) => (
                  <div
                    key={d.name}
                    className="flex items-baseline gap-4 border-t border-sage-line py-4"
                  >
                    <span
                      aria-hidden
                      className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full"
                      style={{ background: d.color }}
                    />
                    <dt className="display w-[5.5rem] shrink-0 text-xl text-forest-deep">
                      {d.name}
                    </dt>
                    <dd className="text-[0.8125rem] leading-snug text-text-muted">
                      <span className="text-forest">{d.element}.</span>{" "}
                      {d.governs}.
                    </dd>
                  </div>
                ))}
              </dl>

              <Link
                href="/insights/understanding-your-dosha"
                className="focus-ring mt-2 inline-flex items-center gap-2 rounded-pill text-[0.8125rem] font-semibold text-forest-deep transition-all duration-200 hover:gap-3 hover:text-botanical"
              >
                Read the guide to your dosha
                <ArrowRight size={15} aria-hidden />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="relative mx-auto aspect-square w-full max-w-[30rem] lg:max-w-none">
              <svg
                viewBox="0 0 260 260"
                className="absolute inset-0 h-full w-full -rotate-90"
                aria-hidden
              >
                <circle
                  cx="130"
                  cy="130"
                  r="104"
                  fill="none"
                  stroke="var(--color-sage-line)"
                  strokeWidth="1"
                  opacity="0.7"
                />
                {DOSHAS.map((d, i) => (
                  <circle
                    key={d.name}
                    className="arc"
                    cx="130"
                    cy="130"
                    r="104"
                    fill="none"
                    stroke={d.color}
                    strokeWidth="14"
                    strokeLinecap="round"
                    strokeDasharray={`${VISIBLE} ${ARC_LENGTH - VISIBLE}`}
                    style={
                      {
                        transform: `rotate(${i * 120}deg)`,
                        transformOrigin: "130px 130px",
                        "--arc-len": `${VISIBLE}`,
                        "--arc-gap": "0",
                      } as React.CSSProperties
                    }
                    strokeDashoffset={VISIBLE}
                  />
                ))}
              </svg>

              {/* The wheel holds a real picture at its centre, not empty space. */}
              <div className="absolute inset-[22%] overflow-hidden rounded-full bg-sage-deep">
                <Image
                  src="/assets/blog-dosha.webp"
                  alt="Three stoneware dishes holding dried flowers, green powder and whole seeds"
                  fill
                  sizes="(min-width: 1024px) 26vw, 60vw"
                  className="object-cover"
                />
              </div>

              {DOSHAS.map((d, i) => {
                // Each arc starts at i*120 - 90 (the svg is rotated) and runs about
                // 110 degrees, so its midpoint is i*120 - 35.
                const angle = (i * 120 - 35) * (Math.PI / 180);
                const left = 50 + Math.cos(angle) * 46;
                const top = 50 + Math.sin(angle) * 46;
                return (
                  <span
                    key={d.name}
                    className="eyebrow absolute -translate-x-1/2 -translate-y-1/2 rounded-pill bg-warm-white px-3 py-1.5 shadow-[0_4px_14px_rgba(14,47,20,0.12)]"
                    style={{ left: `${left}%`, top: `${top}%` }}
                  >
                    {d.name}
                  </span>
                );
              })}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
