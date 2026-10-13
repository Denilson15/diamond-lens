import type { Metadata } from "next";
import { pageMeta } from "@/data/seo";
import { aboutPhotos, portraitPhoto } from "@/data/photos";
import { site } from "@/data/site";
import { PageHeader } from "@/components/PageHeader";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { DiamondDivider, DiamondMark } from "@/components/DiamondMark";
import { Button, InstagramIcon } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = pageMeta("/about/", "About", "How a softball dad with a camera became B.A. Diamond Lens, a Bay Area photographer for sports and all kinds of events.");

const chapters = [
  {
    label: "First inning",
    title: "It started with my daughter",
    body: "I started bringing my camera to my daughter's softball games because I didn't want to miss anything. Her at-bats, plays in the field, the girls messing around in the dugout. I just wanted pictures that felt like you were there.",
    photo: aboutPhotos.daughter,
  },
  {
    label: "Word gets around",
    title: "“Can you get my kid too?”",
    body: "Other parents saw the pics and started asking if I could get their kids too. I didn't mind. Pretty soon I was shooting the whole team every weekend, and people started offering to pay me for it.",
    photo: aboutPhotos.parents,
  },
  {
    label: "Extra innings",
    title: "Now it's more than softball",
    body: "That's how B.A. Diamond Lens started. I'm still at the field most weekends, but now I shoot all kinds of stuff: birthdays, quinces, graduations, business events, car shows. If you've got something going on, I'll come out.",
    photo: aboutPhotos.beyond,
  },
];

const values = [
  { title: "I know the game", body: "I've spent a lot of time at the field. I know when the big moment is coming, so I'm ready for it." },
  { title: "Every kid gets shots", body: "Not just the kid who hit the home run. Everybody on the roster gets good pictures." },
  { title: "No long wait", body: "You're not waiting a month. Pics are usually back within the week." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About the photographer" title="From the stands" accent="to behind the lens.">
        <p>
          I&rsquo;m {site.photographer}. Softball dad first, photographer second. I run {site.name} out of the
          Bay Area.
        </p>
      </PageHeader>

      {/* Portrait + intro */}
      <section className="mx-auto grid max-w-7xl gap-12 px-4 pb-24 sm:px-6 lg:grid-cols-[5fr_7fr] lg:gap-20 lg:px-8">
        <Reveal className="relative">
          <Photo photo={portraitPhoto} className="aspect-[4/5] rounded-2xl" />
          <span className="absolute top-4 left-4 rounded-full bg-ink/70 px-3 py-1.5 text-xs text-cream-dim backdrop-blur">
            Portrait coming soon
          </span>
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col justify-center">
          <p className="font-serif text-3xl leading-snug sm:text-4xl">
            &ldquo;I never planned on doing this. I just didn&rsquo;t want to miss anything my daughter did on the
            field, so I started bringing my camera.&rdquo;
          </p>
          <DiamondDivider className="my-10" />
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              ["Softball", "where it all began"],
              ["Any event", "parties, quinces, business"],
              ["Bay Area", "wherever you need me"],
            ].map(([big, small]) => (
              <div key={big}>
                <p className="font-display text-3xl uppercase">{big}</p>
                <p className="mt-1 text-sm text-cream-dim">{small}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Story timeline */}
      <section className="border-t border-line bg-ink-2">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <p className="eyebrow">The story</p>
          <ol className="relative mt-14 space-y-24 sm:space-y-32">
            <span className="absolute top-2 bottom-2 left-[11px] w-px bg-line lg:left-1/2" aria-hidden />
            {chapters.map((c, i) => (
              <li key={c.title} className="relative grid gap-10 pl-12 lg:grid-cols-2 lg:gap-24 lg:pl-0">
                <span
                  className="absolute top-1 left-0 grid size-6 place-items-center rounded-full border border-field-bright bg-ink text-field-bright lg:left-1/2 lg:-translate-x-1/2"
                  aria-hidden
                >
                  <span className="size-1.5 rotate-45 bg-field-bright" />
                </span>
                <Reveal className={i % 2 ? "lg:order-2" : ""}>
                  <p className="font-display text-sm uppercase tracking-[0.2em] text-muted">
                    0{i + 1} <span className="mx-2">/</span> {c.label}
                  </p>
                  <h2 className="mt-4 font-display text-4xl font-medium uppercase leading-[0.95] tracking-tight sm:text-5xl">
                    {c.title}
                  </h2>
                  <p className="mt-6 max-w-lg text-lg leading-relaxed text-cream-dim">{c.body}</p>
                </Reveal>
                <Reveal delay={0.1} className={i % 2 ? "lg:order-1" : ""}>
                  <Photo photo={c.photo} className="aspect-[4/3] rounded-2xl" />
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What drives him */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <p className="eyebrow">How I shoot</p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-line p-8">
                <DiamondMark className="size-8 text-field-bright" />
                <h3 className="mt-6 font-display text-2xl uppercase tracking-tight">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-cream-dim">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-12">
          <Button href={site.instagramUrl} external variant="ghost">
            <InstagramIcon /> Follow @{site.instagramHandle}
          </Button>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
