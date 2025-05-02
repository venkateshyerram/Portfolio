import React from 'react';
import { FaSearch, FaChartLine } from 'react-icons/fa';
import splunkIcon from '../assets/splunk.svg';
import elasticsearchIcon from '../assets/elasticsearch.svg';

interface Skill {
  name: string;
  iconClass: string;
  category: string;
  customIcon?: React.ReactNode;
}

const skills: Skill[] = [
  { name: 'Python', iconClass: 'devicon-python-plain icon', category: 'Programming Languages' },
  { name: 'JavaScript', iconClass: 'devicon-javascript-plain colored', category: 'Programming Languages' },
  { name: 'TypeScript', iconClass: 'devicon-typescript-plain colored', category: 'Programming Languages' },
  { name: 'Java', iconClass: 'devicon-java-plain colored', category: 'Programming Languages' },
  { name: 'C#', iconClass: 'devicon-csharp-plain colored', category: 'Programming Languages' },
  { name: 'React', iconClass: 'devicon-react-original colored', category: 'Frontend' },
  { name: 'Angular', iconClass: 'devicon-angularjs-plain colored', category: 'Frontend' },
  { name: 'FastAPI', iconClass: 'devicon-fastapi-plain colored', category: 'Backend' },
  { name: 'Flask', iconClass: 'devicon-flask-original colored', category: 'Backend' },
  { name: 'Django', iconClass: 'devicon-django-plain colored', category: 'Backend' },
  { name: '.NET', iconClass: 'devicon-dot-net-plain colored', category: 'Backend' },
  { name: 'Node.js', iconClass: 'devicon-nodejs-plain colored', category: 'Backend' },
  { name: 'PostgreSQL', iconClass: 'devicon-postgresql-plain colored', category: 'Database' },
  { name: 'MongoDB', iconClass: 'devicon-mongodb-plain colored', category: 'Database' },
  { name: 'SQL Server', iconClass: 'devicon-microsoftsqlserver-plain colored', category: 'Database' },
  { name: 'AWS', iconClass: 'devicon-amazonwebservices-plain colored', category: 'Cloud' },
  { name: 'Azure', iconClass: 'devicon-azure-plain colored', category: 'Cloud' },
  { name: 'Docker', iconClass: 'devicon-docker-plain colored', category: 'DevOps' },
  { name: 'Kubernetes', iconClass: 'devicon-kubernetes-plain colored', category: 'DevOps' },
  { name: 'Terraform', iconClass: 'devicon-terraform-plain colored', category: 'DevOps' },
  { name: 'Helm', iconClass: 'devicon-helm-plain colored', category: 'DevOps' },
  { name: 'Git', iconClass: 'devicon-git-plain colored', category: 'Version Control' },
  { name: 'Elasticsearch', iconClass: '', category: 'Analytics & Search', customIcon: <img src={elasticsearchIcon} alt="Elasticsearch" style={{ width: '69px', height: '120px' }} /> },
  { name: 'Splunk', iconClass: '', category: 'Analytics & Search', customIcon: <img src={splunkIcon} alt="Splunk" style={{ width: '120px', height: '120px' }} /> }
];

const Skills: React.FC = () => {
  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <div className="skills-container">
      {categories.map((category) => (
        <div key={category} className="skill-category">
          <h3>{category}</h3>
          <div className="skills-grid horizontal">
            {skills
              .filter(skill => skill.category === category)
              .map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-icon">
                    {skill.customIcon || <i className={skill.iconClass}></i>}
                  </div>
                  <span>{skill.name}</span>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills; 