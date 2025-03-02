import React from 'react';
import './About.css'; // Import the CSS file for styling

function About({ translations }) {
  return (
    <section id="about">
      <h2 className="align-left">{translations.aboutMeHeader}</h2>
      <div className="about-content">
        <div className="full-content">
          <div className="cards">
            <div className="card card-left">
              <h4>{translations.aboutMe1head}</h4>
              <p>{translations.aboutMe1}</p>
            </div>
            <div className="card card-right">
              <h4>{translations.aboutMe2head}</h4>
              <p>{translations.aboutMe2}</p>
            </div>
            <div className="card card-left">
              <h4>{translations.aboutMe3head}</h4>
              <p>{translations.aboutMe3}</p>
            </div>
            {/* ...add more cards as needed... */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
