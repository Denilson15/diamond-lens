// PLACEHOLDER PRICES. Edit freely; the Services page and home preview read from here.
export type Package = {
  id: string;
  name: string;
  priceFrom: number;
  unit: string;
  blurb: string;
  includes: string[];
  turnaround: string;
  featured?: boolean;
};

export const packages: Package[] = [
  {
    id: "game-day",
    name: "Game Day Coverage",
    priceFrom: 75,
    unit: "per player",
    blurb: "Your athlete, every at-bat and every play in the field, shot from the fence line.",
    includes: [
      "Full game coverage of one player",
      "25+ edited action shots",
      "Online gallery for easy downloads",
      "Print-ready high resolution files",
    ],
    turnaround: "3–5 days",
  },
  {
    id: "team",
    name: "Team & Individual Portraits",
    priceFrom: 250,
    unit: "per team",
    blurb: "Banner-ready team photos plus clean individual portraits for every kid on the roster.",
    includes: [
      "Team group photo (formal + fun)",
      "Individual portrait of each player",
      "Banner and senior-night ready edits",
      "Shared gallery for the whole team",
    ],
    turnaround: "5–7 days",
    featured: true,
  },
  {
    id: "tournament",
    name: "Tournament Weekend",
    priceFrom: 400,
    unit: "per team",
    blurb: "All-weekend coverage for the whole team, from pool play to the championship dogpile.",
    includes: [
      "Coverage across multiple games",
      "Action shots of every player",
      "Dugout, candid & celebration moments",
      "Highlights delivered before Monday",
    ],
    turnaround: "Highlights in 48 hrs",
  },
  {
    id: "events",
    name: "Events & Business",
    priceFrom: 300,
    unit: "starting, 2 hrs",
    blurb: "Openings, company parties, community events and team headshots for local businesses.",
    includes: [
      "Up to 2 hours on site",
      "Candids, speakers & group shots",
      "Social-media ready crops",
      "Commercial usage for your business",
    ],
    turnaround: "5–7 days",
  },
  {
    id: "cars",
    name: "Car Shows & Automotive",
    priceFrom: 150,
    unit: "per vehicle",
    blurb: "Chrome, paint and details. Rolling shots or parked at the show.",
    includes: [
      "Detail and full-vehicle shots",
      "Show or location shoot",
      "15+ edited images",
      "High resolution files",
    ],
    turnaround: "3–5 days",
  },
];

export const faqs = [
  {
    q: "How do I book?",
    a: "Send a DM on Instagram with your date, location and what you need. The Contact page can write the message for you.",
  },
  {
    q: "Do you travel?",
    a: "Yes. I cover fields and events all around the Bay Area. Tournaments farther out are welcome too; just ask.",
  },
  {
    q: "How do we get our photos?",
    a: "You get a private online gallery where you can view, download and share full-resolution images.",
  },
  {
    q: "Can parents split a team package?",
    a: "Absolutely. Team packages are set up so the cost can be shared across the roster.",
  },
];
