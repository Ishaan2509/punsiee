import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SafeImage from "./SafeImage.jsx";

export default function PhotoLightbox({ photo, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <AnimatePresence>
      {photo && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-plum/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="relative bg-white p-3 pb-10 shadow-soft rounded-sm max-w-[90vw] max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Close photo"
              className="absolute -top-4 -right-4 w-9 h-9 rounded-full bg-cream border border-burgundy/20 text-burgundy flex items-center justify-center shadow-soft hover:bg-burgundy hover:text-cream transition-colors"
            >
              ✕
            </button>
            <SafeImage
              src={photo.src}
              alt={photo.caption || "A memory"}
              label="add photo"
              className="max-h-[70vh] max-w-full object-contain"
            />
            {photo.caption && (
              <p className="font-script text-xl text-burgundy/90 mt-3 text-center">
                {photo.caption}
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
