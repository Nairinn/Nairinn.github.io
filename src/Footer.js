import React from "react";
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <p></p>
            <p></p>
            <span className="logo">NLKV</span>
          </div>

          <div className="col-md-4 text-center">
            <p>Contact Info</p>
            <p><i className="fa-solid fa-envelope"></i>: Naingrais@gmail.com</p>
            <p><i className="fa-solid fa-phone"></i>: 602-738-2906</p>
          </div>

          <div className="col-md-4 text-center">
            <div className="social-footer">
              <a href="https://www.linkedin.com/in/naing-lynn-kyaw-407124213/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin-in fa-2x"></i>
              </a>
              <a href="https://www.instagram.com/_nairinn_/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram fa-2x"></i>
              </a>
              <a href="mailto:naingrais@gmail.com" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-envelope fa-2x"></i>
              </a>
              <a href="https://github.com/Nairinn" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
