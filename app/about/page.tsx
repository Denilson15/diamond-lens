import type { Metadata } from "next";
import { photos, portraitPhoto } from "@/data/photos";
import { site } from "@/data/site";
import { PageHeader } from "@/components/PageHeader";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { DiamondDivider, DiamondMark } from "@/components/DiamondMark";
import { Button, InstagramIcon } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "About",
  description: "How a softball dad with a camera became B.A. Diamond Lens, a Bay Area sports and event photographer.",
};

const byId = (id: string) => photos.find((p) => p.id === id)!;

const chapters = [
  {
    label: "First inning",
    title: "A dad in the stands",
    body: "It started with one player: his daughter. Braulio brought a camera to her softball games so he wouldn't miss the big swings, the diving catches and the dugout laughs. He wanted photos that felt like being there.",
    photo: byId("d03"),
  },
  {
    label: "Word gets around",
    title: "“Could you get my kid too?”",
    body: "Other parents on the team noticed. One by one they asked if he'd mind grabbing a few shots of their kids. He didn't mind at all. Soon he was covering the whole roster, game after game, and families started offering to pay for his time.",
    photo: byId("d05"),
  },
  {
    label: "Extra innings",
    title: "Beyond the diamond",
    body: "Those sideline sessions became B.A. Diamond Lens. Today Braulio still lives at the ballpark, and local businesses also hire him for events, team photos and grand openings. He brings the same eye to car shows across the Bay Area.",
    photo: byId("cars01"),
  },
];

const values = [
  { title: "Patience of a parent", body: "Kids don't pose mid-game. He waits for the real moment: the swing, the slide, the grin after." },
  { title: "Every kid counts", body: "Not just the star player. Every player on the roster gets moments worth framing." },
  { title: "Fast & friendly", body: "Quick turnaround, easy galleries, and someone who actually likes being at the field." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About the photographer" title="From the stands" accent="to behind the lens.">
        <p>
          Hi, I&rsquo;m {site.photographer}. I&rsquo;m a dad, a ball-field regular, and the photographer behind{" "}
          {site.name}, based in {site.region}.
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
            &ldquo;I never planned on becoming a photographer. I just didn&rsquo;t want to miss a single one of my
            daughter&rsquo;s games, so I started bringing a camera.&rdquo;
          </p>
          <DiamondDivider className="my-10" />
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              ["Softball", "where it all began"],
              ["Bay Area", "fields, gyms & events"],
              ["Every kid", "on the roster"],
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
