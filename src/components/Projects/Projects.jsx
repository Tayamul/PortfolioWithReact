import React from "react";
import "./projects.css";
import { SiGithub } from "react-icons/si";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { motion } from "framer-motion";
import newsWeb from '../../assets/News-Web.png'
import newsWeb2 from '../../assets/News-Web2.png'
import todo from '../../assets/Todo-pic.png'
import todo2 from '../../assets/Todo-pic2.png'

const Projects = () => {
  return (
    <section id="projects">
      <div id="projects-container">
        <p>PORTFOLIO</p>
        <h1>Each project has its own feature and functionality</h1>

        {/* News Web */}
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
                href="https://github.com/Tayamul/News-Web"
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
        {/* Task Manager */}
        <div className="projects-section-alt">
          {/* <div className="projects-img"></div> */}
          
          <div className="projects-summary-alt">
            <h2>Task Management Web-app</h2>
            <p>
              A social discussion website enhancing user interaction with
              features including article rating, commenting, and article
              submission.{" "}
            </p>
            <div className="tech-skills-alt">
              <p>React</p>
              <p>MaterialUI</p>
              <p>Firebase</p>
            </div>
            <div className="live-code-alt">
              <motion.a
                href="https://github.com/Tayamul/to-do-web-app"
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
                href="https://to-do-app-382c5.web.app"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
                <BsArrowUpRightCircle style={{ marginLeft: "5px" }} />
              </motion.a>
            </div>
          </div>
          <img src={todo} alt='Task management web app screenshot' className="projects-img-alt" />
          <img src={todo2} alt='Task management web app screenshot' className="projects-img2-alt" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
