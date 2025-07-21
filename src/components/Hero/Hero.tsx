import React from 'react';
import image from "../me.png";
import './Hero.css';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="text-gradient">Aniket Kulkarni</span>
            </h1>
            <h2 className="hero-subtitle">Software Development Engineer</h2>
            <p className="hero-description">
              Passionate about creating scalable solutions and building impactful technology. 
              Currently working at Amazon, specializing in full-stack development, system design, 
              and delivering exceptional user experiences.
            </p>
            <div className="hero-buttons">
              <button className="btn" onClick={scrollToContact}>
                Get In Touch
              </button>
              <button className="btn btn-outline" onClick={scrollToAbout}>
                Learn More
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <img 
                src={image}
                alt="Aniket Kulkarni" 
                className="profile-image"
              />
              <div className="image-backdrop"></div>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
