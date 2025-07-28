import React from "react";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="relative w-full min-h-screen px-6 py-32 bg-black overflow-hidden">
      {/* Optional: soft radial gradient background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/90 to-black" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-12">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-[#C7CED9] via-[#8FA3BB] to-[#3E4C59] text-transparent bg-clip-text drop-shadow-[0_2px_24px_rgba(148,163,184,0.4)]"
        >
          Your Portal Awaits in the Orbitalux Galaxy
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto"
        >
          Embark on a voyage across star systems, powered by neural intelligence and cosmic exploration. The galaxy is listening — are you ready to respond?
        </motion.p>

        {/* CTA Button with Glowing Circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="relative inline-block group"
        >
          {/* Glowing Ring */}
          <div className="absolute inset-0 w-48 h-48 mx-auto rounded-full blur-3xl bg-gradient-to-br from-[#8FA3BB] to-[#3E4C59] opacity-30 animate-ping" />

          {/* Button */}
          <button className="relative z-10 px-10 py-5 text-lg font-bold tracking-wider rounded-xl bg-gradient-to-r from-[#8FA3BB] to-[#3E4C59] text-white shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_40px_#8FA3BBaa]">
            Enter the Galaxy
          </button>
        </motion.div>

        {/* Optional trust/metrics below CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-sm text-gray-500"
        >
          Trusted by explorers from over 42 planetary systems ✦ Secure neural channel
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
