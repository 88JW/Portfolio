import React, { useState } from 'react';
import './Contact.css'; // Import the CSS file for styling
import { FaLinkedin, FaFacebook, FaInstagram, FaFlickr, FaCopy } from 'react-icons/fa'; // Import social media icons

function Contact({ translations }) {
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

    if (!name) formErrors.name = translations.nameRequired;
    if (!email) {
      formErrors.email = translations.emailRequired;
    } else if (!validateEmail(email)) {
      formErrors.email = translations.emailInvalid;
    }
    if (!message) formErrors.message = translations.messageRequired;

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
    alert(translations.emailCopied);
  };

  return (
    <section id="contact">
      <h2 className="align-left">{translations.contactHeader}</h2>
      <div className="container">
        <div className="left-section">
          <p>{translations.contact1}</p>
          <div className="social-icons" style={{ color: 'white', fontSize: '2rem' }}>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', marginRight: '10px' }} className="social-icon"><FaLinkedin /></a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', marginRight: '10px' }} className="social-icon"><FaFacebook /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', marginRight: '10px' }} className="social-icon"><FaInstagram /></a>
            <a href="https://www.flickr.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', marginRight: '10px' }} className="social-icon"><FaFlickr /></a>
          </div>
          <p>{translations.contact2}</p>
          <p>wojciech.t.jaskula@gmail.com <button onClick={copyEmail}><FaCopy /></button></p>
          <p>{translations.contact3}</p>
        </div>

        <div className="right-section">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">{translations.emailName}:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            {errors.name && <p className="error">{errors.name}</p>}

            <label htmlFor="email">{translations.email}:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            {errors.email && <p className="error">{errors.email}</p>}

            <label htmlFor="message">{translations.message}:</label>
            <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
            {errors.message && <p className="error">{errors.message}</p>}

            <button type="submit">{translations.send}</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
