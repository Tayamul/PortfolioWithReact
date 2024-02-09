import React from "react";
import firebase from "../../assets/firebase-1.svg";
import html from "../../assets/html-1.svg";
import css from "../../assets/css-3.svg";
import js from "../../assets/javascript-1.svg";
import node from "../../assets/nodejs-1.svg";
import mui from "../../assets/material-ui-1.svg";
import react from "../../assets/react-2.svg";
import nextjs from "../../assets/nextjs.svg";
import tailwind from "../../assets/tailwind.svg";
import typescript from "../../assets/typescript.svg";
import figma from "../../assets/figma.svg";
import psql from "../../assets/psql.svg";

import "./techStack.css";

export const Stack = () => {
  return (
    <div className="logos">
      <div className="logos-slide">
        <img src={js} alt="javascript logo" className="logo-img" />
        <img src={html} alt="html logo" className="logo-img" />
        <img src={css} alt="css logo" className="logo-img" />
        <img src={react} alt="react logo" className="logo-img" />
        <img src={typescript} alt="typescript logo" id="typescript" />
        <img src={nextjs} alt="next.js logo" id="nextjs" />
        <img src={tailwind} alt="tailwind logo" id="tailwind" />
        <img src={node} alt="node.js logo" className="logo-img" />
        <img src={psql} alt="psql logo" id="psql" />
        <img src={firebase} alt="firebase logo" className="logo-img" />
        <img src={mui} alt="material ui logo" className="logo-img" />
        <img src={figma} alt="figma logo" id="figma" />
      </div>
      <div className="logos-slide">
        <img src={js} alt="javascript logo" className="logo-img" />
        <img src={html} alt="html logo" className="logo-img" />
        <img src={css} alt="css logo" className="logo-img" />
        <img src={react} alt="react logo" className="logo-img" />
        <img src={typescript} alt="typescript logo" id="typescript" />
        <img src={nextjs} alt="next.js logo" id="nextjs" />
        <img src={tailwind} alt="tailwind logo" id="tailwind" />
        <img src={node} alt="node.js logo" className="logo-img" />
        <img src={psql} alt="psql logo" id="psql" />
        <img src={firebase} alt="firebase logo" className="logo-img" />
        <img src={mui} alt="material ui logo" className="logo-img" />
        <img src={figma} alt="figma logo" id="figma" />
      </div>
    </div>
  );
};
