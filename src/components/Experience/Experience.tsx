import React from 'react';
import './Experience.css';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "Amazon",
      period: "Aug 2021 - Present",
      positions: [
        {
          title: "Software Development Engineer II",
          period: "Current",
          achievements: [
            "Designed and developed a comprehensive end-to-end platform to streamline request ingestion enabling efficient benchmarking of large volumes of requests. Reduced onboarding effort for a new use case by 70%.",
            "Engineered scalable Alarms and Notification system, enhancing platform robustness and ensuring seamless System Operations.",
            "Worked on OpenCV-based algorithms to extract meaningful insights from large volumes of video and image artifacts, driving data-driven decision-making.",
            "Developed multiple POCs, including hardware setups and algorithms, to enable customer onboarding for new use cases and provide actionable insights for optimizing product latency and quality.",
            "Involved in research, migration, deep dive, maintenance & support for various activities to improve customer experience."
          ]
        },
        {
          title: "Software Development Engineer I",
          period: "Aug 2021 - Promotion",
          achievements: [
            "Developed the user interface for a validation tool that served 150+ internal and external consumers.",
            "Implemented a notification feature which completely removed manual intervention required by the product team across 10+ org teams.",
            "Created automated dashboards that reduced monitoring setup efforts by 90% improving Operational Excellence.",
            "Designed a Highly scalable backend to control device state which reduced 50% to 90% time cost in eminent failures.",
            "Designed and Implemented a credential store for secure storage of susceptible data."
          ]
        }
      ]
    },
    {
      company: "Tata Consultancy Services",
      period: "July 2019 - Aug 2021",
      positions: [
        {
          title: "Systems Engineer",
          period: "July 2019 - Aug 2021",
          achievements: [
            "Worked as a part of System Modernization Team, design and built RESTful service APIs for a high load transactional system based on Microservices Architecture.",
            "Developed a crucial Transactional Status Management system and a Receipt Generation Application for a hardware device using the Springboot framework.",
            "Improved existing services in the fields of Security, configurability, availability, logging and maintenance.",
            "Worked on a heavily loaded, time-constrained, Multithreaded middleware application which resulted in high-performance services.",
            "Developed several supporting services which are accepted at the project level and used by other services.",
            "Part of various teams which are working as per Agile methodologies."
          ]
        }
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2>Professional Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, expIndex) => (
            <div key={expIndex} className="experience-item">
              <div className="experience-header">
                <div className="company-info">
                  <h3 className="company-name">{exp.company}</h3>
                  <span className="company-period">{exp.period}</span>
                </div>
              </div>
              
              {exp.positions.map((position, posIndex) => (
                <div key={posIndex} className="position-item">
                  <div className="position-header">
                    <h4 className="position-title">{position.title}</h4>
                    <span className="position-period">{position.period}</span>
                  </div>
                  <ul className="achievements-list">
                    {position.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="achievement-item">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
