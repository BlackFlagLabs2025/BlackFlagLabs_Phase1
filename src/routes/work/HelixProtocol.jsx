import React from 'react';
import { usePreferencesStore } from '../../store/preferencesStore';
import translations from '../../data/translations';
import projects from '../../data/projects';
import CaseStudyLayout from '../../components/layout/CaseStudyLayout';

export default function HelixProtocol() {
  const { language } = usePreferencesStore();
  const t = translations[language]?.caseStudies?.helixProtocol || translations.en.caseStudies.helixProtocol;
  const project = projects.find(p => p.id === 'helix-protocol');

  return (
    <CaseStudyLayout
      title="Helix Protocol UI"
      subtitle="Futuristic cyber operating interface featuring modular control surfaces, holographic terminals, and protocol execution flows."
      heroImage={project?.img || '/screenshots/HelixUI1.png'}
      challenge={t.challenge}
      solution={t.solution}
      features={t.features}
      techStack={[
        'React + Vite',
        'Tailwind CSS',
        'Custom Animations',
        'BlackFlag UI Components',
        'AI Simulation Modules',
        'WebGL Terminal',
        'Protocol Execution Engine'
      ]}
      galleryImages={project?.gallery || [
        '/screenshots/HelixUI1.png',
        '/screenshots/HelixUI2.png',
        '/screenshots/HelixUI3.png',
        '/screenshots/HelixUI4.png'
      ]}
      liveUrl="https://www.helix-ui.xyz"
      language={language}
      t={t}
    />
  );
}
