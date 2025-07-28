import { useEffect, useRef } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const isPlayingRef = useRef(false); // store play state

  useEffect(() => {
    // Initialize audio
    audioRef.current = new Audio("/audio/teleport.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.6;

    const handleClick = () => {
      if (!audioRef.current) return;

      if (!isPlayingRef.current) {
        // Play music
        audioRef.current
          .play()
          .then(() => {
            isPlayingRef.current = true;
          })
          .catch((err) => {
            console.warn("Autoplay error:", err);
          });
      } else {
        // Pause music
        audioRef.current.pause();
        isPlayingRef.current = false;
      }
    };

    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
