import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion.js";

// Runs away from the cursor / a tap well before it can be caught, a
// handful of times, then gives up and lets the click through.
export default function DodgeButton({ label, onEnter, maxDodges = 6 }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dodges, setDodges] = useState(0);
  const btnRef = useRef(null);
  const lastDodgeAt = useRef(0);
  const reducedMotion = usePrefersReducedMotion();
  const caughtIt = reducedMotion || dodges >= maxDodges;

  const dodge = () => {
    const rangeX = Math.min(220, window.innerWidth * 0.35);
    const rangeY = Math.min(90, window.innerHeight * 0.1);
    setPos({
      x: (Math.random() - 0.5) * 2 * rangeX,
      y: (Math.random() - 0.5) * 2 * rangeY,
    });
    setDodges((d) => d + 1);
    lastDodgeAt.current = Date.now();
  };

  // Jump away as soon as the cursor gets close, before it can hover.
  useEffect(() => {
    if (caughtIt) return;
    const handleMove = (e) => {
      const el = btnRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dist = Math.hypot(e.clientX - cx, e.clientY - cy);
      if (dist < 110 && Date.now() - lastDodgeAt.current > 250) {
        dodge();
      }
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [caughtIt]);

  const handleTouch = (e) => {
    if (caughtIt) return;
    e.preventDefault();
    dodge();
  };

  const handleClick = () => {
    if (caughtIt) onEnter();
    else dodge();
  };

  return (
    <div className="relative h-44 flex items-center justify-center overflow-visible">
      <motion.button
        ref={btnRef}
        onTouchStart={handleTouch}
        onClick={handleClick}
        animate={{ x: pos.x, y: pos.y }}
        transition={{ type: "spring", stiffness: 260, damping: 14 }}
        whileHover={caughtIt ? { scale: 1.04 } : {}}
        whileTap={caughtIt ? { scale: 0.97 } : {}}
        className="px-10 py-3 rounded-full bg-burgundy text-cream text-lg tracking-wide shadow-soft select-none"
      >
        {label}
      </motion.button>

      {dodges > 0 && !caughtIt && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute bottom-2 font-script text-rose text-base"
        >
          nice try 😉
        </motion.p>
      )}
    </div>
  );
}