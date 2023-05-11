import React from "react";
import "./about.css";
import mac from "../../assets/mac.webp";

const About = () => {
  return (
    <section id="about">
      <div id="about-summary">
        <p id="about-title">ABOUT ME</p>
        <h1>Full Stack Developer based in London, UK 📍</h1>
        <p>
          I excel in designing and maintaining responsive websites that offer a
          smooth user experience.
        </p>
        <p>
          My expertise lies in crafting dynamic, engaging interfaces through
          writing clean and optimised code, and utilising cutting-edge
          development tools and techniques.{" "}
        </p>
        <p>
          I am also a team player who thrives in collaborating with
          cross-functional teams to produce outstanding web applications.
        </p>
      </div>
      <img src={mac} alt="macbook" id="about-img" />
    </section>
  );
};

export default About;
