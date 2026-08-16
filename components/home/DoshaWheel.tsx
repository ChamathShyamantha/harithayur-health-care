import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Drop, Fire, Wind } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

/**
 * The three doshas as a turning wheel. This is a real diagram, not an ornament:
 * Ayurveda reads a person as a balance of Vata, Pitta and Kapha, and a
 * consultation is largely the work of finding which one is out of proportion.
 *
 * The wheel turns continuously. Each marker orbits with its own arc so the colour
 * stays tied to the name, and counter-rotates at the same duration so the text
 * never goes upside down.
 *
 * Icons follow the classical elements rather than being decorative: air, fire,
 * and earth with water.
 */
const DOSHAS = [
  {
    name: "Vata",
    icon: Wind,
    element: "Air and space",
    governs: "Movement, circulation, the nervous system",
    color: "var(--color-botanical)",
  },
  {
    name: "Pitta",
    icon: Fire,
    element: "Fire and water",
    governs: "Digestion, metabolism, body temperature",
    color: "var(--color-wood)",
  },
  {
    name: "Kapha",
    icon: Drop,
    element: "Earth and water",
    governs: "Structure, immunity, lubrication",
    color: "var(--color-forest)",
  },
];

// Circumference at r=104 is 653.5; each third is 217.8, less a gap for breathing room.
const ARC_LENGTH = 653.5;
const GAP = 30;
const VISIBLE = ARC_LENGTH / 3 - GAP;

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
                {DOSHAS.map(({ name, icon: Icon, element, governs, color }) => (
                  <div
                    key={name}
                    className="flex items-start gap-4 border-t border-sage-line py-4"
                  >
                    <span
                      aria-hidden
                      className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                      style={{ background: color, color: "var(--color-warm-white)" }}
                    >
                      <Icon size={16} weight="bold" />
                    </span>
                    <dt className="display w-[5rem] shrink-0 pt-0.5 text-xl text-forest-deep">
                      {name}
                    </dt>
                    <dd className="pt-1 text-[0.8125rem] leading-snug text-text-muted">
                      <span className="text-forest">{element}.</span> {governs}.
                    </dd>
                  </div>
                ))}
              </dl>

              <Link
                href="/insights/understanding-your-dosha"
                className="focus-ring mt-1 inline-flex items-center gap-2 rounded-pill py-2 text-[0.8125rem] font-semibold text-forest-deep transition-all duration-200 hover:gap-3 hover:text-botanical"
              >
                Read the guide to your dosha
                <ArrowRight size={15} aria-hidden />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="relative mx-auto aspect-square w-full max-w-[32rem] lg:max-w-none">
              {/* Everything that turns lives in here. The centre photograph sits
                  outside it so the image itself never rotates. */}
              <div className="wheel-orbit absolute inset-0">
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
                      cx="130"
                      cy="130"
                      r="104"
                      fill="none"
                      stroke={d.color}
                      strokeWidth="14"
                      strokeLinecap="round"
                      strokeDasharray={`${VISIBLE} ${ARC_LENGTH - VISIBLE}`}
                      style={{
                        transform: `rotate(${i * 120}deg)`,
                        transformOrigin: "130px 130px",
                      }}
                    />
                  ))}
                </svg>

                {DOSHAS.map(({ name, icon: Icon, color }, i) => {
                  // Arc i runs from i*120 - 90 for about 105 degrees, so its
                  // midpoint sits at i*120 - 37.
                  const angle = (i * 120 - 37) * (Math.PI / 180);
                  const left = 50 + Math.cos(angle) * 40;
                  const top = 50 + Math.sin(angle) * 40;
                  return (
                    <div
                      key={name}
                      className="absolute -translate-x-1/2 -translate-y-1/2"
                      style={{ left: `${left}%`, top: `${top}%` }}
                    >
                      <div className="wheel-orbit-upright flex flex-col items-center gap-1.5">
                        <span
                          className="flex h-9 w-9 items-center justify-center rounded-full text-warm-white shadow-[0_4px_14px_rgba(14,47,20,0.22)]"
                          style={{ background: color }}
                        >
                          <Icon size={17} weight="bold" aria-hidden />
                        </span>
                        <span className="eyebrow rounded-pill bg-warm-white px-2.5 py-1 shadow-[0_3px_10px_rgba(14,47,20,0.12)]">
                          {name}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* The wheel holds a real picture at its centre, not empty space. */}
              <div className="absolute inset-[26%] overflow-hidden rounded-full bg-sage-deep">
                <Image
                  src="/assets/blog-dosha.webp"
                  alt="Three stoneware dishes holding dried flowers, green powder and whole seeds"
                  fill
                  sizes="(min-width: 1024px) 24vw, 52vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
