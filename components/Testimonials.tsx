import { testimonials } from "@/data/testimonials";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Kind words" title="From the" accent="bleachers." align="center" />
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <figure className="flex h-full flex-col rounded-2xl border border-line bg-ink-2 p-8">
              <span className="font-serif text-6xl leading-none text-field-bright" aria-hidden>
                &ldquo;
              </span>
              <blockquote className="mt-2 flex-1 font-serif text-xl leading-snug text-cream">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 border-t border-line pt-5">
                <p className="font-display text-sm uppercase tracking-[0.16em]">{t.name}</p>
                <p className="mt-1 text-sm text-muted">{t.detail}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-muted">Sample testimonials, to be replaced with real client quotes.</p>
    </section>
  );
}
