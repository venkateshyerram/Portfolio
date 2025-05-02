import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import ExperienceTimeline from './components/ExperienceTimeline';
import Skills from './components/Skills';
import Accomplishments from './components/Accomplishments';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import 'devicon/devicon.min.css';
import './App.css';
import Recommendations from './components/Recommendations';
import Headline from './components/Headline';
import Games from './components/Games';

function App() {
  const [activeSection, setActiveSection] = useState('Projects');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="App">
      <Header />
      <Headline />
      <Navigation activeSection={activeSection} onSectionChange={handleSectionChange} />
      <main>
        {activeSection === 'Projects' && <Projects />}
        {activeSection === 'Experience' && <ExperienceTimeline />}
        {activeSection === 'Skills' && <Skills />}
        {activeSection === 'Accomplishments' && <Accomplishments />}
        {activeSection === 'Recommendations' && <Recommendations />}
        {activeSection === 'Games' && <Games />}
      </main>
      <Footer />
    </div>
  );
}

export default App; 