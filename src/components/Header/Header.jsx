import React, { useState, useEffect } from 'react';
import './Header.css'; 
import profilePhoto from '../../assets/cd9c1533-de8f-4297-9158-ab548c1c3e81.png'; 

function Header({ language, onLanguageChange, translations }) {
  const [jobDescription, setJobDescription] = useState('Frontend Developer');
  const [fade, setFade] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

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

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLanguageChange = (lang) => {
    onLanguageChange(lang);
    setMenuOpen(false);
    setDropdownOpen(false);
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
          <div className="language-dropdown">
            <button className="language-dropdown-button" onClick={toggleDropdown}>
              {language.toUpperCase()}
            </button>
            <div className={`language-dropdown-content ${dropdownOpen ? 'open' : ''}`}>
              <a href="#" onClick={() => handleLanguageChange('en')}>EN</a>
              <a href="#" onClick={() => handleLanguageChange('pl')}>PL</a>
              <a href="#" onClick={() => handleLanguageChange('de')}>DE</a>
            </div>
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
