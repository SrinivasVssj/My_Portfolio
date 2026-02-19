import React from 'react';

const About = () => {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            <strong>Software Engineer </strong> with expertise in building
            data pipelines and web applications. Currently Volunteering at the University of Cincinnati IT Analytics Center, 
            building Web Platform and Data systems for External Clients.Previously, worked for wellsfargo, building data systems
            to support business teams that deal with supply chain data of wellsfargo.
          </p>
          <p>
            My journey to software engineering is defined by <strong>iterative hands-on learning</strong>—I try to break down complex problems 
            into fundamental components and refine until achieving functional-level clarity. Whether debugging React components, 
            optimizing backend queries, or understanding Spark shuffles, I try to stay curious and make sure I don't get complacent.
          </p>
          <p>
            From ETL pipeline optimization at Wells Fargo (processing 10M+ records) to building AI-centered applications, 
            I value <strong>intention, structure, and continuous improvement</strong>.
          </p>
        </div>
        <div className="about-visual">
          <p className="visual-emoji">🛠️</p>
          <p className="visual-text">Building Systems That Matter and Make Sense</p>
        </div>
      </div>
    </section>
  );
};

export default About;
