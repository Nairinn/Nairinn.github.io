import React from "react";
import backgroundImage from './images/Bc1.gif';
import './Start.css';

const Start = () => {
  return (
    <section
      className="section-image"
      id="intro"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}
    >
      <div className="img-overlay"></div>
      <div className="intro">
        <div className="row">
          <div className="col-md-12">
            <h5>Hi there, I'm</h5>
            <h1>Naing Lynn Kyaw</h1>
            <p className="intro-desc">
              <span>ASU</span>
              <span className="colour-splash">•</span>
              <span>Sophomore</span>
              <span className="colour-splash">•</span>
              <span>Full-Stack</span>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="social">
              <a href="mailto:naingrais@gmail.com" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-envelope fa-3x"></i>
              </a>
              <a href="https://www.linkedin.com/in/naing-lynn-kyaw-407124213/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin-in fa-3x"></i>
              </a>
              <a href="https://github.com/Nairinn" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github fa-3x"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="bottom">
          <a href="#about">
            <div className="mouse-icon">
              <div className="scroll"></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Start;
