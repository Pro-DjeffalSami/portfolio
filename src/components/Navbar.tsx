import { useEffect, useState } from 'react';
import { Check, Download, Menu, Terminal, X } from 'lucide-react';
import { computeScrollProgress, resolveActiveSection } from '../utils/navLogic';

interface NavbarProps {
  onDownloadCv: () => void;
  cvDownloaded: boolean;
}

const NAV_LINKS = [
  { id: 'apropos', index: '01', href: '#apropos', label: 'À propos' },
  { id: 'competences', index: '02', href: '#competences', label: 'Compétences' },
  { id: 'projets', index: '03', href: '#projets', label: 'Projets' },
  { id: 'experiences', index: '04', href: '#experiences', label: 'Expériences' },
  { id: 'contact', index: '05', href: '#contact', label: 'Contact' },
];

export function Navbar({ onDownloadCv, cvDownloaded }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string>('apropos');

  useEffect(() => {
    let rafId = 0;

    const updateNavTelemetry = () => {
      rafId = 0;
      const progress = computeScrollProgress(
        window.scrollY,
        document.documentElement.scrollHeight,
        window.innerHeight
      );
      setScrollProgress(progress);

      const positions = NAV_LINKS.map((link) => {
        const el = document.getElementById(link.id);
        return {
          id: link.id,
          top: el ? el.getBoundingClientRect().top : Number.POSITIVE_INFINITY,
        };
      });
      setActiveSection(resolveActiveSection(positions, 160));
    };

    const handleScroll = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(updateNavTelemetry);
      }
    };

    updateNavTelemetry();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-2xl bg-gradient-to-r from-cyan-400/40 via-slate-700/55 to-violet-500/40 p-[1px] shadow-[0_14px_44px_-14px_rgba(6,182,212,0.3)]">
        <div className="relative overflow-hidden rounded-[15px] bg-[#070c18]/85 px-4 backdrop-blur-xl sm:px-5">
          {/* Top specular cyber edge */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent"
          />

          <div className="flex h-15 items-center justify-between gap-4">
            {/* Zone 1: Futuristic hardware-terminal brand mark */}
            <a
              href="#top"
              className="group inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-400/40 bg-gradient-to-br from-cyan-500/20 to-emerald-500/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-colors duration-150 group-hover:border-cyan-300/70">
                <Terminal className="h-4 w-4 text-cyan-300" aria-hidden="true" />
              </span>
              <span className="font-display text-sm font-semibold tracking-tight text-slate-50 sm:text-base">
                Sami Djeffal
              </span>
              <span
                aria-hidden="true"
                className="hidden xl:inline font-mono text-xs text-cyan-400/75"
              >
                ~/devops
              </span>
            </a>

            {/* Zone 2: Precision segmented command dock with active scroll-spy */}
            <nav
              aria-label="Navigation principale"
              className="hidden md:flex items-center gap-1 rounded-xl border border-slate-800/90 bg-[#050811]/90 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
            >
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? 'location' : undefined}
                    className={`relative inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 lg:px-3 ${
                      isActive
                        ? 'border border-cyan-400/45 bg-cyan-500/15 text-cyan-100 shadow-[0_0_16px_-6px_rgba(34,211,238,0.5)]'
                        : 'border border-transparent text-slate-400 hover:bg-slate-800/65 hover:text-slate-100'
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`font-mono text-[10px] tabular-nums ${
                        isActive ? 'text-emerald-400' : 'text-slate-500'
                      }`}
                    >
                      {link.index}
                    </span>
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </nav>

            {/* Zone 3: Cyber gradient terminal CV trigger + mobile menu toggle */}
            <div className="flex items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={onDownloadCv}
                aria-label="Télécharger mon CV"
                className="group relative hidden sm:inline-flex items-center gap-2 overflow-hidden rounded-xl border border-cyan-400/50 bg-gradient-to-r from-cyan-500/18 via-cyan-400/10 to-emerald-500/15 px-3.5 py-2 font-mono text-xs font-medium text-cyan-100 shadow-[0_0_20px_-6px_rgba(34,211,238,0.45)] transition-all duration-150 hover:border-cyan-300 hover:from-cyan-500/28 hover:to-emerald-500/25 hover:shadow-[0_0_24px_-4px_rgba(34,211,238,0.65)] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
              >
                {cvDownloaded ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                    <span className="text-emerald-300">cv_ready.pdf</span>
                  </>
                ) : (
                  <>
                    <span className="text-emerald-400" aria-hidden="true">
                      &gt;
                    </span>
                    <span>./download_cv.sh</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
                aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-[#050811] text-slate-300 transition-colors hover:border-cyan-400/50 hover:text-cyan-200 md:hidden cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <Menu className="h-5 w-5" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {/* Bottom live scroll-progress laser line */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-slate-800/40"
          >
            <div
              style={{ transform: `scaleX(${scrollProgress})` }}
              className="h-full origin-left bg-gradient-to-r from-cyan-400 via-emerald-400 to-violet-500 transition-transform duration-75"
            />
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Navigation mobile"
          className="mx-auto mt-2 max-w-6xl rounded-2xl border border-cyan-400/30 bg-[#070c18]/95 px-5 py-4 shadow-[0_18px_40px_-12px_rgba(6,182,212,0.3)] backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-1.5">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex min-h-[44px] items-center justify-between rounded-xl px-3 text-sm font-medium transition-colors ${
                    isActive
                      ? 'border border-cyan-400/40 bg-cyan-500/15 text-cyan-100'
                      : 'text-slate-300 hover:bg-slate-800/50 hover:text-cyan-300'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-xs text-cyan-400/80">{link.index}</span>
                </a>
              );
            })}
            <button
              type="button"
              onClick={() => {
                onDownloadCv();
                setMobileMenuOpen(false);
              }}
              aria-label="Télécharger mon CV"
              className="mt-2 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-cyan-400/50 bg-gradient-to-r from-cyan-500/20 to-emerald-500/15 px-4 py-2.5 font-mono text-sm font-medium text-cyan-100 transition-colors hover:border-cyan-300 cursor-pointer"
            >
              <Download className="h-4 w-4 text-emerald-400" aria-hidden="true" />
              <span>&gt; ./download_cv.sh</span>
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
