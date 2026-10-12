// The brand mark: a faceted gem whose lower half is a ball-field diamond.
export function DiamondMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M12 22 20 12h24l8 10L32 56 12 22Z" />
      <path d="M12 22h40M20 12l6 10 6-10 6 10 6-10" strokeWidth={2} />
      <path d="M32 30 40 38 32 46 24 38Z" strokeWidth={2.5} />
      <circle cx="32" cy="38" r="2.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

// Thin rule with the mark in the middle, used between sections.
export function DiamondDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 text-field-bright ${className}`} aria-hidden>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-line" />
      <DiamondMark className="size-5" />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-line" />
    </div>
  );
}
