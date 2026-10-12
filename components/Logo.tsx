import Link from "next/link";
import { DiamondMark } from "./DiamondMark";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`group flex items-center gap-3 ${className}`} aria-label="Diamond Lens, home">
      <span className="grid size-10 place-items-center rounded-full bg-cream text-field-deep transition-transform duration-500 group-hover:rotate-[20deg]">
        <DiamondMark className="size-6" />
      </span>
      <span className="font-display leading-none tracking-[0.18em] uppercase">
        <span className="block text-[0.6rem] text-cream-dim">B.A.</span>
        <span className="block text-base font-semibold">Diamond Lens</span>
      </span>
    </Link>
  );
}
