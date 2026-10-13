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
          <ul className="mt-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-flex min-h-11 items-center text-cream-dim transition-colors hover:text-cream">
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
            className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm text-cream-dim transition-colors hover:text-cream"
          >
            <InstagramIcon /> @{site.instagramHandle}
          </a>
          <p className="mt-2.5 text-sm text-cream-dim">{site.regionShort}</p>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 pt-6 pb-28 text-xs text-muted md:pb-6 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>
            Placeholder photos are Creative Commons from Flickr.{" "}
            <Link href="/credits/" className="underline underline-offset-4 hover:text-cream-dim">
              Photo credits
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
