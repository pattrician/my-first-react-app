import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../App.css";
import introPic from "../assets/introPic.jpeg"; // Import your intro image

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds of intro screen
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    // Intro screen with a circular image
    return (
      <div className="intro-screen">
        <div className="intro-circle">
          <img src={introPic} alt="Intro" /> {/* Use imported intro image */}
        </div>
      </div>
    );
  }

  // Main Home content
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Home
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        Helloorrr, I’m PAT. I’m studying Information Technology and enjoy learning how to build simple websites and designs.
      </motion.p>
    </motion.div>
  );
}

export default Home;
