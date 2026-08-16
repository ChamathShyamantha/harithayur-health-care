import { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    // px-5 below sm. At 320px the 24px gutter took 15% of the screen before any
    // panel padding was added on top of it, and the measure inside the dark
    // panels was down to the low 250s.
    <div className={`mx-auto w-full max-w-[1400px] px-5 sm:px-6 md:px-10 ${className}`}>
      {children}
    </div>
  );
}
