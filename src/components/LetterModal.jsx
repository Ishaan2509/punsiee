import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion.js";
import useSound from "../hooks/useSound.js";
import SpotifyPlayer from "./SpotifyPlayer.jsx";
import config from "../data/config.js";

export default function LetterModal({ letter, onClose }) {
  const reducedMotion = usePrefersReducedMotion();
  const playOpen = useSound(config.sounds.scrollOpen);

  useEffect(() => {
    if (letter) {
      playOpen();
      // If this letter has its own song, pause the background music
      // so they don't play over each other.
      if (letter.spotifyId) {
        window.dispatchEvent(new Event("pause-bg-music"));
      }
    }
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [letter]);

  const unrollVariants = reducedMotion
    ? {
        rolled: { opacity: 0 },
        open: { opacity: 1 },
      }
    : {
        rolled: {
          borderRadius: 999,
          height: 60,
          width: 220,
          opacity: 0.9,
        },
        open: {
          borderRadius: 12,
          height: "auto",
          width: "min(560px, 92vw)",
          opacity: 1,
          transition: {
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
            height: { duration: 0.6 },
          },
        },
      };

  return (
    <AnimatePresence>
      {letter && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ backgroundColor: "rgba(61,25,38,0)" }}
          animate={{ backgroundColor: "rgba(61,25,38,0.55)" }}
          exit={{ backgroundColor: "rgba(61,25,38,0)" }}
          onClick={onClose}
        >
          <motion.div
            className="relative paper-texture shadow-soft border border-burgundy/10 overflow-hidden max-h-[85vh] flex flex-col"
            variants={unrollVariants}
            initial="rolled"
            animate="open"
            exit="rolled"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ribbon accent at top */}
            <div className="h-2 w-full bg-dustyrose flex-shrink-0" />

            <button
              onClick={onClose}
              aria-label="Close letter"
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-cream/80 border border-burgundy/20 text-burgundy flex items-center justify-center hover:bg-burgundy hover:text-cream transition-colors"
            >
              ✕
            </button>

            <div className="overflow-y-auto scrollbar-none p-8 md:p-10">
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.4 }}
                className="font-script text-3xl text-burgundy mb-4"
              >
                From {letter.name}
              </motion.p>

              {letter.spotifyId && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55, duration: 0.4 }}
                >
                  <SpotifyPlayer spotifyId={letter.spotifyId} />
                </motion.div>
              )}

              <motion.pre
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.62, duration: 0.5 }}
                className="whitespace-pre-wrap font-body text-lg md:text-xl leading-relaxed text-ink"
              >
                {letter.letter}
              </motion.pre>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
