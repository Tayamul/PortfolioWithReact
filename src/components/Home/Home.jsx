import React from "react";
import react from "../../assets/react-2.svg";
import firebase from "../../assets/firebase-1.svg";
import html from "../../assets/html-1.svg";
import css from "../../assets/css-3.svg";
import js from "../../assets/javascript-1.svg";
import node from "../../assets/nodejs-1.svg";
import "./home.css";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
// background-color 8e8e8e
// h1 '#2d2e32'
// p "#767676"
const Home = () => {
  return (
    <main id="home">
      <div className="containers">
        <div className="content">
          <div className="profile">
            <div id="profile-pic"></div>
            <div id="profile-summary">
              <h1>Front-End React Developer</h1>
              <p>
                Hi, I'm Tayamul Rai. A passionate Front-End React Developer based
                in London, UK 📍
              </p>
              <div id='socials'>
                <SiLinkedin size="25" />
                <SiGithub size="25" />
              </div>
            </div>
          </div>
          <div className="tech-stack">
            <p>Tech Stack | </p>
            <div className="logo">
              <ul>
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
                  <img
                    src={firebase}
                    alt="firebase logo"
                    className="logo-img"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
