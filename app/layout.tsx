import type { Metadata, Viewport } from "next";
import "@fontsource-variable/oswald";
import "@fontsource-variable/inter";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Softball, Baseball & Event Photography, ${site.regionShort}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Game-day action, team portraits, tournaments, events and car shows, photographed by Braulio of B.A. Diamond Lens. Serving the Bay Area.",
  openGraph: {
    title: site.name,
    description: "Every play. Every moment. Softball, baseball & event photography in the Bay Area.",
    type: "website",
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
        <Providers>
          <Nav />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
