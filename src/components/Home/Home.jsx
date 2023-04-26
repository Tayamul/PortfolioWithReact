import React from "react";
import react from "../../assets/react-2.svg";
import firebase from "../../assets/firebase-1.svg";
import html from "../../assets/html-1.svg";
import css from "../../assets/css-3.svg";
import js from "../../assets/javascript-1.svg";
import node from "../../assets/nodejs-1.svg";
import mui from "../../assets/material-ui-1.svg";
import me from "../../assets/memoji.JPG";
import "./home.css";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { motion } from "framer-motion";

// background-color 8e8e8e
// h1 '#2d2e32'
// p "#767676"
const Home = () => {
  return (
    <main id="home">
      <div className="container">
        {/* <div className="content"> */}
        <div className="profile">
          {/* <div id="profile-pic"></div> */}
          <img id="profile-pic" src={me} alt="Memoji of Tayamul" />
          <div id="profile-summary">
            <h1>Hi 👋🏻 I'm Tayamul Rai </h1>
            {/* <p>
              As a Software Developer, my expertise lies in creating seamless and intuitive user experiences. I specialise in using cutting-edge technologies to produce high-quality web applications.
            </p> */}
            <p>
              A recent coding bootcamp graduate eager to jump-start my career in
              the tech industry.{" "}
            </p>
            {/* <br />{" "} */}
            <p>
              My love for technology drives me to stay current with emerging
              trends.{" "}
            </p>
            {/* <br /> */}
            <p>
              Currently, I am learning Next.js with the intention of expanding
              my technology stack.
            </p>
            {/* I'm ready to apply my newly acquired skills and collaborate with a team to develop cutting-edge software that will revolutionize the world. 
            My love for programming grew when I stumbled upon a Wed Dev course at UDEMY.
             I instantly fell in love with programming when my friend introduced me to it about a year ago.*/}
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
              <a
                href="https://drive.google.com/file/d/1MyGkLw1HnLdYmTqNUEt_NDwK-OLTHMDM/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <button className="cta-btn">View CV</button>
              </a>
              <a href="#contact">
                <button className="cta-btn2">Stay in touch</button>
              </a>
            </div>
          </div>
        </div>
        <div className="tech-stack">
          <p>Tech Stack </p>
          <div>
            <ul className="logo">
              <li>
                <img src={js} alt="javascript logo" className="logo-img" />
              </li>
              <li>
                <img src={html} alt="html logo" className="logo-img" />
              </li>
              <li>
                <img src={css} alt="css logo" className="logo-img" />
              </li>
              <li>
                <img src={react} alt="react logo" className="logo-img" />
              </li>
              <li>
                <img src={node} alt="node.js logo" className="logo-img" />
              </li>
              <li>
                <img src={firebase} alt="firebase logo" className="logo-img" />
              </li>
              <li>
                <img src={mui} alt="material ui logo" className="logo-img" />
              </li>
            </ul>
          </div>
        </div>
        {/* </div> */}
      </div>
    </main>
  );
};

export default Home;
