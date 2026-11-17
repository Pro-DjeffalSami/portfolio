import type { ProfileData } from '../data/portfolio';

interface AboutSectionProps {
  about: ProfileData['about'];
}

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section id="apropos" className="scroll-mt-24 border-b border-slate-800/80 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p aria-hidden="true" className="font-mono text-xs font-medium text-cyan-400/90">
              01 // PROFIL
            </p>
            <h2 className="mt-1.5 font-display text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              À propos
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Parcours académique et disponibilité
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="relative overflow-hidden rounded-2xl border border-slate-800/85 bg-[#0a1120]/65 p-6 backdrop-blur-sm sm:p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
              />
              <p className="text-lg font-medium leading-relaxed text-slate-100">
                {about.lead}
              </p>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-300">
                {about.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
