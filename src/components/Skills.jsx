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
      title: 'Data Engineering & ETL',
      items: ['IBM Datastage', 'Data Build tool (Dbt)','Azure Data factory','Graph Data Modelling','Slowly.Changing.Dimensions 2 (SCD2)', 'Fact/Dimensional Modeling']
    },
    {
      title: 'Databases',
      items: ['SQL Server', 'PostgreSQL', 'Oracle DB', 'MySQL', 'MongoDB']
    },
    {
      title: 'Cloud & Tools',
      items: ['Azure (Certified)', 'Azure Databricks' , 'Git/Github', 'Docker', 'CI/CD']
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
