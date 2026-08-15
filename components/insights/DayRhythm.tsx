import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Dinacharya — the Ayurvedic day, drawn as the clock it actually is.
 *
 * The page's signature, and the reason the section exists: an insights page with a
 * handful of articles is a list of links. This is the one piece of knowledge that is
 * more useful drawn than written, so it earns space a fourth teaser card would waste.
 *
 * Each dosha governs two windows twelve hours apart, which is why a ring is the
 * honest shape — the repetition is the point, and six cards in a row would hide it.
 * Same three colours as the dosha wheel on the home page, so a visitor who met Vata,
 * Pitta and Kapha there reads this without a second legend.
 *
 * Midnight sits at the top and the day runs clockwise, so noon falls at the bottom
 * and the ring maps onto a clock face people already know how to read.
 */
type Window = {
  dosha: "Kapha" | "Pitta" | "Vata";
  from: string;
  to: string;
  /** Degrees clockwise from midnight at the top. */
  start: number;
  note: string;
};

const WINDOWS: Window[] = [
  { dosha: "Kapha", from: "6am", to: "10am", start: 90, note: "Move before you settle" },
  { dosha: "Pitta", from: "10am", to: "2pm", start: 150, note: "Digestion is strongest" },
  { dosha: "Vata", from: "2pm", to: "6pm", start: 210, note: "Thinking, not eating" },
  { dosha: "Kapha", from: "6pm", to: "10pm", start: 270, note: "Eat light, wind down" },
  { dosha: "Pitta", from: "10pm", to: "2am", start: 330, note: "The body repairs itself" },
  { dosha: "Vata", from: "2am", to: "6am", start: 30, note: "Wake before the shift" },
];

const INK: Record<Window["dosha"], string> = {
  Vata: "var(--color-botanical)",
  Pitta: "var(--color-wood)",
  Kapha: "var(--color-forest)",
};

const CX = 200;
const CY = 200;
const R = 122;
const STROKE = 16;
const CIRC = 2 * Math.PI * R;
/** One sixth of the day. */
const SLOT = CIRC / 6;
/**
 * Arc removed from each window to make the gaps. It has to be generous: round caps
 * add half the stroke width at each end, so a segment paints about 6.6 degrees wider
 * than its dash length. Cut too little here and the six windows touch and the ring
 * reads as one unbroken band.
 */
const GAP = 34;
const SEG = SLOT - GAP;
/** Half the gap, in degrees, to recentre each dash inside its own slot. */
const NUDGE = (GAP / 2 / CIRC) * 360;
/** Outside the band, far enough that a two-line label clears the stroke. */
const LABEL_R = 163;

function polar(degFromTop: number, radius: number) {
  const rad = ((degFromTop - 90) * Math.PI) / 180;
  return { x: CX + Math.cos(rad) * radius, y: CY + Math.sin(rad) * radius };
}

export function DayRhythm() {
  return (
    <section className="border-b border-sage-line py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="flex flex-col items-start gap-5 lg:col-span-5">
            <span className="eyebrow">Dinacharya</span>
            <h2 className="display text-[clamp(2rem,3.6vw,3rem)] text-forest-deep">
              The day has a grain. Work with it.
            </h2>
            <p className="max-w-[44ch] text-[0.9375rem] leading-relaxed text-text-muted">
              Ayurveda divides the day into six windows, each governed by one of
              the three doshas, each returning twelve hours later. Eat when
              digestion is strongest, rest while the body is repairing, and a
              good deal of what people reach for remedies about stops arising.
            </p>
            <p className="max-w-[44ch] text-[0.875rem] leading-relaxed text-text-muted">
              It is the oldest instruction in the tradition, and the only one
              that costs nothing.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="mx-auto w-full max-w-[34rem]">
              <svg
                viewBox="0 0 400 400"
                className="w-full"
                role="img"
                aria-label="The Ayurvedic day as a 24-hour ring, midnight at the top running clockwise. Kapha governs 6am to 10am and 6pm to 10pm, Pitta 10am to 2pm and 10pm to 2am, Vata 2pm to 6pm and 2am to 6am."
              >
                {/* Hour ticks, so the ring reads as a clock face before it reads
                    as a diagram. Every sixth runs longer to mark the quarters. */}
                <g stroke="var(--color-sage-line)" strokeWidth="1">
                  {Array.from({ length: 24 }, (_, i) => {
                    const outer = polar(i * 15, R - STROKE / 2 - 4);
                    const inner = polar(i * 15, R - STROKE / 2 - (i % 6 === 0 ? 16 : 9));
                    return <line key={i} x1={inner.x} y1={inner.y} x2={outer.x} y2={outer.y} />;
                  })}
                </g>

                {WINDOWS.map((w) => (
                  <circle
                    key={`arc-${w.dosha}-${w.from}`}
                    cx={CX}
                    cy={CY}
                    r={R}
                    fill="none"
                    stroke={INK[w.dosha]}
                    strokeWidth={STROKE}
                    strokeLinecap="round"
                    strokeDasharray={`${SEG} ${CIRC - SEG}`}
                    /* A circle's dash starts at 3 o'clock, so -90 moves the origin
                       to midnight before the window's own offset is applied. */
                    transform={`rotate(${w.start - 90 + NUDGE} ${CX} ${CY})`}
                    opacity="0.92"
                  />
                ))}

                {WINDOWS.map((w) => {
                  /* Placed at the arc's midpoint and left upright, rather than
                     rotated onto the ring — a label you have to tilt your head
                     for is decoration, not information. */
                  const p = polar(w.start + 30, LABEL_R);
                  return (
                    <g key={`label-${w.dosha}-${w.from}`} textAnchor="middle">
                      <text x={p.x} y={p.y} className="display fill-forest-deep text-[15px]">
                        {w.dosha}
                      </text>
                      <text x={p.x} y={p.y + 15} className="fill-text-muted text-[11px]">
                        {w.from} – {w.to}
                      </text>
                    </g>
                  );
                })}

                {/* The centre carries the one instruction the whole ring is for. */}
                <circle cx={CX} cy={CY} r="80" fill="var(--color-warm-white)" />
                <text x={CX} y={CY - 6} textAnchor="middle" className="display fill-forest-deep text-[18px]">
                  Rise and rest
                </text>
                <text x={CX} y={CY + 16} textAnchor="middle" className="display fill-forest-deep text-[18px]">
                  at the same hour
                </text>
                <text x={CX} y={CY + 38} textAnchor="middle" className="fill-text-muted text-[10.5px]">
                  Everything else follows
                </text>
              </svg>
            </div>

            {/* Each row names its own window. A colour key would be ambiguous
                here, because every dosha owns two of the six and the dot alone
                cannot say which half of the day a line belongs to. */}
            <ul className="mt-8 grid gap-x-8 gap-y-3 border-t border-sage-line pt-6 sm:grid-cols-2">
              {WINDOWS.map((w) => (
                <li
                  key={`note-${w.dosha}-${w.from}`}
                  className="flex items-baseline gap-2.5 text-[0.8125rem] text-text-muted"
                >
                  <span
                    aria-hidden
                    className="relative top-[3px] h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ background: INK[w.dosha] }}
                  />
                  <span className="w-[5.5rem] shrink-0 tabular-nums text-forest-deep">
                    {w.from} – {w.to}
                  </span>
                  {w.note}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
