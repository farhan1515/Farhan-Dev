import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Code,
  Terminal,
  Server,
  Wand2,
  Cpu,
  Layers,
  Palette,
  Globe,
  Github,
  Coffee,
  Sparkles,
  Rocket,
  Heart,
  Star,
  Zap,
  Download,
  Mail,
  ArrowRight,
  Trophy,
  GitBranch,
  Smartphone,
} from "lucide-react";
import image6 from "../../assets/avatar.png";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -50]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.9]
  );

  // Mouse tracking for interactive elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const floatingIcons = [
    {
      Icon: Github,
      delay: 0,
      color: "text-gray-300",
      position: { top: "15%", left: "8%" },
    },
    {
      Icon: Coffee,
      delay: 0.5,
      color: "text-amber-400",
      position: { top: "25%", right: "12%" },
    },
    {
      Icon: Terminal,
      delay: 1,
      color: "text-green-300",
      position: { bottom: "25%", left: "6%" },
    },
    {
      Icon: Sparkles,
      delay: 1.5,
      color: "text-pink-300",
      position: { top: "45%", left: "4%" },
    },
    {
      Icon: Rocket,
      delay: 2,
      color: "text-purple-400",
      position: { top: "65%", right: "8%" },
    },
    {
      Icon: Zap,
      delay: 2.5,
      color: "text-yellow-400",
      position: { bottom: "40%", right: "15%" },
    },
  ];

  const personalStats = [
    { label: "IT Graduate", value: "Fresh", icon: Trophy },
    { label: "Commit Streak", value: "Daily", icon: GitBranch },
    { label: "Coffee > Sleep", value: "Always", icon: Coffee },
    { label: "Flutter & React", value: "Expert", icon: Smartphone },
  ];

  const funFacts = [
    {
      icon: Coffee,
      text: "Coffee > Sleep — because caffeine never throws null.",
      color: "text-amber-400",
      bg: "from-amber-500/20 to-amber-600/10",
    },
    {
      icon: Trophy,
      text: "Lead striker on the field, lead dev off the field.",
      color: "text-green-400",
      bg: "from-green-500/20 to-green-600/10",
    },
    {
      icon: GitBranch,
      text: "I push to Git like it's social media.",
      color: "text-blue-400",
      bg: "from-blue-500/20 to-blue-600/10",
    },
    {
      icon: Code,
      text: 'Favorite commit message: "final_final_final_REAL_fix.js"',
      color: "text-purple-400",
      bg: "from-purple-500/20 to-purple-600/10",
    },
    {
      icon: Wand2,
      text: "Still waiting for the day my AI model makes me chai.",
      color: "text-pink-400",
      bg: "from-pink-500/20 to-pink-600/10",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative pt-24 md:pt-36 pb-8 md:pb-10 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.05),transparent_50%)]" />
      </div>

      {/* Animated Grid Background */}
      <motion.div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(168, 85, 247, 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "60px 60px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating Icons with Enhanced Animation */}
      {floatingIcons.map(({ Icon, delay, color, position }, index) => (
        <motion.div
          key={index}
          className={`absolute ${color} opacity-20 z-0 pointer-events-none`}
          style={position}
          animate={{
            y: [-30, 30, -30],
            x: [-15, 15, -15],
            rotate: [0, 360],
            scale: [0.7, 1.3, 0.7],
          }}
          transition={{
            duration: 8 + index,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut",
          }}
        >
          <Icon size={48} />
        </motion.div>
      ))}

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div style={{ opacity, y, scale }} className="max-w-7xl mx-auto">
          {/* Enhanced Section Header */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full text-blue-300 text-sm font-mono">
                <Sparkles size={16} />
                MEET FARHAN
                <Heart size={16} className="text-pink-400" />
              </span>
            </motion.div>

            <motion.h2
              className="text-5xl md:text-7xl font-black mb-6 tracking-tight"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 drop-shadow-2xl">
                👋 About Me
              </span>
            </motion.h2>

            {/* <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Freshly minted IT graduate who chose{" "}
              <span className="text-blue-400 font-semibold">
                building digital experiences
              </span>{" "}
              over{" "}
              <span className="text-purple-400 font-semibold">
                memorizing theory PDFs
              </span>
            </motion.p> */}
          </motion.div>

          {/* Hero Story Card */}
          <motion.div
            className="relative mb-24 group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />

            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-16 overflow-hidden">
              {/* Floating Elements Inside Card */}
              <motion.div
                className="absolute top-8 right-8 text-blue-400/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Code size={60} />
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                  className="space-y-8"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div className="space-y-6 text-lg text-gray-200 leading-relaxed">
                    <p>
                      Hey there! I'm{" "}
                      <span className="text-blue-400 font-semibold text-xl">
                        Farhan
                      </span>{" "}
                      — a freshly minted Information Technology graduate who
                      decided early on that building cool, functional, and fast
                      digital experiences was way more fun than memorizing
                      theory-heavy exam PDFs.
                    </p>
                    <p>
                      I specialize in{" "}
                      <span className="text-purple-400 font-semibold">
                        Flutter and React
                      </span>
                      , but I'm not just another developer who throws components
                      on a screen. I care about how things feel, how they scale,
                      and how users interact with them — whether it's a crisp UI
                      or a seamless real-time experience powered by{" "}
                      <span className="text-orange-400 font-semibold">
                        Firebase
                      </span>
                      .
                    </p>
                    <p>
                      My journey's been hands-on from day one — from building
                      full-stack AI tools to deploying production-ready apps.
                      I've interned with companies like{" "}
                      <span className="text-green-400 font-semibold">
                        Smollan
                      </span>
                      , contributed to real Google-backed projects, and led
                      hackathon teams to the podium.
                    </p>
                    <p>
                      When I'm not immersed in code, I'm either leading my{" "}
                      <span className="text-yellow-400 font-semibold">
                        football team
                      </span>
                      , testing AI limits, or debugging why I opened VS Code in
                      the first place. 🤔
                    </p>
                  </div>

                  {/* Personal Stats */}
                  {/* <div className="grid grid-cols-2 gap-4">
                    {personalStats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        whileHover={{ y: -5, scale: 1.05 }}
                      >
                        <stat.icon className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                        <div className="text-2xl font-bold text-white mb-1">
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-400 font-medium">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div> */}
                </motion.div>

                {/* Enhanced Avatar Section */}
                <motion.div
                  className="relative flex items-center justify-center"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="relative w-80 h-80">
                    {/* Multiple Animated Rings */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-0 border-4 border-transparent border-t-blue-400 border-r-purple-400 rounded-full"
                    />
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-6 border-4 border-transparent border-b-green-400 border-l-pink-400 rounded-full"
                    />
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-12 border-4 border-transparent border-t-yellow-400 border-r-cyan-400 rounded-full"
                    />

                    {/* Center Avatar with Your Image */}
                    <div className="absolute inset-16 flex items-center justify-center">
                      <motion.div
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="w-full h-full rounded-full flex items-center justify-center border-4 border-gradient-to-r from-blue-400 to-purple-500 shadow-2xl relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full" />
                        <img
                          src={image6}
                          alt="Farhan - Developer"
                          className="w-[90%] h-[90%] object-fit rounded-full relative z-10"
                          style={{
                            filter: "brightness(1.1) contrast(1.1)",
                            objectPosition: "center 20%", // Shift image slightly up to include forehead
                          }}
                        />
                        {/* Overlay for better integration */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full" />
                      </motion.div>
                    </div>

                    {/* Orbiting Elements */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-0"
                    >
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-500/30 flex items-center justify-center">
                        <Code size={16} className="text-blue-400" />
                      </div>
                    </motion.div>
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-0"
                    >
                      <div className="absolute -bottom-4 left-1/2 transform -translate-x-full w-8 h-8 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-500/30 flex items-center justify-center">
                        <Rocket size={16} className="text-purple-400" />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Fun Facts Section */}
          {/* 
<motion.div
  className="mb-16"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  viewport={{ once: true }}
>
  <motion.div
    className="text-center mb-12"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h3 className="text-4xl md:text-5xl font-bold mb-4">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500">
        🎯 Fun Facts About Me
      </span>
    </h3>
    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
      Because every developer needs a personality beyond their GitHub commits
    </p>
  </motion.div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
    {funFacts.map((fact, index) => (
      <motion.div
        key={index}
        className={`relative group p-6 bg-gradient-to-br ${fact.bg} backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        whileHover={{ y: -5, scale: 1.02 }}
      >
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-xl bg-white/10 ${fact.color} flex-shrink-0`}>
            <fact.icon size={24} />
          </div>
          <p className="text-gray-200 leading-relaxed font-medium">
            {fact.text}
          </p>
        </div>

        <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>
    ))}
  </div>
</motion.div> 
*/}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
