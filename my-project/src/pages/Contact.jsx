import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import "../App.css";

function Contact() {
  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0, y: 50 }}
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
        Contact Me
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        You can reach me through the followinggg:
      </motion.p>

      <motion.p
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
      >
        <MdEmail style={{ marginRight: "8px", color: "#007bff" }} /> 
        <strong>Email:</strong> patriciasungahid@gmail.com
      </motion.p>

      <motion.p
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
      >
        <FaPhoneAlt style={{ marginRight: "8px", color: "#28a745" }} /> 
        <strong>Phone:</strong> 09654929336
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
      >
        <FaGithub style={{ marginRight: "8px", color: "#333" }} /> 
        <strong>GitHub:</strong> github.com/pattrician
      </motion.p>
    </motion.div>
  );
}

export default Contact;
