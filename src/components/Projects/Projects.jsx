import React from 'react'
import './projects.css'

const Projects = () => {
  return (
    <section id='projects'>
        <p>PROJECTS</p>
        <h1>Each project has its own feature and functionality</h1>
        <div class='projects-container'>
            <div id='projects-img'></div>
            <div id='projects-summary'>
                <h2>NEWS WEB</h2>
                <p>A social discussion website enhancing user interaction with features including article rating, commenting, and article submission. </p>
                <span><h5>React</h5><h5>CSS</h5><h5>Material UI</h5></span>
                <span>Code Live Demo</span>
            </div>
        </div>
    </section>
  )
}

export default Projects