import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      items: ['Python, SQL, Java, JavaScript', 'C# (Certified)', 'React, Streamlit, jQuery']
    },
    {
      title: 'Backend & APIs',
      items: ['Node.js, Express.js', 'J2EE (Jakarta EE)', 'Botpress, REST APIs', 'Docker, Apache Tomcat']
    },
    {
      title: 'Data Engineering',
      items: ['ETL/ELT Pipelines', 'Databricks, PySpark', 'Data Warehousing (Kimball)', 'Fact/Dimensional Modeling']
    },
    {
      title: 'Databases',
      items: ['SQL Server, PostgreSQL', 'Oracle DB, MySQL', 'MongoDB, Azure Synapse']
    },
    {
      title: 'Cloud & Tools',
      items: ['Azure (Certified)', 'AWS (SageMaker, Bedrock)', 'Git, Power Automate']
    },
    {
      title: 'AI & Automation',
      items: ['Agentic AI, LLMs', 'OpenAI Swarm, Llama 3.2', 'Automation & Orchestration']
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
