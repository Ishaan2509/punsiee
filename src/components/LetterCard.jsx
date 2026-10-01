import { motion } from "framer-motion";

export default function LetterCard({ friend, index, onOpen }) {
  const tilt = (index % 2 === 0 ? -1 : 1) * (2 + (index % 3));

  return (
    <motion.button
      onClick={() => onOpen(index)}
      initial={{ opacity: 0, y: 24, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: tilt }}
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{ rotate: 0, y: -6, scale: 1.03 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group relative w-full max-w-[220px] mx-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-burgundy rounded-md"
      aria-label={`Open letter from ${friend.name}`}
    >
      {/* Ribbon */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-4 h-10 bg-dustyrose rounded-sm shadow-sm z-10" />

      {friend.locked && (
        <span className="absolute -top-2 -right-1 z-20 text-lg" aria-hidden>
          🔒
        </span>
      )}

      {/* Rolled scroll */}
      <div className="relative h-40 rounded-full bg-gradient-to-b from-cream to-[#eee0cf] shadow-paper border border-burgundy/10 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-3 bg-burgundy/10 rounded-l-full" />
        <div className="absolute inset-y-0 right-0 w-3 bg-burgundy/10 rounded-r-full" />
        <span className="font-script text-2xl text-burgundy/70 rotate-[-4deg]">
          {friend.name}
        </span>
      </div>
    </motion.button>
  );
}