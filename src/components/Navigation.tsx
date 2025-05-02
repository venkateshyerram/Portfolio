import React from 'react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const sections = ['Projects', 'Experience', 'Skills', 'Accomplishments', 'Recommendations', 'Games'];

const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionChange }) => {
  return (
    <nav className="navigation">
      <ul className="nav-menu">
        {sections.map((section) => (
          <li
            key={section}
            className={`nav-item ${activeSection === section ? 'active' : ''}`}
            onClick={() => onSectionChange(section)}
          >
            {section}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation; 