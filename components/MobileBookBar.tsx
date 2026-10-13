"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { InstagramIcon } from "./Button";

/** Phone-only booking bar that slides up once the visitor scrolls past the first screen. */
export function MobileBookBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ink/90 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] backdrop-blur-xl transition-transform duration-300 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!show}
    >
      <div className="flex items-center gap-3">
        <p className="min-w-0 flex-1 text-sm leading-snug text-cream-dim">
          Got a game or event coming up?
        </p>
        <a
          href={site.instagramDmUrl}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={show ? 0 : -1}
          className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full bg-cream px-5 font-display text-xs font-medium uppercase tracking-[0.16em] text-ink"
        >
          <InstagramIcon /> Book a shoot
        </a>
      </div>
    </div>
  );
}
