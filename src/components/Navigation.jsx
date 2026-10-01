import { motion } from "framer-motion";

const pages = [
  { id: "letters", label: "Letters" },
  { id: "memories", label: "Memories" },
  { id: "video", label: "Video" },
];

export default function Navigation({ current, onNavigate, surpriseUnlocked, onOpenSurprise }) {
  return (
    <>
      {/* Desktop top nav */}
      <nav className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-40 gap-1 bg-cream/80 backdrop-blur-md border border-rose/30 rounded-full px-2 py-2 shadow-soft">
        {pages.map((p) => (
          <button
            key={p.id}
            onClick={() => onNavigate(p.id)}
            className={`relative px-5 py-2 rounded-full text-sm tracking-wide transition-colors ${
              current === p.id ? "text-cream" : "text-burgundy hover:text-plum"
            }`}
          >
            {current === p.id && (
              <motion.span
                layoutId="nav-pill"
                className="absolute inset-0 bg-burgundy rounded-full -z-10"
                transition={{ type: "spring", stiffness: 300, damping: 28 }}
              />
            )}
            {p.label}
          </button>
        ))}
        {surpriseUnlocked && (
          <button
            onClick={onOpenSurprise}
            className="px-4 py-2 rounded-full text-sm text-burgundy hover:text-plum animate-pulse"
            aria-label="A surprise has unlocked"
          >
            ♥
          </button>
        )}
      </nav>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-cream/95 backdrop-blur-md border-t border-rose/30 flex justify-around py-3 pb-[env(safe-area-inset-bottom,0px)]">
        {pages.map((p) => (
          <button
            key={p.id}
            onClick={() => onNavigate(p.id)}
            className={`flex flex-col items-center text-xs gap-1 px-3 ${
              current === p.id ? "text-burgundy font-semibold" : "text-burgundy/50"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            {p.label}
          </button>
        ))}
        {surpriseUnlocked && (
          <button
            onClick={onOpenSurprise}
            className="flex flex-col items-center text-xs gap-1 px-3 text-burgundy animate-pulse"
          >
            ♥
            <span>Surprise</span>
          </button>
        )}
      </nav>
    </>
  );
}
