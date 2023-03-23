import React from "react";
import "./projects.css";
import { SiGithub } from "react-icons/si";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { motion } from "framer-motion";
import newsWeb from '../../assets/News-Web.png'
import newsWeb2 from '../../assets/News-Web2.png'

const Projects = () => {
  return (
    <section id="projects">
      <div id="projects-container">
        <p>PORTFOLIO</p>
        <h1>Each project has its own feature and functionality</h1>

        <div className="projects-section">
          {/* <div className="projects-img"></div> */}
          <img src={newsWeb} alt='News web app screenshot' className="projects-img" />
          <img src={newsWeb2} alt='News web app screenshot' className="projects-img2" />
          <div className="projects-summary">
            <h2>NEWS WEB</h2>
            <p>
              A social discussion website enhancing user interaction with
              features including article rating, commenting, and article
              submission.{" "}
            </p>
            <div className="tech-skills">
              <p>React</p>
              <p>CSS</p>
              <p>MaterialUI</p>
            </div>
            <div className="live-code">
              <motion.a
                href="https://github.com/Tayamul"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.9 }}
              >
                Code
                <SiGithub style={{ marginLeft: "5px" }} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.9 }}
                href="https://tayanews.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
                <BsArrowUpRightCircle style={{ marginLeft: "5px" }} />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
