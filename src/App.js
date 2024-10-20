import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Intro from './Start';
import About from './About';
import Timeline from './Timeline';
import Footer from "./Footer";
import './App.css';

function App() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
            entry.target.classList.remove('fade-out');
          } else {
            entry.target.classList.add('fade-out');
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentSections = sectionsRef.current;

    currentSections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      currentSections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="app-container">
      <section
        id="intro"
        data-aos="fade-up"
        ref={(el) => (sectionsRef.current[0] = el)}
      >
        <Intro />
      </section>

      <section
        id="about"
        data-aos="fade-up"
        ref={(el) => (sectionsRef.current[1] = el)}
      >
        <About />
      </section>
      
      <section
        id="timeline"
        data-aos="fade-up"
        ref={(el) => (sectionsRef.current[3] = el)}
      >
        <Timeline />
      </section>

      <Footer />
    </div>
  );
}

export default App;
