import React from 'react';

interface Recommendation {
  name: string;
  title: string;
  company: string;
  content: string;
  date: string;
}

const recommendations: Recommendation[] = [
  {
    name: "Charles Malone",
    title: "Applied Data Scientist",
    company: "Recommendation Systems | Neural Architecture Search | Decision Modeling AI | AI Agents | Generative AI | LLMs | Data Modeling | Statistical Analysis | Deep Learning",
    content: "Venkatesh is extremely hard-working, works through the problem, and has extreme knowledge about python. Learned a great deal about machine, learning and artificial intelligence using generative AI produced numerous projects and proof of concepts that yielded many successful projects.",
    date: "August 2024"
  },
  {
    name: "Supreetha Jonnavittula",
    title: "Program Manager & Lead Biz. Analyst",
    company: "Manomay Innsurtech",
    content: "I had the pleasure of working closely with Venky as his Project Manager on an in-house software development project, and I can't say enough about his dedication and contributions. Venky is the kind of team member every manager dreams of having. Always quick with solutions. No problem was too big or too small for him. He was one of the most reliable and dependable team member on the project to count on for any delivery. Very rare to find someone with so much passion for their work! I have no doubt that he is going to do beyond great in his future endeavors! :)",
    date: "October 2023"
  },
  {
    name: "Manmaya Ray",
    title: "Co-Founder",
    company: "iAssist Innovations Labs",
    content: "Venky was one of the key resources in iAssist. He had worked so well and handled the very first customer in iAssist with extreme patience. His dedication to work and commitment was highly appreciated, I am sure wherever Venky starts working it is going to be amazing and he will contribute his 500% effort for the success of the task. He would come up with new ideas and would be the first to implement also. Wishing all the very best in his next endeavor.",
    date: "October 2023"
  }
];

const Recommendations: React.FC = () => {
  return (
    <div className="recommendations">
      <h2>Recommendations</h2>
      <div className="recommendations-grid">
        {recommendations.map((rec, index) => (
          <div key={index} className="recommendation-card">
            <div className="recommendation-header">
              <h3>{rec.name}</h3>
              <div className="recommendation-meta">
                <span className="title">{rec.title}</span>
                <span className="company">{rec.company}</span>
                <span className="date">{rec.date}</span>
              </div>
            </div>
            <div className="recommendation-content">
              <p>{rec.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations; 