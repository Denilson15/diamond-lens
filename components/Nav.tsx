"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/data/site";
import { Logo } from "./Logo";
import { InstagramIcon } from "./Button";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu when the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, ""));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? "border-b border-line bg-ink/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main">
        <Logo />

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={`relative font-display text-sm uppercase tracking-[0.18em] transition-colors hover:text-cream ${
                  isActive(l.href) ? "text-cream" : "text-cream-dim"
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1.5 left-1/2 size-1 -translate-x-1/2 rotate-45 bg-field-bright transition-opacity ${
                    isActive(l.href) ? "opacity-100" : "opacity-0"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        <a
          href={site.instagramDmUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-cream px-5 py-2.5 font-display text-xs font-medium uppercase tracking-[0.16em] text-ink transition-colors hover:bg-white md:inline-flex"
        >
          <InstagramIcon /> Book a shoot
        </a>

        <button
          type="button"
          className="relative grid size-11 place-items-center md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`absolute h-px w-6 bg-cream transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-1.5"}`} />
          <span className={`absolute h-px w-6 bg-cream transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-1.5"}`} />
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-18 bottom-0 h-[calc(100dvh-4.5rem)] bg-ink transition-[opacity,visibility] duration-300 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 pt-8">
          {navLinks.map((l, i) => (
            <li key={l.href} style={{ transitionDelay: open ? `${i * 50}ms` : "0ms" }}
              className={`transition-all duration-500 ${open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}>
              <Link
                href={l.href}
                className={`block border-b border-line py-4 font-display text-4xl uppercase tracking-tight ${
                  isActive(l.href) ? "text-cream" : "text-cream-dim"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="px-4 pt-10">
          <a
            href={site.instagramDmUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-cream py-4 font-display text-sm uppercase tracking-[0.16em] text-ink"
          >
            <InstagramIcon /> Book a shoot
          </a>
        </div>
      </div>
    </header>
  );
}
