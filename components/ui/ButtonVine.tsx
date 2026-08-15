/**
 * A Gotu Kola tendril that creeps along the lower edge of a button on hover.
 *
 * The same plant as the page margins, miniaturised — a creeping stolon that puts
 * out reniform blades on short petioles. Reusing the motif rather than inventing a
 * second decoration is what keeps it feeling like one site.
 *
 * It grows rather than fades: the stem is drawn by retracting a dash, so the vine
 * arrives from the left the way a runner actually spreads, and each leaf opens once
 * the stem has passed it. Reversing on unhover is free because it is all
 * transitions rather than keyframes.
 *
 * pathLength="1" normalises the dash maths, so the draw is exact regardless of the
 * path's real geometry and stays correct if the curve is ever retuned.
 *
 * Fixed size, anchored bottom-left, so it looks identical on a wide button and a
 * narrow one instead of stretching to fit. Colour comes from --vine-ink, set per
 * variant by Button, falling back to currentColor.
 */
export function ButtonVine() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 112 14"
      fill="none"
      className="btn-vine pointer-events-none absolute bottom-[3px] left-[11px] -z-10 h-[14px] w-[112px]"
      style={{ color: "var(--vine-ink, currentColor)" }}
    >
      {/* The stolon. Ends short of the button's right padding so it reads as still
          growing rather than as an underline that ran out of room. */}
      <path
        className="btn-vine-stem"
        d="M1 11.5C11 11.6 15 7.4 26 8.2 37 9 41 12.6 52 11.4 63 10.2 68 5.6 79 6.6 90 7.6 95 10.4 105 9.2"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        pathLength={1}
      />

      {/* Three blades, opening left to right behind the stem's advance. */}
      <g className="btn-vine-leaf btn-vine-leaf-1">
        <path d="M26 8.2 24.5 5.4" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
        <circle cx="23.6" cy="3.4" r="2.3" stroke="currentColor" strokeWidth="0.9" />
        <path d="M23.6 5.7V1.1" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
      </g>

      <g className="btn-vine-leaf btn-vine-leaf-2">
        <path d="M52 11.4 54 8.9" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
        <circle cx="55" cy="7" r="2.1" stroke="currentColor" strokeWidth="0.9" />
        <path d="M55 9.1V4.9" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
      </g>

      <g className="btn-vine-leaf btn-vine-leaf-3">
        <path d="M79 6.6 77.6 4.1" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
        <circle cx="76.8" cy="2.4" r="1.9" stroke="currentColor" strokeWidth="0.9" />
        <path d="M76.8 4.3V0.5" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
      </g>
    </svg>
  );
}
