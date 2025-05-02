import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {currentYear} Venkatesh Yerram. All rights reserved.</p>
        <p className="footer-text">
          Built with React & TypeScript
        </p>
      </div>
    </footer>
  );
};

export default Footer; 