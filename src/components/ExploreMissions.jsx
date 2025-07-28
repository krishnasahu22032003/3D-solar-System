// component/ExploreMissions.jsx
import { motion } from "framer-motion";

const missions = [
  {
    title: "Orbital Recon",
    desc: "Scan distant galaxies for unknown anomalies and encrypted signals.",
    icon: "🚁",
  },
  {
    title: "Stellar Forge",
    desc: "Manipulate cosmic elements to craft new star systems.",
    icon: "🛠️",
  },
  {
    title: "Quantum Drift",
    desc: "Navigate through wormholes to uncover hidden timelines.",
    icon: "🔀",
  },
  {
    title: "Nebula Dive",
    desc: "Plunge into colorful gas clouds and study their cosmic patterns.",
    icon: "✨",
  },
  {
    title: "Dark Matter Hunt",
    desc: "Track invisible forces and unlock the secrets of the universe.",
    icon: "🐛",
  },
  {
    title: "Lunar Base Alpha",
    desc: "Set up and manage your own moon colony base.",
    icon: "🌕",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

export default function ExploreMissions() {
  return (
    <section className="relative w-full min-h-screen px-6 py-24 bg-black overflow-hidden">
      {/* Starfield background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[url('/textures/starfield.png')] bg-cover opacity-20" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-[#C7CED9] via-[#8FA3BB] to-[#3E4C59] text-transparent bg-clip-text drop-shadow-[0_2px_12px_rgba(148,163,184,0.5)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeUp}
          custom={0}
        >
          Launch Your Mission
        </motion.h2>

        <motion.p
          className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeUp}
          custom={1}
        >
          Choose your galactic operation and take the helm. Each mission leads you deeper into the unknown.
        </motion.p>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {missions.map((mission, i) => (
            <motion.div
              key={i}
              className="group bg-gradient-to-br from-[#1e1e20] to-[#101014] rounded-2xl p-6 border border-gray-800 shadow-[0_4px_30px_rgba(0,0,0,0.3)] backdrop-blur-sm transition-all duration-300 hover:shadow-[0_8px_50px_rgba(148,163,184,0.45)] hover:scale-[1.04] hover:border-[#8FA3BB]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeUp}
              custom={i + 2}
              whileHover={{ rotateX: 5, rotateY: -5 }}
            >
              <div className="text-5xl mb-4 transition-transform group-hover:scale-110">
                {mission.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {mission.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {mission.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
