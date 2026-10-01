import { useRef, useCallback } from "react";
import config from "../data/config.js";

// Plays a short sound effect. Silently does nothing if the file is
// missing or sound effects are disabled in config.js — the site
// never breaks because an mp3 hasn't been added yet.
export default function useSound(src) {
  const audioRef = useRef(null);

  const play = useCallback(() => {
    if (!config.soundEffectsEnabled || !src) return;
    try {
      if (!audioRef.current) {
        audioRef.current = new Audio(src);
        audioRef.current.volume = 0.4;
      }
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    } catch (e) {
      // ignore — missing/unsupported file is fine
    }
  }, [src]);

  return play;
}
