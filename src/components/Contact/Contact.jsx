import React, { useState } from "react";
import "./contact.css";
import EmailIcon from "../../assets/EmailIcon.png";
import notify from "../../libs/toast";
import { Toaster } from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const accessKey = process.env.REACT_APP_ACCESS_KEY;

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", accessKey);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setName("");
      setEmail("");
      setMessage("");
      notify("success", "I received your email. Thanks!");
    } else {
      notify("error", "Invalid access key. Please refresh!");
    }
  };

  return (
    <section id="contact">
      <Toaster position="top-right" reverseOrder={false} />
      <p>CONTACT</p>
      <h1>Reaching out is as easy as filling out the form</h1>
      <div className="contact-container">
        <div className="contact-container-left">
          <form onSubmit={onSubmit} className="contact-form">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="form-input"
                autoComplete="off"
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="form-input"
                autoComplete="off"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <textarea
              name="message"
              placeholder="Write a message"
              id="form-message"
              autoComplete="off"
              required
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>
            <button type="submit" className="form-btn">
              Send Message
              <div className="form-btn__horizontal"></div>
              <div className="form-btn__vertical"></div>
            </button>
          </form>
        </div>
        <div className="contact-container-right">
          <img src={EmailIcon} alt="Email Icon" id="emailIcon" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
/*
return (
  <section id="contact">
    <p>CONTACT</p>
    <h1>Drop me an email! Connect with me on LinkedIn!</h1>
    <div class="contact-container">
      <div className="contact-content">
        <motion.a
          whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
          whileTap={{ scale: 0.9 }}
          href="https://linkedin.com/in/tayamul-rai"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit Tayamul's LinkedIn profile"
        >
          <SiLinkedin size={30} color="#2d2e32" className="contact-icons" />
        </motion.a>
        <div className="contact-text">
          <a
            href="https://www.linkedin.com/in/tayamul-rai"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Tayamul's LinkedIn profile"
          >
            <h2>LinkedIn</h2>
            <p>linkedin.com/in/tayamul-rai</p>
          </a>
        </div>
      </div>
      <div className="contact-content">
        <motion.a
          whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
          whileTap={{ scale: 0.9 }}
          href="mailto: rai_tayamul@hotmail.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Get in touch with Tayamul via email"
        >
          <HiOutlineMail size={35} color="#2d2e32" />
        </motion.a>
        <div className="contact-text">
          <a
            href="mailto: rai_tayamul@hotmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Get in touch with Tayamul via email"
          >
            <h2>Mail</h2>
            <p>rai_tayamul@hotmail.com</p>
          </a>
        </div>
      </div>
    </div>
  </section>
);
*/
