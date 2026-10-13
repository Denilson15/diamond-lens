import type { Metadata } from "next";
import { pageMeta } from "@/data/seo";
import { site } from "@/data/site";
import { PageHeader } from "@/components/PageHeader";
import { InquiryBuilder } from "@/components/InquiryBuilder";
import { InstagramIcon } from "@/components/Button";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = pageMeta("/contact/", "Contact & Booking", "Book B.A. Diamond Lens for your game, party, graduation, business event or car show. Message on Instagram.");

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact & booking" title="Let's talk" accent="about your event.">
        <p>
          Bookings happen over Instagram DM. Fill this out and your message is written and copied for you, then
          Instagram opens so you can paste and send.
        </p>
      </PageHeader>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-28 sm:px-6 lg:grid-cols-[7fr_4fr] lg:px-8">
        <Reveal>
          <InquiryBuilder />
        </Reveal>
        <Reveal delay={0.1} className="space-y-5">
          <a
            href={site.instagramDmUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-3xl bg-cream p-8 text-ink transition-colors hover:bg-white"
          >
            <InstagramIcon className="size-8" />
            <p className="mt-8 font-display text-3xl uppercase leading-none tracking-tight">Message on Instagram</p>
            <p className="mt-3 text-ink/70">Prefer to write it yourself? Go straight to the DM.</p>
            <p className="mt-6 font-display text-sm uppercase tracking-[0.16em] text-field-deep">
              @{site.instagramHandle} →
            </p>
          </a>
          <div className="rounded-3xl border border-line p-8">
            <p className="eyebrow">Service area</p>
            <p className="mt-3 font-display text-2xl uppercase">{site.regionShort}</p>
            <p className="mt-2 text-sm leading-relaxed text-cream-dim">
              Fields, gyms and venues all around {site.region}. Travel tournaments are welcome; just ask.
            </p>
          </div>
          <div className="rounded-3xl border border-line p-8">
            <p className="eyebrow">Helpful to include</p>
            <ul className="mt-4 space-y-2.5 text-sm text-cream-dim">
              {["Date & start time", "Venue, field or address", "What kind of event it is", "Roughly how many people"].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-1.5 size-1.5 shrink-0 rotate-45 bg-field-bright" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>
    </>
  );
}
