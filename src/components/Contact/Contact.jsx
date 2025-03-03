import React, { useState } from 'react';
import './Contact.css'; // Import the CSS file for styling
import { FaLinkedin, FaFacebook, FaInstagram, FaFlickr, FaCopy } from 'react-icons/fa'; // Import social media icons

function Contact({ translations }) {
 
  return (
    <section id="contact">
      <h2 className="align-left">{translations.contactHeader}</h2>
      <div className="container">
        <div className="left-section">
          <p>{translations.contact1}</p>
          <div className="social-icons" style={{ fill: 'url(#gradient)', fontSize: '2rem' }}>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ fill: 'url(#gradient)', marginRight: '10px' }} className="social-icon"><FaLinkedin /></a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ fill: 'url(#gradient)', marginRight: '10px' }} className="social-icon"><FaFacebook /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ fill: 'url(#gradient)', marginRight: '10px' }} className="social-icon"><FaInstagram /></a>
            <a href="https://www.flickr.com" target="_blank" rel="noopener noreferrer" style={{ fill: 'url(#gradient)', marginRight: '10px' }} className="social-icon"><FaFlickr /></a>
          </div>
          {/* <p>{translations.contact2}</p> */}
          <p>wojciech.t.jaskula@gmail.com 
            <button style={{marginLeft:"10px"}}><FaCopy /></button></p>
          <p>{translations.contact3}</p>
        </div>

        <div className="right-section">
        
        </div>
      </div>
    </section>
  );
}

export default Contact;
