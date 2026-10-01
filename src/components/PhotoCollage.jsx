import { useMemo } from "react";
import PhotoCard from "./PhotoCard.jsx";

// A repeating pattern of cell sizes (in grid columns/rows) so photos
// interlock like puzzle pieces rather than sitting in a plain uniform
// grid. Cycles through this template for as many photos as you add.
const CELL_PATTERN = [
  { colSpan: 2, rowSpan: 2 }, // big feature photo
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 1, rowSpan: 2 }, // tall
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 2, rowSpan: 1 }, // wide
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 1, rowSpan: 2 }, // tall
  { colSpan: 2, rowSpan: 1 }, // wide
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 1, rowSpan: 1 },
];

function useLayout(count) {
  return useMemo(
    () =>
      Array.from({ length: count }, (_, i) => CELL_PATTERN[i % CELL_PATTERN.length]),
    [count]
  );
}

export default function PhotoCollage({ photos, revealed, onOpen }) {
  const layout = useLayout(photos.length);
  // Keep the whole reveal feeling deliberate but not glacial, whether
  // there are 10 photos or 90 — spread across a fixed-ish window.
  const stagger = Math.max(0.035, Math.min(0.55, 5 / Math.max(photos.length, 1)));

  return (
    <div className="relative">
      {/* thick frame, like a printed collage in a picture frame */}
      <div className="relative bg-white p-3 md:p-4 rounded-md shadow-soft border border-burgundy/10">
        <div
          className="grid grid-flow-dense gap-1 md:gap-1.5 auto-rows-[80px] sm:auto-rows-[100px] md:auto-rows-[120px] grid-cols-3 sm:grid-cols-4 md:grid-cols-5"
        >
          {photos.map((photo, i) => {
            const cell = layout[i];
            const style = {
              gridColumn: `span ${cell.colSpan} / span ${cell.colSpan}`,
              gridRow: `span ${cell.rowSpan} / span ${cell.rowSpan}`,
            };
            return revealed ? (
              <PhotoCard
                key={i}
                photo={photo}
                index={i}
                style={style}
                onOpen={onOpen}
                delay={i * stagger}
              />
            ) : (
              <div
                key={i}
                style={style}
                className="border-2 border-dashed border-rose/30 bg-blush/20"
              />
            );
          })}
        </div>
      </div>

      {/* small doodles just outside the frame */}
      <span className="absolute -top-4 -left-3 font-script text-rose text-3xl rotate-[-8deg] select-none">✦</span>
      <span className="absolute -bottom-4 -right-3 font-script text-dustyrose text-2xl rotate-6 select-none">♥</span>
    </div>
  );
}
