import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const planets = [
  {
    name: "Zenthra Prime",
    description: "A volcanic world rich in rare minerals and plasma storms.",
    color: "#FF6B6B",
    glow: "#ff6b6b33",
  },
  {
    name: "Cryonix IX",
    description: "Frozen wastelands with ancient buried tech civilizations.",
    color: "#61dafb",
    glow: "#61dafb33",
  },
  {
    name: "Verdara",
    description: "Lush jungles covering a living breathing ecosystem.",
    color: "#4ade80",
    glow: "#4ade8033",
  },
  {
    name: "Oblivion Core",
    description: "A rogue planet with gravitational anomalies and secrets.",
    color: "#a78bfa",
    glow: "#a78bfa33",
  },
];

const headingVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1.2,
      delay: 0.3,
    },
  },
};

const paraVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.6,
    },
  },
};

const PlanetExplorer = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % planets.length);
  const prev = () => setCurrent((prev) => (prev - 1 + planets.length) % planets.length);

  return (
    <section className="relative w-full min-h-screen px-6 py-32 bg-black overflow-hidden">
      {/* Starfield background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[url('/textures/starfield.png')] bg-cover opacity-20" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center space-y-10">
        {/* Heading */}
  <motion.h2
  variants={headingVariant}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.4 }}
  className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-[#C7CED9] via-[#8FA3BB] to-[#3E4C59] text-transparent bg-clip-text drop-shadow-[0_2px_12px_rgba(148,163,184,0.5)]"
>
  Planet Explorer
</motion.h2>

<motion.p
  variants={paraVariant}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.3 }}
  className="max-w-2xl text-gray-400 text-md sm:text-lg"
>
  Discover distant worlds across the galaxy. Each planet holds secrets, stories, and science beyond imagination.
</motion.p>


        {/* Planet slider */}
        <div className="relative w-full flex items-center justify-center">
          {/* Left arrow */}
          <button
            onClick={prev}
            className="z-20 absolute left-[-3rem] text-gray-400 hover:text-white transition"
          >
            <FaArrowLeft size={32} />
          </button>

          {/* Animated Planet Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, rotateY: -90, scale: 0.85 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1 }}
              exit={{ opacity: 0, rotateY: 90, scale: 0.85 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="flex flex-col items-center gap-5 px-10 py-12 bg-gradient-to-br from-[#0c0c0d] to-[#121214] border border-gray-800 rounded-[2rem] shadow-[0_8px_60px_rgba(0,0,0,0.4)] backdrop-blur-md max-w-md w-full"
            >
              <div
                className="w-56 h-56 sm:w-64 sm:h-64 rounded-full transition-all duration-700"
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${planets[current].color}, #000)`,
                  boxShadow: `0 0 80px 20px ${planets[current].glow}`,
                  transform: "rotate(45deg)",
                }}
              />
              <h3 className="text-2xl font-semibold text-white">{planets[current].name}</h3>
              <p className="text-gray-400">{planets[current].description}</p>
            </motion.div>
          </AnimatePresence>

          {/* Right arrow */}
          <button
            onClick={next}
            className="z-20 absolute right-[-3rem] text-gray-400 hover:text-white transition"
          >
            <FaArrowRight size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlanetExplorer;
