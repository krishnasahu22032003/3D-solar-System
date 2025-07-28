import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function EnterGalaxy() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const planets = [
    {
      name: "Nebula-X",
      desc: "Mystic energy clouds orbiting in dynamic harmony.",
      image: "/textures/planet1.jpg",
      glow: "from-[#C7CED9] via-[#8FA3BB] to-[#3E4C59]",
    },
    {
      name: "CryoSphere",
      desc: "A frozen world shimmering with dark crystals.",
      image: "/textures/planet2.jpg",
      glow: "from-[#8FA3BB] via-[#C7CED9] to-[#3E4C59]",
    },
    {
      name: "Infernia",
      desc: "Molten lava rivers run across this fiery giant.",
      image: "/textures/planet3.jpg",
      glow: "from-[#3E4C59] via-[#8FA3BB] to-[#C7CED9]",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.4,
        duration: 0.9,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="w-full min-h-screen px-6 py-32 bg-black text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          ref={ref}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-[#C7CED9] via-[#8FA3BB] to-[#3E4C59] text-transparent bg-clip-text drop-shadow-[0_2px_12px_rgba(148,163,184,0.5)] mb-6"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          Enter the Galaxy
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          custom={1}
        >
          Explore mysterious planets with cosmic energy signatures. Each world is a gateway to another realm of wonder.
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {planets.map((planet, i) => (
            <motion.div
              key={i}
              style={{ willChange: "transform, opacity" }}
              className="relative rounded-3xl p-6 border border-[#2a2a3c] group overflow-hidden transition-transform duration-700 motion-safe:hover:scale-[1.03] shadow-[0_0_30px_rgba(255,255,255,0.05)] bg-[#111217]"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInUp}
              custom={i + 2}
            >
              {/* Outer glow */}
              <div
                className={`absolute -inset-[2px] rounded-[inherit] z-0 bg-gradient-to-br ${planet.glow} blur-md opacity-20 group-hover:opacity-30 transition duration-700 pointer-events-none`}
              />

              {/* Image */}
              <div className="w-full h-48 rounded-xl overflow-hidden mb-5 relative z-10">
                <img
                  src={planet.image}
                  alt={planet.name}
                  className="w-full h-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/0 pointer-events-none group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Text */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold bg-gradient-to-r from-[#C7CED9] via-[#8FA3BB] to-[#3E4C59] text-transparent bg-clip-text drop-shadow-md mb-2">
                  {planet.name}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {planet.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
