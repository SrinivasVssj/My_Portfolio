import React from 'react';

const About = () => {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            <strong>Software Engineer & Full Stack Developer</strong> with expertise in building scalable systems, 
            data pipelines, and modern web applications. Currently at the University of Cincinnati IT Analytics Center, 
            building full-stack chatbot-integrated platforms.
          </p>
          <p>
            My approach to engineering is defined by <strong>iterative learning</strong>—I break down complex problems, 
            experiment hands-on, and refine until achieving system-level clarity. Whether debugging React components, 
            optimizing backend queries, or understanding Spark shuffles, I stay curious and push beyond comfort zones.
          </p>
          <p>
            From ETL pipeline optimization at Wells Fargo (processing 10M+ records) to building AI-powered applications, 
            I value <strong>intention, structure, and continuous improvement</strong>.
          </p>
        </div>
        <div className="about-visual">
          <p className="visual-emoji">🛠️</p>
          <p className="visual-text">Building Systems That Work</p>
        </div>
      </div>
    </section>
  );
};

export default About;
