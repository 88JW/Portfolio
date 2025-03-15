import React, { useState, useEffect } from 'react';
import './JobDescription.css';
import profilePhoto from '../../assets/cd9c1533-de8f-4297-9158-ab548c1c3e81.png';

function JobDescription({ translations }) {
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
  );
}

export default JobDescription;
