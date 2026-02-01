import React from 'react';
import { usePreferencesStore } from '../../store/preferencesStore';
import translations from '../../data/translations';
import projects from '../../data/projects';
import CaseStudyLayout from '../../components/layout/CaseStudyLayout';

export default function AetherCommerce() {
  const { language } = usePreferencesStore();
  const t = translations[language]?.caseStudies?.aetherCommerce || translations.en.caseStudies.aetherCommerce;
  const project = projects.find(p => p.id === 'aether-commerce');

  return (
    <CaseStudyLayout
      title="Aether Commerce Engine"
      subtitle="Next-gen commerce engine with quantum-responsive UI, intelligent pricing matrices, and instant checkout logic."
      heroImage={project?.img || '/screenshots/AetherCommerceEngine1.png'}
      challenge={t.challenge}
      solution={t.solution}
      features={t.features}
      techStack={[
        'React + Vite',
        'Tailwind CSS',
        'Custom Animations',
        'BlackFlag UI Components',
        'AI Pricing Engine',
        'Stripe Integration',
        'Real-time Inventory'
      ]}
      galleryImages={project?.gallery || [
        '/screenshots/AetherCommerceEngine1.png',
        '/screenshots/AetherCommerceEngine2.png',
        '/screenshots/AetherCommerceEngine3.png',
        '/screenshots/AetherCommerceEngine4.png'
      ]}
      liveUrl="https://aethercommerce.xyz"
      language={language}
      t={t}
    />
  );
}
