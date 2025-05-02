import React from 'react';

interface Accomplishment {
  title: string;
  date: string;
  description: string;
  type: 'education' | 'project' | 'achievement';
  highlight?: boolean;
}

const accomplishments: Accomplishment[] = [
  {
    title: "Multi-Project Leadership Excellence",
    date: "2018-2019",
    description: "Successfully managed and delivered four concurrent enterprise-level projects: two .NET-based insurance systems, a Python-based analytics platform, and a comprehensive project management initiative. Demonstrated exceptional multitasking and leadership abilities while maintaining high quality standards across all projects.",
    type: "achievement",
    highlight: true
  },
  {
    title: "Healthcare Claims Automation System",
    date: "2023",
    description: "Engineered a scalable health insurance claim automation system that processes tariff agreements between hospitals and insurers, automatically calculating payable amounts. Initially designed for 20 hospitals, the system seamlessly scaled to 500+ hospitals without code modifications, demonstrating exceptional adaptability.",
    type: "achievement",
    highlight: true
  },
  {
    title: "Master's in Cyber Security",
    date: "May 2023",
    description: "University of North Carolina, Charlotte. Specialized in AI Security and Cloud Security. Conducted research on secure ML model deployment and developed GenAI applications. Key coursework: Secure Software Development, Cloud Security, Applied Cryptography, and AI/ML Security.",
    type: "education"
  },
  {
    title: "Bachelor's in Computer Science",
    date: "2018",
    description: "Osmania University, India. Focused on software engineering and data structures. Graduated with distinction, completing projects in web development and database management. Key coursework: Data Structures, Algorithms, Database Systems, and Software Engineering.",
    type: "education"
  },
  {
    title: "GenAI Application Development",
    date: "2023",
    description: "Developed award-winning GenAI applications for invoice summarization and financial analysis",
    type: "project"
  },
  {
    title: "Cloud Architecture",
    date: "2022-2023",
    description: "Successfully deployed and managed cloud infrastructure on AWS, Azure, and GCP",
    type: "project"
  },
  {
    title: "Full Stack Development",
    date: "2021-2023",
    description: "Built scalable web applications using Python FastAPI, React, and modern cloud technologies",
    type: "project"
  },
  
];

const Accomplishments: React.FC = () => {
  return (
    <div className="accomplishments-grid">
      {accomplishments.map((accomplishment, index) => (
        <div 
          key={index} 
          className={`accomplishment-card ${accomplishment.type} ${accomplishment.highlight ? 'highlighted' : ''}`}
        >
          <h3>{accomplishment.title}</h3>
          <div className="date">{accomplishment.date}</div>
          <p>{accomplishment.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Accomplishments; 