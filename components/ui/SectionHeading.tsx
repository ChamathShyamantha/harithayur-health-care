export function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "center",
}: {
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: "center" | "left";
}) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      {eyebrow ? (
        <span className="eyebrow flex items-center gap-2 text-botanical">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-serif text-4xl md:text-5xl text-forest-deep">
        {heading}
      </h2>
      {description ? (
        <p className="max-w-[60ch] text-base text-text-muted leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}
