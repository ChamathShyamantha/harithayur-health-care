import { CSSProperties, ReactNode } from "react";

/**
 * Load entrance for above-the-fold content. The hero never scrolls into view, so a
 * view-timeline reveal would never fire there; this uses plain time-based keyframes
 * instead.
 *
 * `delay` is in milliseconds and drives the stagger, so the hero reads in the order
 * it argues in: headline, then the claim, then the action.
 */
export function Enter({
  children,
  delay = 0,
  className = "",
  as: Component = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "span" | "p" | "h1";
}) {
  return (
    <Component
      className={`enter ${className}`}
      style={{ "--enter-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Component>
  );
}
