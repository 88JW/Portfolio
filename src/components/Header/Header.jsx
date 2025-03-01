import React, { useState, useEffect } from 'react';
import './Header.css'; 
import profilePhoto from '../../assets/cd9c1533-de8f-4297-9158-ab548c1c3e81.png'; 

function Header() {
  const [language, setLanguage] = useState('EN');
  const [jobDescription, setJobDescription] = useState('Frontend Developer');
  const [fade, setFade] = useState(false);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'EN' ? 'PL' : 'EN'));
  };

  const toggleJobDescription = () => {
    setFade(true);
    setTimeout(() => {
      setJobDescription((prevDescription) =>
        prevDescription === 'Frontend Developer' ? 'Game Designer' : 'Frontend Developer'
      );
      setFade(false);
    }, 500); // Match the CSS transition duration
  };

  useEffect(() => {
    const interval = setInterval(toggleJobDescription, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <header>
      <nav className="nav-links">
        <div className="name">
          <p>Wojciech Jaskuła</p>
        </div>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
        <button className="language-switch" onClick={toggleLanguage}>
          {language}
        </button>
      </nav>
      <div className="job-description">
        <div className="left-section">
          <h1 className={`job-title ${fade ? 'fade-out' : 'fade-in'}`}>
            {jobDescription.split(' ').map((word, index) => (
              <span key={index}>{word}<br /></span>
            ))}
          </h1>
          <p className="description">Jestem Wojtek - Front-end developer / game designer, ciesze się że trafileś na moją stronę.</p>
        </div>
        <div className="right-section">
          <img src={profilePhoto} alt="Your Name" className="profile-photo" />
        </div>
      </div>
    </header>
    
  );
}

export default Header;
