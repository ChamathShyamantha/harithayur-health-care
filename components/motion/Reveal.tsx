import { ReactNode } from "react";

/**
 * Scroll reveal. Justification: content enters in reading order, so the eye is led
 * down the page in the sequence the section is arguing in. Not decoration.
 *
 * Implemented as a CSS scroll-driven animation (see `.reveal` in globals.css) rather
 * than a JS observer. Content ships visible and the animation is additive, so nothing
 * can leave a section blank if scripts fail to run. This is a Server Component, so it
 * also costs no client JS.
 *
 * `delay` is accepted for call-site readability but is not applied: with a view
 * timeline the stagger comes from each element's own scroll position, not a timer.
 */
export function Reveal({
  children,
  className = "",
  as: Component = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
}) {
  return <Component className={`reveal ${className}`}>{children}</Component>;
}
