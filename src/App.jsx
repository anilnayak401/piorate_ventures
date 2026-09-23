import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';

import Navbar from './components/Navbar';
import PiorateHero from './components/PiorateHero';
import PiorateProjects from './components/PiorateProjects';
import PiorateQuote from './components/PiorateQuote';
import PiorateExpertises from './components/PiorateExpertises';
import PiorateAbout from './components/PiorateAbout';

import InteractivePipeline from './components/InteractivePipeline';
import TechSpecsComparison from './components/TechSpecsComparison';
import RoiCalculator from './components/RoiCalculator';
import CaseStudy3D from './components/CaseStudy3D';

import FaqSection from './components/FaqSection';
import PiorateFooter from './components/PiorateFooter';
import CookieBanner from './components/CookieBanner';
import AuditModal from './components/AuditModal';

export default function App() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  useEffect(() => {
    // Initialize Lenis Smooth Kinetic Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleOpenAudit = () => {
    setIsAuditModalOpen(true);
  };

  const handleCloseAudit = () => {
    setIsAuditModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-[#161615] font-figtree antialiased selection:bg-[#161615] selection:text-white overflow-x-hidden relative">
      {/* 0. 3D Faceted Tiles Background Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-faceted-pattern opacity-15" />

      {/* 1. Header Navigation & Slide-Out Drawer */}
      <Navbar onOpenAudit={handleOpenAudit} />

      <main className="relative z-10">
        {/* 2. Piorate Hero Block */}
        <PiorateHero onOpenAudit={handleOpenAudit} />

        {/* 3. Piorate Projects Showcase with Sequence Canvas */}
        <PiorateProjects onOpenAudit={handleOpenAudit} />

        {/* 4. Piorate Quote / Statement Block */}
        <PiorateQuote />

        {/* 5. Piorate Expertises Tabs & Color Divider Bar */}
        <PiorateExpertises />

        {/* 6. Piorate Partners Wall & About Section */}
        <PiorateAbout onOpenAudit={handleOpenAudit} />

        {/* 7. Piorate Interactive Pipeline & ROI Simulator */}
        <div className="bg-transparent py-12 border-t border-[#E5E5E3]">
          <InteractivePipeline onOpenAudit={handleOpenAudit} />
        </div>

        <TechSpecsComparison onOpenAudit={handleOpenAudit} />

        <RoiCalculator onOpenAudit={handleOpenAudit} />

        {/* 8. Case Study Deep Dive */}
        <CaseStudy3D />

        {/* 9. Accordion FAQs */}
        <FaqSection />
      </main>

      {/* 10. Piorate Footer */}
      <PiorateFooter onOpenAudit={handleOpenAudit} />

      {/* 11. GDPR Cookie Consent Drawer */}
      <CookieBanner />

      {/* 12. Audit Modal */}
      <AuditModal isOpen={isAuditModalOpen} onClose={handleCloseAudit} />
    </div>
  );
}
