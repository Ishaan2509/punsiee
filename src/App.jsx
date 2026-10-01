import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navigation from "./components/Navigation.jsx";
import MusicController from "./components/MusicController.jsx";
import FinalSurprise from "./components/FinalSurprise.jsx";
import DoNotClickButton from "./components/DoNotClickButton.jsx";
import DoNotClickReveal from "./components/DoNotClickReveal.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import LettersPage from "./pages/LettersPage.jsx";
import MemoriesPage from "./pages/MemoriesPage.jsx";
import VideoPage from "./pages/VideoPage.jsx";
import usePrefersReducedMotion from "./hooks/usePrefersReducedMotion.js";
import config from "./data/config.js";

// Builds a shake that starts gentle and ramps up to violent right
// before the reveal — used as a framer-motion keyframe array.
function buildShakeKeyframes(steps = 34, maxAmp = 55) {
  const x = [0];
  const y = [0];
  for (let i = 1; i <= steps; i++) {
    const progress = i / steps; // 0 -> 1, intensity ramps with this
    const amp = maxAmp * Math.pow(progress, 2.2);
    const dir = i % 2 === 0 ? 1 : -1;
    x.push(dir * amp * (0.6 + Math.random() * 0.4));
    y.push(-dir * amp * 0.5 * (0.6 + Math.random() * 0.4));
  }
  x.push(0);
  y.push(0);
  return { x, y };
}

const SHAKE_DURATION = 1.7; // seconds — slow build-up before the "boom"

export default function App() {
  const [entered, setEntered] = useState(false);
  const [page, setPage] = useState("letters");

  // Progress tracking for the optional hidden surprise.
  const [openedLetters, setOpenedLetters] = useState(new Set());
  const [collageFinished, setCollageFinished] = useState(false);
  const [videoWatched, setVideoWatched] = useState(false);
  const [surpriseOpen, setSurpriseOpen] = useState(false);
  const [surpriseSeen, setSurpriseSeen] = useState(false);

  // "Do not click" easter egg: idle -> shaking -> flash -> revealed -> idle (used up)
  const [doNotClickPhase, setDoNotClickPhase] = useState("idle");
  const [doNotClickUsed, setDoNotClickUsed] = useState(false);
  const [shakeKeyframes] = useState(() => buildShakeKeyframes());
  const reducedMotion = usePrefersReducedMotion();

  const triggerDoNotClick = () => {
    setDoNotClickPhase("shaking");
    const delay = reducedMotion ? 150 : SHAKE_DURATION * 1000;
    window.setTimeout(() => {
      setDoNotClickPhase("flash");
      window.setTimeout(() => setDoNotClickPhase("revealed"), 120);
    }, delay);
  };
  const closeDoNotClick = () => {
    setDoNotClickPhase("idle");
    setDoNotClickUsed(true);
  };

  const req = config.finalSurpriseRequirements;
  const surpriseUnlocked =
    config.finalSurpriseEnabled &&
    openedLetters.size >= req.lettersToOpen &&
    (!req.mustFinishCollage || collageFinished) &&
    (!req.mustWatchVideo || videoWatched);

  const shaking = doNotClickPhase === "shaking";
  const blurred = doNotClickPhase === "flash" || doNotClickPhase === "revealed";

  return (
    <div className="grain min-h-screen">
      <AnimatePresence mode="wait">
        {!entered ? (
          <motion.div
            key="landing"
            exit={{ opacity: 0, scale: 1.05, filter: "blur(6px)" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <LandingPage onEnter={() => setEntered(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="site"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            {/* This inner wrapper is what shakes + blurs for the
                "do not click" easter egg — kept separate from the
                entrance animation above, and from the reveal modal
                below, so the modal itself always stays sharp. */}
            <motion.div
              animate={shaking && !reducedMotion ? { x: shakeKeyframes.x, y: shakeKeyframes.y } : { x: 0, y: 0 }}
              transition={shaking && !reducedMotion ? { duration: SHAKE_DURATION, ease: "linear" } : { duration: 0.2 }}
              style={{
                filter: blurred ? "blur(12px)" : "none",
                transition: "filter 0.3s ease",
              }}
            >
              <Navigation
                current={page}
                onNavigate={setPage}
                surpriseUnlocked={surpriseUnlocked && !surpriseSeen}
                onOpenSurprise={() => {
                  setSurpriseOpen(true);
                  setSurpriseSeen(true);
                }}
              />
              <MusicController />

              <AnimatePresence mode="wait">
                <motion.div
                  key={page}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {page === "letters" && (
                    <LettersPage
                      onLetterOpened={(i) =>
                        setOpenedLetters((prev) => new Set(prev).add(i))
                      }
                    />
                  )}
                  {page === "memories" && (
                    <MemoriesPage onCollageFinished={() => setCollageFinished(true)} />
                  )}
                  {page === "video" && (
                    <VideoPage onWatched={() => setVideoWatched(true)} />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {page === "memories" && doNotClickPhase === "idle" && !doNotClickUsed && (
              <DoNotClickButton onClick={triggerDoNotClick} />
            )}

            {/* Quick white flash right as the shake peaks — the "boom" */}
            <AnimatePresence>
              {doNotClickPhase === "flash" && (
                <motion.div
                  className="fixed inset-0 z-[55] bg-white pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1 }}
                />
              )}
            </AnimatePresence>

            <FinalSurprise open={surpriseOpen} onClose={() => setSurpriseOpen(false)} />
            <DoNotClickReveal
              open={doNotClickPhase === "revealed"}
              onClose={closeDoNotClick}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}