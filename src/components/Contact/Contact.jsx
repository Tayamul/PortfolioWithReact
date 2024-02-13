import React, { useState } from "react";
import "./contact.css";
import EmailIcon from "../../assets/EmailIcon.png";
import notify from "../../libs/toast";
import { Toaster } from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c8e68015-f460-458b-95c7-0eec70e193a7");

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
      notify("error", "Invalid access key. Please try again later!");
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
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="form-input"
              autoComplete="off"
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="form-input"
              autoComplete="off"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <label>Message</label>
            <textarea
              name="message"
              placeholder="Enter your message"
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
