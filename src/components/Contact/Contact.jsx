import React, { useState } from 'react';
import './Contact.css'; 
import { FaLinkedin, FaFacebook, FaInstagram, FaFlickr, FaCopy } from 'react-icons/fa'; 

function Contact({ translations }) {
 
  return (
    <section id="contact">
      <h2 className="align-left">{translations.contactHeader}</h2>
      <div className="container">
        <div className="left-section">
          <p>{translations.contact1}</p>
          <div className="social-icons" style={{ fill: 'url(#gradient)', fontSize: '2rem' }}>
            <a href="https://www.linkedin.com/in/wojciech-jaskula/" target="_blank" rel="noopener noreferrer" style={{ fill: 'url(#gradient)', marginRight: '10px' }} className="social-icon"><FaLinkedin /></a>
            <a href="https://www.facebook.com/profile.php?id=1436198145" target="_blank" rel="noopener noreferrer" style={{ fill: 'url(#gradient)', marginRight: '10px' }} className="social-icon"><FaFacebook /></a>
            <a href="https://www.instagram.com/astro.oc/" target="_blank" rel="noopener noreferrer" style={{ fill: 'url(#gradient)', marginRight: '10px' }} className="social-icon"><FaInstagram /></a>
            <a href="https://www.flickr.com/photos/127353492@N06/" target="_blank" rel="noopener noreferrer" style={{ fill: 'url(#gradient)', marginRight: '10px' }} className="social-icon"><FaFlickr /></a>
          </div>
    
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
