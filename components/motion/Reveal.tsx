import { CSSProperties, ReactNode } from "react";

/**
 * Scroll reveal. Justification: content enters in reading order, so the eye is led
 * down the page in the sequence the section is arguing in. Not decoration.
 *
 * Implemented as a CSS scroll-driven animation (see `.reveal` in globals.css) rather
 * than a JS observer. Content ships visible and the animation is additive, so nothing
 * can leave a section blank if scripts fail to run. This is a Server Component, so it
 * also costs no client JS.
 *
 * `delay` staggers siblings that sit at the same height, where the scroll position
 * alone would otherwise animate them all at once. It shifts where in the element's
 * own scroll pass the animation begins, so it is expressed as a fraction rather than
 * a duration: 0.1 is a tenth of the way further in.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Component = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
}) {
  return (
    <Component
      className={`reveal ${className}`}
      style={
        delay
          ? ({ "--reveal-from": `${Math.round(delay * 55)}%` } as CSSProperties)
          : undefined
      }
    >
      {children}
    </Component>
  );
}
