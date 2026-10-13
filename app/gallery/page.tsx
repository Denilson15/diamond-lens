import type { Metadata } from "next";
import { pageMeta } from "@/data/seo";
import { photos } from "@/data/photos";
import { PageHeader } from "@/components/PageHeader";
import { GalleryGrid } from "@/components/GalleryGrid";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = pageMeta("/gallery/", "Gallery", "Recent work by B.A. Diamond Lens: softball and baseball, events and car shows.");

export default function GalleryPage() {
  return (
    <>
      <PageHeader eyebrow="Recent work" title="The gallery" accent="highlights from the field & beyond.">
        <p>
          Most of my work so far has been at the field and at car shows, but I&rsquo;ll shoot any kind of event.
          Tap any photo to see it full screen.
        </p>
      </PageHeader>
      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <GalleryGrid photos={photos} />
      </section>
      <CtaBand />
    </>
  );
}
