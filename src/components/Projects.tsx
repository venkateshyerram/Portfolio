import React from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    title: "Healthcare Claims Automation System",
    description: "Engineered a scalable health insurance claim automation system that processes tariff agreements between hospitals and insurers, automatically calculating payable amounts. Initially designed for 20 hospitals, the system seamlessly scaled to 500+ hospitals without code modifications, demonstrating exceptional adaptability.",
    technologies: ["Python", "Flask", "Selenium", "MySQL", "Azure", "Microservices", "REST API"]
  },
  {
    title: "Intelligent Document Processing System",
    description: "Developed an advanced OCR optimization system using NLP techniques and fuzzy string matching algorithms to improve handwritten document recognition accuracy from 75% to 95%. Implemented custom text preprocessing pipelines, context-aware correction models, and domain-specific dictionaries to enhance recognition reliability for medical and insurance documents.",
    technologies: ["Python", "NLP", "OCR", "TensorFlow", "spaCy", "Levenshtein"]
  },
  {
    title: "Insurance Call Center Assistance System",
    description: "Developed a comprehensive .NET MVC application for insurance call center operations. The system enables agents to process roadside assistance requests, track service level agreements (SLAs), and provide real-time ETA updates. Integrated with a Flutter mobile app for on-road agents, featuring analytics dashboards for performance tracking and SLA monitoring.",
    technologies: [".NET MVC", "C#", "SQL Server", "REST API", "Analytics"]
  },
  {
    title: "AI-Powered Company Knowledge Assistant",
    description: "Developed a Generative AI application leveraging internal company datasets, integrated with Elasticsearch to optimize query performance, and enabled the system to answer complex questions related to company operations, sales strategies, and business tactics",
    technologies: ["Python", "FastAPI", "PostgreSQL", "React"]
  },
  {
    title: "Cloud-based Image Processing Pipeline",
    description: "Built scalable image size reduction solution using AWS Lambda, Step Functions, and S3.",
    technologies: ["AWS", "Python", "Boto3", "Lambda"]
  },
  {
    title: "Self-healing Web Automation",
    description: "Created a self-healing automation app using Selenium and UI Path for robust web workflows.",
    technologies: ["Python", "Selenium", "UI Path"]
  }
];

const Projects: React.FC = () => {
  return (
    <div className="projects-grid">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="technologies">
            {project.technologies.map((tech, techIndex) => (
              <span key={techIndex} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects; 