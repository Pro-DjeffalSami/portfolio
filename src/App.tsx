import { useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { ExperienceSection } from './components/ExperienceSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { TerminalBackground } from './components/TerminalBackground';
import { PORTFOLIO_DATA } from './data/portfolio';
import { triggerCvDownload } from './utils/portfolioLogic';

export default function App() {
  const [cvDownloaded, setCvDownloaded] = useState(false);

  const handleDownloadCv = () => {
    triggerCvDownload(PORTFOLIO_DATA);
    setCvDownloaded(true);
    setTimeout(() => {
      setCvDownloaded(false);
    }, 2500);
  };

  return (
    <div className="relative min-h-screen bg-[#060913] text-slate-100">
      <TerminalBackground />
      <div
        aria-hidden="true"
        className="cyber-grid-bg pointer-events-none fixed inset-0 z-[1] [mask-image:radial-gradient(ellipse_85%_80%_at_50%_20%,#000_55%,transparent_100%)]"
      />

      <div className="relative z-10">
        <a
          href="#contenu-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-cyan-500 focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:font-semibold focus:text-slate-950"
        >
          Aller au contenu principal
        </a>

        <Navbar onDownloadCv={handleDownloadCv} cvDownloaded={cvDownloaded} />

        <main id="contenu-principal">
        <HeroSection
          profile={PORTFOLIO_DATA}
          onDownloadCv={handleDownloadCv}
          cvDownloaded={cvDownloaded}
        />
        <AboutSection about={PORTFOLIO_DATA.about} />
        <SkillsSection categories={PORTFOLIO_DATA.skillCategories} />
        <ProjectsSection projects={PORTFOLIO_DATA.projects} />
        <ExperienceSection experiences={PORTFOLIO_DATA.experiences} />
        <ContactSection
          profile={PORTFOLIO_DATA}
          onDownloadCv={handleDownloadCv}
          cvDownloaded={cvDownloaded}
        />
      </main>

      <Footer profile={PORTFOLIO_DATA} />
      </div>
    </div>
  );
}
