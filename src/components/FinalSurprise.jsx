import { motion, AnimatePresence } from "framer-motion";
import config from "../data/config.js";

export default function FinalSurprise({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-plum/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 240, damping: 22 }}
            className="relative paper-texture max-w-lg w-full rounded-xl shadow-soft border border-rose/20 p-8 md:p-12 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-cream/80 border border-burgundy/20 text-burgundy flex items-center justify-center hover:bg-burgundy hover:text-cream transition-colors"
            >
              ✕
            </button>
            <p className="font-script text-4xl text-burgundy mb-4">
              {config.finalSurpriseIntro}
            </p>
            <pre className="whitespace-pre-wrap font-body text-lg md:text-xl leading-relaxed text-ink">
              {config.finalSurpriseMessage}
            </pre>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
