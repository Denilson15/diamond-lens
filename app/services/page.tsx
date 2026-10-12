import type { Metadata } from "next";
import { faqs, packages } from "@/data/packages";
import { PageHeader } from "@/components/PageHeader";
import { PackageCard } from "@/components/PackageCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Testimonials } from "@/components/Testimonials";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description: "Game days, team photos, birthdays, quinceañeras, graduations, business events and car shows in the Bay Area.",
};

const steps = [
  ["Message", "DM on Instagram with your date, field and what you need."],
  ["Lock it in", "We confirm the time, the players and any must-have shots."],
  ["Game day", "I'm on the fence line catching every play."],
  ["Gallery", "You get a private online gallery to download and share."],
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader eyebrow="Services & pricing" title="Pick your" accent="lineup.">
        <p>
          Sports is where I started, but I&rsquo;ll shoot pretty much any event. Here are a few starting points.
          Don&rsquo;t see yours? Just send me a message and we&rsquo;ll figure it out.
        </p>
      </PageHeader>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.08}>
              <PackageCard pkg={p} />
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted">Prices are starting points. Larger teams and multi-day events get custom quotes.</p>
      </section>

      <section className="border-y border-line bg-ink-2">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="How it works" title="Four steps" accent="to game day." />
          <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([title, body], i) => (
              <li key={title} className="bg-ink-2 p-8">
                <p className="font-display text-5xl text-field-bright">0{i + 1}</p>
                <h3 className="mt-5 font-display text-xl uppercase tracking-tight">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream-dim">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[2fr_3fr] lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Good" accent="questions." />
        <div className="divide-y divide-line border-y border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg uppercase tracking-tight [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="grid size-8 shrink-0 place-items-center rounded-full border border-line transition-transform duration-300 group-open:rotate-45" aria-hidden>
                  <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth={1.8}>
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 max-w-xl leading-relaxed text-cream-dim">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <Testimonials />
      <CtaBand />
    </>
  );
}
