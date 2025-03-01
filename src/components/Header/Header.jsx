import React, { useState } from 'react';
import './Header.css'; // Import the CSS file for styling

function Header() {
  const [language, setLanguage] = useState('EN');

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'EN' ? 'PL' : 'EN'));
  };

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
        <p>Frontend Developer</p>
        <img src="/path/to/your/photo.jpg" alt="Your Name" className="profile-photo" />
      </div>
    </header>
  );
}

export default Header;
