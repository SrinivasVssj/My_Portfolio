import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      items: [
        { name: 'Python', certLink: 'https://drive.google.com/file/d/118J5Op4ABnBdZILx8TJw1558mgzFskf5/view?usp=sharing', certLabel: 'Coursera Certificate' },
        { name: 'SQL', certLink: null, certLabel: null },
        { name: 'JavaScript', certLink: null, certLabel: null },
        { name: 'C#', certLink: 'https://drive.google.com/file/d/1BJd03yM3yeVEpbWG0bzkcO3qMrNCB40d/view?usp=sharing', certLabel: 'Coursera Certificate' },
        { name: 'Java', certLink: null, certLabel: null }
      ]
    },
    {
      title: 'Frameworks',
      items: [
        { name: 'React', certLink: null, certLabel: null },
        { name: 'Flask', certLink: null, certLabel: null },
        { name: 'Streamlit', certLink: null, certLabel: null },
        { name: 'Node.js', certLink: null, certLabel: null },
        { name: 'Express.js', certLink: null, certLabel: null },
        { name: 'J2EE (Jakarta EE)', certLink: null, certLabel: null },
        { name: 'PySpark', certLink: null, certLabel: null }
      ]
    },
    {
      title: 'AI & Agentic Design',
      items: [
        { name: 'Agentic AI Design', certLink: 'https://drive.google.com/file/d/1C6XneRatv1e6qcV0pxae0B6kK79vtNIC/view?usp=sharing', certLabel: 'Hugging Face Certificate' },
        { name: 'Model Context Protocol', certLink: 'https://besa.techcreator.io/badge/srinivasusagml95104/677', certLabel: 'Badge' },
        { name: 'RAG and Semantic Search', certLink: null, certLabel: null },
        { name: 'Vector Embeddings (sentence-transformers)', certLink: null, certLabel: null },
        { name: 'LLM Hitting (Claude 4.5 Sonnet, Meta Llama 3.2)', certLink: null, certLabel: null },
        { name: 'Multi Agentic Orchestration', certLink: null, certLabel: null },
        { name: 'Prompt Design and Engineering for LLMs', certLink: null, certLabel: null }
      ]
    },
    {
      title: 'Data Engineering',
      items: [
        { name: 'Data Ingestion Handling', certLink: null, certLabel: null },
        { name: 'Data Quality Management', certLink: null, certLabel: null },
        { name: 'Graph Data Modelling', certLink: null, certLabel: null },
        { name: 'Slowly Changing Dimensions 2 (SCD2)', certLink: null, certLabel: null },
        { name: 'Fact/Dimensional Modeling', certLink: null, certLabel: null }
      ]
    },
    {
      title: 'Pipeline Design',
      items: [
        { name: 'IBM Datastage', certLink: null, certLabel: null },
        { name: 'Azure Data Factory', certLink: null, certLabel: null },
        { name: 'Data Build Tool (dbt)', certLink: null, certLabel: null }
      ]
    },
    {
      title: 'Databases',
      items: [
        { name: 'SQL Server', certLink: null, certLabel: null },
        { name: 'PostgreSQL with pgvector extension', certLink: null, certLabel: null },
        { name: 'Vector Databases with HNSW indexing', certLink: null, certLabel: null },
        { name: 'Oracle DB', certLink: null, certLabel: null },
        { name: 'MySQL', certLink: null, certLabel: null },
        { name: 'MongoDB', certLink: null, certLabel: null }
      ]
    },
    {
      title: 'Machine Learning',
      items: [
        { name: 'Scikit-learn', certLink: null, certLabel: null },
        { name: 'PyTorch', certLink: null, certLabel: null },
        { name: 'TensorFlow', certLink: null, certLabel: null },
        { name: 'XGBoost', certLink: null, certLabel: null },
        { name: 'Data Analysis', certLink: null, certLabel: null },
        { name: 'Auto tokenizer', certLink: null, certLabel: null },
        { name: 'Stable Diffusion Model', certLink: null, certLabel: null }
      ]
    },
    {
      title: 'Cloud Expertise',
      items: [
        { name: 'Azure', certLink: 'https://drive.google.com/file/d/118rKHxDyM0-EFOwZoaIn_Mun2Rg0gkb2/view?usp=sharing', certLabel: 'AZ900 Certification' },
        { name: 'AWS Bedrock', certLink: null, certLabel: null },
        { name: 'AWS Knowledge Bases', certLink: null, certLabel: null },
        { name: 'AWS Sagemaker', certLink: 'https://www.credly.com/badges/be707606-ea3f-4919-a633-6b2a43b981b4/public_url', certLabel: 'Badge' },
        { name: 'Databricks', certLink: 'https://drive.google.com/file/d/1d6qpi67DqZecuw7kl1OOBoO4fIrahe0U/view?usp=sharing', certLabel: 'Badge' },
        { name: 'Snowflake', certLink: 'https://achieve.snowflake.com/8e49392f-c7ab-41e6-a237-74f6b87292e0#acc.3aXJscFK', certLabel: 'D.E Essentials Badge' }
      ]
    },
    {
      title: 'Automation & Tools',
      items: [
        { name: 'Power Automate', certLink: null, certLabel: null },
        { name: 'Autosys', certLink: null, certLabel: null },
        { name: 'Google Apps Script', certLink: null, certLabel: null },
        { name: 'Git/Github', certLink: null, certLabel: null },
        { name: 'Docker', certLink: null, certLabel: null },
        { name: 'CI/CD Design', certLink: null, certLabel: null },
        { name: 'Selenium', certLink: null, certLabel: null },
        { name: 'Playwright', certLink: null, certLabel: null }
      ]
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
                <li key={i} className="skill-item">
                  <span className="skill-bullet">▸</span>

                  <span className="skill-name">{item.name}</span>

                  {item.certLink && item.certLabel ? (
                    <a
                      href={item.certLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-link"
                    >
                      ({item.certLabel})
                    </a>
                  ) : (
                    <span className="cert-placeholder"></span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;