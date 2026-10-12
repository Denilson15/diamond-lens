"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useMemo, useState } from "react";
import { categories, categoryLabel, type Category, type Photo as PhotoT } from "@/data/photos";
import { Photo } from "./Photo";
import { Lightbox } from "./Lightbox";

export function GalleryGrid({ photos }: { photos: PhotoT[] }) {
  const [filter, setFilter] = useState<Category | "all">("all");
  const [open, setOpen] = useState<number | null>(null);

  const visible = useMemo(
    () => (filter === "all" ? photos : photos.filter((p) => p.category === filter)),
    [filter, photos],
  );
  const counts = useMemo(() => {
    const c: Record<string, number> = { all: photos.length };
    photos.forEach((p) => (c[p.category] = (c[p.category] ?? 0) + 1));
    return c;
  }, [photos]);

  const close = useCallback(() => setOpen(null), []);

  return (
    <>
      <div className="sticky top-18 z-30 -mx-4 mb-8 border-b border-line bg-ink/85 px-4 py-4 backdrop-blur-xl sm:mx-0 sm:rounded-full sm:border sm:px-2 sm:py-2">
        <div role="tablist" aria-label="Filter photos" className="flex gap-2 overflow-x-auto [scrollbar-width:none]">
          {categories.map((c) => {
            const active = filter === c.id;
            return (
              <button
                key={c.id}
                role="tab"
                aria-selected={active}
                type="button"
                onClick={() => setFilter(c.id)}
                className={`relative shrink-0 rounded-full px-5 py-2.5 font-display text-xs uppercase tracking-[0.16em] transition-colors ${
                  active ? "text-ink" : "text-cream-dim hover:text-cream"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="chip"
                    className="absolute inset-0 rounded-full bg-cream"
                    transition={{ type: "spring", stiffness: 400, damping: 34 }}
                  />
                )}
                <span className="relative">
                  {c.label} <span className={active ? "text-ink/50" : "text-muted"}>{counts[c.id] ?? 0}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <motion.ul layout className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>li]:mb-4">
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <motion.li
              key={p.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="break-inside-avoid"
            >
              <button
                type="button"
                onClick={() => setOpen(i)}
                className="group relative block w-full overflow-hidden rounded-xl text-left"
                aria-label={`Open photo: ${p.alt}`}
              >
                <Photo
                  photo={p}
                  aspect
                  className="w-full"
                  imgClassName="transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                />
                <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-cream/5" />
                <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-ink/90 via-ink/30 to-transparent p-4 pt-16 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <span className="text-sm text-cream">{p.alt}</span>
                  <span className="eyebrow shrink-0 pl-3 !text-[0.6rem]">{categoryLabel[p.category]}</span>
                </span>
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      {open !== null && <Lightbox photos={visible} index={open} onClose={close} onIndex={setOpen} />}
    </>
  );
}
