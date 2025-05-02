import React, { useState, useEffect } from 'react';
import { animateNumber } from './animations';

const calculateYearsOfExperience = (): number => {
  const experiences = [
    { start: "November 2017", end: "April 2020" },
    { start: "April 2020", end: "Dec 2021" },
    { start: "Aug 2022", end: "May 2023" },
    { start: "July 2023", end: "Aug 2024" },
    { start: "Nov 2024", end: "Present" }
  ];

  const earliestStartDate = new Date("November 2017");
  const currentDate = new Date();
  
  const years = (currentDate.getFullYear() - earliestStartDate.getFullYear()) +
    (currentDate.getMonth() - earliestStartDate.getMonth()) / 12;
    
  return Math.floor(years);
};

const Headline: React.FC = () => {
  const yearsOfExperience = calculateYearsOfExperience();
  const [displayYears, setDisplayYears] = useState(0);
  const [displayProjects, setDisplayProjects] = useState(0);
  const [displayTech, setDisplayTech] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      animateNumber(0, yearsOfExperience, 2000, setDisplayYears);
      animateNumber(0, 20, 2000, setDisplayProjects);
      animateNumber(0, 10, 2000, setDisplayTech);
    }, 1000);
    return () => clearTimeout(timer);
  }, [yearsOfExperience]);
  
  return (
    <div className="headline">
      <div className="headline-content">
        <h2>👋 Hi! I'm a Software Engineer & Gen AI Specialist</h2>
        <div className="headline-summary">
          <p>
            I love turning complex problems into elegant solutions! With a passion for Python, React, and AI, 
            I specialize in building innovative applications that make a real impact. From automating healthcare 
            claims to crafting recommendation systems, I enjoy pushing the boundaries of what's possible with code. 
            Let's create something amazing together!
          </p>
        </div>
        <div className="headline-highlights">
          <div className="highlight-item">
            <span className="highlight-number">{displayYears}+</span>
            <span className="highlight-label">Years of Building Cool Stuff</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-number">{displayProjects}+</span>
            <span className="highlight-label">Projects Delivered</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-number">{displayTech}+</span>
            <span className="highlight-label">Tech Tools Mastered</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headline; 