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
              I am Aniket Kulkarni, a passionate and results-driven Software Development Engineer II at Amazon, with strong experience in designing and building large-scale, distributed, and AI-driven systems. Based in Bengaluru, India, I thrive on solving complex engineering challenges and delivering impactful solutions that drive both user experience and operational excellence.
            </p>
            <p>
              At Amazon, I own and lead the architecture of a transactional instrumentation platform processing 600M+ events per day, enabling real-time analytics and performance optimization across critical payment systems. I am actively driving multi-region expansion, building region-agnostic, highly available data pipelines to support global use cases.
            </p>
            <p>
              I have also spearheaded the development of an Autonomous War Room platform powered by Agentic AI, enabling intelligent incident orchestration, proactive downtime mitigation, and faster resolution of high-impact operational events. Additionally, I have designed and productionized LLM-driven automation workflows, reducing manual effort by over 60% while improving decision accuracy and turnaround time.
            </p>
            <p>
              My contributions include building scalable end-to-end platforms that reduced onboarding effort by 70%, engineering robust alarms and notification systems, and leveraging OpenCV-based algorithms to extract actionable insights from large-scale data. I have consistently driven operational excellence through automation, reliability improvements, and cross-team collaboration, while also mentoring engineers and leading critical initiatives.
            </p>
            <p>
                Previously, at Tata Consultancy Services, I contributed to modernizing high-load transactional systems by developing RESTful APIs and React-based applications, improving system reliability, security, and performance.
            </p>
            <p>
                With a strong foundation in Data Structures, System Design, and Full-Stack Development, I am proficient in Java, Python, React, Spring Boot, AWS, and OpenCV. I am particularly interested in building scalable backend systems and applying AI to solve real-world problems, with a focus on high-impact, production-grade solutions.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">6+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">20+</div>
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
