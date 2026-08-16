import { Reveal } from "@/components/motion/Reveal";

/**
 * How a remedy is actually made, in five stages.
 *
 * This is the page's signature because it is the one thing a catalogue cannot say
 * by listing products: that the difference here is method, not ingredients. The
 * brand's claim is "ground by hand", so the page shows the hand.
 *
 * The stages sit on a single stolon that draws itself left to right as the section
 * scrolls into view, so the sequence is read in order rather than taken in at once.
 * Same plant as the page margins, turned on its side.
 *
 * Line marks rather than photographs, deliberately: five staged process photos is a
 * lot of shooting for a strip this size, and the drawn marks sit closer to the vine
 * language the rest of the site already speaks.
 */
const STAGES = [
  {
    name: "Harvest",
    note: "Cut at the hour the plant holds the most of what we want.",
    mark: (
      <>
        <path d="M20 34c0-8 5-15 13-18" />
        <path d="M33 16c6 6 5 15-2 19-6 3-13 0-13 0s0-13 6-17c3-2 6-3 9-2z" />
        <path d="M20 34c3-5 7-9 11-11" />
      </>
    ),
  },
  {
    name: "Dry",
    note: "Shade, never sun. Direct light takes the volatile oils with it.",
    mark: (
      <>
        <path d="M11 15h26" />
        <path d="M15 15v6M22 15v9M29 15v6M36 15v11" />
        <path d="M24 30c-4 0-7 3-7 6h14c0-3-3-6-7-6z" />
      </>
    ),
  },
  {
    name: "Grind",
    note: "Stone and arm. A blade heats the herb and changes what it does.",
    mark: (
      <>
        <path d="M14 24h20c0 8-4 13-10 13s-10-5-10-13z" />
        <path d="M18 24h12" />
        <path d="M27 21 33 9" />
        <path d="M31 7h5v5" />
      </>
    ),
  },
  {
    name: "Infuse",
    note: "Into a carrier oil or honey, warmed only as far as the hand can bear.",
    mark: (
      <>
        <path d="M24 9c0 0-6 8-6 12a6 6 0 0 0 12 0c0-4-6-12-6-12z" />
        <path d="M15 28c3 6 6 9 9 9s6-3 9-9" />
        <path d="M13 34c4 5 7 7 11 7s7-2 11-7" />
      </>
    ),
  },
  {
    name: "Rest",
    note: "Sealed and left alone. Nothing ships before it has settled.",
    mark: (
      <>
        <path d="M17 18h14v18a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4V18z" />
        <path d="M15 14h18v4H15z" />
        <path d="M22 26h4" />
      </>
    ),
  },
];

export function PreparationLadder() {
  return (
    <section className="border-b border-sage-line py-20 md:py-28">
      {/* Narrower than Container by design, but the gutters have to match it at
          every breakpoint or this section steps in and out of the page's edge. */}
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
        <Reveal className="flex max-w-[52ch] flex-col items-start gap-5">
          <span className="eyebrow">From root to remedy</span>
          <h2 className="display text-[clamp(2rem,3.6vw,3rem)] text-forest-deep">
            Five stages, none of them shortened
          </h2>
          <p className="text-[0.9375rem] leading-relaxed text-text-muted">
            Every batch moves through the same sequence, at the same pace it has
            always taken. The method is the reason a Harithayur remedy behaves
            differently from the same herb bought loose.
          </p>
        </Reveal>

        {/* `ladder` names the view timeline the stem draws against — see the
            preparation stolon block in globals.css. */}
        <div className="ladder relative mt-16 md:mt-24">
          {/* The stolon the stages sit on. Desktop only: stacked on mobile the
              stages already read top to bottom without a line to carry them. */}
          <svg
            aria-hidden
            viewBox="0 0 1000 40"
            preserveAspectRatio="none"
            fill="none"
            /* The circles are 76px, so their centres sit 38px down. The path runs
               through y=21 of a 40px-tall box, so the box starts at 17 to put the
               stem through the middle of the marks rather than under them. */
            className="absolute inset-x-0 top-[17px] hidden h-10 w-full md:block"
          >
            <path
              className="ladder-stem"
              d="M20 22C120 22 140 10 240 12S380 30 500 26 660 10 760 14s120 10 220 8"
              stroke="var(--color-sage-line)"
              strokeWidth="2"
              strokeLinecap="round"
              pathLength={1}
            />
          </svg>

          <ol className="relative grid gap-10 md:grid-cols-5 md:gap-5">
            {STAGES.map((stage, index) => (
              <Reveal
                key={stage.name}
                as="li"
                delay={index * 0.09}
                className="flex flex-col items-start gap-4 md:items-center md:text-center"
              >
                <span className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full border border-sage-line bg-warm-white text-botanical shadow-[0_10px_30px_rgba(14,47,20,0.07)]">
                  <svg
                    aria-hidden
                    viewBox="0 0 48 48"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-9 w-9"
                  >
                    {stage.mark}
                  </svg>
                </span>

                <span className="flex flex-col gap-1.5 md:items-center">
                  {/* The stages are a real sequence, so they are numbered. */}
                  <span className="eyebrow text-botanical-ink">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display text-2xl leading-none text-forest-deep">
                    {stage.name}
                  </h3>
                  <p className="max-w-[30ch] text-[0.8125rem] leading-relaxed text-text-muted">
                    {stage.note}
                  </p>
                </span>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
