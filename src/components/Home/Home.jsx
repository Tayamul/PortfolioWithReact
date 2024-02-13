import React from "react";
import me from "../../assets/profile-pic.webp";
import "./home.css";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <main id="home">
      <div className="container">
        <div className="profile">
          <img id="profile-pic" src={me} alt="Personal photo of Tayamul" />
          <div id="profile-summary">
            <h1>Full Stack Engineer 👋🏻</h1>
            <p>
              Hi, I'm Tayamul Rai. A Software Engineering Intern with 6+ months
              experience at a SaaS startup, proficient in TypeScript and
              Next.js.{" "}
            </p>
            <div id="socials">
              <motion.a
                href="https://linkedin.com/in/tayamul-rai"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Tayamul's LinkedIn profile"
                whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.9 }}
              >
                <SiLinkedin size="30" color="#2d2e32" />
              </motion.a>
              <motion.a
                href="https://github.com/Tayamul"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Tayamul's Github profile"
                whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.9 }}
              >
                <SiGithub size="30" color="#2d2e32" />
              </motion.a>
            </div>
            <div className="cta">
              <a href="#contact">
                <button className="cta-btn">
                  Let's connect!
                  <div className="cta-btn__horizontal"></div>
                  <div className="cta-btn__vertical"></div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
