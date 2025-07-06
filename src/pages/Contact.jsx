import React, { useState, useRef } from "react";
import "../style/Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef(); // Add this for the form reference
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all fields.");
      return;
    }

    // EmailJS Integration
    emailjs
      .sendForm(
        "", // Replace with your EmailJS Service ID
        "", // Replace with your EmailJS Template ID
        formRef.current,
        "" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true);
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error.text);
          setError("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="contact-container section">
      <h2 className="contact-title">Contact Me</h2>
      {submitted ? (
        <p className="contact-success-message">
          Thank you for reaching out! I'll get back to you soon.
        </p>
      ) : (
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="contact-form"
          aria-label="Contact form"
        >
          {error && (
            <p className="contact-error-message" role="alert">
              {error}
            </p>
          )}

          <div className="form-group">
            <label htmlFor="name" className="visually-hidden">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="contact-input"
              aria-required="true"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="visually-hidden">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="contact-input"
              aria-required="true"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="visually-hidden">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="contact-textarea"
              aria-required="true"
            ></textarea>
          </div>
          <button type="submit" className="contact-button btn btn-primary">
            Send Message
          </button>
        </form>
      )}
      <div className="contact-info">
        <p>
          Email:{" "}
          <a href="mailto:your.email@example.com">
            tusharkalathiya07@gmail.com
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/tushar-kalathiya-6bb7b4257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            My profile
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
