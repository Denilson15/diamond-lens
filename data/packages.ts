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
    id: "events",
    name: "Parties & Events",
    priceFrom: 300,
    unit: "starting, 2 hrs",
    blurb: "Birthdays, quinceañeras, graduations, baby showers, family parties, business events. If it's worth remembering, I'll be there.",
    includes: [
      "Up to 2 hours on site",
      "Candids, family & group shots",
      "Online gallery everyone can download from",
      "Business events get commercial use",
    ],
    turnaround: "5–7 days",
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
    q: "Do you only do sports?",
    a: "Nah. Sports is how I got started, but I'll shoot pretty much any event: birthdays, quinces, graduations, baby showers, business stuff, car shows. Just hit me up.",
  },
  {
    q: "How do I book?",
    a: "Just DM me on Instagram with the date, where it's at, and what you're looking for. The Contact page can write the message for you.",
  },
  {
    q: "Do you travel?",
    a: "Yeah, I'm all over the Bay. If your tournament's farther out, hit me up and we'll figure it out.",
  },
  {
    q: "How do we get our photos?",
    a: "I send you a link to an online gallery where you can look through everything and download the full-size pics.",
  },
  {
    q: "Can parents split a team package?",
    a: "Yeah, a lot of teams do that. The team packages are set up so parents can split it.",
  },
];
