import React from 'react';

const Experience = () => {
  const experiences = [
    {
      date: 'Oct 2025 – Present',
      title: 'Software Engineer (Full Stack Developer)',
      company: 'Information Technology Analytics Center – University of Cincinnati',
      description: [
        'Building full-stack website with integrated Botpress chatbot services for client tracking and document submission',
        'Designed responsive UI with React.js, HTML, and Tailwind CSS tested across multiple screen sizes',
        'Developed backend services with Node.js, Express, and PostgreSQL for secure data management',
        'Extended chatbot with AWS Bedrock LLM capabilities for personalized user experiences'
      ]
    },
    {
      date: 'Aug 2022 – Aug 2024',
      title: 'Software Engineer (ETL Developer)',
      company: 'Wells Fargo – Hyderabad, India',
      description: [
        'Designed and maintained ETL pipelines processing 10M+ supply-chain records from APIs, flat files, and databases',
        'Implemented Kimball data warehouse with Star Schema and SCD Type 2 for historical tracking',
        'Migrated 50+ Oracle database objects to SQL Server, improving query performance by 15%',
        'Orchestrated workflows with Autosys and PowerShell; supported Power BI analytics teams'
      ]
    }
  ];

  return (
    <section id="experience" className="section experience-section">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-date">{exp.date}</div>
            <div className="timeline-content">
              <h3 className="timeline-title">{exp.title}</h3>
              <p className="timeline-company">{exp.company}</p>
              <ul className="timeline-description">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
