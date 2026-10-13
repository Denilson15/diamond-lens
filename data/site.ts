// Single source of truth for brand details. Edit here and every page updates.
export const site = {
  name: "B.A. Diamond Lens",
  shortName: "Diamond Lens",
  photographer: "Braulio",
  region: "the San Francisco Bay Area",
  regionShort: "Bay Area, CA",
  instagramHandle: "ba_diamondlens",
  get instagramUrl() {
    return `https://www.instagram.com/${this.instagramHandle}/`;
  },
  // Opens a direct-message thread with the account in the Instagram app / web.
  get instagramDmUrl() {
    return `https://ig.me/m/${this.instagramHandle}`;
  },
  tagline: "Sports, events & everything in between",
  /** Public address of the site. Change this one line when a custom domain is set up. */
  url: "https://ba-diamond-len.netlify.app",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/services/", label: "Services" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
] as const;
