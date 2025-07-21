import React from 'react';
import './Skills.css';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Java", level: 95 },
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "SQL", level: 75 },
        { name: "HTML / CSS", level: 70 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React", level: 95 },
        { name: "Spring", level: 90 },
        { name: "Spring Boot", level: 85 },
        { name: "OpenCV", level: 80 },
        { name: "JUnit", level: 75 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL", level: 95 },
        { name: "DynamoDB", level: 90 },
        { name: "MySQL", level: 85 },
        { name: "Redis", level: 80 }
      ]
    },
    {
      title: "Cloud Platforms & DevOps",
      skills: [
        { name: "AWS", level: 95 },
        { name: "Git", level: 90 },
        { name: "GitHub", level: 85 },
        { name: "GitLab", level: 80 },
        { name: "Maven", level: 75 }
      ]
    },
    {
      title: "Development Tools & Others",
      skills: [
        { name: "SonarQube", level: 95 },
        { name: "JIRA", level: 90 },
        { name: "Asana", level: 85 },
        { name: "System Design", level: 80 },
        { name: "Fullstack Development", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;