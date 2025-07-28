// components/HeroText.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroText() {
  const container = useRef();
  const headline = useRef();
  const subtext = useRef();
  const button = useRef();
  const starCountLeft = useRef();
  const starCountRight = useRef();

  useEffect(() => {
    gsap.fromTo(
      headline.current,
      { x: -150, opacity: 0, skewX: -10 },
      { x: 0, opacity: 1, skewX: 0, duration: 1.2, ease: "power3.out", delay: 0.4 }
    );
    gsap.fromTo(
      subtext.current,
      { x: -150, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.4, ease: "power2.out", delay: 1.2 }
    );
    gsap.fromTo(
      button.current,
      { y: 30, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 1.4, ease: "back.out(1.7)", delay: 2.0 }
    );
    gsap.fromTo(
      [starCountLeft.current, starCountRight.current],
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.4, ease: "power2.out", delay: 2.8, stagger: 0.2 }
    );
  }, []);

  return (
    <>
      <div
        ref={container}
        className="absolute left-10 top-[38%] -translate-y-1/2 w-[80%] max-w-lg text-left z-50"
      >
        <h1
          ref={headline}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-[#C7CED9] via-[#8FA3BB] to-[#3E4C59] text-transparent bg-clip-text drop-shadow-[0_2px_12px_rgba(148,163,184,0.5)]"
        >
          Enter the{" "}
          <span className="bg-gradient-to-r from-[#A0B3C6] to-[#2C3A4C] text-transparent bg-clip-text">
            Galaxy Portal
          </span>
        </h1>
        <p
          ref={subtext}
          className="mt-5 text-sm sm:text-base text-slate-300 leading-relaxed max-w-md"
        >
          Dive into a celestial interface where space meets interaction. Navigate intelligent designs, witness responsive planets, and explore futuristic scroll-based visuals crafted for interstellar storytellers.
        </p>
        <button
          ref={button}
          className="group mt-7 px-6 py-3 rounded-full bg-gradient-to-r from-[#3E4C59] to-[#1F2933] text-white text-sm font-semibold shadow-xl relative overflow-hidden transition duration-300 ease-in-out
          hover:scale-110 hover:shadow-[0_0_52px_#AAB9CD] hover:brightness-125 hover:-rotate-1 hover:-translate-y-1"
        >
          <span className="relative z-10">🌌 Begin Exploration</span>
          <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></span>
        </button>
      </div>

      {/* Bottom Fixed Star Count Left */}
      <div
        ref={starCountLeft}
        className="absolute bottom-6 left-6 text-[11px] text-slate-400 tracking-wide font-mono backdrop-blur-sm px-3 py-1 rounded-md border border-white/10 bg-white/5 shadow-md z-50"
      >
        ⭐ 2,438 explorers entered
      </div>

      {/* Bottom Fixed Star Count Right */}
      <div
        ref={starCountRight}
        className="absolute bottom-6 right-6 text-[11px] text-slate-400 tracking-wide font-mono backdrop-blur-sm px-3 py-1 rounded-md border border-white/10 bg-white/5 shadow-md z-50"
      >
        🛰️ Live Visitors: 158
      </div>
      
    </>
  );
}
