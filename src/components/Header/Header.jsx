import React, { useState, useEffect } from 'react';
import './Header.css'; 
import profilePhoto from '../../assets/cd9c1533-de8f-4297-9158-ab548c1c3e81.png'; 

function Header({ language, onLanguageChange, translations }) {
  const [jobDescription, setJobDescription] = useState('Frontend Developer');
  const [fade, setFade] = useState(false);

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
    <header className='header'>
      <nav className="nav-links">
        <div className="name">
          <p>Wojciech Jaskuła</p>
        </div>
        <a href="#about">{translations.about}</a>
        <a href="#skills">{translations.skills}</a>
        <a href="#portfolio">{translations.portfolio}</a>
        <a href="#contact">{translations.contact}</a>
        <div className="language-switch-container">
          <div className="language-dropdown">
            <button className="language-dropdown-button">
              {language.toUpperCase()}
            </button>
            <div className="language-dropdown-content">
              <a href="#" onClick={() => onLanguageChange('en')}>EN</a>
              <a href="#" onClick={() => onLanguageChange('pl')}>PL</a>
              <a href="#" onClick={() => onLanguageChange('de')}>DE</a>
            </div>
          </div>
        </div>
      </nav>
      <div className="job-description">
        <div className="left-section">
          <h1 className={`job-title ${fade ? 'fade-out' : 'fade-in'}`}>
            {jobDescription.split(' ').map((word, index) => (
              <span key={index}>{word}<br /></span>
            ))}
          </h1>
          <p className="description">{translations.description}</p>
          <p className="description">{translations.description2}</p>
        </div>
        <div className="right-section">
          <img src={profilePhoto} alt="Your Name" className="profile-photo" />
        </div>
      </div>
    </header>
  );
}

export default Header;
