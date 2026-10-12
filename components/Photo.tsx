"use client";

import { useState } from "react";
import type { Photo as PhotoT } from "@/data/photos";
import { DiamondMark } from "./DiamondMark";

type Props = {
  photo: PhotoT;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  /** Reserve the photo's own aspect ratio (for auto-height tiles like the gallery). */
  aspect?: boolean;
};

/**
 * <img> with a branded fallback: if a placeholder host is slow or down,
 * visitors see a dark tile with the diamond mark instead of a broken image.
 */
export function Photo({ photo, className = "", imgClassName = "", priority, aspect }: Props) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-ink-3 ${className}`}
      style={aspect ? { aspectRatio: `${photo.width} / ${photo.height}` } : undefined}
    >
      {/* Shown until the image arrives, and kept if it fails */}
      <div
        className={`absolute inset-0 grid place-items-center bg-gradient-to-br from-field-deep/60 via-ink-3 to-ink-2 transition-opacity duration-700 ${
          loaded && !failed ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden
      >
        <DiamondMark className="size-10 text-cream/15" />
      </div>
      {!failed && (
        <img
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover transition-opacity duration-700 ${
            loaded ? "opacity-100" : "opacity-0"
          } ${imgClassName}`}
        />
      )}
      {failed && <span className="sr-only">{photo.alt}</span>}
    </div>
  );
}
