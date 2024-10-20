import React from "react";
import './Timeline.css'; 

const Timeline = () => {
  return (
    <section className="section-primary" id="timelinesection">
      <div className="container">
        <div className="row">
          <div className="col-md-12 section-heading">
            <h2>Experience</h2>
            <hr className="white" />
          </div>
        </div>
        <div className="row flashcard-grid">
          {[
            {
                title: "Kaylie.AI",
                details: "Developed and maintained a web application for Kaylie.AI, a specialized study tool designed for medical students. Implemented a backend system using MySQL and Python to manage user data and enhance functionality, while also creating an intuitive and responsive user interface using HTML, Tailwind, React, and React Native. Collaborated with stakeholders to ensure the application met the unique needs of medical students.",
                image: "https://i.pinimg.com/originals/4c/6b/f1/4c6bf114c204c417dfc0edcca8f67426.gif",
            },
            {
                title: "Incredible Escape Rooms",
                details: "Developed and managed secure servers for critical data, including security footage and customer contracts. Improved data protection through encryption, firewall setup, and Cloudflare integration. Streamlined document storage, optimizing performance and minimizing downtime.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1FABB9L8ZJ9I4gvGcfGr4BsgOn_r-GBLiVg&s",
            },
            {
                title: "NurseAssist (SunHacks)",
                details: "Developed a tool to measure blood pressure, temperature, blood oxygen levels, and blood sugar using Raspberry Pi 4, MX30102 and DS18B20 sensors. Utilized Python for backend processing, storing data in a MySQL database accessible to healthcare professionals. Built a responsive website using HTML, CSS, JavaScript, and React, aimed at reducing nurses' workload.",
                image: "https://i.pinimg.com/originals/f9/57/6f/f9576fca9fc8ef79976a1d6327bbe9ae.gif",
                url: "https://github.com/Nairinn/Nurse-Assist"
            },
            {
                title: "WebSync",
                details: "Crafted a Video Conferencing Website harmonizing JavaScript, HTML, CSS, Node.js, Python, and Java for large corporate meetings and coding collaborations. Integrated video conferencing with advanced IDEs and document editors.",
                image: "https://i.pinimg.com/originals/13/36/30/13363078117bc4f5bb65437f8bbcb47f.gif",
                url: "https://github.com/Nairinn/WebSync"
            },
            {
                title: "MedPredict",
                details: "Developing a platform that leverages Java, HTML, CSS, JavaScript, Node.js, and React.js to reduce diagnosis time by 30% while achieving a projected accuracy rate of 98%. Implemented GPT-3 and advanced prompt engineering techniques to optimize the diagnostic process.",
                image: "https://i.pinimg.com/originals/65/87/c0/6587c02f1ff0b4b8686ffc179fcacc1c.gif",
                url: "https://github.com/Nairinn/MedPredict" 
            },
            {
                title: "The Garden",
                details: "Built a website using HTML, JavaScript, and CSS to enhance memory and motor skills for dementia patients through three targeted games.",
                image: "https://i.pinimg.com/originals/4d/04/32/4d0432bb05c8def9fa01017aa50bfbcd.gif",
                url: "https://github.com/ForgotSemiColon/Master-Project"
            },
          ].map((item, index) => (
            <div className="flashcard" key={index}>
              <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="flashcard-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="flashcard-content">
                  <h3>{item.title}</h3>
                  <p>
                    {item.details 
                      ? item.details.split('\n').map((line, i) => <span key={i}>{line}<br /></span>) 
                      : "Details not available."} {}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
        <p className="lead" style={{ textAlign: 'center' }}>
            <a 
                href="/items/Resume.pdf" 
                download="NaingLynnKyawResume.pdf" 
                className="resume-download"
            >
                Resume
            </a>
        </p>
      </div>
    </section>
  );
};

export default Timeline;
