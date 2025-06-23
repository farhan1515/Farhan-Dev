import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { ExternalLink, Github, Play, Code, Sparkles } from "lucide-react";
import image1 from "../../assets/image1.jpeg";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
const projectsData = [
  {
    id: 1,
    title: "Cheat AI",
    description:
      "Cheat AI is a versatile application designed to help users efficiently manage daily tasks with the power of AI. It includes features like chatting with AI, generating images, summarizing documents, and more, all while keeping the user experience seamless and intuitive.",
    technologies: ["Flutter", "Firebase", "Dart", "AppWrite"],
    image: image1,
    demoUrl:
      "https://play.google.com/store/apps/details?id=com.technova15.cheat_ai&pcampaignid=web_share",
    repoUrl: "https://github.com/farhan1515/Flutter-Cheat-AI",
    category: "Mobile APP",
    year: "2024",
  },
  {
    id: 2,
    title: "Driwix - Logistic Services",
    description:
      "Developed and deployed the Driwix mobile app to the Google Play Store, delivering a smooth, user-friendly experience. On the web side, I built responsive admin dashboards using React JS to manage users, track activity, and streamline internal operations..",
    technologies: [
      "Flutter",
      "Firebase",
      "React",
      "JavaScript",
      "Node.js",
      "Dart",
    ],
    image: image2,
    demoUrl: "https://play.google.com/store/apps/details?id=com.driwix.app",
    repoUrl: "https://play.google.com/store/apps/details?id=com.driwix.app",
    category: "Mobile APP",
    year: "2024",
  },
  {
    id: 3,
    title: "SEO - Digital Marketing",
    description:
      "The SEO App is a Flutter-based platform where customers post flyer details, and designers enhance them, with real-time in-app chat and Twilio-powered WhatsApp notifications ensuring seamless communication. It supports cross-platform use (web and mobile) with secure Firebase integration and role-based access for customers, managers, and designers.",
    technologies: ["Flutter", "Firebase", "Dart", "Twilio"],
    image: image3,
    demoUrl: "https://seo-app-c6c22.web.app/",
    repoUrl: "https://github.com/farhan1515/SEO-APP",
    category: "Mobile and Web App",
    year: "2025",
  },
  {
    id: 4,
    title: "RV Fitness",
    description:
      "Developed a fully responsive gym website that showcases the facility’s offerings—covering sections like About, Programs, Trainers, Photo Gallery, and Membership Plans..",
    technologies: ["React", "Talwind", "JavaScript", "EmailJs", "Express"],
    image: image4,
    demoUrl: "https://rvfitness.netlify.app/",
    repoUrl: "https://github.com/farhan1515/RV-Fitness",
    category: "WEB APP",
    year: "2025",
  },
  {
    id: 5,
    title: "Gym CRM APP",
    description:
      "“Developed a sleek, cross-platform gym CRM app for trainers and gym owners—featuring user dashboard, member onboarding, expiry alerts, automated WhatsApp notifications, and revenue analytics.”.",
    technologies: ["Flutter", "Firebase", "Dart", "Cloud Functions"],
    image: image5,
    demoUrl: "https://github.com/farhan1515/V-SHAPE-U-GYM",
    repoUrl: "https://github.com/yourhandle/social-platform",
    category: "Mobile and WEB APP",
    year: "2025",
  },
  // {
  //   id: 6,
  //   title: "IoT Monitoring System",
  //   description:
  //     "An advanced IoT monitoring system for smart homes and offices, featuring real-time sensor data visualization and automated control systems.",
  //   technologies: [
  //     "React",
  //     "Arduino",
  //     "Raspberry Pi",
  //     "MQTT",
  //     "InfluxDB",
  //     "Grafana",
  //   ],
  //   image: "/images/projects/project6.jpg",
  //   demoUrl: "https://iot-monitor.com",
  //   repoUrl: "https://github.com/yourhandle/iot-system",
  //   category: "IoT",
  //   year: "2023",
  // },
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  const [isPaused, setIsPaused] = useState(false);
  const [scrollX, setScrollX] = useState(0);

  // Auto-scroll with much slower speed
  useEffect(() => {
    if (!scrollContainerRef.current) return;
    let animationFrame: number;
    let lastTimestamp: number | null = null;
    const speed = 0.3; // Reduced from 0.18 to 0.3 for slower movement

    function step(timestamp: number) {
      if (isPaused) {
        lastTimestamp = null;
        animationFrame = requestAnimationFrame(step);
        return;
      }
      if (lastTimestamp !== null) {
        const delta = timestamp - lastTimestamp;
        setScrollX((prev) => prev + delta * speed);
      }
      lastTimestamp = timestamp;
      animationFrame = requestAnimationFrame(step);
    }
    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  // Smooth loop with duplicate cards for seamless scrolling
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardWidth = 320 + 24; // card width + gap
    const totalCards = projectsData.length;
    const totalWidth = cardWidth * totalCards;

    if (scrollX >= totalWidth) {
      setScrollX(0);
    }
    container.scrollLeft = scrollX;
  }, [scrollX]);

  const floatingElements = [
    { Icon: Code, delay: 0, position: { top: "10%", left: "5%" } },
    { Icon: Sparkles, delay: 1, position: { top: "20%", right: "5%" } },
    { Icon: Play, delay: 2, position: { bottom: "20%", left: "5%" } },
  ];

  // Duplicate projects for seamless infinite scroll
  const duplicatedProjects = [...projectsData, ...projectsData];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative min-h-screen py-20 md:py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900"
    >
      {/* Floating Background Elements */}
      {floatingElements.map(({ Icon, delay, position }, index) => (
        <motion.div
          key={index}
          className="absolute text-purple-400 opacity-10 z-0"
          style={position}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 360],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut",
          }}
        >
          <Icon size={60} />
        </motion.div>
      ))}

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div style={{ opacity, y }} className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-purple-300 text-sm font-mono">
                🚀 Featured Projects
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white font-black">My </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 font-black">
                Creative Works
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Exploring the intersection of{" "}
              <span className="text-blue-400 font-semibold">design</span> and{" "}
              <span className="text-purple-400 font-semibold">technology</span>,
              crafting digital experiences that inspire and engage.
            </p>
          </motion.div>

          {/* Horizontal Scroll Arrows */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-slate-900/80 to-transparent p-2 rounded-full shadow-lg hover:bg-blue-500/30 transition-all duration-300"
            style={{ display: "block" }}
            onClick={() => {
              if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollBy({
                  left: -340,
                  behavior: "smooth",
                });
              }
            }}
            aria-label="Scroll left"
          >
            <svg
              width="28"
              height="28"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-l from-slate-900/80 to-transparent p-2 rounded-full shadow-lg hover:bg-blue-500/30 transition-all duration-300"
            style={{ display: "block" }}
            onClick={() => {
              if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollBy({
                  left: 340,
                  behavior: "smooth",
                });
              }
            }}
            aria-label="Scroll right"
          >
            <svg
              width="28"
              height="28"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Horizontally Auto-Scrolling Projects */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              ref={scrollContainerRef}
              className="flex gap-4 sm:gap-6 overflow-x-hidden scrollbar-hide pb-8"
              style={{
                scrollSnapType: "x mandatory",
                WebkitOverflowScrolling: "touch",
                minHeight: "auto", // Remove fixed height to allow dynamic sizing
              }}
            >
              {duplicatedProjects.map((project, index) => (
                <motion.div
                  key={`${project.id}-${index}`}
                  className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[340px] relative group cursor-pointer"
                  style={{ scrollSnapAlign: "start" }}
                  whileHover={{
                    scale: 1.02,
                    y: -4,
                    zIndex: 10,
                  }}
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: (index % projectsData.length) * 0.1,
                    scale: { duration: 0.3 },
                    y: { duration: 0.3 },
                  }}
                  viewport={{ once: true }}
                >
                  {/* Responsive Project Card with Dynamic Height */}
                  <div className="relative min-h-[420px] sm:min-h-[450px] md:min-h-[480px] bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden transition-all duration-500 flex flex-col shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 group-hover:border-white/40">
                    {/* Enhanced Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Responsive Project Image */}
                    <div className="relative h-32 sm:h-36 md:h-40 overflow-hidden rounded-t-2xl flex-shrink-0 bg-white flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 bg-white"
                        onError={(e) => {
                          e.currentTarget.src = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='320' height='160' viewBox='0 0 320 160'><rect width='320' height='160' fill='%23374151'/><text x='160' y='80' text-anchor='middle' fill='%23D1D5DB' font-family='Arial' font-size='14'>Project Image</text></svg>`;
                        }}
                      />
                      {/* Responsive Position Badges */}
                      <div className="absolute top-2 sm:top-3 left-2 sm:left-3 z-20">
                        <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-black/70 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/30 shadow-lg">
                          {project.category}
                        </span>
                      </div>
                      <div className="absolute top-2 sm:top-3 right-2 sm:right-3 z-20">
                        <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-black/70 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/30 shadow-lg">
                          {project.year}
                        </span>
                      </div>
                    </div>

                    {/* Responsive Project Content with Dynamic Layout */}
                    <div className="p-3 sm:p-4 md:p-5 flex-1 flex flex-col">
                      {/* Title */}
                      <div className="mb-2 sm:mb-3">
                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300 leading-tight">
                          {project.title}
                        </h3>
                      </div>

                      {/* Description - Show all text, no scroll/overflow */}
                      <div className="mb-3 sm:mb-4">
                        <div className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                          {project.description}
                        </div>
                      </div>

                      {/* Tech Stack - Show all technologies, no slice/limit */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={tech}
                            className="px-2 sm:px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-xs font-mono rounded-full border border-blue-500/30 backdrop-blur-sm hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons - Always visible at bottom with responsive sizing */}
                      <div className="flex gap-2 sm:gap-3 mt-auto flex-shrink-0">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs sm:text-sm font-semibold rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 whitespace-nowrap transform hover:scale-105 active:scale-95"
                        >
                          <ExternalLink size={12} className="sm:w-4 sm:h-4" />
                          <span className="hidden xs:inline sm:inline">
                            Live Demo
                          </span>
                          <span className="xs:hidden sm:hidden">Demo</span>
                        </a>
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-white/10 backdrop-blur-sm border border-white/30 text-white text-xs sm:text-sm font-semibold rounded-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300 shadow-lg whitespace-nowrap transform hover:scale-105 active:scale-95"
                        >
                          <Github size={12} className="sm:w-4 sm:h-4" />
                          Code
                        </a>
                      </div>
                    </div>

                    {/* Enhanced Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-700 pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="#contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles size={20} />
              Let's Create Something Amazing Together
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-thin {
          scrollbar-width: thin;
        }
        .scrollbar-thumb-white\/20::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
        }
        .scrollbar-track-transparent::-webkit-scrollbar-track {
          background-color: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Custom responsive breakpoints */
        @media (max-width: 374px) {
          .xs\:hidden {
            display: none;
          }
        }
        @media (min-width: 375px) {
          .xs\:inline {
            display: inline;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
