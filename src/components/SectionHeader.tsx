type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`space-y-3 ${alignClass}`.trim()}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700/80">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-semibold text-stone-950 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-7 text-stone-700">
          {description}
        </p>
      ) : null}
    </div>
  );
}
