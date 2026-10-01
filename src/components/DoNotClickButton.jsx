import { useState } from "react";
import { motion } from "framer-motion";
import config from "../data/config.js";

// Fixed to the viewport at a random spot (picked once per page load)
// so it's just... there, wherever you happen to be — not something
// you scroll down to find, and not something that moves once placed.
export default function DoNotClickButton({ onClick }) {
  const [spot] = useState(() => ({
    top: `${18 + Math.random() * 58}vh`,
    left: `${8 + Math.random() * 76}vw`,
    rotate: Math.random() * 16 - 8,
  }));

  if (!config.doNotClickEnabled) return null;

  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1, rotate: spot.rotate }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.93 }}
      style={{ position: "fixed", top: spot.top, left: spot.left, zIndex: 45 }}
      className="px-6 py-2.5 rounded-full bg-plum text-cream text-sm tracking-widest uppercase shadow-soft border-2 border-dashed border-cream/40"
    >
      {config.doNotClickLabel}
    </motion.button>
  );
}