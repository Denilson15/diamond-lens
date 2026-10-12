import type { Package } from "@/data/packages";

export function PackageCard({ pkg, compact }: { pkg: Package; compact?: boolean }) {
  return (
    <article
      className={`relative flex h-full flex-col rounded-2xl border p-7 transition-colors duration-500 sm:p-8 ${
        pkg.featured
          ? "border-field-bright/50 bg-gradient-to-b from-field-deep/70 to-ink-2"
          : "border-line bg-ink-2 hover:border-cream/20"
      }`}
    >
      {pkg.featured && (
        <span className="absolute -top-3 left-7 rounded-full bg-field-bright px-3 py-1 font-display text-[0.65rem] uppercase tracking-[0.18em] text-ink">
          Most popular
        </span>
      )}
      <h3 className="font-display text-2xl font-medium uppercase tracking-tight">{pkg.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-cream-dim">{pkg.blurb}</p>
      <p className="mt-6 flex items-baseline gap-2">
        <span className="text-xs uppercase tracking-[0.18em] text-muted">from</span>
        <span className="font-display text-5xl font-medium">${pkg.priceFrom}</span>
        <span className="text-sm text-cream-dim">{pkg.unit}</span>
      </p>
      {!compact && (
        <>
          <ul className="mt-7 space-y-3 border-t border-line pt-6 text-sm">
            {pkg.includes.map((item) => (
              <li key={item} className="flex gap-3 text-cream/90">
                <span className="mt-1.5 size-1.5 shrink-0 rotate-45 bg-field-bright" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-auto pt-7 text-xs uppercase tracking-[0.18em] text-muted">
            Turnaround · <span className="text-cream-dim">{pkg.turnaround}</span>
          </p>
        </>
      )}
    </article>
  );
}
