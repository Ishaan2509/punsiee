import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// A small password gate shown before a locked letter opens.
export default function PasswordPrompt({ open, onSubmit, onClose }) {
  const [value, setValue] = useState("");
  const [wrong, setWrong] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setValue("");
      setWrong(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const correct = onSubmit(value);
    if (!correct) {
      setWrong(true);
      setValue("");
      inputRef.current?.focus();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[65] flex items-center justify-center p-4 bg-plum/55"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.form
            onSubmit={handleSubmit}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              x: wrong ? [0, -10, 10, -8, 8, -4, 4, 0] : 0,
            }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: wrong ? 0.4 : 0.3 }}
            onAnimationComplete={() => setWrong(false)}
            className="relative paper-texture rounded-xl shadow-soft border border-burgundy/10 p-8 w-full max-w-sm text-center"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-cream/80 border border-burgundy/20 text-burgundy flex items-center justify-center hover:bg-burgundy hover:text-cream transition-colors"
            >
              ✕
            </button>

            <p className="text-3xl mb-2">🔒</p>
            <p className="font-script text-2xl text-burgundy mb-4">
              This one's locked
            </p>
            <p className="font-body text-ink/70 mb-4">
              Enter the password to open this letter.
            </p>

            <input
              ref={inputRef}
              type="password"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-2.5 rounded-full border border-burgundy/20 bg-white/70 text-center font-body text-lg focus:outline-none focus:ring-2 focus:ring-burgundy"
            />

            {wrong && (
              <p className="mt-2 text-sm text-burgundy/80 font-body">
                That's not it — try again.
              </p>
            )}

            <button
              type="submit"
              className="mt-5 px-8 py-2.5 rounded-full bg-burgundy text-cream text-base tracking-wide shadow-soft hover:scale-105 transition-transform"
            >
              Unlock
            </button>
          </motion.form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}