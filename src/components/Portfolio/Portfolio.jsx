import React from 'react';
import './Portfolio.css'; // Import the CSS file for styling
import portfolioImage from '../../assets/5b8bc420-106e-4bd3-a841-af781953b0ae.png'; // Import the image

function Portfolio({ translations }) {
  return (
    <section id="portfolio">
      <h2 className="align-left">{translations.portfolioHeader}</h2>
      <div className="portfolio-content">
        <div className="left-content">
          <img src={portfolioImage} alt="Portfolio" className="portfolio-image" />
        </div>
        <div className="right-content">
          <p>{translations.portfolio1}</p>
          <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">Netlify Link 1</a>
          <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">Netlify Link 2</a>
          <p>{translations.portfolio2}</p>
          <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">Netlify Link 3</a>
          <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">Netlify Link 4</a>
          <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">Netlify Link 5</a>
          <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">Netlify Link 6</a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
