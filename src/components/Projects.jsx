import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Astro Capstone: Agentic AI Assistant',
      date: 'Apr 2026 - May 2026',
      Label: 'GitHub Repo',
      Link: 'https://github.com/SrinivasVssj/astro-capstone',
      description: 'Built agentic AI assistant with RAG semantic search for personalized horoscope recommendations using 8 custom MCP tools, real-time REST APIs, and vector embeddings; orchestrated end-to-end ML infrastructure with scheduled Spark pipelines on Databricks',
      tech: ['Python', 'Flask', 'PostgreSQL pgvector', 'sentence-transformers', 'MCP', 'PySpark', 'Databricks', 'REST APIs', 'HNSW indexing', 'ETL']
    },
     {
      title: 'Automation Agent for Indeed Portal',
      date: 'Mar 2026 - Apr 2026',
      Label: null,
      Link: null,
      description: 'An Automation Agent built using Python Selenium framework that uploads resume in indeed portal daily, scheduled on Github Actions',
      tech: ['Python', 'Selenium Framework', 'Github Actions', 'Web Automation', 'session handling']
      
    },
    {
      title: 'Automation Agent for Dice Portal',
      date: 'Mar 2026 - Apr 2026',
      Label: null,
      Link: null,
      description: 'An Automation Agent built using Python Playwright framework that uploads resume in dice portal daily, scheduled on Github Actions',
      tech: ['Python', 'Playwright Framework', 'Github Actions', 'Web Automation']
      
    },
     {
      title: 'Agentic AI on AWS',
      date: 'Feb 2026 - Apr 2026',
      Label: 'PlayList Link',
      Link: 'https://youtu.be/kdXKU0opF9o?si=3A0r4Kwsf02CcI_h',
      description: 'Building Agentic AI applications using AWS Serices by learning from a Bootcamp held by a NGO called Become a Solutions Architect run by Senior  Amazon Employees',
      tech: ['Claude 4.5 Sonnet', 'AWS Bedrock', 'JSON', 'AWS Lambda functions', 'Functional Chatbot Testing']
      
    },
    {
      title: 'E-commerce project using Dbt',
      date: 'Jan 2026 – Feb 2026',
      Label: 'Demo Video',
      Link: 'https://youtu.be/lzUoezucWnY',
      description: 'End-to-end e-commerce data pipeline with Dbt using a public dataset to implement and test core dbt practices like ref and source macros for lineage, folder and model-level configuration',
      tech: ['Dbt', 'SQL', 'yaml', 'Data Modelling', 'Data Lineage']
      
    },
    {
      title: 'Library Stock Prediction',
      date: 'Sep 2025 - Dec 2025',
      Label: 'GitHub Repo',
      Link: 'https://github.com/SrinivasVssj/Library_checkout_analysis_using_ml.git',
      description: 'Machine learning model to predict library book checkouts using historical checkout data and preprocessed features.',
      tech: ['Python', 'Pytorch', 'Google CoLab','Gradient Boosting', 'Data Analysis']
      
    },
    {
      title: 'Agentic News Assistant',
      date: 'Jan 2025 – Mar 2025',
      Label: 'GitHub Repo',
      Link: 'https://github.com/SrinivasVssj/Srinivas_CR/tree/main/Projects/News_Synthesizer',
      description: 'Agentic AI enabled news synthesis system with three specialized agents for web collection, content synthesis, and presentation using Meta\'s Llama 3.2 model.',
      tech: ['Python', 'OpenAI Swarm', 'Llama 3.2', 'Streamlit', 'DuckDuckGo API']
      
    },
    {
      title: 'Data Modelling & Analytics',
      date: 'Jul 2025 – Aug 2025',
      Label: 'GitHub Repo',
      Link: 'https://github.com/SrinivasVssj/Data_Engineering_Lab.git',
      description: 'Designed fact/dimensional schemas and Implemented graph data modelling on different datasets (NBA Matches/ Website API hits).',
      tech: ['SQL', 'Dimensional Modeling', 'Graph Data', 'Data Engineering']
    },
    {
      title: 'Inventory Management System',
      date: 'Jul 2021 – Oct 2021',
      Label: 'GitHub Repo',
      Link: 'https://github.com/SrinivasVssj/CodenowMiniproject.git',
      description: 'Campus cafeteria web platform with supplier, inventory, and goods tracking. Reduced manual supply chain tracking tasks with secure ACID-compliant transactions.',
      tech: ['Java', 'J2EE', 'JSP', 'MySQL', 'Apache Tomcat']
    },
    
  ];

  return (
    <section id="projects" className="section projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            {/* <p className="project-date">{project.date}</p> */}
            <div className="project-meta">
                  <p className="project-date">{project.date}</p>
                  {project.Link && (
                    <a
                      href={project.Link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="repo-btn"
                    >
                      {project.Label}
                    </a>
                  )}
            </div>
            <p className="project-description">{project.description}</p>
            <div className="tech-tags">
              {project.tech.map((tag, i) => (
                <span key={i} className="tech-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
