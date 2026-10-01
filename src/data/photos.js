// ============================================================
// EDIT ME? Actually — you don't need to!
//
// Photos are now loaded automatically from src/assets/photos/.
// Just drop your image files in that folder (jpg, jpeg, png, or webp)
// and they'll show up on the Memories page automatically, sorted by
// filename. Works for 10 photos or 90 — no need to list them here.
//
// Want a caption on a specific photo? Add it to
// src/data/photoCaptions.js using the exact filename as the key.
// That's the only file you need to touch for photos.
// ============================================================

import photoCaptions from "./photoCaptions.js";

// Grabs every image in the photos folder at build time. `eager: true`
// + `import: "default"` gives us the final image URL directly.
const photoModules = import.meta.glob(
  "../assets/photos/*.{jpg,jpeg,JPG,JPEG,png,PNG,webp,WEBP}",
  { eager: true, import: "default" }
);

const directions = ["left", "right", "top", "bottom", "diagonal", "corner"];

const photos = Object.keys(photoModules)
  // sort so photo1.jpg, photo2.jpg... start in a predictable order...
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  .filter((path) => !path.toLowerCase().includes("readme"))
  .map((path, i) => {
    const filename = path.split("/").pop();
    return {
      src: photoModules[path],
      caption: photoCaptions[filename] || "",
      direction: directions[i % directions.length],
    };
  });

// ...then shuffle so the collage lands in a different order than the
// filenames, and a different order each time the page loads.
function shuffle(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export default shuffle(photos);