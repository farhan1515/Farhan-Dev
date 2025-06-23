import { useRef, Suspense, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Stars } from "@react-three/drei";
import {
  ChevronDown,
  Code,
  Rocket,
  Sparkles,
  Terminal,
  Github,
  Coffee,
  Zap,
  Heart,
  Award,
  Users,
} from "lucide-react";

// Placeholder for AvatarModel - replace with your actual component
const AvatarModel = ({ position }: { position: [number, number, number] }) => {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="#8B5CF6" />
    </mesh>
  );
};

// Placeholder for Particles - replace with your actual component
const Particles = ({ count }: { count: number }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20,
          ]}
        >
          <sphereGeometry args={[0.01, 8, 8]} />
          <meshBasicMaterial color="#60A5FA" />
        </mesh>
      ))}
    </>
  );
};

const Hero = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [typedText, setTypedText] = useState("");
  const [currentRole, setCurrentRole] = useState(0);
  const [showStats, setShowStats] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const roles = [
    "Flutter Developer",
    "Web Developer",
    "AI Enthusiast",
    "Problem Solver",
    "Creative Thinker",
  ];

  const stats = [
    {
      icon: Code,
      label: "Projects Delivered",
      value: "15+",
      color: "text-blue-400",
    },
    {
      icon: Users,
      label: "Happy Clients",
      value: "25+",
      color: "text-green-400",
    },
    {
      icon: Award,
      label: "Years Experience",
      value: "2+",
      color: "text-purple-400",
    },
    { icon: Heart, label: "Coffee Cups", value: "∞", color: "text-red-400" },
  ];

  const techStack = [
    { name: "Flutter", color: "bg-blue-500/20 text-blue-300", icon: "📱" },
    { name: "React", color: "bg-sky-500/20 text-sky-300", icon: "⚛️" },
    { name: "Firebase", color: "bg-yellow-500/20 text-yellow-300", icon: "🔥" },
    { name: "Python", color: "bg-green-700/20 text-green-300", icon: "🐍" },
    { name: "Tailwind", color: "bg-cyan-500/20 text-cyan-300", icon: "🎨" },
  ];

  // Component mount effect
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Typing animation effect
  useEffect(() => {
    if (!isMounted) return;

    const currentRoleText = roles[currentRole] || "";
    let i = 0;
    setTypedText(""); // Reset typed text

    const typingTimer = setInterval(() => {
      if (i <= currentRoleText.length) {
        setTypedText(currentRoleText.slice(0, i));
        i++;
      } else {
        clearInterval(typingTimer);
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingTimer);
  }, [currentRole, isMounted]);

  // Show stats after initial animation
  useEffect(() => {
    if (!isMounted) return;

    const timer = setTimeout(() => setShowStats(true), 1500);
    return () => clearTimeout(timer);
  }, [isMounted]);

  const handleScrollDown = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const floatingIcons = [
    // {
    //   Icon: Github,
    //   delay: 0,
    //   color: "text-gray-300",
    //   position: { top: "10%", left: "10%" },
    // },
    // {
    //   Icon: Coffee,
    //   delay: 0.5,
    //   color: "text-amber-400",
    //   position: { top: "20%", right: "15%" },
    // },
    {
      Icon: Terminal,
      delay: 1,
      color: "text-green-300",
      position: { bottom: "30%", left: "8%" },
    },
    {
      Icon: Zap,
      delay: 1.5,
      color: "text-yellow-400",
      position: { bottom: "20%", right: "12%" },
    },
    {
      Icon: Sparkles,
      delay: 2,
      color: "text-pink-300",
      position: { top: "40%", left: "5%" },
    },
    {
      Icon: Rocket,
      delay: 2.5,
      color: "text-purple-400",
      position: { top: "60%", right: "8%" },
    },
  ];

  // Don't render until component is mounted (prevents hydration issues)
  if (!isMounted) {
    return (
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 pt-24"
      >
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 pt-24"
    >
      {/* Enhanced 3D Scene Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <Stars
            radius={300}
            depth={60}
            count={5000}
            factor={7}
            saturation={0}
            fade
          />
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1.2}
            color="#60A5FA"
          />
          <pointLight
            position={[-10, -10, -5]}
            intensity={0.8}
            color="#A855F7"
          />
          <pointLight position={[10, -10, 5]} intensity={0.6} color="#10B981" />

          <Suspense fallback={null}>
            <Particles count={1000} />
            <Environment preset="night" />
          </Suspense>
        </Canvas>
      </div>

      {/* Floating Background Icons */}
      {floatingIcons.map(({ Icon, delay, color, position }, index) => (
        <motion.div
          key={index}
          className={`absolute ${color} opacity-10 z-0`}
          style={position}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 360],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut",
          }}
        >
          <Icon size={40} />
        </motion.div>
      ))}

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

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 text-center mt-8">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.6, 0.05, 0.01, 0.9],
            delay: 0.3,
          }}
        >
          {/* Greeting Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-8"
          >
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full text-blue-300 text-sm font-mono">
              👋 Welcome to my digital universe
            </span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-8 tracking-tight leading-tight">
            <motion.span
              className="block text-white font-black drop-shadow-2xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Hi, I'm Farhan and I'm a
            </motion.span>
            <motion.span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 font-black drop-shadow-2xl min-h-[1.2em]"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {typedText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-white"
              >
                |
              </motion.span>
            </motion.span>
          </h1>

          {/* Enhanced Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed font-light">
              Turning{" "}
              <span className="text-yellow-400 font-semibold">caffeine</span>{" "}
              into code and ideas into impact.
              <br className="hidden md:block" />
              <span className="text-teal-400 font-semibold">
                Fluttering
              </span>{" "}
              through mobile apps,{" "}
              <span className="text-blue-400 font-semibold">React-ing</span> to
              web challenges, and now diving into the{" "}
              <span className="text-purple-400 font-semibold">
                AI cosmos 🚀
              </span>
            </p>

            {/* Tech Stack Pills */}
            <motion.div
              className="flex flex-wrap justify-center gap-3 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech.name}
                  className={`px-4 py-2 rounded-full ${tech.color} backdrop-blur-sm border border-white/10 text-sm font-mono flex items-center gap-2`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <span>{tech.icon}</span>
                  {tech.name}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16"
          >
            <motion.a
              href="#projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-3">
                <Rocket size={20} />
                View My Work
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.a>

            <motion.a
              href="#contact"
              className="group px-8 py-4 text-white border-2 border-blue-400/50 hover:border-blue-400 rounded-xl backdrop-blur-sm hover:bg-blue-400/10 transition-all duration-300 font-semibold"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-3">
                <Coffee size={20} />
                Let's Chat!
              </span>
            </motion.a>
          </motion.div>

          {/* Animated Stats */}
          <AnimatePresence>
            {showStats && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <stat.icon
                      className={`${stat.color} w-8 h-8 mx-auto mb-3`}
                    />
                    <motion.div
                      className={`text-2xl font-bold ${stat.color} mb-1`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-gray-400 text-sm font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Enhanced 3D Avatar Canvas */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1/3 md:h-2/3 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        <Canvas camera={{ position: [0, 1.5, 4], fov: 50 }}>
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} intensity={0.8} color="#60A5FA" />
          <pointLight
            position={[-10, -10, -10]}
            intensity={0.4}
            color="#A855F7"
          />
          <Suspense fallback={null}>
            <AvatarModel position={[0, -1, 0]} />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              minPolarAngle={Math.PI / 2.5}
              maxPolarAngle={Math.PI / 1.8}
              autoRotate
              autoRotateSpeed={0.5}
            />
          </Suspense>
        </Canvas>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 cursor-pointer group"
        onClick={handleScrollDown}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <div className="text-gray-400 text-sm font-mono group-hover:text-blue-400 transition-colors">
            Scroll to explore
          </div>
          <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center group-hover:border-blue-400 transition-colors">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-blue-400 rounded-full mt-2"
            />
          </div>
          <ChevronDown className="text-blue-400 w-6 h-6 group-hover:scale-110 transition-transform" />
        </motion.div>
      </motion.div>

      {/* Floating Action Elements */}
      {/* <div className="absolute top-8 right-8 z-20">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.2 }}
          className="flex flex-col gap-4"
        >
          <motion.a
            href="#"
            className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            href="#"
            className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Terminal size={20} />
          </motion.a>
        </motion.div>
      </div> */}

      {/* Status Indicator */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.4 }}
        className="absolute top-8 left-8 z-20"
      >
        {/* <div className="flex items-center gap-3 px-4 py-2 bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-full">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 bg-green-400 rounded-full"
          />
          <span className="text-green-300 text-sm font-mono">
            Available for work
          </span>
        </div> */}
      </motion.div>
    </section>
  );
};

export default Hero;
