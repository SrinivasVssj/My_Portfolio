import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce project using Dbt',
      date: 'Jan 2026 – Feb 2026',
      Label: 'Demo Video',
      Link: 'https://youtu.be/lzUoezucWnY',
      description: 'End-to-end e-commerce data pipeline with Dbt using a public dataset to implement and test core dbt practices like ref and source macros for lineage, folder and model-level configuration',
      tech: ['Dbt', 'SQL', 'yaml', 'Data Modelling', 'Data Lineage']
      
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
    }
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
