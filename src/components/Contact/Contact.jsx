import React from "react";
import "./contact.css";
import { SiLinkedin } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact">
      <p>CONTACT</p>
      <h1>Drop me an email! Connect with me on LinkedIn!</h1>
      <div class="contact-container">
        <div className="contact-content">
          <motion.a
            whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.9 }}
            href="https://linkedin.com/in/tayamul-rai"
            target="_blank"
            rel="noreferrer"
          >
            <SiLinkedin size={30} color="#2d2e32" className="contact-icons" />
          </motion.a>
          <div className="contact-text">
            <a
              href="https://www.linkedin.com/in/tayamul-rai"
              target="_blank"
              rel="noreferrer"
            >
              <h6>LinkedIn</h6>
              <p>linkedin.com/in/tayamul-rai</p>
            </a>
          </div>
        </div>
        <div className="contact-content">
          <motion.a
            whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.9 }}
            href="mailto: rai_tayamul@hotmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <HiOutlineMail size={35} color="#2d2e32" />
          </motion.a>
          <div className="contact-text">
            <a
              href="mailto: rai_tayamul@hotmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <h6>Mail</h6>
              <p>rai_tayamul@hotmail.com</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
