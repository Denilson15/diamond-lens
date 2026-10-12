export type Category = "diamond" | "events" | "cars";

export type Photo = {
  id: string;
  src: string;
  alt: string;
  category: Category | "portrait";
  width: number;
  height: number;
  /** Required for the placeholder Creative Commons photos. Real photos by Braulio don't need it. */
  credit?: { author: string; license: string; url: string };
};

export const categories: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "diamond", label: "Softball & Baseball" },
  { id: "events", label: "Events" },
  { id: "cars", label: "Cars" },
];

export const categoryLabel: Record<Photo["category"], string> = {
  diamond: "Softball & Baseball",
  events: "Events",
  cars: "Cars",
  portrait: "Portrait",
};

/*
 * PLACEHOLDER PHOTOS: Creative Commons images from Flickr (found via Openverse),
 * stored in /public/photos. Delete that folder and these entries once Braulio's
 * own photos are in. To add a real photo:
 *   { id: "pitcher-01", category: "diamond", src: "/photos/pitcher-01.jpg", width: 1600, height: 2000, alt: "..." }
 * width/height only need the right ratio (they set the tile shape).
 */
const library: Photo[] = [
  { id: "hero-field-night", category: "diamond", src: "/photos/hero-field-night.jpg", width: 1920, height: 1440, alt: "Ballpark under the lights at night", credit: { author: "Keiteay", license: "CC0 1.0", url: "https://commons.wikimedia.org/w/index.php?curid=163578156" } },
  { id: "hero-pitcher", category: "diamond", src: "/photos/hero-pitcher.jpg", width: 1024, height: 680, alt: "Softball pitcher mid-windmill on a sunny afternoon", credit: { author: "ShuttrKing|KT", license: "CC BY 2.0", url: "https://www.flickr.com/photos/46705519@N07/5770084724" } },
  { id: "pitcher-stride", category: "diamond", src: "/photos/pitcher-stride.jpg", width: 1024, height: 1024, alt: "Pitcher driving off the rubber", credit: { author: "mark6mauno", license: "CC BY 2.0", url: "https://www.flickr.com/photos/98147195@N00/32664603993" } },
  { id: "pitcher-green", category: "diamond", src: "/photos/pitcher-green.jpg", width: 1024, height: 683, alt: "Softball pitcher releasing the ball", credit: { author: "New Deal Lions Sports and then some", license: "CC BY 2.0", url: "https://www.flickr.com/photos/86329203@N08/13387586805" } },
  { id: "pitcher-release", category: "diamond", src: "/photos/pitcher-release.jpg", width: 720, height: 797, alt: "Young pitcher letting it go", credit: { author: "eagle102.net", license: "CC BY 2.0", url: "https://www.flickr.com/photos/8361491@N03/2798633336" } },
  { id: "pitcher-reach", category: "diamond", src: "/photos/pitcher-reach.jpg", width: 1024, height: 870, alt: "Pitcher at full extension", credit: { author: "SD Dirk", license: "CC BY 2.0", url: "https://www.flickr.com/photos/41005487@N00/5744261721" } },
  { id: "batter-ready", category: "diamond", src: "/photos/batter-ready.jpg", width: 819, height: 1024, alt: "Batter locked in at the plate", credit: { author: "Steven Pisano", license: "CC BY 2.0", url: "https://www.flickr.com/photos/45776673@N04/10681446755" } },
  { id: "pitcher-34", category: "diamond", src: "/photos/pitcher-34.jpg", width: 1024, height: 1024, alt: "Number 34 winding up", credit: { author: "Steven Pisano", license: "CC BY 2.0", url: "https://www.flickr.com/photos/45776673@N04/14779073152" } },
  { id: "pitcher-dusk", category: "diamond", src: "/photos/pitcher-dusk.jpg", width: 1024, height: 732, alt: "Pitch on its way under the evening sky", credit: { author: "Steven Pisano", license: "CC BY 2.0", url: "https://www.flickr.com/photos/45776673@N04/10711379546" } },
  { id: "catcher-frame", category: "diamond", src: "/photos/catcher-frame.jpg", width: 1024, height: 732, alt: "Catcher framing a pitch", credit: { author: "Steven Pisano", license: "CC BY 2.0", url: "https://www.flickr.com/photos/45776673@N04/10356150103" } },
  { id: "fielder-throw", category: "diamond", src: "/photos/fielder-throw.jpg", width: 819, height: 1024, alt: "Fielder setting up to throw", credit: { author: "Steven Pisano", license: "CC BY 2.0", url: "https://www.flickr.com/photos/45776673@N04/14592929749" } },
  { id: "catcher-close", category: "diamond", src: "/photos/catcher-close.jpg", width: 1023, height: 948, alt: "Catcher in full gear waiting on the pitch", credit: { author: "SD Dirk", license: "CC BY 2.0", url: "https://www.flickr.com/photos/41005487@N00/5744779626" } },
  { id: "batter-contact", category: "diamond", src: "/photos/batter-contact.jpg", width: 1024, height: 1024, alt: "Bat meets ball", credit: { author: "mark6mauno", license: "CC BY 2.0", url: "https://www.flickr.com/photos/98147195@N00/33337516411" } },
  { id: "baseball-pitcher", category: "diamond", src: "/photos/baseball-pitcher.jpg", width: 1024, height: 683, alt: "Baseball pitcher delivering to the plate", credit: { author: "troy_williams", license: "CC BY 2.0", url: "https://www.flickr.com/photos/82155068@N03/16705091639" } },
  { id: "youth-swing", category: "diamond", src: "/photos/youth-swing.jpg", width: 1024, height: 683, alt: "Youth hitter swinging through", credit: { author: "nan palmero", license: "CC BY 2.0", url: "https://www.flickr.com/photos/97402086@N00/17280557685" } },
  { id: "youth-pitcher", category: "diamond", src: "/photos/youth-pitcher.jpg", width: 1024, height: 683, alt: "Youth pitcher mid-delivery", credit: { author: "nan palmero", license: "CC BY 2.0", url: "https://www.flickr.com/photos/97402086@N00/17280032081" } },
  { id: "field-lights", category: "diamond", src: "/photos/field-lights.jpg", width: 1024, height: 768, alt: "Ballfield under the lights at night", credit: { author: "Shreveport-Bossier: Louisiana's Other Side", license: "CC BY 2.0", url: "https://www.flickr.com/photos/57902140@N08/5786982678" } },
  { id: "ball-detail", category: "diamond", src: "/photos/ball-detail.jpg", width: 1024, height: 683, alt: "Close-up of the stitches on a ball", credit: { author: "andrewmalone", license: "CC BY 2.0", url: "https://www.flickr.com/photos/41894170049@N01/1728709092" } },
  { id: "team-photo", category: "diamond", src: "/photos/team-photo.jpg", width: 1024, height: 683, alt: "Softball team photo on the field", credit: { author: "Larry Lamsa", license: "CC BY 2.0", url: "https://www.flickr.com/photos/22191277@N03/5538930762" } },
  { id: "team-huddle", category: "diamond", src: "/photos/team-huddle.jpg", width: 1024, height: 819, alt: "Team huddled up before the game", credit: { author: "Larry Lamsa", license: "CC BY 2.0", url: "https://www.flickr.com/photos/22191277@N03/5538931082" } },
  { id: "youth-infield", category: "diamond", src: "/photos/youth-infield.jpg", width: 812, height: 811, alt: "Young infielder making the play", credit: { author: "brendan-c", license: "CC BY 2.0", url: "https://www.flickr.com/photos/56145589@N00/26760489835" } },
  { id: "at-bat", category: "diamond", src: "/photos/at-bat.jpg", width: 1023, height: 685, alt: "At-bat with the catcher and ump set", credit: { author: "DeusXFlorida", license: "CC BY 2.0", url: "https://www.flickr.com/photos/8363028@N08/3381046750" } },
  { id: "lowrider-impala", category: "cars", src: "/photos/lowrider-impala.jpg", width: 1024, height: 676, alt: "Red lowrider Impala", credit: { author: "Walter Watzpatzkowski", license: "CC BY 2.0", url: "https://www.flickr.com/photos/11022262@N03/2685222672" } },
  { id: "lowrider-hop", category: "cars", src: "/photos/lowrider-hop.jpg", width: 908, height: 1024, alt: "Lowrider lifted on its hydraulics", credit: { author: "MGSpiller", license: "CC BY-SA 2.0", url: "https://www.flickr.com/photos/39881171@N00/2956023148" } },
  { id: "lowrider-hood", category: "cars", src: "/photos/lowrider-hood.jpg", width: 1024, height: 768, alt: "Blue lowrider with the hood up at a show", credit: { author: "julialat34", license: "CC BY 2.0", url: "https://www.flickr.com/photos/16979033@N07/2427181104" } },
  { id: "red-chevy-truck", category: "cars", src: "/photos/red-chevy-truck.jpg", width: 1024, height: 768, alt: "Candy red classic Chevy truck", credit: { author: "Hugo-90", license: "CC BY 2.0", url: "https://www.flickr.com/photos/32109282@N00/6193105188" } },
  { id: "hot-rod", category: "cars", src: "/photos/hot-rod.jpg", width: 1024, height: 685, alt: "Orange hot rod at a car show", credit: { author: "Hugo-90", license: "CC BY 2.0", url: "https://www.flickr.com/photos/32109282@N00/14221419217" } },
  { id: "impala-green", category: "cars", src: "/photos/impala-green.jpg", width: 1024, height: 683, alt: "Green '64 Impala at a car show", credit: { author: "Dane Van", license: "CC BY 2.0", url: "https://www.flickr.com/photos/11028609@N05/36097386190" } },
  { id: "grille-detail", category: "cars", src: "/photos/grille-detail.jpg", width: 1024, height: 768, alt: "Chrome grille detail on a classic", credit: { author: "bsabarnowl", license: "CC BY 2.0", url: "https://www.flickr.com/photos/10966541@N02/5095037981" } },
  { id: "event-stage", category: "events", src: "/photos/event-stage.jpg", width: 1008, height: 672, alt: "Speaker on stage at a conference", credit: { author: "Cydcor", license: "CC BY 2.0", url: "https://www.flickr.com/photos/47341270@N03/9323706582" } },
  { id: "event-lights", category: "events", src: "/photos/event-lights.jpg", width: 1024, height: 683, alt: "Packed room under red stage lights", credit: { author: "IFLA HQ", license: "CC BY-SA 2.0", url: "https://www.flickr.com/photos/29894388@N04/20759728748" } },
  { id: "event-crowd", category: "events", src: "/photos/event-crowd.jpg", width: 1024, height: 683, alt: "Guests laughing between sessions", credit: { author: "ACRM-Rehabilitation", license: "CC BY-SA 2.0", url: "https://www.flickr.com/photos/92423552@N07/49035726557" } },
  { id: "event-networking", category: "events", src: "/photos/event-networking.jpg", width: 1024, height: 683, alt: "Networking at a local business event", credit: { author: "ShashiBellamkonda", license: "CC BY 2.0", url: "https://www.flickr.com/photos/35899785@N00/2962855569" } },
  { id: "ribbon-cutting", category: "events", src: "/photos/ribbon-cutting.jpg", width: 1024, height: 775, alt: "Ribbon cutting at a grand opening", credit: { author: "FoodBankCENC.org", license: "CC BY 2.0", url: "https://www.flickr.com/photos/36654051@N07/10580905716" } },
  { id: "photographers", category: "portrait", src: "/photos/photographers.jpg", width: 1024, height: 768, alt: "Sports photographers working the sideline", credit: { author: "wwarby", license: "CC BY 2.0", url: "https://www.flickr.com/photos/26782864@N00/4782818106" } },
];

const byId = (id: string) => {
  const p = library.find((x) => x.id === id);
  if (!p) throw new Error(`Unknown photo id: ${id}`);
  return p;
};

/** Order the gallery shows them in. */
const galleryOrder = [
  "batter-contact", "field-lights", "pitcher-stride", "lowrider-impala", "catcher-frame", "event-stage",
  "pitcher-34", "team-photo", "red-chevy-truck", "batter-ready", "pitcher-dusk", "event-lights",
  "fielder-throw", "lowrider-hop", "baseball-pitcher", "pitcher-reach", "ribbon-cutting", "catcher-close",
  "hot-rod", "youth-swing", "team-huddle", "event-networking", "pitcher-green", "impala-green",
  "youth-pitcher", "ball-detail", "lowrider-hood", "at-bat", "event-crowd", "youth-infield",
  "grille-detail", "pitcher-release", "hero-pitcher",
];
export const photos: Photo[] = galleryOrder.map(byId);

// Hand-picked slots used around the site.
export const heroPhoto = byId("hero-field-night");
export const featuredIds = ["pitcher-stride", "field-lights", "team-photo", "lowrider-impala", "batter-contact", "event-stage"];
export const storyPhoto = byId("pitcher-release");
export const portraitPhoto = byId("photographers");
export const aboutPhotos = {
  daughter: byId("batter-ready"),
  parents: byId("team-huddle"),
  beyond: byId("lowrider-hood"),
};

/** Every photo that needs attribution, for the credits page. */
export const credits = library.filter((p) => p.credit);
