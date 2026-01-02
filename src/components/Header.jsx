import React from 'react';

const Header = ({ activeSection, setActiveSection }) => {
  const sections = ['about', 'skills', 'experience', 'projects', 'education'];

  const handleNavClick = (section) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">Srinivas Reddy Kadira</div>
        <ul className="nav-links">
          {sections.map((section) => (
            <li key={section}>
              <button
                onClick={() => handleNavClick(section)}
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
