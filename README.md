# B.A. Diamond Lens: Website

Portfolio site for **Braulio A. / @ba_diamondlens**: sports, events and everything in between, in the Bay Area.

Built with Next.js (App Router), TypeScript, Tailwind CSS v4 and Framer Motion. It exports as a fully static site.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site written to ./out
```

## Where to edit things

| What | File |
| --- | --- |
| Name, Instagram handle, service area | `data/site.ts` |
| **Gallery photos** (+ hero / featured picks) | `data/photos.ts` |
| Packages & prices, FAQ | `data/packages.ts` |
| Testimonials | `data/testimonials.ts` |
| Colors & fonts | `app/globals.css` (`@theme` block) |
| About page story | `app/about/page.tsx` |

### Swapping in real photos

The current photos in `public/photos/` are **Creative Commons placeholders** from Flickr. Their credits are
listed on `/credits` and in the full-screen viewer. To replace them:

1. Export his photos as JPG, about 2000px on the long side, and drop them in `public/photos/`.
2. In `data/photos.ts`, add an entry for each one (no `credit` needed for his own work):
   ```ts
   { id: "pitcher-01", category: "diamond", src: "/photos/pitcher-01.jpg", width: 1600, height: 2000, alt: "Pitcher mid-delivery" },
   ```
   `category` is `"diamond"`, `"events"` or `"cars"`. `width`/`height` only need the right ratio.
3. Update `galleryOrder`, `heroPhoto`, `featuredIds`, `storyPhoto`, `portraitPhoto` and `aboutPhotos` in that file.
4. Once every placeholder is gone, delete the old files, `app/credits/`, and the credits line in `components/Footer.tsx`.

## Deploy

Live on Netlify: https://ba-diamond-len.netlify.app (`netlify.toml` builds with `npm run build` and publishes `out/`).
Linking this repo in the Netlify project makes every push to `main` redeploy automatically.

## Booking flow

There's no backend. The Contact page builds an inquiry message, copies it to the clipboard, and opens
`ig.me/m/ba_diamondlens`, since Instagram doesn't allow pre-filled DMs. All "Book a shoot" buttons go to the same DM.
