import React from 'react';
import './Skills.css'; // Import the CSS file for styling
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaJira, FaBitbucket } from 'react-icons/fa';
import { SiTypescript, SiVite, SiPwa, SiRedux, SiAdobephotoshop, SiSpine, SiCanva } from 'react-icons/si';
import { BiLogoNetlify } from 'react-icons/bi';
import { DiScrum } from 'react-icons/di';

function Skills() {
  return (
    <section id="skills" className="align-left">
      <h2>Skills</h2>
      <div className="center-text">
        <p>The skills, tools, and technologies I use:</p>
        <div className="skills-icons">
          <div className="tooltip">
            <FaHtml5 size={75} style={{ margin: '10px', fill: 'url(#gradient)' }} />
            <span className="tooltiptext">HTML5</span>
          </div>
          <div className="tooltip">
            <FaCss3Alt size={75} style={{ margin: '10px', fill: 'url(#gradient)' }} />
            <span className="tooltiptext">CSS3</span>
          </div>
          <div className="tooltip">
            <FaJs size={75} style={{ margin: '10px', fill: 'url(#gradient)' }} />
            <span className="tooltiptext">JavaScript</span>
          </div>
          <div className="tooltip">
            <SiTypescript size={75} style={{ margin: '10px', fill: 'url(#gradient)' }} />
            <span className="tooltiptext">TypeScript</span>
          </div>
          <div className="tooltip">
            <FaReact size={75} style={{ margin: '10px', fill: 'url(#gradient)' }} />
            <span className="tooltiptext">React</span>
          </div>
          <div className="tooltip">
            <FaGitAlt size={75} style={{ margin: '10px', fill: 'url(#gradient)' }} />
            <span className="tooltiptext">Git</span>
          </div>
          <div className="tooltip">
            <SiVite size={75} style={{ margin: '10px', fill: 'url(#gradient)' }} />
            <span className="tooltiptext">Vite</span>
          </div>
          <div className="tooltip">
            <SiPwa size={75} style={{ margin: '10px', fill: 'url(#gradient)' }} />
            <span className="tooltiptext">PWA</span>
          </div>
          <div className="tooltip">
            <FaJira size={75} style={{ margin: '10px', fill: 'url(#gradient)' }} />
            <span className="tooltiptext">JIRA</span>
          </div>
          <div className="tooltip">
            <SiRedux size={75} style={{ margin: '10px', fill: 'url(#gradient)' }} />
            <span className="tooltiptext">Redux</span>
          </div>
          <div className="tooltip">
            <SiAdobephotoshop size={75} style={{ margin: '10px', fill: 'url(#gradient)' }} />
            <span className="tooltiptext">Adobe Photoshop</span>
          </div>
          <div className="tooltip">
            <SiSpine size={75} style={{ margin: '10px', fill: 'url(#gradient)' }} />
            <span className="tooltiptext">Spine</span>
          </div>
          <div className="tooltip">
            <BiLogoNetlify size={75} style={{ margin: '10px', fill: 'url(#gradient)' }} />
            <span className="tooltiptext">Netlify</span>
          </div>
          <div className="tooltip">
            <FaBitbucket size={75} style={{ margin: '10px', fill: 'url(#gradient)' }} />
            <span className="tooltiptext">Bitbucket</span>
          </div>
          <div className="tooltip">
            <DiScrum size={75} style={{ margin: '10px', fill: 'url(#gradient)' }} />
            <span className="tooltiptext">Scrum</span>
          </div>
          <div className="tooltip">
            <SiCanva size={75} style={{ margin: '10px', fill: 'url(#gradient)' }} />
            <span className="tooltiptext">Canva</span>
          </div>
        </div>
        <svg width="0" height="0">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#2285d7', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#f83097', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}

export default Skills;
