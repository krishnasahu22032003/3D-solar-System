// components/SoundPlayer.jsx
import React, { useEffect } from "react";
import { Howl } from "howler";

export default function SoundPlayer() {
  useEffect(() => {
    const sound = new Howl({
      src: "/public/teleport.mp3",
      autoplay: true,
      loop: true,
      volume: 0.4,
    });

    sound.play();

    return () => {
      sound.unload(); // Clean up when unmounted
    };
  }, []);

  return null; // No UI needed
}
