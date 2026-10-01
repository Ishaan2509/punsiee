import { useState } from "react";

// Renders an <img>, but if the file is missing (placeholder assets
// haven't been added yet) it shows a tasteful gradient placeholder
// instead of a broken image icon.
export default function SafeImage({ src, alt, className, label }) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        className={`${className} flex items-center justify-center bg-gradient-to-br from-rose to-dustyrose text-cream text-center p-3`}
      >
        <span className="font-script text-lg leading-tight">
          {label || "add your photo here"}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
