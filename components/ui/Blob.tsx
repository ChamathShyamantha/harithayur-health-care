/**
 * Decorative organic field. Sits behind content to soften the grid and give the
 * page some non-rectangular structure. Purely presentational.
 */
export function Blob({
  className = "",
  variant = "a",
}: {
  className?: string;
  variant?: "a" | "b";
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute -z-10 ${
        variant === "a" ? "shape-blob" : "shape-blob-alt"
      } ${className}`}
    />
  );
}
