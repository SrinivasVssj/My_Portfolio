import React from 'react';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Srinivas Reddy Kadira</h1>
        <p className="hero-tagline">Data Engineer with Software Development Capabilities | Agentic AI Enthusiast</p>
        <div className="hero-contact">
           <div className="contact-item">
            < FaPhone size={16} style={{ verticalAlign: 'middle', marginBottom: '3px',marginRight: '6px' }} />
          <a href="tel:+15139570922" target="_blank" rel="noopener noreferrer">+1(513)957-0922</a>
          </div>
          <span className="divider">|</span>
          <div className="contact-item">
            <MdEmail  size={16} style={{ verticalAlign: 'middle', marginBottom: '3px',marginRight: '6px' }} />
          <a href="mailto:srinivasusagml@gmail.com" target="_blank" rel="noopener noreferrer">srinivasusagml@gmail.com</a>
          </div>
          <span className="divider">|</span>
          <div className="contact-item">
             <FaGithub  size={16} style={{ verticalAlign: 'middle', marginBottom: '3px',marginRight: '6px' }} />
          <a href="https://github.com/SrinivasVssj" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <span className="divider">|</span>
          <div className="contact-item">
            <FaLinkedin  size={16} style={{ verticalAlign: 'middle', marginBottom: '3px',marginRight: '6px' }} />
            
            <a href="https://www.linkedin.com/in/srinivask2001/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <span className="divider">|</span>
          <div className="contact-item">
        <MdLocationOn  size={16} style={{ verticalAlign: 'middle', marginBottom: '3px', marginRight: '6px' }} />
          <span ><strong>Cincinnati,OH</strong></span></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
