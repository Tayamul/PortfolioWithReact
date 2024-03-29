import React from "react";
import "./projects.css";
import { SiGithub } from "react-icons/si";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import newsWeb from "../../assets/News-Web.webp";
import newsWeb2 from "../../assets/News-Web2.webp";
import todo from "../../assets/Todo-pic.webp";
import todo2 from "../../assets/Todo-pic2.webp";
import GS from "../../assets/GS.webp";
import GS2 from "../../assets/GS2.webp";
import newsApi from "../../assets/News-API.webp";
import netflix1 from "../../assets/netflix1.webp";
import netflix2 from "../../assets/netflix2.webp";
import trello from "../../assets/trello.png";
import trelloMobile from "../../assets/trellom.png";

const Projects = () => {
  return (
    <section id="projects">
      <div id="projects-container">
        <p>PORTFOLIO</p>
        <h1>Each project has its own feature and functionality</h1>

        {/* Trello Clone */}
        <div className="projects-section">
          <a
            href="https://tayamul-trello-clone.vercel.app"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit the Trello clone website hosted on Vercel"
          >
            <img
              src={trello}
              alt="Trello clone screenshot"
              className="projects-img"
            />
          </a>
          <a
            href="https://tayamul-trello-clone.vercel.app"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit the Trello clone website hosted on Verce"
          >
            <img
              src={trelloMobile}
              alt="Trello clone screenshot"
              className="projects-img2"
            />
          </a>
          <div className="projects-summary">
            <h2>Trello Clone</h2>
            <p>
              Built a Trello clone utilising the 'react-beautiful-dnd' library,
              offering users a seamless experience through a simple interface.
            </p>
            <div className="tech-skills">
              <p>TypeScript</p>
              <p>Next.js</p>
              <p>TailwindCSS</p>
            </div>
            <div className="live-code">
              <motion.a
                href="https://github.com/Tayamul/Trello-Clone"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.9 }}
                aria-label="Get more insights on how the Trello clone was developed from the ground up"
              >
                Code
                <SiGithub style={{ marginLeft: "5px" }} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.9 }}
                href="https://tayamul-trello-clone.vercel.app"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit the Trello clone website hosted on Vercel"
              >
                Live Demo
                <BsBoxArrowUpRight style={{ marginLeft: "5px" }} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Netflix Clone */}
        <div className="projects-section-alt">
          {/* <div className="projects-img"></div> */}

          <div className="projects-summary-alt">
            <h2>Netflix Clone</h2>
            <p>
              Developed front-end replica of Netflix's user interface with user
              authentication functionality.{" "}
            </p>
            <div className="tech-skills-alt">
              <p>React</p>
              <p>Tailwind CSS</p>
              <p>Firebase</p>
            </div>
            <div className="live-code-alt">
              <motion.a
                href="https://github.com/Tayamul/Netflix-Clone"
                target="_blank"
                rel="noreferrer"
                aria-label="Read more on how the netflix clone is coded"
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.9 }}
              >
                Code
                <SiGithub style={{ marginLeft: "5px" }} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.9 }}
                href="https://netflix-clone-188fe.web.app"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Netflix Clone hosted on Firebase"
              >
                Live Demo
                <BsBoxArrowUpRight style={{ marginLeft: "5px" }} />
              </motion.a>
            </div>
          </div>
          <a
            href="https://netflix-clone-188fe.web.app"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Netflix Clone hosted on Firebase"
          >
            <img
              src={netflix1}
              alt="Netflix Clone screenshot"
              className="projects-img-alt"
            />
          </a>
          <a
            href="https://netflix-clone-188fe.web.app"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Netflix Clone hosted on Firebase"
          >
            <img
              src={netflix2}
              alt="Netflix Clone screenshot"
              className="projects-img2-alt"
            />
          </a>
        </div>

        {/* Golden Sip */}
        <div className="projects-section">
          {/* <div className="projects-img"></div> */}
          <a
            href="https://golden-sip-89b0c.web.app"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Golden Sip website hosted on Firebase"
          >
            <img
              src={GS}
              alt="News web app screenshot"
              className="projects-img"
            />
          </a>
          <a
            href="https://golden-sip-89b0c.web.app"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Golden Sip website hosted on Firebase"
          >
            <img
              src={GS2}
              alt="News web app screenshot"
              className="projects-img2"
            />
          </a>
          <div className="projects-summary">
            <h2>Golden Sip</h2>
            <p>
              Designed and developed modern and sleek restaurant website for my
              first client, with the aim of improving their online presence.{" "}
            </p>
            <div className="tech-skills">
              <p>React</p>
              <p>CSS</p>
            </div>
            <div className="live-code">
              <motion.a
                href="https://github.com/Coder-Dai/Golden-Sip"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.9 }}
                aria-label="Get more insights on how Golden Sip was created collaboratively"
              >
                Code
                <SiGithub style={{ marginLeft: "5px" }} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.9 }}
                href="https://golden-sip-89b0c.web.app"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Golden Sip website hosted on Firebase"
              >
                Live Demo
                <BsBoxArrowUpRight style={{ marginLeft: "5px" }} />
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
              A simple to-do app with additional features including user
              authentication and global database storage; implemented CRUD
              operations.{" "}
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
                aria-label="Read more on how the task manager is coded"
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
                aria-label="Visit Task Management Web Application hosted on Firebase"
              >
                Live Demo
                <BsBoxArrowUpRight style={{ marginLeft: "5px" }} />
              </motion.a>
            </div>
          </div>
          <a
            href="https://to-do-app-382c5.web.app"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Task Management Web Application hosted on Firebase"
          >
            <img
              src={todo}
              alt="Task management web app screenshot"
              className="projects-img-alt"
            />
          </a>
          <a
            href="https://to-do-app-382c5.web.app"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Task Management Web Application hosted on Firebase"
          >
            <img
              src={todo2}
              alt="Task management web app screenshot"
              className="projects-img2-alt"
            />
          </a>
        </div>

        {/* News Web */}
        <div className="projects-section">
          {/* <div className="projects-img"></div> */}
          <a
            href="https://tayanews.netlify.app"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit News web hosted on netlify"
          >
            <img
              src={newsWeb}
              alt="News web app screenshot"
              className="projects-img"
            />
          </a>
          <a
            href="https://tayanews.netlify.app"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit News web hosted on netlify"
          >
            <img
              src={newsWeb2}
              alt="News web app screenshot"
              className="projects-img2"
            />
          </a>
          <div className="projects-summary">
            <h2>Full Stack News Web</h2>
            <p>
              User interface that connects to the News API back-end project.
              Uses functional components and React hooks such as state, context
              and effect.{" "}
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
                aria-label="Read more on how the News web is coded"
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
                aria-label="Visit News web hosted on netlify"
              >
                Live Demo
                <BsBoxArrowUpRight style={{ marginLeft: "5px" }} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* News API */}
        <div className="projects-section-alt">
          {/* <div className="projects-img"></div> */}

          <div className="projects-summary-alt">
            <h2>News Web API</h2>
            <p>
              A RESTful API that provides 8 different endpoints to News Web
              database. Hosting tables such as users, articles, topics, and
              comments. It follows the MVC development framework.{" "}
            </p>
            <div className="tech-skills-alt">
              <p>Node.js</p>
              <p>Express</p>
              <p>SQL</p>
            </div>
            <div className="live-code-alt">
              <motion.a
                href="https://github.com/Tayamul/Tayamul-news-api"
                target="_blank"
                rel="noreferrer"
                aria-label="Read more on how the News API is coded"
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.9 }}
              >
                Code
                <SiGithub style={{ marginLeft: "5px" }} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.9 }}
                href="https://news-api-h06n.onrender.com/api"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit the news web backend hosted on Render"
              >
                Live Demo
                <BsBoxArrowUpRight style={{ marginLeft: "5px" }} />
              </motion.a>
            </div>
          </div>
          <a
            href="https://news-api-h06n.onrender.com/api"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit the news web backend hosted on Render"
          >
            <img
              src={newsApi}
              alt="Task management web app screenshot"
              className="projects-img-alt"
            />
          </a>
          <a
            href="https://news-api-h06n.onrender.com/api"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit the news web backend hosted on Render"
          >
            <img
              src={newsApi}
              alt="Task management web app screenshot"
              className="projects-img2-alt"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
