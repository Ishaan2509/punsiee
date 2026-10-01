import { motion } from "framer-motion";
import SafeImage from "./SafeImage.jsx";

const directionOffsets = {
  left: { x: -220, y: 0, rotate: -6 },
  right: { x: 220, y: 0, rotate: 6 },
  top: { x: 0, y: -180, rotate: 4 },
  bottom: { x: 0, y: 180, rotate: -4 },
  diagonal: { x: -160, y: -130, rotate: -8 },
  corner: { x: 190, y: 160, rotate: 7 },
};

// A single puzzle-piece tile: fills its grid cell edge-to-edge (no
// polaroid border/caption here — this is the tightly-fitted frame
// style). Tapping it still opens the lightbox where the caption shows.
export default function PhotoCard({ photo, index, style, onOpen, delay }) {
  const dir = directionOffsets[photo.direction] || directionOffsets.left;

  return (
    <motion.button
      onClick={() => onOpen(index)}
      initial={{ opacity: 0, x: dir.x, y: dir.y, rotate: dir.rotate, scale: 0.88 }}
      animate={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
      transition={{
        delay,
        duration: 1.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ scale: 1.03, zIndex: 20 }}
      className="relative overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy ring-1 ring-white"
      style={style}
    >
      <SafeImage
        src={photo.src}
        alt={photo.caption || "A memory"}
        label="add photo"
        className="w-full h-full object-cover"
      />
    </motion.button>
  );
}
