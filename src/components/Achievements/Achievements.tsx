import React from 'react';
import './Achievements.css';

const Achievements: React.FC = () => {
  const achievements = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      organization: "Amazon Web Services",
      date: "2023",
      description: "Professional level certification demonstrating expertise in designing distributed systems on AWS",
      icon: "🏆",
      category: "Certification",
      link: "https://aws.amazon.com/certification/",
      color: "#FF9900"
    },
    {
      id: 2,
      title: "Best Innovation Award",
      organization: "Tech Conference 2023",
      date: "March 2023",
      description: "Recognized for developing an AI-powered solution that improved user engagement by 40%",
      icon: "🚀",
      category: "Award",
      link: "#",
      color: "#e74c3c"
    },
    {
      id: 3,
      title: "Google Cloud Professional Developer",
      organization: "Google Cloud",
      date: "2022",
      description: "Certified in designing, building, and deploying applications on Google Cloud Platform",
      icon: "☁️",
      category: "Certification",
      link: "https://cloud.google.com/certification",
      color: "#4285F4"
    },
    {
      id: 4,
      title: "Open Source Contributor",
      organization: "GitHub",
      date: "2020-Present",
      description: "Active contributor to multiple open source projects with 500+ stars and 100+ forks",
      icon: "💻",
      category: "Recognition",
      link: "https://github.com/Aniket10k",
      color: "#333"
    },
    {
      id: 5,
      title: "Hackathon Winner",
      organization: "DevFest 2022",
      date: "October 2022",
      description: "First place winner for developing a sustainable tech solution in 48 hours",
      icon: "🥇",
      category: "Competition",
      link: "#",
      color: "#f39c12"
    },
    {
      id: 6,
      title: "Microsoft Azure Fundamentals",
      organization: "Microsoft",
      date: "2022",
      description: "Foundational knowledge of cloud services and Microsoft Azure implementation",
      icon: "⚡",
      category: "Certification",
      link: "https://docs.microsoft.com/en-us/learn/certifications/azure-fundamentals/",
      color: "#0078D4"
    },
    {
      id: 7,
      title: "Tech Speaker",
      organization: "Various Conferences",
      date: "2021-2023",
      description: "Delivered 15+ technical talks on React, Node.js, and cloud architecture",
      icon: "🎤",
      category: "Speaking",
      link: "#",
      color: "#9b59b6"
    },
    {
      id: 8,
      title: "Employee of the Year",
      organization: "Current Company",
      date: "2023",
      description: "Recognized for outstanding performance and leadership in multiple high-impact projects",
      icon: "⭐",
      category: "Award",
      link: "#",
      color: "#2ecc71"
    }
  ];

  const categories = ["All", "Certification", "Award", "Recognition", "Competition", "Speaking"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [animatedItems, setAnimatedItems] = React.useState<number[]>([]);

  const filteredAchievements = selectedCategory === "All" 
    ? achievements 
    : achievements.filter(achievement => achievement.category === selectedCategory);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedItems(filteredAchievements.map(item => item.id));
    }, 100);
    return () => clearTimeout(timer);
  }, [filteredAchievements]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setAnimatedItems([]);
  };

  const stats = [
    { number: "8+", label: "Certifications", icon: "📜" },
    { number: "15+", label: "Speaking Events", icon: "🎯" },
    { number: "500+", label: "GitHub Stars", icon: "⭐" },
    { number: "3", label: "Major Awards", icon: "🏆" }
  ];

  return (
    <section id="achievements" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Achievements & Recognition</h2>
          <p className="section-description">
            A showcase of certifications, awards, and recognitions that highlight my professional journey 
            and commitment to continuous learning and excellence in technology.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="achievements-grid">
          {filteredAchievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className={`achievement-card ${animatedItems.includes(achievement.id) ? 'animate' : ''}`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                '--accent-color': achievement.color 
              } as React.CSSProperties}
            >
              <div className="achievement-header">
                <div className="achievement-icon" style={{ backgroundColor: achievement.color }}>
                  {achievement.icon}
                </div>
                <div className="achievement-meta">
                  <span className="achievement-category">{achievement.category}</span>
                  <span className="achievement-date">{achievement.date}</span>
                </div>
              </div>
              
              <div className="achievement-content">
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-organization">{achievement.organization}</p>
                <p className="achievement-description">{achievement.description}</p>
              </div>

              <div className="achievement-footer">
                {achievement.link !== "#" && (
                  <a 
                    href={achievement.link} 
                    className="achievement-link"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View Details
                    <span className="link-arrow">→</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="achievements-cta">
          <h3>Continuous Learning Journey</h3>
          <p>
            I believe in continuous improvement and staying updated with the latest technologies. 
            These achievements represent milestones in my ongoing journey of professional growth.
          </p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">
              Let's Connect
            </a>
            <a 
              href="https://linkedin.com/in/aniketkulkarni" 
              className="btn btn-outline"
              target="_blank" 
              rel="noopener noreferrer"
            >
              View LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
