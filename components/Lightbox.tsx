"use client";

import { useEffect, useRef } from "react";
import { categoryLabel, type Photo as PhotoT } from "@/data/photos";
import { Photo } from "./Photo";

export function Lightbox({
  photos,
  index,
  onClose,
  onIndex,
}: {
  photos: PhotoT[];
  index: number;
  onClose: () => void;
  onIndex: (i: number) => void;
}) {
  const photo = photos[index];
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const prev = () => onIndex((index - 1 + photos.length) % photos.length);
  const next = () => onIndex((index + 1) % photos.length);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onIndex((index - 1 + photos.length) % photos.length);
      if (e.key === "ArrowRight") onIndex((index + 1) % photos.length);
      // Keep Tab focus inside the dialog while it's open.
      if (e.key === "Tab" && dialogRef.current) {
        const items = dialogRef.current.querySelectorAll<HTMLElement>("button, a[href]");
        if (!items.length) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, photos.length, onClose, onIndex]);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, []);

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={photo.alt}
      className="fixed inset-0 z-[70] flex flex-col bg-ink/95 backdrop-blur-md"
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) (dx > 0 ? prev : next)();
        touchX.current = null;
      }}
    >
      <div className="flex items-center justify-between px-4 py-4 sm:px-6">
        <p className="font-display text-xs uppercase tracking-[0.2em] text-cream-dim">
          {categoryLabel[photo.category]} <span className="mx-2 text-muted">/</span>
          {index + 1} of {photos.length}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="grid size-11 place-items-center rounded-full border border-line text-cream transition-colors hover:bg-cream/10"
          aria-label="Close"
        >
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-4 sm:px-20" onClick={onClose}>
        <div onClick={(e) => e.stopPropagation()} className="flex h-full max-h-full w-full items-center justify-center">
          <Photo
            key={photo.id}
            photo={photo}
            priority
            className="max-h-full min-h-48 min-w-64 w-auto rounded-lg"
            imgClassName="!h-auto max-h-[calc(100dvh-10rem)] !w-auto max-w-full !object-contain"
          />
        </div>

        {[
          { label: "Previous photo", fn: prev, side: "left-2 sm:left-6", d: "M15 6l-6 6 6 6" },
          { label: "Next photo", fn: next, side: "right-2 sm:right-6", d: "M9 6l6 6-6 6" },
        ].map((b) => (
          <button
            key={b.label}
            type="button"
            aria-label={b.label}
            onClick={(e) => {
              e.stopPropagation();
              b.fn();
            }}
            className={`absolute top-1/2 ${b.side} grid size-11 -translate-y-1/2 place-items-center sm:size-12 rounded-full border border-line bg-ink/60 text-cream transition-colors hover:bg-cream hover:text-ink sm:grid`}
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
              <path d={b.d} />
            </svg>
          </button>
        ))}
      </div>
      <p className="px-4 pb-5 text-center text-sm text-cream-dim">
        {photo.alt}
        {photo.credit && (
          <span className="mt-1 block text-xs text-muted">
            Photo:{" "}
            <a href={photo.credit.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-cream-dim">
              {photo.credit.author}
            </a>{" "}
            · {photo.credit.license}
          </span>
        )}
      </p>
    </div>
  );
}
