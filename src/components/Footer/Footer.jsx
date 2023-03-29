import React from "react";
import "./footer.css";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer id="footer">
      <div id="footer-content">
        <p>© 2023 Tayamul Rai. All Rights Reserved.</p>
        <div id="footer-logo">
          <motion.a
            whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.9 }}
            href="https://linkedin.com/in/tayamul-rai"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Tayamul's LinkedIn profile"
          >
            <SiLinkedin size={20} color="#fff" />
          </motion.a>
          <motion.a
          whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
          whileTap={{ scale: 0.9 }}
            href="https://github.com/Tayamul"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Tayamul's Github profile"
          >
            <SiGithub size={20} color='#fff'/>
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
