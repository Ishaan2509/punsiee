# Her Birthday Site 💌

A personal, scrapbook-style birthday website built with React, Vite, Tailwind CSS
and Framer Motion.

## Running it locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`).

To build the final version to share/host:

```bash
npm run build
```

This creates a `dist/` folder you can upload to any static host (Netlify, Vercel,
GitHub Pages, etc.) or open directly.

## Everything you'll want to edit lives in `src/data/`

You do **not** need to touch any component code to personalize the site.

### `src/data/config.js`
- Her name
- Landing page subtitle and button text
- Page titles/subtitles
- Paths to the video, poster image, and music file
- The hidden final-surprise message, and whether it's enabled at all
  (`finalSurpriseEnabled: false` to turn it off completely)

### `src/data/letters.js`
An array of `{ name, letter }` objects — one per friend. Add or remove as many
as you want; the page automatically lays them all out.

Optionally give any letter its own song by adding `spotifyId: "..."`. Get the
ID from the song's Spotify share link — it's the part after `/track/`:
`https://open.spotify.com/track/3n3Ppam7vgaVa1iaRUc9Lp` → `3n3Ppam7vgaVa1iaRUc9Lp`.
A small embedded player appears at the top of that letter and stops
automatically when the letter is closed. No Spotify login, API key, or
developer account needed — it uses Spotify's public embed player. Leave
`spotifyId` blank for letters that shouldn't have a song.

### `src/data/photos.js`
You shouldn't need to touch this one at all — see "Adding photos" below.

### `src/data/photoCaptions.js`
Optional. Add a caption for any photo by its filename, e.g.
`{ "beach-trip.jpg": "We said we'd only stay for one drink" }`. Photos not
listed here just show with no caption.

## Adding photos (fully automatic)

Just drop your image files (`.jpg`, `.jpeg`, `.png`, or `.webp`) into
`src/assets/photos/` — that's it. They're picked up automatically, sorted by
filename, and laid out in the puzzle-style collage. This works whether you
add 10 photos or 90; nothing needs to be listed or configured. Restart
`npm run dev` (or just save any file) if photos added while the dev server
was already running don't show up immediately.

## Adding your other media

1. Drop your video + a poster/thumbnail image into `src/assets/video/` and
   update `videoSrc` / `videoPoster` in `config.js`.
2. Drop a song into `src/assets/music/` and update `musicSrc` in `config.js`.
3. (Optional) drop short sound effect files into `src/assets/sounds/`.

The site is designed to **never break** if any of these files are missing —
you'll just see a soft placeholder instead of a photo, and the music/sound
buttons quietly disable themselves.

## Little extra touches
- The landing page's enter button dodges the cursor (or a tap) a few times
  before it can be clicked — tweak `maxDodges` in
  `src/components/DodgeButton.jsx` if you want it more or less stubborn.
- The Memories page has a "DO NOT CLICK" button. Clicking it shakes the
  screen, blurs it, and reveals a photo you provide at
  `src/assets/special/do-not-click.jpg` (set the path in `config.js` via
  `doNotClickPhotoSrc`). Closing it clears the blur and makes the button
  disappear for good. Turn the whole thing off with `doNotClickEnabled: false`.

## The hidden surprise

Once she's opened a few letters, finished the photo collage, and watched the
video, a small heart icon appears in the navigation. Clicking it reveals one
final message. You can:
- Change how many letters trigger it, or which steps are required, in
  `finalSurpriseRequirements` inside `config.js`.
- Turn it off entirely with `finalSurpriseEnabled: false`.

## Notes
- Reduced-motion is respected automatically (via the OS/browser setting).
- Music and sound never autoplay — everything requires a tap first.
- Everything is mobile-first and touch-friendly (no hover-only interactions).
