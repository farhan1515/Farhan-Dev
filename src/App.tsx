import React, { Suspense, lazy, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Loader from "./components/common/Loader";
import Navbar from "./components/common/Navbar";
import CustomCursor from "./components/common/CustomCursor";
import ScrollProgress from "./components/common/ScrollProgress";
import Footer from "./components/common/Footer";

// Lazy load sections for better performance
const Hero = lazy(() => import("./components/sections/Hero"));
const About = lazy(() => import("./components/sections/About"));
const Skills = lazy(() => import("./components/sections/Skills"));
const Projects = lazy(() => import("./components/sections/Projects"));
const Experience = lazy(() => import("./components/sections/Experience"));
const Contact = lazy(() => import("./components/sections/Contact"));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has already seen the loader in this session
    const hasSeenLoader = sessionStorage.getItem('hasSeenLoader');
    
    if (hasSeenLoader) {
      // Skip loading animation for subsequent visits in the same session
      setIsLoading(false);
      return;
    }

    // Show loading animation only on first visit
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Mark that user has seen the loader
      sessionStorage.setItem('hasSeenLoader', 'true');
    }, 8000); // 8 seconds total loading time

    return () => clearTimeout(timer);
  }, []);

  // Show loader only on first visit
  if (isLoading) {
    return <Loader />;
  }

  return (
    <Router>
      <div className="relative">
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        }>
          <Routes>
            <Route
              path="/"
              element={
                <main className="relative">
                  <Hero />
                  <About />
                  <Skills />
                  <Projects />
                  <Experience />
                  <Contact />
                </main>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;