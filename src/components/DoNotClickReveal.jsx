import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SafeImage from "./SafeImage.jsx";
import config from "../data/config.js";

export default function DoNotClickReveal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-plum/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ type: "spring", stiffness: 240, damping: 16 }}
            className="relative bg-white p-3 pb-9 shadow-soft max-w-[85vw] max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute -top-4 -right-4 w-9 h-9 rounded-full bg-cream border border-burgundy/20 text-burgundy flex items-center justify-center shadow-soft hover:bg-burgundy hover:text-cream transition-colors"
            >
              ✕
            </button>
            <SafeImage
              src={config.doNotClickPhotoSrc}
              alt="A very unflattering photo"
              label="add the bad photo here"
              className="max-h-[65vh] max-w-full object-contain"
            />
            <p className="font-script text-xl text-center mt-3 text-burgundy">
              {config.doNotClickCaption}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
