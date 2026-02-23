import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      items: ['Python', 'SQL', 'JavaScript', 'C#','Java']
    },
    {
      title: 'Frameworks',
      items: ['React', 'Streamlit', 'Node.js', 'Express.js', 'J2EE (Jakarta EE)','PySpark']
    },
    {
      title: 'Data Engineering',
      items: ['Data Ingestion Handling','Data Quality Management','Graph Data Modelling','Slowly.Changing.Dimensions 2 (SCD2)', 'Fact/Dimensional Modeling']
    },
    {
      title: 'Pipeline Design',
      items: ['IBM Datastage','Azure Data factory', 'Data Build tool (Dbt)']
    },
    {
      title: 'Databases',
      items: ['SQL Server', 'PostgreSQL', 'Oracle DB', 'MySQL', 'MongoDB']
    },
    {
      title: 'Cloud Expertise',
      items: ['Azure (Certified)', 'AWS Bedrock','AWS Knowledge Bases','AWS Sagemaker','Azure Databricks']
    },
    {
      title: 'AI & Agentic Design',
      items: ['Agentic AI Design', 'LLM Hitting (Claude 4.5 Sonnet, Meta Llama 3.2)','Multi Agentic Orchestration','Prompt Design and Engineering for LLMs']
    },
    {
      title: 'Automation & Tools',
      items: ['Power Automate','Autosys','Google Apps Script','Git/Github', 'Docker', 'CI/CD Design' ]
    }
  ];

  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-card">
            <h3 className="skill-title">{category.title}</h3>
            <ul className="skill-list">
              {category.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
