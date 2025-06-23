import { useScroll, motion, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-[72px] left-0 right-0 h-0.5 bg-gradient-to-r from-electric-blue via-accent-purple to-neon-green z-40"
      style={{ scaleX, transformOrigin: "0%" }}
    />
  );
};

export default ScrollProgress;
