import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'AI News Assistant',
      date: 'Jan 2025 – Present',
      description: 'AI-powered news synthesis system with three specialized agents for web collection, content synthesis, and presentation using agentic architecture.',
      tech: ['Python', 'OpenAI Swarm', 'Llama 3.2', 'Streamlit', 'DuckDuckGo API']
    },
    {
      title: 'Data Modelling & Analytics',
      date: 'Jul 2025 – Aug 2025',
      description: 'Designed fact/dimension schemas with ETL transformations for analytics-ready datasets. Implemented graph data modeling for NBA player analytics.',
      tech: ['SQL', 'Dimensional Modeling', 'Graph Data', 'Data Engineering']
    },
    {
      title: 'Inventory Management System',
      date: 'Jul 2021 – Oct 2021',
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
            <p className="project-date">{project.date}</p>
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
