type SectionHeadingProps = {
  align?: "left" | "right";
  description?: string;
  eyebrow: string;
  title: string;
};

export function SectionHeading({
  align = "left",
  description,
  eyebrow,
  title,
}: SectionHeadingProps) {
  const alignment = align === "right" ? "items-start lg:items-end text-left lg:text-right" : "items-start text-left";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      <span className="text-xs uppercase tracking-[0.36em] text-[var(--color-mist)]">
        {eyebrow}
      </span>
      <h2 className="font-serif text-4xl leading-[0.92] text-[var(--color-ivory)] md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-xl text-base leading-7 text-[var(--color-silver)] md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
