import React from 'react'
import './contact.css'
import { SiLinkedin } from "react-icons/si";

const Contact = () => {
  return (
    <section id='contact'>
        <p>CONTACT</p>
        <h1>Drop me an email! Connect with me on LinkedIn!</h1>
        <div id='contact-container'>
            <div className='contact-content'>
              <SiLinkedin/>
              <div className='contact-text'>
                <a href='https://www.linkedin.com/in/tayamul-rai' target='_blank' rel="noreferrer">
                <p>LinkedIn</p>
                <p>linkedin.com/in/tayamul-rai</p>
                </a>
              </div>
            </div>
        </div>
    </section>
  )
}
{/* <a href="mailto: rai_tayamul@hotmail.com" target="_blank" rel="noreferrer">Send an email</a> */}

export default Contact