import { useEffect, useRef } from "react";
import loadSpotifyIframeApi from "../lib/spotifyIframeApi.js";

// A controllable embedded Spotify player. Unlike a plain <iframe> embed,
// this uses Spotify's iFrame API so we can trigger play automatically
// and ramp the volume up gradually instead of it blasting in at full
// volume. No login or API key needed — same public embed player.
export default function SpotifyPlayer({ spotifyId }) {
  const mountRef = useRef(null);
  const controllerRef = useRef(null);
  const fadeIntervalRef = useRef(null);

  useEffect(() => {
    if (!spotifyId) return;
    let cancelled = false;

    loadSpotifyIframeApi().then((IFrameAPI) => {
      if (cancelled || !mountRef.current) return;

      const options = {
        uri: `spotify:track:${spotifyId}`,
        width: "100%",
        height: "80",
      };

      IFrameAPI.createController(mountRef.current, options, (controller) => {
        if (cancelled) {
          controller.destroy();
          return;
        }
        controllerRef.current = controller;

        controller.addListener("ready", () => {
          // Start silent, then play and fade the volume up smoothly.
          try {
            controller.setVolume(0);
          } catch (e) {
            // Older API versions may not support setVolume — playback
            // still works, it'll just start at normal volume.
          }
          controller.play();

          let v = 0;
          fadeIntervalRef.current = setInterval(() => {
            v = Math.min(1, v + 0.06);
            try {
              controller.setVolume(v);
            } catch (e) {
              clearInterval(fadeIntervalRef.current);
            }
            if (v >= 1) clearInterval(fadeIntervalRef.current);
          }, 120); // ~2.4s total fade-in
        });
      });
    });

    return () => {
      cancelled = true;
      clearInterval(fadeIntervalRef.current);
      try {
        controllerRef.current?.destroy();
      } catch (e) {
        // ignore
      }
      controllerRef.current = null;
    };
  }, [spotifyId]);

  if (!spotifyId) return null;

  return (
    <div className="mb-5 rounded-xl overflow-hidden shadow-sm border border-burgundy/10">
      <div ref={mountRef} />
    </div>
  );
}