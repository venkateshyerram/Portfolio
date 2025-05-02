import React, { useState } from 'react';

interface SectionToggleProps {
  title: string;
  children: React.ReactNode;
}

const SectionToggle: React.FC<SectionToggleProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className="section-toggle">
      <div className="section-header" onClick={() => setIsOpen(!isOpen)}>
        <h2>{title}</h2>
        <span className={`toggle-icon ${isOpen ? 'open' : ''}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
      <div className={`section-content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </section>
  );
};

export default SectionToggle; 