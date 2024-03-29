import React from "react";
import "./about.css";
import mac from "../../assets/mac.webp";

const About = () => {
  return (
    <section id="about">
      <div id="about-summary">
        <p id="about-title">ABOUT ME</p>
        <h1>Front-end focused Full Stack Developer</h1>
        <p>
          An individual with a passion for leveraging software solutions to
          create positive impact in people's lives.
        </p>
        <p>
          In 2022, I transitioned from retail customer service to tech by
          undertaking a coding bootcamp.
        </p>
        <p>
          Currently, I am a Software Engineer Intern focused on creating a SaaS
          platform by engaging and collaborating with a cross-functional team.
        </p>
        <p>
          In my free time, I research the latest front-end technologies to
          improve my knowledge in building intuitive user interfaces that
          enhance user experience.
        </p>
        <p>
          I aspire to be a highly skilled software engineer through continuous
          learning and growth.
        </p>
      </div>
      <img src={mac} alt="macbook" id="about-img" />
    </section>
  );
};

export default About;
