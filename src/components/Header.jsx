import React from 'react';

function Header() {
  return (
    <header>
      <nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="job-description">
        <p>Frontend Developer</p>
        <img src="/path/to/your/photo.jpg" alt="Your Name" className="profile-photo" />
      </div>
    </header>
  );
}

export default Header;
