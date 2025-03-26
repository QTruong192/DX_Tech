import React, { useState } from "react";
import "./contact.scss";

const Contact = () => {
  const [formType, setFormType] = useState("say-hi");

  return (
    <section className="box-container">
      <div className="title">
        <h2>Contact Us</h2>
        <p>
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </div>
      <div className="contact-form-wrapper">
        <div className="form-type-selector">
          <label className={`radio-label ${formType === "say-hi" ? "active" : ""}`}>
            <input
              type="radio"
              name="formType"
              value="say-hi"
              checked={formType === "say-hi"}
              onChange={(e) => setFormType(e.target.value)}
            />
            <span className="radio-button"></span>
            Say Hi
          </label>
          <label className={`radio-label ${formType === "get-quote" ? "active" : ""}`}>
            <input
              type="radio"
              name="formType"
              value="get-quote"
              checked={formType === "get-quote"}
              onChange={(e) => setFormType(e.target.value)}
            />
            <span className="radio-button"></span>
            Get a Quote
          </label>
        </div>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message*</label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
