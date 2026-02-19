import React from 'react';

const Education = () => {
  const education = [
    {
      degree: 'Master of Science in Information Technology',
      school: 'University of Cincinnati',
      period: 'Aug 2024 – Dec 2025',
      gpa: '3.87/4',
      location: 'Cincinnati, Ohio, US'
    },
    {
      degree: 'Bachelor in Electronics and Communication Engineering',
      school: 'C.M.R College of Engineering and Technology (J.N.T.U)',
      period: 'Jul 2018 – Jun 2022',
      gpa: '3.68/4',
      location: 'Hyderabad, India'
    }
  ];

  return (
    <section id="education" className="section education-section">
      <h2 className="section-title">Education</h2>
      <div className="education-grid">
        {education.map((edu, index) => (
          <div key={index} className="education-card">
            <h3 className="education-degree">{edu.degree}</h3>
            <p className="education-school"><strong>{edu.school}</strong> | {edu.period}</p>
            <p className="education-gpa">GPA: <strong>{edu.gpa}</strong> | {edu.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
