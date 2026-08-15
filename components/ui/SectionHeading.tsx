import { Reveal } from "@/components/motion/Reveal";

/**
 * Left-aligned by default. Eyebrows are rationed across the page, so `eyebrow` is
 * passed on at most two sections rather than every one.
 */
export function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "left",
  className = "",
  tone = "light",
}: {
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
  tone?: "light" | "dark";
}) {
  const alignment =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <Reveal className={`flex flex-col gap-5 ${alignment} ${className}`}>
      {eyebrow ? (
        <span
          className={`eyebrow rounded-pill px-4 py-2 ${
            tone === "dark"
              ? "bg-warm-white/10 text-botanical-light"
              : "bg-sage-deep text-botanical-ink"
          }`}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`display max-w-[18ch] text-[clamp(2rem,3.8vw,3.25rem)] ${
          tone === "dark" ? "text-warm-white" : "text-forest-deep"
        }`}
      >
        {heading}
      </h2>
      {description ? (
        <p
          className={`max-w-[52ch] text-[0.9375rem] leading-relaxed ${
            tone === "dark" ? "text-warm-white/75" : "text-text-muted"
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
