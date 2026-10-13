import type { Metadata, Viewport } from "next";
import "@fontsource-variable/oswald";
import "@fontsource-variable/archivo/wdth.css";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { MobileBookBar } from "@/components/MobileBookBar";
import { site } from "@/data/site";
import { Providers } from "@/components/Providers";
import { businessJsonLd, rootOg } from "@/data/seo";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  alternates: { canonical: "/" },
  keywords: [
    "Bay Area sports photographer",
    "softball photographer",
    "baseball photographer",
    "team photos",
    "event photographer Bay Area",
    "quinceañera photographer",
    "graduation photos",
    "car show photography",
  ],
  title: {
    default: `${site.name} | Sports & Event Photography, ${site.regionShort}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Game days, team photos, birthdays, quinceañeras, graduations, business events and car shows. Photography by Braulio of B.A. Diamond Lens, serving the Bay Area.",
  openGraph: {
    title: site.name,
    description: "Every play. Every moment. Sports and event photography in the Bay Area.",
    type: "website",
    siteName: site.name,
    url: "/",
    images: [rootOg.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: "Every play. Every moment. Sports and event photography in the Bay Area.",
    images: [rootOg.ogImage.url],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0c0b",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[80] focus:rounded-full focus:bg-cream focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd).replace(/</g, "\\u003c") }}
        />
        <Providers>
          <Nav />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <MobileBookBar />
        </Providers>
      </body>
    </html>
  );
}
