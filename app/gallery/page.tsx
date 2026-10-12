import type { Metadata } from "next";
import { photos } from "@/data/photos";
import { PageHeader } from "@/components/PageHeader";
import { GalleryGrid } from "@/components/GalleryGrid";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Softball and baseball action, team photos, events and car shows by B.A. Diamond Lens.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader eyebrow="Portfolio" title="The gallery" accent="highlights from the field & beyond.">
        <p>Filter by what you&rsquo;re after, and tap any photo to view it full screen.</p>
      </PageHeader>
      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <GalleryGrid photos={photos} />
      </section>
      <CtaBand />
    </>
  );
}
