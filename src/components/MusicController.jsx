import { useRef, useState, useEffect } from "react";
import config from "../data/config.js";

// A single <audio> element lives here for the whole app lifetime
// (App.jsx renders this once, outside the page-switching logic),
// so music keeps playing naturally across navigation.
export default function MusicController() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const handleError = () => setAvailable(false);
    audio.addEventListener("error", handleError);
    return () => audio.removeEventListener("error", handleError);
  }, []);

  useEffect(() => {
    const handlePause = () => {
      audioRef.current?.pause();
      setPlaying(false);
    };
    window.addEventListener("pause-bg-music", handlePause);
    return () => window.removeEventListener("pause-bg-music", handlePause);
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio || !available) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => setAvailable(false));
    }
  };

  return (
    <div className="fixed top-6 right-6 z-40">
      <audio ref={audioRef} src={config.musicSrc} loop preload="none" />
      <button
        onClick={toggle}
        disabled={!available}
        title={available ? config.musicLabel : "Add a music file in src/assets/music"}
        aria-label={playing ? "Pause music" : "Play music"}
        className={`w-11 h-11 rounded-full flex items-center justify-center shadow-soft border border-rose/40 transition-colors ${
          playing ? "bg-burgundy text-cream" : "bg-cream/90 text-burgundy"
        } ${!available ? "opacity-40 cursor-not-allowed" : "hover:scale-105"}`}
      >
        <span className={playing ? "animate-pulse" : ""}>♫</span>
      </button>
    </div>
  );
}
