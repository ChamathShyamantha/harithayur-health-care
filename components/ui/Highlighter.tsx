"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { annotate } from "rough-notation";
import type { RoughAnnotation } from "rough-notation/lib/model";

type AnnotationAction =
  | "highlight"
  | "underline"
  | "box"
  | "circle"
  | "strike-through"
  | "crossed-off"
  | "bracket";

/**
 * Theme defaults. rough-notation composites `highlight` with multiply, so a mid-tone
 * marker keeps dark text readable underneath; line-style annotations need the deeper
 * green to register against the sage ground.
 */
const THEME_COLOR: Record<string, string> = {
  highlight: "#8fbe52", // botanical-light
  underline: "#4f8f32", // botanical
  circle: "#4f8f32",
  box: "#4f8f32",
  bracket: "#4f8f32",
  "strike-through": "#8a4f25", // wood
  "crossed-off": "#8a4f25",
};

interface HighlighterProps {
  children: ReactNode;
  action?: AnnotationAction;
  /** Overrides the palette default for this action. */
  color?: string;
  strokeWidth?: number;
  animationDuration?: number;
  iterations?: number;
  padding?: number;
  multiline?: boolean;
}

/**
 * Hand-drawn marker stroke over a phrase. Purely additive: the annotation is an SVG
 * layered on top, so if scripts never run the text is simply unmarked rather than
 * hidden. Draws once when scrolled into view.
 *
 * Uses a plain IntersectionObserver rather than a motion library, and skips the
 * animation entirely when the visitor asks for reduced motion.
 */
export function Highlighter({
  children,
  action = "highlight",
  color,
  strokeWidth = 1.5,
  animationDuration = 700,
  iterations = 2,
  padding = 2,
  multiline = true,
}: HighlighterProps) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || shown) return;

    // Draw immediately if the phrase is already on screen. An observer callback is
    // not guaranteed to arrive promptly in a backgrounded or throttled tab, and the
    // marker should never be missing from content the visitor is already looking at.
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-10%" }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [shown]);

  useEffect(() => {
    const element = elementRef.current;
    if (!shown || !element) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let annotation: RoughAnnotation | null = null;
    let resizeObserver: ResizeObserver | null = null;

    annotation = annotate(element, {
      type: action,
      color: color ?? THEME_COLOR[action] ?? THEME_COLOR.highlight,
      strokeWidth,
      animationDuration: reduced ? 0 : animationDuration,
      animate: !reduced,
      iterations,
      padding,
      multiline,
    });
    annotation.show();

    // The stroke is drawn to the element's measured box, so it has to be redrawn
    // whenever reflow changes that box.
    const current = annotation;
    resizeObserver = new ResizeObserver(() => {
      current.hide();
      current.show();
    });
    resizeObserver.observe(element);
    resizeObserver.observe(document.body);

    return () => {
      annotation?.remove();
      resizeObserver?.disconnect();
    };
  }, [
    shown,
    action,
    color,
    strokeWidth,
    animationDuration,
    iterations,
    padding,
    multiline,
  ]);

  return (
    <span ref={elementRef} className="relative inline-block bg-transparent">
      {children}
    </span>
  );
}
