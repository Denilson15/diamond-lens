import Link from "next/link";
import { featuredIds, heroPhoto, photos, storyPhoto } from "@/data/photos";
import { packages } from "@/data/packages";
import { site } from "@/data/site";
import { Photo } from "@/components/Photo";
import { Button, ArrowIcon, InstagramIcon } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Marquee } from "@/components/Marquee";
import { PackageCard } from "@/components/PackageCard";
import { Testimonials } from "@/components/Testimonials";
import { CtaBand } from "@/components/CtaBand";

const featured = featuredIds.map((id) => photos.find((p) => p.id === id)!);
// Bento layout spans for the 6 featured tiles (lg+).
const spans = [
  "lg:col-span-2 lg:row-span-2",
  "lg:col-span-2",
  "",
  "",
  "lg:col-span-2",
  "col-span-2",
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden">
        <Photo
          photo={heroPhoto}
          priority
          className="!absolute inset-0 -z-10"
          imgClassName="object-[50%_100%]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/45 to-ink/10" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/60 to-transparent" />

        <div className="mx-auto w-full max-w-7xl px-4 pt-32 pb-16 sm:px-6 sm:pb-24 lg:px-8">
          <Reveal>
            <p className="eyebrow">
              {site.name} <span className="text-cream/40">·</span> {site.regionShort}
            </p>
            <h1 className="mt-6 font-display text-[clamp(3.25rem,11vw,9.5rem)] font-medium uppercase leading-[0.86] tracking-tight">
              Every play.
              <br />
              Every moment.
              <span className="mt-3 block font-serif text-[0.42em] font-normal normal-case italic leading-tight tracking-normal text-cream/80">
                captured from the diamond.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.15} className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-md text-base leading-relaxed text-cream-dim sm:text-lg">
              Started at his daughter&rsquo;s softball games. Now shooting game days, parties, graduations,
              business events, car shows&hellip; whatever you&rsquo;ve got going on.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/gallery/">
                View gallery <ArrowIcon />
              </Button>
              <Button href={site.instagramDmUrl} external variant="ghost">
                <InstagramIcon /> Book a shoot
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <Marquee />

      {/* FEATURED WORK */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Featured work" title="Game faces &" accent="golden hours." />
          <Link
            href="/gallery/"
            className="group inline-flex items-center gap-2 font-display text-sm uppercase tracking-[0.16em] text-cream-dim transition-colors hover:text-cream"
          >
            Full gallery <ArrowIcon className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="mt-14 grid auto-rows-[240px] grid-cols-2 gap-3 sm:auto-rows-[280px] sm:gap-4 lg:grid-cols-4">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.08} className={`${spans[i]} ${i === 0 ? "col-span-2 row-span-2" : ""}`}>
              <Link href="/gallery/" className="group relative block h-full overflow-hidden rounded-xl">
                <Photo
                  photo={p}
                  className="h-full"
                  imgClassName="transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* STORY TEASER */}
      <section className="border-y border-line bg-ink-2">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 sm:py-32 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <Reveal className="relative">
            <Photo photo={storyPhoto} className="aspect-[4/5] rounded-2xl" />
            <div className="absolute -right-3 -bottom-6 max-w-[16rem] rounded-2xl border border-line bg-ink p-5 shadow-2xl sm:-right-8">
              <p className="font-serif text-lg italic leading-snug">&ldquo;I just wanted good pics of my daughter playing.&rdquo;</p>
              <p className="eyebrow mt-3 !text-[0.6rem]">Braulio, photographer</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading eyebrow="The story" title="It started" accent="in the stands.">
              <p>
                Braulio started taking his camera to his daughter&rsquo;s softball games. Then the other parents
                on the team saw the pics and asked if he could get their kids too. Not long after, people were
                offering to pay him.
              </p>
              <p className="mt-4">
                That&rsquo;s how Diamond Lens started. He&rsquo;s still at the field most weekends, but now he
                shoots all kinds of events around the Bay: birthdays, quinces, graduations, business events, car
                shows, you name it.
              </p>
            </SectionHeading>
            <div className="mt-8">
              <Button href="/about/" variant="ghost">
                Read the full story <ArrowIcon />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Services" title="Games, parties" accent="& everything in between." />
          <Link
            href="/services/"
            className="group inline-flex items-center gap-2 font-display text-sm uppercase tracking-[0.16em] text-cream-dim transition-colors hover:text-cream"
          >
            All packages <ArrowIcon className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {packages.slice(0, 3).map((p, i) => (
            <Reveal key={p.id} delay={i * 0.1}>
              <PackageCard pkg={p} compact />
            </Reveal>
          ))}
        </div>
      </section>

      <Testimonials />
      <CtaBand />
    </>
  );
}
