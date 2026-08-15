"use client";

import { usePathname } from "next/navigation";

/**
 * A Gotu Kola vine running the full height of every page, down both gutters.
 *
 * Centella asiatica rather than a generic leaf: it is the Sri Lankan herb, and it
 * creeps by stolon, which is the only reason one unbroken vine running the height
 * of a page makes botanical sense.
 *
 * The vine wanders rather than running straight down. Each tile is drawn so it
 * enters and leaves at the same x with the same tangent, which fixes the seam and
 * frees the interior to swing inward toward the content and back out again.
 *
 * Tiled, not stretched. A single path scaled to page height would distort every
 * leaf, and differently on each route since pages differ in height. Tiles are
 * 2400px, so most pages never show a full repeat.
 *
 * Variant by route, since a catalogue and a long article want different densities:
 *   a  widest reach, most growth   home
 *   c  medium reach, densest       products and remedies
 *   b  hugs the gutter, sparsest   articles, about, contact, legal
 */
function variantFor(pathname: string): "a" | "b" | "c" {
  if (pathname === "/") return "a";
  if (pathname.startsWith("/products")) return "c";
  return "b";
}

export function VineField() {
  const pathname = usePathname() || "/";
  const variant = variantFor(pathname);
  const url = `url("/assets/vine-${variant}.svg")`;

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        className="vine vine-left hidden md:block"
        style={{ backgroundImage: url }}
      />
      <div
        className="vine vine-right hidden md:block"
        style={{ backgroundImage: url }}
      />
    </div>
  );
}
