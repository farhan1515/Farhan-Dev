import { motion, AnimatePresence } from "framer-motion";
import { Code, Terminal, Sparkles, Rocket, BookOpen, RotateCcw, Coffee, Github, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const Loader = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const developerSteps = [
    { text: "Learn", icon: BookOpen, emoji: "📚", color: "text-blue-400" },
    { text: "Develop", icon: Code, emoji: "💻", color: "text-green-400" },
    { text: "Launch", icon: Rocket, emoji: "🚀", color: "text-purple-400" },
    { text: "Repeat", icon: RotateCcw, emoji: "🔄", color: "text-orange-400" },
  ];

  const floatingIcons = [
    { Icon: Github, delay: 0, color: "text-gray-300" },
    { Icon: Coffee, delay: 0.5, color: "text-amber-400" },
    { Icon: Terminal, delay: 1, color: "text-green-300" },
    { Icon: Zap, delay: 1.5, color: "text-yellow-400" },
    { Icon: Sparkles, delay: 2, color: "text-pink-300" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % developerSteps.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 100;
        }
        return prev + 1;
      });
    }, 70); // Adjust to approximate 7 seconds for 100%
    return () => clearInterval(interval);
  }, []);

  const currentStep = developerSteps[currentTextIndex];

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center z-50 overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Floating Icons Background */}
      {floatingIcons.map(({ Icon, delay, color }, index) => (
        <motion.div
          key={index}
          className={`absolute ${color} opacity-20`}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 360],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut",
          }}
          style={{
            left: `${20 + index * 15}%`,
            top: `${20 + index * 10}%`,
          }}
        >
          <Icon size={24} />
        </motion.div>
      ))}

      {/* Central Loading Animation */}
      <div className="relative z-10">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotateZ: [0, 180, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-32 h-32 mb-8"
        >
          <motion.div
            animate={{ rotateZ: [0, -360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-4 border-transparent border-t-blue-400 border-r-purple-400 rounded-full"
          />
          <motion.div
            animate={{ rotateZ: [0, 360] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 border-4 border-transparent border-b-green-400 border-l-pink-400 rounded-full"
          />
          <motion.div
            animate={{ rotateZ: [0, -360] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-4 border-4 border-transparent border-t-yellow-400 border-r-red-400 rounded-full"
          />
          <motion.div
            animate={{
              scale: [0.8, 1.2, 0.8],
              rotateY: [0, 180, 360],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTextIndex}
                initial={{ scale: 0, opacity: 0, rotateY: -180 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                exit={{ scale: 0, opacity: 0, rotateY: 180 }}
                transition={{ duration: 0.5 }}
                className={`${currentStep.color} flex items-center justify-center`}
              >
                <currentStep.icon size={48} />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>

        <div className="text-center mb-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTextIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-3"
            >
              <span className="text-4xl">{currentStep.emoji}</span>
              <h2 className={`text-4xl font-bold ${currentStep.color} font-mono`}>
                {currentStep.text}
              </h2>
              <span className="text-4xl">{currentStep.emoji}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-center mb-8"
        >
          <p className="text-gray-300 text-lg font-mono max-w-md mx-auto">
            {currentTextIndex === 0 && "📖 Absorbing knowledge, one concept at a time..."}
            {currentTextIndex === 1 && "⚡ Crafting code that changes the world..."}
            {currentTextIndex === 2 && "🌟 Bringing ideas to life in production..."}
            {currentTextIndex === 3 && "🔄 Evolution never stops for developers..."}
          </p>
        </motion.div>

        <div className="relative w-80 h-2 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-green-500 rounded-full relative"
          >
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
            />
          </motion.div>
        </div>

        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-center mt-4"
        >
          <span className="text-gray-400 font-mono text-sm">
            Loading... {Math.round(progress)}%
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;