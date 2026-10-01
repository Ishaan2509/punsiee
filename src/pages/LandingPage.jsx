import { motion } from "framer-motion";
import FloatingScene from "../components/FloatingScene.jsx";
import DodgeButton from "../components/DodgeButton.jsx";
import config from "../data/config.js";

export default function LandingPage({ onEnter }) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <FloatingScene />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 text-center max-w-xl"
      >
        <p className="font-script text-rose text-2xl mb-2">happy birthday</p>
        <h1 className="font-display italic text-5xl md:text-7xl text-burgundy leading-[1.05]">
          {config.herName}
        </h1>
        <p className="mt-6 font-body text-lg md:text-xl text-ink/80">
          {config.heroSubtitle}
        </p>

        <div className="mt-4">
          <DodgeButton label={config.enterButtonLabel} onEnter={onEnter} />
        </div>
      </motion.div>
    </div>
  );
}
