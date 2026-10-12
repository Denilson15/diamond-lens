# B.A. Diamond Lens: Website

Portfolio site for **Braulio A. / @ba_diamondlens**: softball, baseball, event and car-show photography in the Bay Area.

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

1. Export the photos as JPG/WebP, about 2000px on the long side, and drop them in `public/photos/`.
2. In `data/photos.ts`, replace a placeholder entry with:
   ```ts
   { id: "pitcher-01", src: "/photos/pitcher-01.jpg", alt: "Pitcher mid-delivery", category: "diamond", width: 1600, height: 2000 },
   ```
   `category` is `"diamond"`, `"events"` or `"cars"`. `width`/`height` only need the right ratio.
3. Update `heroPhoto`, `featuredIds`, `storyPhoto` and `portraitPhoto` at the bottom of that file.
4. Delete the placeholder-credit line in `components/Footer.tsx`.

## Deploy to Vercel

1. Push this folder to a GitHub repo (e.g. `diamond-lens`).
2. Go to vercel.com → **Add New → Project** → import the repo. The defaults work as-is.
3. Optional: under **Settings → Domains**, add a custom domain such as `diamondlens.com`.

Every push to `main` redeploys automatically.

## Booking flow

There's no backend. The Contact page builds an inquiry message, copies it to the clipboard, and opens
`ig.me/m/ba_diamondlens`, since Instagram doesn't allow pre-filled DMs. All "Book a shoot" buttons go to the same DM.
