import React, { useState, useEffect } from 'react';
import './Header.css'; 
import profilePhoto from '../../assets/cd9c1533-de8f-4297-9158-ab548c1c3e81.png'; 

function Header({ language, onLanguageChange, translations }) {
  const [jobDescription, setJobDescription] = useState('Frontend Developer');
  const [fade, setFade] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLanguageChange = (lang) => {
    onLanguageChange(lang);
    setMenuOpen(false);
  };

  return (
    <header className='header'>
      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <div className="name">
          <p>Wojciech Jaskuła</p>
        </div>
        <a href="#about" onClick={() => setMenuOpen(false)}>{translations.about}</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>{translations.skills}</a>
        <a href="#portfolio" onClick={() => setMenuOpen(false)}>{translations.portfolio}</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>{translations.contact}</a>
        <div className="language-switch-container">
          <div className="language-buttons">
            <button 
              className={`language-button pl ${language === 'pl' ? 'active' : 'inactive'}`} 
              onClick={() => handleLanguageChange('pl')}
            >
              PL
            </button>
            <button 
              className={`language-button de ${language === 'de' ? 'active' : 'inactive'}`} 
              onClick={() => handleLanguageChange('de')}
            >
              DE
            </button>
            <button 
              className={`language-button en ${language === 'en' ? 'active' : 'inactive'}`} 
              onClick={() => handleLanguageChange('en')}
            >
              EN
            </button>
          </div>
        </div>
      </nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      
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
