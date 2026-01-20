import Link from "next/link";
import Card from "./Card";

type CTAProps = {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function CTA({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTAProps) {
  return (
    <Card className="flex flex-col gap-6 bg-amber-50/80">
      <div className="space-y-2">
        <h3 className="font-display text-2xl font-semibold text-stone-950">
          {title}
        </h3>
        <p className="text-sm leading-6 text-stone-700">{description}</p>
      </div>
      <div className="flex flex-wrap gap-3 text-sm font-semibold uppercase tracking-[0.2em]">
        <Link
          className="rounded-full bg-stone-900 px-6 py-3 text-amber-50 transition hover:bg-stone-800"
          href={primaryHref}
        >
          {primaryLabel}
        </Link>
        {secondaryLabel && secondaryHref ? (
          <Link
            className="rounded-full border border-stone-300 px-6 py-3 text-stone-800 transition hover:border-stone-500"
            href={secondaryHref}
          >
            {secondaryLabel}
          </Link>
        ) : null}
      </div>
    </Card>
  );
}
