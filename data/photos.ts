export type Category = "diamond" | "events" | "cars";

export type Photo = {
  id: string;
  src: string;
  alt: string;
  category: Category;
  width: number;
  height: number;
  credit?: string;
};

export const categories: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "diamond", label: "Softball & Baseball" },
  { id: "events", label: "Events" },
  { id: "cars", label: "Cars" },
];

export const categoryLabel: Record<Category, string> = {
  diamond: "Softball & Baseball",
  events: "Events",
  cars: "Cars",
};

/*
 * PLACEHOLDER PHOTOS
 * These pull random Creative Commons photos from Flickr by keyword
 * (loremflickr.com). `lock` pins each slot to the same image between visits.
 *
 * To use real photos: drop files into /public/photos/ and replace an entry with
 *   { id: "pitcher-01", src: "/photos/pitcher-01.jpg", alt: "...", category: "diamond", width: 1600, height: 2000 }
 * width/height only need the right ratio (they set the tile shape).
 */
const flickr = (tags: string, w: number, h: number, lock: number) =>
  `https://loremflickr.com/${w}/${h}/${tags}?lock=${lock}`;

const P = (
  id: string,
  category: Category,
  tags: string,
  w: number,
  h: number,
  lock: number,
  alt: string,
): Photo => ({
  id,
  category,
  alt,
  width: w,
  height: h,
  src: flickr(tags, w, h, lock),
  credit: "Placeholder via Flickr (CC)",
});

export const photos: Photo[] = [
  P("d01", "diamond", "softball,pitcher/all", 1200, 1500, 101, "Softball pitcher mid-windmill delivery"),
  P("d02", "diamond", "baseball,stadium", 1600, 1067, 102, "Baseball field under evening lights"),
  P("d03", "diamond", "softball", 1200, 1500, 103, "Softball player ready at the plate"),
  P("cars01", "cars", "classic,car", 1600, 1067, 201, "Classic red pickup truck with the hood up at a car show"),
  P("d04", "diamond", "baseball,player", 1600, 1067, 104, "Infielder fielding a ground ball"),
  P("e01", "events", "conference,audience", 1600, 1067, 301, "Audience listening to a speaker at a business event"),
  P("d05", "diamond", "softball,team", 1600, 1067, 105, "Softball team huddled before the game"),
  P("d06", "diamond", "baseball,catcher", 1200, 1500, 106, "Catcher framing a pitch behind home plate"),
  P("cars02", "cars", "lowrider", 1200, 1500, 202, "Lowrider with custom chrome wheels"),
  P("d07", "diamond", "baseball,batter", 1200, 1500, 107, "Batter following through on a swing"),
  P("e02", "events", "networking,event", 1600, 1067, 302, "Guests networking at an evening event"),
  P("d08", "diamond", "softball,game", 1600, 1067, 108, "Runner sliding into second base"),
  P("d09", "diamond", "baseball,glove", 1600, 1067, 109, "Close-up of a worn leather glove and ball"),
  P("cars03", "cars", "hotrod", 1600, 1067, 203, "Hot rod parked on the street at golden hour"),
  P("d10", "diamond", "softball,catch/all", 1200, 1500, 110, "Outfielder diving for a fly ball"),
  P("e03", "events", "gala,party", 1200, 1500, 303, "Celebration toast at a company party"),
  P("d11", "diamond", "baseball,dugout", 1600, 1067, 111, "Players cheering from the dugout fence"),
  P("d12", "diamond", "softball,girls/all", 1200, 1500, 112, "Young softball player smiling in her helmet"),
  P("cars04", "cars", "vintage,car", 1200, 1500, 204, "Detail of a vintage car grille and headlights"),
  P("d13", "diamond", "baseball,field", 1600, 1067, 113, "Freshly chalked baseline at sunset"),
  P("e04", "events", "business,meeting", 1600, 1067, 304, "Team portrait at a local business"),
  P("d14", "diamond", "baseball,pitcher/all", 1200, 1500, 114, "Pitcher looking in for the sign"),
  P("d15", "diamond", "softball,team/all", 1600, 1067, 115, "Team celebrating a tournament win"),
  P("cars05", "cars", "carshow", 1600, 1067, 205, "Row of polished classics at a weekend car show"),
];

// Hand-picked slots for the home page.
export const heroPhoto: Photo = P(
  "hero",
  "diamond",
  "softball,pitcher/all",
  2400,
  1500,
  100,
  "Softball pitcher delivering under the lights",
);

export const featuredIds = ["d01", "d02", "d05", "cars01", "d07", "e01"];
export const storyPhoto = photos.find((p) => p.id === "d12")!;
export const portraitPhoto: Photo = P(
  "portrait",
  "diamond",
  "photographer,camera",
  1200,
  1500,
  400,
  "Braulio with his camera at the field (placeholder)",
);
