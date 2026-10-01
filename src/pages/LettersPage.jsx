import { useState } from "react";
import LetterCard from "../components/LetterCard.jsx";
import LetterModal from "../components/LetterModal.jsx";
import PasswordPrompt from "../components/PasswordPrompt.jsx";
import letters from "../data/letters.js";
import config from "../data/config.js";

export default function LettersPage({ onLetterOpened }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [pendingIndex, setPendingIndex] = useState(null); // letter waiting on a password
  const [unlocked, setUnlocked] = useState(new Set()); // indices already unlocked this visit

  const actuallyOpen = (i) => {
    setOpenIndex(i);
    onLetterOpened?.(i);
  };

  const handleCardClick = (i) => {
    const letter = letters[i];
    if (letter.locked && !unlocked.has(i)) {
      setPendingIndex(i);
    } else {
      actuallyOpen(i);
    }
  };

  const handlePasswordSubmit = (value) => {
    const letter = letters[pendingIndex];
    const correct =
      value.trim().toLowerCase() === String(letter.password || "").trim().toLowerCase();
    if (correct) {
      setUnlocked((prev) => new Set(prev).add(pendingIndex));
      const i = pendingIndex;
      setPendingIndex(null);
      actuallyOpen(i);
    }
    return correct;
  };

  return (
    <div className="min-h-screen px-6 pt-28 pb-28 md:pb-16 max-w-5xl mx-auto">
      <header className="text-center mb-14">
        <h2 className="font-display italic text-4xl md:text-5xl text-burgundy">
          {config.lettersTitle}
        </h2>
        <p className="mt-3 font-body text-lg text-ink/70 max-w-md mx-auto">
          {config.lettersSubtitle}
        </p>
      </header>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-12">
        {letters.map((friend, i) => (
          <LetterCard key={i} friend={friend} index={i} onOpen={handleCardClick} />
        ))}
      </div>

      <LetterModal
        letter={openIndex !== null ? letters[openIndex] : null}
        onClose={() => setOpenIndex(null)}
      />

      <PasswordPrompt
        open={pendingIndex !== null}
        onSubmit={handlePasswordSubmit}
        onClose={() => setPendingIndex(null)}
      />
    </div>
  );
}