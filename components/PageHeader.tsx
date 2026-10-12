import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

// Large title block that opens every inner page.
export function PageHeader({
  eyebrow,
  title,
  accent,
  children,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-14 sm:pt-44 sm:pb-20">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-field/20 blur-[120px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 max-w-5xl font-display text-5xl font-medium uppercase leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">
            {title}
            {accent && (
              <span className="block font-serif font-normal normal-case italic tracking-normal text-cream-dim">
                {accent}
              </span>
            )}
          </h1>
          {children && <div className="mt-8 max-w-2xl text-lg leading-relaxed text-cream-dim">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
