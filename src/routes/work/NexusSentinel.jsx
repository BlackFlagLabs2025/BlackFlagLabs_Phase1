import React from 'react';
import { usePreferencesStore } from '../../store/preferencesStore';
import translations from '../../data/translations';
import projects from '../../data/projects';
import CaseStudyLayout from '../../components/layout/CaseStudyLayout';

export default function NexusSentinel() {
  const { language } = usePreferencesStore();
  const t = translations[language]?.caseStudies?.nexusSentinel || translations.en.caseStudies.nexusSentinel;
  const project = projects.find(p => p.id === 'nexus-sentinel');

  return (
    <CaseStudyLayout
      title="Nexus Sentinel AI"
      subtitle="Real-time cyber-intelligence dashboard with global threat visualization, autonomous analytics, and AI-driven risk detection."
      heroImage={project?.img || '/screenshots/NexusAI1.png'}
      challenge={t.challenge}
      solution={t.solution}
      features={t.features}
      techStack={[
        'React + Vite',
        'Tailwind CSS',
        'Custom Animations',
        'BlackFlag UI Components',
        'AI Simulation Modules',
        'WebGL Visualization',
        'Real-time Data Streams'
      ]}
      galleryImages={project?.gallery || [
        '/screenshots/NexusAI1.png',
        '/screenshots/NexusAI2.png',
        '/screenshots/NexusAI3.png',
        '/screenshots/NexusAI4.png'
      ]}
      liveUrl="https://www.sentinel-labs.xyz"
      language={language}
      t={t}
    />
  );
}
