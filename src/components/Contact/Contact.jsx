import React from 'react'
import './contact.css'
import { SiLinkedin } from "react-icons/si";
import {HiOutlineMail} from 'react-icons/hi';

const Contact = () => {
  return (
    <section id='contact'>
        <p>CONTACT</p>
        <h1>Drop me an email! Connect with me on LinkedIn!</h1>
        <div class='contact-container'>
            <div className='contact-content'>
              <SiLinkedin size={30}/>
              <div className='contact-text'>
                <a href='https://www.linkedin.com/in/tayamul-rai' target='_blank' rel="noreferrer">
                <h6>LinkedIn</h6>
                <p>linkedin.com/in/tayamul-rai</p>
                </a>
              </div>
            </div>
            <div className='contact-content'>
              <HiOutlineMail size={35}/>
              <div className='contact-text'>
              <a href="mailto: rai_tayamul@hotmail.com" target="_blank" rel="noreferrer">
                <h6>Mail</h6>
                <p>rai_tayamul@hotmail.com</p>
                </a>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Contact