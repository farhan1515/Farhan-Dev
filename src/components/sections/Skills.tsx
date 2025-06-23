// NOTE: Make sure to install react-icons: npm install react-icons
import { useRef } from "react";
import { motion } from "framer-motion";
import {
  SiPython,
  SiFlutter,
  SiJavascript,
  SiDart,
  SiFirebase,
  SiTailwindcss,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiDocker,
  SiAmazon,
  SiPostgresql,
  SiGraphql,
  SiJest,
  SiWebpack,
  SiVite,
  SiPrisma,
  SiFigma,
  SiGit,
  SiRedux,
} from "react-icons/si";

const skills = [
  { name: "Python", icon: <SiPython size={48} color="#3776AB" /> },
  { name: "Flutter", icon: <SiFlutter size={48} color="#02569B" /> },
  { name: "JavaScript", icon: <SiJavascript size={48} color="#F7DF1E" /> },
  { name: "Dart", icon: <SiDart size={48} color="#0175C2" /> },
  { name: "Firebase", icon: <SiFirebase size={48} color="#FFCA28" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={48} color="#06B6D4" /> },
  { name: "Next.js", icon: <SiNextdotjs size={48} color="#fff" /> },
  { name: "React", icon: <SiReact size={48} color="#61DAFB" /> },
  { name: "TypeScript", icon: <SiTypescript size={48} color="#3178C6" /> },
  { name: "Node.js", icon: <SiNodedotjs size={48} color="#68A063" /> },
  { name: "MongoDB", icon: <SiMongodb size={48} color="#47A248" /> },
  { name: "Docker", icon: <SiDocker size={48} color="#2496ED" /> },
  { name: "AWS", icon: <SiAmazon size={48} color="#FF9900" /> },
  // { name: "PostgreSQL", icon: <SiPostgresql size={48} color="#336791" /> },
  // { name: "GraphQL", icon: <SiGraphql size={48} color="#E10098" /> },
  // { name: "Jest", icon: <SiJest size={48} color="#C21325" /> },
  // { name: "Webpack", icon: <SiWebpack size={48} color="#8DD6F9" /> },
  { name: "Vite", icon: <SiVite size={48} color="#646CFF" /> },
  // { name: "Prisma", icon: <SiPrisma size={48} color="#2D3748" /> },
  { name: "Figma", icon: <SiFigma size={48} color="#F24E1E" /> },
  { name: "Git", icon: <SiGit size={48} color="#F05032" /> },
  { name: "Redux", icon: <SiRedux size={48} color="#764ABC" /> },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Split skills into two rows
  const half = Math.ceil(skills.length / 2);
  const row1 = skills.slice(0, half);
  const row2 = skills.slice(half);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative min-h-[60vh] py-20 md:py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center justify-center">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full text-blue-300 text-sm font-mono">
              🚀 My Skills & Tools
            </span>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-white font-black">All My </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 font-black">
              Skills
            </span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            A quick glance at the technologies, frameworks, and tools I use to
            build beautiful, modern digital experiences.
          </motion.p>
        </div>

        {/* Skills Grid - Two Rows */}
        {/* 🔥 Animated Horizontal Skills Marquee */}
        <div className="overflow-hidden w-full py-12 space-y-6">
          {/* Row 1 - Left to Right */}
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {[...skills, ...skills].map((skill, idx) => (
              <div
                key={`row1-${idx}`}
                className="flex flex-col items-center justify-center w-28 h-28 bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl shadow-lg backdrop-blur-md"
              >
                {skill.icon}
                <span className="mt-2 text-sm text-white font-medium">
                  {skill.name}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Row 2 - Right to Left */}
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["-100%", "0%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {[...skills, ...skills].map((skill, idx) => (
              <div
                key={`row2-${idx}`}
                className="flex flex-col items-center justify-center w-28 h-28 bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl shadow-lg backdrop-blur-md"
              >
                {skill.icon}
                <span className="mt-2 text-sm text-white font-medium">
                  {skill.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
