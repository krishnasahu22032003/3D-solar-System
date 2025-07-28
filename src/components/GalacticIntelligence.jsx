import React from "react";
import { motion } from "framer-motion";

const dialogue = [
  "Initializing neural link...",
  "Welcome to Orbitalux Control Core.",
  "Analyzing galactic coordinates...",
  "Mission brief: Explore and integrate starborne intelligence.",
  "AI Assistant Online. Awaiting your command."
];

const GalacticIntelligence = () => {
  return (
    <section className="relative w-full min-h-screen px-6 py-32 bg-black overflow-hidden">
      {/* Background Grid + Stars */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[url('/textures/starfield.png')] bg-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-[#C7CED9] via-[#8FA3BB] to-[#3E4C59] text-transparent bg-clip-text drop-shadow-[0_2px_12px_rgba(148,163,184,0.5)]"
        >
          Galactic Intelligence Console
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto"
        >
          Orbitalux's neural AI console transmits live intel from across the galaxy, offering guidance, data, and mission support.
        </motion.p>

        {/* Animated AI Core */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="w-36 h-36 mx-auto bg-gradient-to-br from-[#8FA3BB] to-[#3E4C59] rounded-full shadow-[0_0_40px_#8FA3BBaa] border-[3px] border-gray-700 animate-[pulseSpin_6s_linear_infinite]"
        />

        {/* Dialogue Console */}
        <div className="relative z-10 max-w-xl mx-auto mt-12 bg-[#0c0c0e]/60 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 text-left space-y-4 shadow-[0_0_30px_#3E4C59aa]">
          {dialogue.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ delay: 0.3 + i * 0.3, duration: 0.5 }}
              className="text-[#C7CED9] font-mono text-base sm:text-lg flicker"
            >
              {`> ${line}`}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalacticIntelligence;
