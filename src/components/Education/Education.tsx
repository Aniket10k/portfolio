import React from 'react';
import './Education.css';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: "Bachelor of Engineering in Computer Science and Engineering",
      institution: "Government College of Engineering, Aurangabad",
      location: "Aurangabad, Maharashtra, India",
      duration: "June 2015 – 2019",
      gpa: "8.54 / 10.0 (First Class with Distinction)",
      coursework: [
        "Data Structures",
        "Design and Analysis of Algorithms",
        "Operating Systems",
        "Computer Networks",
        "Database Management Systems",
        "Data Mining and Warehousing"
      ],
      achievements: [
        "Graduated with First Class with Distinction",
        "Consistently ranked among top 10% of the class",
        "Completed final year project on intelligent data analysis"
      ]
    }
  ];

  const certifications = [
    // Add real certifications here if any, or leave it empty
    // {
    //   name: "AWS Certified Solutions Architect",
    //   issuer: "Amazon Web Services",
    //   date: "2023",
    //   credentialId: "AWS-SAA-2023-001"
    // }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <h2>Education & Certifications</h2>

        {/* Education Section */}
        <div className="education-content">
          <div className="education-timeline">
            {educationData.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="education-marker"></div>
                <div className="education-card">
                  <div className="education-header">
                    <h3 className="degree-title">{edu.degree}</h3>
                    <span className="duration">{edu.duration}</span>
                  </div>
                  <div className="institution-info">
                    <h4 className="institution-name">{edu.institution}</h4>
                    <p className="location">{edu.location}</p>
                    <p className="gpa">GPA: <span className="gpa-value">{edu.gpa}</span></p>
                  </div>

                  <div className="education-details">
                    <div className="coursework">
                      <h5>Major Coursework:</h5>
                      <ul className="coursework-list">
                        {edu.coursework.map((course, courseIndex) => (
                          <li key={courseIndex}>{course}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="achievements">
                      <h5>Key Achievements:</h5>
                      <ul className="achievements-list">
                        {edu.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        {certifications.length > 0 && (
          <div className="certifications-section">
            <h3 className="certifications-title">Professional Certifications</h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-card">
                  <div className="cert-icon">
                    <span className="cert-badge">🏆</span>
                  </div>
                  <div className="cert-content">
                    <h4 className="cert-name">{cert.name}</h4>
                    <p className="cert-issuer">{cert.issuer}</p>
                    <div className="cert-details">
                      <span className="cert-date">{cert.date}</span>
                      <span className="cert-id">ID: {cert.credentialId}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;