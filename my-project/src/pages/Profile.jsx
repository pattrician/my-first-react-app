import React from "react";
import { motion } from "framer-motion";
import "./Profile.css";
import profilePic from "../assets/profile.jpeg";

function Profile() {
  return (
    <motion.div
      className="profile-container"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Profile
      </motion.h1>

      <motion.img
        src={profilePic}
        alt="Profile"
        className="profile-image"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        Hi! I’m Patricia, a BS Information Technology student who’s interested in web development and design.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
      >
        I’m still learning tools like React.js, JavaScript, and CSS, but I enjoy exploring how they work to create simple and interactive websites.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        viewport={{ once: true }}
      >
        In my free time, I love discovering new tech and finding ways to improve my design skills.
      </motion.p>
    </motion.div>
  );
}

export default Profile;