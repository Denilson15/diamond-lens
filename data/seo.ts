import type { Metadata } from "next";
import { site } from "./site";
import { packages } from "./packages";

const ogImage = { url: "/og.jpg", width: 1200, height: 630, alt: `${site.name}: sports & event photography in the Bay Area` };

/** Per-page metadata with canonical URL plus matching link-preview (Open Graph / X) tags. */
export function pageMeta(path: string, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", siteName: site.name, url: path, title: `${title} | ${site.name}`, description, images: [ogImage] },
    twitter: { card: "summary_large_image", title: `${title} | ${site.name}`, description, images: [ogImage.url] },
  };
}

export const rootOg = { ogImage };

/** Structured data so Google understands this is a local photography business. */
export const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#business`,
  name: site.name,
  alternateName: site.shortName,
  description:
    "Sports and event photography in the San Francisco Bay Area: softball and baseball game days, team photos, birthdays, quinceañeras, graduations, business events and car shows.",
  url: site.url,
  image: `${site.url}/og.jpg`,
  logo: `${site.url}/icon.svg`,
  founder: { "@type": "Person", name: "Braulio", jobTitle: "Photographer" },
  areaServed: { "@type": "Place", name: "San Francisco Bay Area, California" },
  sameAs: [site.instagramUrl],
  priceRange: "$$",
  knowsAbout: ["Sports photography", "Softball photography", "Baseball photography", "Event photography", "Car show photography"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Photography packages",
    itemListElement: packages.map((p) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: p.name, description: p.blurb },
      priceSpecification: { "@type": "PriceSpecification", minPrice: p.priceFrom, priceCurrency: "USD" },
    })),
  },
};
