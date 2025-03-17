import React from 'react';
import './Portfolio.css'; 
import portfolioImage from '../../assets/5b8bc420-106e-4bd3-a841-af781953b0ae.png'; 

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
          <div className="portfolio-buttons center-buttons">
            <a href="https://github.com/88JW" target="_blank" rel="noopener noreferrer" className="portfolio-link subtle-button">GitHub</a>
            <a href="https://app.netlify.com/teams/88jw/sites" target="_blank" rel="noopener noreferrer" className="portfolio-link subtle-button">Netlify</a>
          </div>
          <p>{translations.portfolio2}</p>
          <div className="portfolio-links">
            <div className="portfolio-card">
              <a href="https://adorable-eclair-d97c38.netlify.app/" target="_blank" rel="noopener noreferrer">
                <img src="https://d33wubrfki0l68.cloudfront.net/67bb78bface086000871818f/screenshot_2025-02-23-19-37-57-0000.webp" alt="Bear Taste PWA" className="portfolio-card-image" />
                <p>Bear Taste PWA</p>
              </a>
            </div>
            <div className="portfolio-card">
              <a href="https://whendzem-pwa-aplication.netlify.app/" target="_blank" rel="noopener noreferrer">
                <img src="https://d33wubrfki0l68.cloudfront.net/62cbfeb2a341ee09bf0a8bcd/screenshot_2022-07-11-10-43-05-0000.png" alt="When Dżem" className="portfolio-card-image" />
                <p>When Dżem</p>
              </a>
            </div>
            <div className="portfolio-card">
              <a href="https://ornate-fairy-35f9bf.netlify.app/" target="_blank" rel="noopener noreferrer">
                <img src="https://d33wubrfki0l68.cloudfront.net/67c04194f6f21c0008f0e074/screenshot_2025-02-27-10-43-03-0000.webp" alt="Game 3-4-5" className="portfolio-card-image" />
                <p>Game 3-4-5</p>
              </a>
            </div>
            <div className="portfolio-card">
              <a href="https://board-games-calculator.netlify.app/" target="_blank" rel="noopener noreferrer">
                <img src="https://d33wubrfki0l68.cloudfront.net/664734f5158f600008f8101e/screenshot_2024-05-17-10-45-10-0000.webp" alt="Board Game Calculator" className="portfolio-card-image" />
                <p>Board Game Calculator</p>
              </a>
            </div>
           
            <div className="portfolio-card">
              <a href="https://puzle-v2.netlify.app/" target="_blank" rel="noopener noreferrer">
                <img src="https://d33wubrfki0l68.cloudfront.net/67d7b588e9854d80438f6229/screenshot_2025-03-17-05-39-54-0000.webp" alt="Puzle V2" className="portfolio-card-image" />
                <p>Puzle V2</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
