import React, { useState, useEffect } from 'react';
import './Header.css';
import profilePhoto from '../../assets/cd9c1533-de8f-4297-9158-ab548c1c3e81.png';
import JobDescription from '../JobDescription/JobDescription';

function Header({ language, onLanguageChange, translations }) {
  const [menuOpen, setMenuOpen] = useState(false);

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
      
      <JobDescription translations={translations} />
    </header>
  );
}

export default Header;
