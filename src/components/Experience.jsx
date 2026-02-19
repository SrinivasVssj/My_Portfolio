import React from 'react';

const Experience = () => {
  const experiences = [
    {
      date: 'Oct 2025 – Present',
      title: 'Software Engineer',
      company: 'Information Technology Analytics Center – University of Cincinnati',
      description: [
        'Currently building an end-to-end data pipelines on Microsft Azure using Azure Data Factory, Azure Databricks, Azure SQL Database, and ADLS Gen2',
        'Supporting ingestion and organization of Electronic Medical Records (EMR), claims, ICD, and CPT datasets',
        'Using PySpark framework with notebooks in Azure Databricks to standardize, cleanse, and join EMR and claims data',
        'Visualizing star-schema data models with fact and dimension tables (e.g., claims, accounts receivable, patient, provider, payer, date)',
        'Maintaining full-stack website with integrated chatbot services for client tracking and document submission',
        'Designed responsive UI with React.js, HTML, and Tailwind CSS tested across multiple screen sizes',
        'Developed backend services with Node.js, Express, Sequelize ORM and PostgreSQL for secure data management',
        'Extended chatbot with LLM capabilities AWS Bedrock service and Meta Llama 3.2 model for enhanced user interactions'
      ]
    },
    {
      date: 'Aug 2022 – Aug 2024',
      title: 'Software Engineer (ETL Developer)',
      company: 'Wells Fargo – Hyderabad, India',
      description: [
        'Designed and maintained ETL pipelines in Microsoft SQL Server processing 10M+ supply-chain records from APIs, flat files, and databases',
        'Implemented Kimball data warehousing with Star Schema and SCD Type 2 for historical tracking',
        'Migrated 50+ Oracle database objects with dependencies to SQL Server, improving query and ingestion performance',
        'Transformed legacy ETL (IBM DataStage) Codebase and replicated business logic onto Microsoft SQL Server ETL pipelines',
        'Supported IBM DataStage during sunset phase by maintaining existing pipelines and ensuring data integrity during transition',
        'Supported business end analytics teams by preparing structured and clean datasets for Power BI dashboards and KPI monitoring'
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
