import { site } from "@/data/site";
import { Button, InstagramIcon } from "./Button";
import { DiamondMark } from "./DiamondMark";
import { Reveal } from "./Reveal";

export function CtaBand() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-line bg-field-deep px-6 py-16 sm:px-14 sm:py-20">
        <DiamondMark className="pointer-events-none absolute -right-16 -bottom-24 size-[420px] text-field/40" />
        <div className="relative max-w-2xl">
          <p className="eyebrow !text-cream/70">Now booking · {site.regionShort}</p>
          <h2 className="mt-4 font-display text-4xl font-medium uppercase leading-[0.95] tracking-tight sm:text-6xl">
            Got something{" "}
            <span className="font-serif font-normal normal-case italic tracking-normal text-cream/80">coming up?</span>
          </h2>
          <p className="mt-5 max-w-lg text-cream/75">
            Games, parties, graduations, business events, car shows, whatever it is. Send me the date and I&rsquo;ll get back to you.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={site.instagramDmUrl} external>
              <InstagramIcon /> Message on Instagram
            </Button>
            <Button href="/services/" variant="ghost">
              See packages
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
