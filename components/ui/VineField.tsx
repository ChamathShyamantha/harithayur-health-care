/**
 * A Gotu Kola vine running the whole height of the page, down both gutters.
 *
 * Centella asiatica is the right plant for this site rather than a generic leaf:
 * it is the Sri Lankan herb, the one in kola kenda, and it creeps by stolon,
 * which is the only reason a single unbroken vine makes botanical sense at all.
 *
 * Drawn once as a vertically seamless tile and repeated with background-repeat,
 * not stretched. Stretching one long path would distort every leaf, and would
 * distort them differently on each route since pages differ in height. Tiling
 * also keeps this to two DOM nodes for the entire site.
 *
 * The right-hand vine is mirrored and offset by half a tile, so the two sides
 * never fall into step with each other.
 *
 * Hidden below md. The gutters are what it is filling, and narrow screens do not
 * have any: there the vine would sit behind the text instead of beside it.
 */
export function VineField() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="vine vine-left hidden md:block" />
      <div className="vine vine-right hidden md:block" />
    </div>
  );
}
