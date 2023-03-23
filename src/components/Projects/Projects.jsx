import React from "react";
import "./projects.css";
import { SiGithub } from "react-icons/si";
import { BsArrowUpRightCircle } from "react-icons/bs";

const Projects = () => {
  return (
    <section id="projects">
      <div id="projects-container">
        <p>PORTFOLIO</p>
        <h1>Each project has its own feature and functionality</h1>

        <div className="projects-section">
          <div className="projects-img"></div>
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
              <a
                href="https://github.com/Tayamul"
                target="_blank"
                rel="noreferrer"
              >
                Code
                <SiGithub style={{ marginLeft: "5px" }} />
              </a>
              <a
                href="https://tayanews.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
                <BsArrowUpRightCircle style={{ marginLeft: "5px" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
