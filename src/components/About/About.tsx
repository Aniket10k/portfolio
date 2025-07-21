import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am Aniket Kulkarni, a passionate and results-driven Software Development Engineer with 
              extensive experience in designing and implementing robust, scalable, and efficient software solutions. 
              Currently based in Bengaluru, India, I thrive on solving complex challenges and delivering 
              impactful technology to enhance user experiences and operational excellence.
            </p>
            <p>
              At Amazon, I have played a pivotal role in developing end-to-end platforms, scalable alarm systems, 
              and advanced algorithms using OpenCV, significantly optimizing processes and driving data-driven insights. 
              My contributions include reducing onboarding efforts by 70% and achieving up to 90% improvement in 
              operational tasks. I also excel at creating POCs that empower customers to explore new use cases, 
              enhancing product latency and quality.
            </p>
            <p>
              Previously, at Tata Consultancy Services, I contributed to modernizing high-load transactional systems 
              by building RESTful APIs and React-based UIs, improving security, configurability, and performance 
              for critical services.
            </p>
            <p>
              With a strong foundation in Data Structures, System Design, and Full-Stack Development, I am proficient 
              in technologies such as Java, Python, React, Springboot, AWS, and OpenCV. My work consistently reflects 
              my dedication to crafting seamless, scalable solutions that align with business goals.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">2</div>
              <div className="stat-label">Companies</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">90%</div>
              <div className="stat-label">Efficiency Improvement</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
