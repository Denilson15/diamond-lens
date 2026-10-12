import Link from "next/link";
import { navLinks, site } from "@/data/site";
import { Logo } from "./Logo";
import { InstagramIcon } from "./Button";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink-2">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-5 text-sm leading-relaxed text-cream-dim">
            {site.tagline}. Started in the stands, now behind the lens. Serving {site.region}.
          </p>
        </div>
        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-cream-dim transition-colors hover:text-cream">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Say hello</p>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-cream-dim transition-colors hover:text-cream"
          >
            <InstagramIcon /> @{site.instagramHandle}
          </a>
          <p className="mt-2.5 text-sm text-cream-dim">{site.regionShort}</p>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-muted sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Sample images are placeholders from Flickr (Creative Commons) via LoremFlickr.</p>
        </div>
      </div>
    </footer>
  );
}
