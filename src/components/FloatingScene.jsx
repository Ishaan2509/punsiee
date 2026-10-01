import { motion } from "framer-motion";

// Purely decorative, stylized illustrations (not photoreal / not ads).
// Cocktail glass, cigarette+smoke, hearts, stars and sparkles drifting
// at different speeds for a soft parallax feel.
export default function FloatingScene() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Cocktail glass, upper right */}
      <motion.svg
        viewBox="0 0 80 100"
        className="absolute right-[8%] top-[18%] w-16 md:w-24 opacity-90"
        animate={{ y: [0, -14, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M10 10 L70 10 L40 55 L40 85" stroke="#6E2A38" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="25" y1="85" x2="55" y2="85" stroke="#6E2A38" strokeWidth="3" strokeLinecap="round" />
        <path d="M14 14 L66 14 L40 50 Z" fill="#D8A3AE" opacity="0.6" />
        <circle cx="46" cy="24" r="4" fill="#6E2A38" opacity="0.6" />
      </motion.svg>

      {/* Cigarette with curling smoke, left side */}
      <div className="absolute left-[10%] top-[38%] w-20 md:w-28">
        <motion.svg
          viewBox="0 0 100 30"
          className="w-full opacity-90"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="5" y="12" width="60" height="8" rx="2" fill="#FBF3EA" stroke="#6E2A38" strokeWidth="1.5" />
          <rect x="55" y="12" width="14" height="8" rx="1" fill="#D8756B" opacity="0.7" />
        </motion.svg>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-plum/20 blur-[2px]"
            style={{ left: 62, top: 6, width: 10, height: 10 }}
            animate={{
              y: [0, -60 - i * 10],
              x: [0, 8 - i * 6, 4],
              scale: [0.6, 1.6],
              opacity: [0.5, 0],
            }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: i * 1.1, ease: "easeOut" }}
          />
        ))}
      </div>

      {/* Floating hearts */}
      {[
        { left: "20%", top: "70%", size: 18, delay: 0, dur: 6 },
        { left: "75%", top: "78%", size: 14, delay: 1.2, dur: 7 },
        { left: "50%", top: "15%", size: 12, delay: 0.6, dur: 8 },
        { left: "88%", top: "35%", size: 16, delay: 2, dur: 6.5 },
      ].map((h, i) => (
        <motion.div
          key={i}
          className="absolute text-burgundy/70"
          style={{ left: h.left, top: h.top, fontSize: h.size }}
          animate={{ y: [0, -20, 0], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: h.dur, repeat: Infinity, delay: h.delay, ease: "easeInOut" }}
        >
          ♥
        </motion.div>
      ))}

      {/* Twinkling stars / sparkles */}
      {[
        { left: "30%", top: "25%" },
        { left: "65%", top: "50%" },
        { left: "12%", top: "60%" },
        { left: "82%", top: "15%" },
        { left: "45%", top: "80%" },
      ].map((s, i) => (
        <motion.div
          key={i}
          className="absolute text-rose"
          style={{ left: s.left, top: s.top, fontSize: 10 + (i % 3) * 4 }}
          animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 3 + i * 0.4, repeat: Infinity, delay: i * 0.5 }}
        >
          ✦
        </motion.div>
      ))}

      {/* Small paper scraps */}
      {[
        { left: "8%", top: "82%", rot: -12 },
        { left: "92%", top: "60%", rot: 8 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-8 h-6 bg-cream border border-rose/40 shadow-sm"
          style={{ left: p.left, top: p.top, rotate: p.rot }}
          animate={{ y: [0, -10, 0], rotate: [p.rot, p.rot + 6, p.rot] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
