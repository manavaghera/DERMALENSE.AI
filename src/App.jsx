import React, { useState } from 'react';
import Header from './components/Header';
import ParticleText from './components/ParticleText';
import Hero from './components/Hero';
import BenefitsSection from './components/BenefitsSection';
import CommunitySection from './components/CommunitySection';
import TechStackSection from './components/TechStackSection';
import WorkflowSection from './components/WorkflowSection';
import AboutSection from './components/AboutSection';
import DatasetsSection from './components/DatasetsSection';
import Footer from './components/Footer';
import RoleSelectionPage from './components/RoleSelectionPage';

function App() {
  const [language, setLanguage] = useState('en');
  const [currentPage, setCurrentPage] = useState('home');

  if (currentPage === 'role-select') {
    return <RoleSelectionPage onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className="min-h-screen bg-[#f5f1e9] font-sans text-[#102d2a]" style={{ backgroundImage: 'linear-gradient(rgba(16,45,42,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(16,45,42,.02) 1px, transparent 1px)', backgroundSize: '7px 7px, 9px 9px' }}>
      <Header language={language} setLanguage={setLanguage} onStartScreening={() => setCurrentPage('role-select')} />
      <div style={{ width: '100%', height: 260, background: '#f5f1e9' }}>
        <ParticleText
          text="DERMALENSE AI"
          particleSize={2.2}
          density={4}
          color="#102d2a"
          highlightColor="#a8d6bd"
          scatter={190}
          gatherDuration={1600}
          stagger={420}
          pointerRepel={42}
          repelRadius={120}
          idleDrift={0.8}
          trigger="mount"
          fontSize="clamp(3.5rem, 13vw, 9rem)"
          fontWeight={800}
          fontFamily="inherit"
          glow
        />
      </div>
      <main id="home">
        <Hero />
        <BenefitsSection />
        <CommunitySection language={language} />
        <TechStackSection />
        <WorkflowSection />
        <AboutSection language={language} />
        <DatasetsSection />
      </main>
      <Footer language={language} />
    </div>
  );
}

export default App;
