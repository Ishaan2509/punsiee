import { useState } from "react";
import { motion } from "framer-motion";
import config from "../data/config.js";
import SafeImage from "../components/SafeImage.jsx";

export default function VideoPage({ onWatched }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="min-h-screen px-6 pt-28 pb-28 md:pb-16 max-w-3xl mx-auto flex flex-col items-center">
      <header className="text-center mb-10">
        <h2 className="font-display italic text-4xl md:text-5xl text-burgundy">
          {config.videoTitle}
        </h2>
      </header>

      <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-soft border-8 border-white ring-1 ring-burgundy/10">
        {!playing ? (
          <button
            onClick={() => {
              setPlaying(true);
              onWatched?.();
            }}
            className="absolute inset-0 group"
            aria-label="Play video"
          >
            <SafeImage
              src={config.videoPoster}
              alt="Video preview"
              label="add a poster image"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-plum/25 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.08 }}
                className="w-16 h-16 rounded-full bg-cream/90 flex items-center justify-center shadow-soft"
              >
                <span className="text-burgundy text-2xl ml-1">▶</span>
              </motion.div>
            </div>
          </button>
        ) : (
          <motion.video
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            src={config.videoSrc}
            controls
            autoPlay
            className="w-full h-full object-cover bg-black"
          >
            Sorry, your browser doesn't support embedded video.
          </motion.video>
        )}
      </div>

      <p className="mt-6 font-script text-2xl text-rose">{config.videoCaption}</p>
    </div>
  );
}
