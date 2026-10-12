import Link from "next/link";
import type { ReactNode } from "react";

const styles = {
  primary:
    "bg-cream text-ink hover:bg-white",
  ghost:
    "border border-cream/30 text-cream hover:border-cream hover:bg-cream/5",
  green:
    "bg-field text-cream hover:bg-field-bright",
};

export function Button({
  href,
  children,
  variant = "primary",
  external,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof styles;
  external?: boolean;
  className?: string;
}) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-display text-sm font-medium uppercase tracking-[0.16em] transition-colors duration-300 ${styles[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function InstagramIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ArrowIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className} aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
