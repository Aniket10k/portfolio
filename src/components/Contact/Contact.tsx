import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('error');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'kulkarni10aniket@gmail.com',
      link: 'mailto:kulkarni10aniket@gmail.com'
    },
    // {
    //   icon: '📱',
    //   title: 'Phone',
    //   value: '+91 XXXXXXXXXX',
    //   link: 'tel:+91XXXXXXXXXX'
    // },
    {
      icon: '📍',
      title: 'Location',
      value: 'Bengaluru, India',
      link: 'https://www.google.com/maps?q=Bengaluru,IN'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/aniket10k',
      link: 'https://linkedin.com/in/aniket10k'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: '🔗',
      url: 'https://github.com/Aniket10k',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/in/aniketk10k',
      color: '#0077b5'
    },
    {
      name: 'Portfolio',
      icon: '🌐',
      url: 'https://aniket10k.github.io/portfolio',
      color: '#e74c3c'
    }
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Get In Touch</h2>
        <p className="contact-intro">
          I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. 
          Feel free to reach out if you'd like to connect!
        </p>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <a 
                  key={index} 
                  href={info.link} 
                  className="contact-card"
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-details">
                    <h4>{info.title}</h4>
                    <p>{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="social-section">
              <h4>Follow Me</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ '--social-color': social.color } as React.CSSProperties}
                  >
                    <span className="social-icon">{social.icon}</span>
                    <span className="social-name">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <h3>Send Me a Message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project, question, or just say hello!"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="form-message success">
                  ✅ Thank you! Your message has been sent successfully. I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="form-message error">
                  ❌ Oops! Something went wrong. Please try again or contact me directly via email.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Call to Action */}
        <div className="contact-cta">
          <h3>Ready to Work Together?</h3>
          <p>
            Whether you have a project in mind, need technical consultation, or just want to connect, 
            I'd love to hear from you. Let's build something amazing together!
          </p>
          <div className="cta-buttons">
            <a href="mailto:kulkarni10aniket@gmail.com" className="btn btn-primary">
              Email Me Directly
            </a>
            <a href="https://linkedin.com/in/aniket10k" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
