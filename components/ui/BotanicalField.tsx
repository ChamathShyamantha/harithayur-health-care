import { Drop, Fire, Leaf, Wind } from "@phosphor-icons/react/dist/ssr";

/**
 * The dosha marks, scattered across the page behind everything.
 *
 * These are the same glyphs the dosha wheel uses, in the same three colours, so
 * the background repeats a vocabulary the visitor has already been taught rather
 * than adding a decorative pattern that means nothing. Leaf appears occasionally
 * as a neutral, to keep the field from reading as a strict three-colour rota.
 *
 * Positioned absolutely against the page rather than fixed to the viewport, so
 * marks pass by as you scroll instead of sitting in the same screen spot the
 * whole way down. Light weight rather than filled: at this scale an outline reads
 * as botanical line-art, a solid shape reads as a sticker.
 *
 * Opacity is tuned per colour, not shared. Forest is far darker than botanical,
 * so an equal value would make the dark marks shout and the green ones vanish.
 */
const MARKS = [
  { icon: Wind, tone: "vata", top: 4, left: 82, size: 150, rotate: -12 },
  { icon: Fire, tone: "pitta", top: 11, left: 6, size: 120, rotate: 8 },
  { icon: Leaf, tone: "neutral", top: 19, left: 46, size: 96, rotate: -28 },
  { icon: Drop, tone: "kapha", top: 24, left: 88, size: 132, rotate: 14 },
  { icon: Fire, tone: "pitta", top: 31, left: 68, size: 104, rotate: -6 },
  { icon: Wind, tone: "vata", top: 37, left: 12, size: 168, rotate: 18 },
  { icon: Drop, tone: "kapha", top: 45, left: 54, size: 112, rotate: -20 },
  { icon: Leaf, tone: "neutral", top: 52, left: 90, size: 128, rotate: 34 },
  { icon: Fire, tone: "pitta", top: 58, left: 22, size: 140, rotate: -10 },
  { icon: Wind, tone: "vata", top: 65, left: 74, size: 118, rotate: 22 },
  { icon: Drop, tone: "kapha", top: 72, left: 8, size: 156, rotate: -16 },
  { icon: Leaf, tone: "neutral", top: 79, left: 60, size: 100, rotate: 12 },
  { icon: Wind, tone: "vata", top: 86, left: 34, size: 134, rotate: -24 },
  { icon: Fire, tone: "pitta", top: 92, left: 84, size: 122, rotate: 6 },
] as const;

const TONE: Record<string, { color: string; opacity: number }> = {
  vata: { color: "var(--color-botanical)", opacity: 0.085 },
  pitta: { color: "var(--color-wood)", opacity: 0.085 },
  kapha: { color: "var(--color-forest)", opacity: 0.055 },
  neutral: { color: "var(--color-botanical-ink)", opacity: 0.07 },
};

export function BotanicalField() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {MARKS.map(({ icon: Icon, tone, top, left, size, rotate }, i) => {
        const { color, opacity } = TONE[tone];
        return (
          <span
            key={i}
            className="absolute block"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              color,
              opacity,
              transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
            }}
          >
            <Icon size={size} weight="light" />
          </span>
        );
      })}
    </div>
  );
}
