type BadgeProps = {
  label: string;
  className?: string;
};

export default function Badge({ label, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-amber-200/70 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-900 ${className}`.trim()}
    >
      {label}
    </span>
  );
}
