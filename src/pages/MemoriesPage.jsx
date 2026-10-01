import { useState } from "react";
import { motion } from "framer-motion";
import PhotoCollage from "../components/PhotoCollage.jsx";
import PhotoLightbox from "../components/PhotoLightbox.jsx";
import photos from "../data/photos.js";
import config from "../data/config.js";

export default function MemoriesPage({ onCollageFinished }) {
  const [revealed, setRevealed] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const handleReveal = () => {
    setRevealed(true);
    const stagger = Math.max(0.035, Math.min(0.55, 5 / Math.max(photos.length, 1)));
    const totalDelay = photos.length * stagger * 1000 + 1400;
    setTimeout(() => onCollageFinished?.(), totalDelay);
  };

  return (
    <div className="min-h-screen px-6 pt-28 pb-28 md:pb-16 max-w-5xl mx-auto">
      <header className="text-center mb-10">
        <h2 className="font-display italic text-4xl md:text-5xl text-burgundy">
          {config.memoriesTitle}
        </h2>
        <p className="mt-3 font-body text-lg text-ink/70 max-w-md mx-auto">
          {config.memoriesSubtitle}
        </p>
      </header>

      {photos.length === 0 ? (
        <p className="text-center font-script text-xl text-rose/70 mt-6">
          Add some photos to src/assets/photos to see them here ✨
        </p>
      ) : (
        <>
          {!revealed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mb-8"
            >
              <p className="font-script text-2xl text-rose mb-4">
                {config.memoriesEmptyMessage}
              </p>
              <button
                onClick={handleReveal}
                className="px-8 py-3 rounded-full bg-burgundy text-cream text-lg tracking-wide shadow-soft hover:scale-105 transition-transform"
              >
                {config.memoriesOpenButtonLabel}
              </button>
            </motion.div>
          )}

          <PhotoCollage photos={photos} revealed={revealed} onOpen={setOpenIndex} />
        </>
      )}

      <PhotoLightbox
        photo={openIndex !== null ? photos[openIndex] : null}
        onClose={() => setOpenIndex(null)}
      />
    </div>
  );
}