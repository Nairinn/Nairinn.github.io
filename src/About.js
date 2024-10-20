import React from "react";
import profilePicture from './images/IMG_4363.JPG';
import './About.css';

const About = () => {
  return (
    <section className="section-primary" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 text-center">
            <img className="profilepic" src={profilePicture} alt="Profile" />
            <h2>About Me</h2>
            <hr />
            <p className="lead">
              Born in <span>Yangon, Myanmar</span>, I embarked on a journey that took me to diverse corners of the world.
              Spending eight formative years in <span>Bangkok, Thailand</span> enriched my cultural understanding.
              Returning to Myanmar for another four years deepened my roots before my family and I obtained green cards,
              leading us to the <span>United States</span>. It was here that my passion for <span>Software Engineering</span> flourished,
              fueled by my experiences and perspectives from multiple countries. Leveraging my coding skills and multicultural insights,
              I've dedicated myself to crafting impactful software solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
