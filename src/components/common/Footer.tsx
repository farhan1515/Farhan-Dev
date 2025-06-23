import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";
import { FaMedium } from "react-icons/fa";


const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative py-10 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 border-t border-purple-900/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8">
          <motion.button
            onClick={scrollToTop}
            className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-blue-500/20 transition-colors duration-300 border border-white/20"
            whileHover={{ y: -5 }}
            whileTap={{ y: 0 }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6 text-blue-400" />
          </motion.button>
          <div className="flex space-x-6">
            <motion.a
              href="https://github.com/farhan1515"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-md rounded-full text-gray-300 hover:text-blue-400 transition-colors duration-300 border border-white/20"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/mohammed-farhan-anwar-b7a626256/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-md rounded-full text-gray-300 hover:text-blue-400 transition-colors duration-300 border border-white/20"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://medium.com/@farhananwar784"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-md rounded-full text-gray-300 hover:text-blue-400 transition-colors duration-300 border border-white/20"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Medium"
            >
              <FaMedium className="w-6 h-6" />
            </motion.a>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Farhan.dev. All rights reserved.</p>
          <p className="mt-1">
            Designed and built with React, Three.js, and Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
