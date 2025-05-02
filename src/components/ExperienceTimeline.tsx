import React, { FC, useState } from 'react';

interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  details: string[];
  expandedDetails?: string[];
}

const experiences: Experience[] = [
  {
    company: "CVS Health",
    role: "Software Developer II",
    duration: "Nov 2024 - Present",
    location: "Charlotte, NC",
    details: [
      "Developed a framework using Python Fast API and Gen AI services for efficient application management in Azure and Kubernetes",
      "Integrated Boto3 with FastAPI to expose RESTful APIs for AWS resource interactions",
      "Created GraphQL endpoint for data consumption across various teams",
      "Utilized Gen AI models (GPT, Gemini, Claude) to build a rule and created an automated pipeline to refine the prompt using prompt engineering techniques"
    ],
    expandedDetails: [
      "Managed PostgreSQL as RDBMS for database construction and ReactJS for front-end development",
      "Developed dynamic AG Grid tables and interactive modals in React, enhancing UI functionality and user experience",
      "Implemented unit tests using pytest and conducted data migrations using Alembic",
      "Created AWS Lambda functions using Python and Boto3 to handle event-driven automation",
      "Configured and maintained CI/CD pipelines in GitHub using GitHub Actions",
      "Implemented a caching mechanism using Redis to minimize database queries and enhance performance",
      "Worked on Helm Charts and Terraform integration for setting up infrastructure"
    ]
  },
  {
    company: "Benchmark Gensuite",
    role: "Python AI Developer",
    duration: "July 2023 – Aug 2024",
    location: "Remote",
    details: [
      "Designed and implemented RESTful APIs with Fast API, Flask, Django, providing efficient communication between frontend and backend systems",
      "Utilized AWS services including EC2, S3, RDS, Lambda, Cloud watch, VPC, Sage Maker, Step Functions",
      "Implemented AWS Step Functions and Lambda to develop a scalable cloud-based solution for image size reduction",
      "Leveraged AWS Bedrock to enhance and optimize prompt engineering and testing processes"
    ],
    expandedDetails: [
      "Created event-driven architectures by integrating S3 event notifications with Lambda using Boto3",
      "Converted Python codes to NodeJS and created a streaming service to handle Chat-GPT API calls",
      "Developed a multi-threaded standalone app in Python to view Circuit parameters and performance",
      "Worked on slack automation to create Jira tickets on a thread creation event in Python",
      "Created multiple RAG models (Retrieval Augmented Generation) on Open AI, CrewAI, Claude using Python and NodeJS",
      "Implemented Terraform scripts to create EC2, S3, AWS Lambda through pipelines",
      "Successfully integrated application logging with Splunk, enabling real-time monitoring and analysis"
    ]
  },
  {
    company: "University of North Carolina at Charlotte",
    role: "Software Developer Intern",
    duration: "Aug 2022 – May 2023",
    location: "Charlotte, NC",
    details: [
      "Designed and maintained databases using Python and developed Python-based API using Flask, Angular, SQL Alchemy",
      "Designed Forms, Views, and Models using Django's MVC software architecture pattern",
      "Developed a GenAI application to efficiently summarize invoices and track daily expenditures",
      "Built custom datasets and dataloaders in PyTorch to efficiently handle large-scale data pipelines"
    ],
    expandedDetails: [
      "Worked on multiple containers and managed the load balancing between all the containers using NGINX",
      "Created a Python/Django-based web application using Python scripting for data processing",
      "Used Django APIs to access the database and defined different Django API profiling techniques",
      "Worked on Terraform scripts and modified the code to create new resources in AWS and Azure",
      "Installed/configured/maintained MySQL database and MongoDB database",
      "Used Python and Pandas libraries for data cleaning and aggregation"
    ]
  },
  {
    company: "IAssist Innovation Labs",
    role: "Sr Python Developer",
    duration: "April 2020 – Dec 2021",
    location: "Hyderabad, India",
    details: [
      "Participated in the development of application architecture and blueprints to define application components",
      "Designed and developed an application using Angular as frontend and Python Flask as backend",
      "Converted multiple Java Sprint boot microservices into Python Django as an interactable addon",
      "Developed image classification models in Jupyter Notebooks using Python libraries such as TensorFlow"
    ],
    expandedDetails: [
      "Built a self-healing web automation application from scratch using selenium and UI Path",
      "Developed dynamic front-end applications using ReactJS, enhancing user experience",
      "Set up Python application observability with third-party tools such as Datadog and AWS CloudWatch",
      "Deployed project into Amazon web services (AWS) using Amazon elastic beanstalk",
      "Utilized Apache Kafka to streamline the incoming tasks",
      "Created interactive dashboards and reports in Power BI to visualize complex datasets"
    ]
  },
  {
    company: "Manomay Innsurtech",
    role: "Python Developer",
    duration: "November 2017 – April 2020",
    location: "Hyderabad, India",
    details: [
      "Responsible for analyzing various cross-functional, multi-platform applications systems enforcing Python",
      "Designed and developed a horizontally scalable API using Python Flask, Angular",
      "Developed Python batch processors to consume and produce various feeds",
      "Leveraged Jupyter Notebook and Pytesseract in Python to perform image analysis"
    ],
    expandedDetails: [
      "Designed and integrated observability frameworks using Python libraries such as Prometheus and Graphana",
      "Developed monitoring and notification tools using Python",
      "Wrote Python routines to log into the websites and fetch data for selected options",
      "Developed and integrated Celery with Flask applications to handle long-running tasks asynchronously",
      "Debugged and optimized Ansible CI/CD pipeline to ensure seamless installation of additional dependencies",
      "Integrated SAST products like SonarQube, Checkmarx, Semgrep into CI/CD pipelines"
    ]
  }
];

const ExperienceTimeline: FC = () => {
  const [expandedItems, setExpandedItems] = useState<{ [key: number]: boolean }>({});

  const toggleExpand = (index: number) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="timeline-container">
      {experiences.map((exp, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-content">
            <div className="timeline-header">
              <h3>{exp.company}</h3>
              <div className="timeline-meta">
                <span className="role">{exp.role}</span>
                <span className="location">{exp.location}</span>
                <span className="duration">{exp.duration}</span>
              </div>
            </div>
            <ul className="timeline-details">
              {exp.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
              {exp.expandedDetails && (
                <>
                  {expandedItems[index] && exp.expandedDetails.map((detail, detailIndex) => (
                    <li key={`expanded-${detailIndex}`} className="expanded-detail">{detail}</li>
                  ))}
                  <div 
                    className={`show-more-text ${expandedItems[index] ? 'expanded' : ''}`}
                    onClick={() => toggleExpand(index)}
                  >
                    <span className="show-more-content">
                      {expandedItems[index] ? 'Show Less' : 'Show More'}
                      <span className="chevron">{expandedItems[index] ? '▲' : '▼'}</span>
                    </span>
                  </div>
                </>
              )}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTimeline; 