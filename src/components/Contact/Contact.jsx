import React, { useState } from 'react';
import './Contact.css'; // Import the CSS file for styling
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub, FaFlickr, FaCopy } from 'react-icons/fa'; // Import social media icons

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    let formErrors = {};

    if (!name) formErrors.name = 'Name is required';
    if (!email) {
      formErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      formErrors.email = 'Email is not valid';
    }
    if (!message) formErrors.message = 'Message is required';

    if (Object.keys(formErrors).length === 0) {
      // Send email
      const mailtoLink = `mailto:wojciech.t.jaskula@gmail.com?subject=Contact%20Form%20Submission&body=Name:%20${name}%0AEmail:%20${email}%0AMessage:%20${message}`;
      window.location.href = mailtoLink;
    } else {
      setErrors(formErrors);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('wojciech.t.jaskula@gmail.com');
    alert('Email copied to clipboard!');
  };

  return (
    <section id="contact">
      <h2 className="align-left">Contact</h2>
      <div className="container">
        <div className="left-section">
          <p>Feel free to reach out to me via email or through my social media profiles:</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.flickr.com" target="_blank" rel="noopener noreferrer"><FaFlickr /></a>
          </div>
          <p>If you prefer not to use the contact form, here is my email:</p>
          <p>wojciech.t.jaskula@gmail.com <button onClick={copyEmail}><FaCopy /></button></p>
        </div>
        <div className="right-section">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            {errors.name && <p className="error">{errors.name}</p>}

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            {errors.email && <p className="error">{errors.email}</p>}

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
            {errors.message && <p className="error">{errors.message}</p>}

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
