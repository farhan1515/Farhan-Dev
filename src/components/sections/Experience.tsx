import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, Calendar, MapPin, Sparkles, Code } from "lucide-react";

const experienceData = [
  {
    id: 1,
    role: "Full Stack Engineer",
    company: "AI Cloud",
    period: "Feb 2025 – Present",
    location: "Hyderabad, India",
    description: [
      "Developing a Flutter-based cross-platform application to automate flyer creation and distribution, reducing manual effort by 60%.",
      "Implemented a real-time chat system using Firebase Firestore, Cloud Functions, and push notifications to support thousands of daily messages.",
      "Built automated flyer update and scheduling functionality integrated with Twilio to send WhatsApp messages seamlessly.",
      "Deployed the application to the Play Store and optimized it for web, ensuring a consistent cross-platform experience.",
      "Contributing to CloudOU, an internal learning platform, by developing responsive and dynamic frontend screens using Next.js and Tailwind CSS.",
    ],
    technologies: [
      "Flutter",
      "Firebase",
      "Cloud Functions",
      "Twilio",
      "Next.js",
      "Tailwind CSS",
      "Dart",
      "JavaScript",
    ],
  },
  {
    id: 2,
    role: "Software Developer",
    company: "DriWix",
    period: "Nov 2024 – Jan 2025",
    location: "Hyderabad, India",
    description: [
      "DriWix is a logistics app that connects truck owners and transport companies to simplify load matching, tracking, and route optimization.",
      "Revamped UI/UX, increasing user engagement by 30% and reducing bounce rate by 25%.",
      "Built dynamic user management with faster data retrieval, boosting system efficiency by 25%.",
      "Developed Dark/Light mode toggle, improving accessibility and retention by 40%.",
      "Managed 5+ Play Store releases with 100% compliance.",
      "Created a React-based dashboard for real-time load matching and logistics optimization, improving operational efficiency by 30%.",
    ],
    technologies: [
      "React",
      "Flutter",
      "Firebase",
      "JavaScript",
      "firebase Hosting",
    ],
  },
  {
    id: 3,
    role: "Flutter Developer",
    company: "Smollan (Google Project)",
    period: "May 2024 – Aug 2024",
    location: "Hyderabad, India",
    description: [
      "Developed retail training apps for Google, improving UX for 500+ daily active users.",
      "Integrated Firebase Firestore for real-time sync, reducing data latency by 30%.",
      "Deployed apps with Firebase Hosting, improving page speed by 90%.",
      "Delivered 3 major features through cross-functional collaboration to boost usability and customer satisfaction.",
    ],
    technologies: ["Flutter", "Firebase", "Dart"],
  },
];

const floatingElements = [
  { Icon: Code, delay: 0, position: { top: "10%", left: "5%" } },
  { Icon: Sparkles, delay: 1, position: { top: "20%", right: "5%" } },
];

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900"
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
            backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div style={{ opacity, y }} className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4"
            >
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-purple-300 text-sm font-mono">
                💼 Work Experience
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-display">
              <span className="text-white font-black">My </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 font-black">
                Professional Journey
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
              Building impactful products and experiences, one role at a time.
            </p>
          </div>
          <div className="mt-16 relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500/40 via-purple-500/30 to-pink-500/30 z-0 rounded-full" />
            {/* Experience items */}
            <div className="space-y-16 relative z-10">
              {experienceData.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 items-center`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 mt-6 flex justify-center z-20">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 border-4 border-slate-900 shadow-lg" />
                  </div>
                  {/* Content */}
                  <div
                    className={`w-full md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8 transition-all duration-500 hover:scale-[1.025] hover:shadow-purple-500/20">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-900/40 rounded-lg">
                          <Briefcase className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white font-display mb-1">
                            {exp.role}
                          </h3>
                          <p className="text-lg text-blue-300 font-medium">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center text-sm text-gray-400">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-sm text-gray-400">
                          <MapPin className="w-4 h-4 mr-2" />
                          {exp.location}
                        </div>
                      </div>
                      <p className="mt-4 text-gray-300 text-base leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-200 text-xs font-mono rounded-full border border-blue-500/30 backdrop-blur-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <style>{`
        .section-heading {
          font-size: 2.5rem;
          font-weight: 800;
          letter-spacing: -0.03em;
        }
        .section-subheading {
          font-size: 1.25rem;
          color: #a5b4fc;
        }
      `}</style>
    </section>
  );
};

export default Experience;
