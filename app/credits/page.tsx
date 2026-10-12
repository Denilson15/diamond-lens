import type { Metadata } from "next";
import { credits } from "@/data/photos";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Photo Credits",
  robots: { index: false },
};

export default function CreditsPage() {
  return (
    <>
      <PageHeader eyebrow="Photo credits" title="Placeholder" accent="photography.">
        <p>
          While the site is being set up, it uses Creative Commons photos from Flickr. Thanks to these photographers.
          They&rsquo;ll be swapped out for Braulio&rsquo;s own work soon.
        </p>
      </PageHeader>
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <ul className="divide-y divide-line border-y border-line text-sm">
          {credits.map((p) => (
            <li key={p.id} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-cream">{p.alt}</span>
              <span className="text-cream-dim">
                <a href={p.credit!.url} target="_blank" rel="noopener noreferrer" className="underline decoration-line underline-offset-4 hover:text-cream">
                  {p.credit!.author}
                </a>{" "}
                · {p.credit!.license}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
