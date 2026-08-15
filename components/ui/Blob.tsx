/**
 * Decorative organic field. Sits behind content to soften the grid and give the
 * page some non-rectangular structure. Purely presentational.
 *
 * `drift` adds a very slow breathing motion. Appropriate for a botanical brand and
 * cheap to run (transform only), but it is opt-in so it never ends up on every blob
 * at once.
 */
export function Blob({
  className = "",
  variant = "a",
  drift = false,
}: {
  className?: string;
  variant?: "a" | "b";
  drift?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute -z-10 ${
        variant === "a" ? "shape-blob" : "shape-blob-alt"
      } ${drift ? "blob-drift" : ""} ${className}`}
    />
  );
}
