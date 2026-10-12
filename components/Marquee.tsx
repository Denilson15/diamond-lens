import { DiamondMark } from "./DiamondMark";

const items = ["Game Day", "Team Photos", "Birthdays", "Quinceañeras", "Graduations", "Business Events", "Car Shows", "Family Parties", "Senior Night"];

// Infinite scrolling strip of what he shoots. Pure CSS; duplicated once for a seamless loop.
export function Marquee() {
  const row = (hidden?: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden}>
      {items.map((t) => (
        <li key={t} className="flex items-center">
          <span className="px-8 font-display text-2xl uppercase tracking-tight text-cream/80 sm:text-4xl">{t}</span>
          <DiamondMark className="size-5 text-field-bright" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="overflow-hidden border-y border-line bg-ink-2 py-6">
      <div className="flex w-max animate-marquee">
        {row()}
        {row(true)}
      </div>
    </div>
  );
}
