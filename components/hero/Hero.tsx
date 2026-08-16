import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Enter } from "@/components/motion/Enter";

/**
 * The aperture. Arriving on the site opens a circle onto the workbench, which is
 * the round motif doing actual work rather than being a shape applied to a photo.
 * A ring of type turns around it, slowly enough to read as breathing.
 *
 * The hero asset is a 4:5 portrait with the mortar centred, so a circular crop
 * loses nothing.
 */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-6 pb-10 md:pt-10 md:pb-14">
      <Container>
        <div className="grid items-center gap-y-14 lg:grid-cols-12 lg:gap-x-12">
          <div className="flex flex-col items-start gap-7 lg:col-span-6">
            <Enter>
              <h1 className="display text-[clamp(2.5rem,4.6vw,4.25rem)] text-forest-deep">
                Ancient wisdom
                <br />
                for{" "}
                <em className="pb-1 italic text-botanical">modern wellness</em>
              </h1>
            </Enter>

            <Enter delay={140}>
              <p className="max-w-[40ch] text-base leading-relaxed text-text-muted md:text-[1.0625rem]">
                Personalized Ayurvedic care, crafted by nature and rooted in
                centuries of healing traditions.
              </p>
            </Enter>

            <Enter delay={260}>
              <div className="flex flex-wrap items-center gap-4">
                <Button href="/products" variant="primary">
                  Explore Remedies
                  <ArrowRight size={15} aria-hidden />
                </Button>
                <Button href="/about" variant="secondary">
                  Our Philosophy
                </Button>
              </div>
            </Enter>
          </div>

          <div className="relative lg:col-span-6">
            {/* Sized against the viewport, not the column: 58vh keeps the aperture, the
                  headline and the credential row inside one screen together. */}
              <div className="relative mx-auto aspect-square w-full max-w-[min(46rem,64vh)] lg:mr-0 lg:ml-auto lg:w-[118%] lg:max-w-[min(52rem,66vh)]">
              {/* Turning rings. Two speeds in opposite directions so the motion
                  reads as depth rather than a single spinning object. */}
              <svg
                viewBox="0 0 400 400"
                className="pointer-events-none absolute inset-0 h-full w-full"
                aria-hidden
              >
                <defs>
                  <path
                    id="ring-path"
                    d="M200,200 m-171,0 a171,171 0 1,1 342,0 a171,171 0 1,1 -342,0"
                    fill="none"
                  />
                </defs>
                <circle
                  cx="200"
                  cy="200"
                  r="192"
                  fill="none"
                  stroke="var(--color-sage-line)"
                  strokeWidth="1"
                />
                <circle
                  className="ring-spin-slow"
                  cx="200"
                  cy="200"
                  r="178"
                  fill="none"
                  stroke="var(--color-botanical)"
                  strokeWidth="1"
                  strokeDasharray="2 12"
                  opacity="0.5"
                />
                <g className="ring-spin">
                  <text
                    fill="var(--color-botanical-ink)"
                    style={{
                      fontSize: "11px",
                      letterSpacing: "0.34em",
                      textTransform: "uppercase",
                    }}
                  >
                    <textPath href="#ring-path" startOffset="0%">
                      Hela Wedakama · ground by hand · Sri Lanka · consultation led ·
                    </textPath>
                  </text>
                </g>
              </svg>

              {/* The aperture itself.
                  A view through a doorway into the dispensary rather than a still
                  life of one object: the aperture opens on load, so what it opens
                  onto should be somewhere you could walk into. The source arrived
                  with its own arch mask baked into the pixels, tangent to this
                  circle to within a pixel, so it is cropped 26px to keep the pale
                  mask from showing as a rim inside the crop. */}
              <div className="absolute inset-[9%] overflow-hidden rounded-full bg-sage-deep shadow-[0_30px_70px_rgba(14,47,20,0.22)]">
                <Image
                  src="/assets/hero-threshold.webp"
                  alt="Looking through an archway into an Ayurvedic dispensary: herbs drying overhead, rows of amber jars on wooden shelves, and a stone mortar of freshly ground herbs on the bench"
                  fill
                  priority
                  sizes="(min-width: 1024px) 52vw, 92vw"
                  className="aperture object-cover"
                />
              </div>

              {/* Badge riding the rim. */}
              <div className="absolute bottom-[4%] left-0 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-forest text-warm-white shadow-[0_14px_36px_rgba(8,33,12,0.3)] md:h-28 md:w-28">
                <span className="display text-3xl">25+</span>
                <span className="px-3 text-center text-[0.625rem] leading-tight text-warm-white/80">
                  Years of practice
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
