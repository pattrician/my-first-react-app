import React from "react";
import { FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 My Portfolio. All rights reserved.</p>

      <div className="social-icons">
        <a
          href="https://www.instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.facebook.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>

        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a href="mailto:youremail@example.com" aria-label="Email">
          <MdEmail />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
