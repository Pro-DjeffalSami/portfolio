import { useState } from 'react';
import { ArrowUpRight, Check, Container, Download, MapPin, Terminal, Workflow } from 'lucide-react';
import type { ProfileData } from '../data/portfolio';

interface HeroSectionProps {
  profile: ProfileData;
  onDownloadCv: () => void;
  cvDownloaded: boolean;
}

export function HeroSection({ profile, onDownloadCv, cvDownloaded }: HeroSectionProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-slate-800/80 py-12 sm:py-16"
    >
      {/* Subtle midnight-cyan atmospheric backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_18%_0%,rgba(6,182,212,0.12),transparent_68%),radial-gradient(ellipse_55%_45%_at_85%_15%,rgba(16,185,129,0.06),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
          {/* Left column: Monospace display identity and terminal CTA */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-medium text-slate-400">
                <span className="inline-flex items-center gap-1.5 text-slate-200">
                  <MapPin className="h-3.5 w-3.5 text-cyan-400" aria-hidden="true" />
                  <span>{profile.contact.location}</span>
                </span>
                <span aria-hidden="true">·</span>
                <span>Stage conventionné 2 à 6 mois</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono tabular-nums text-emerald-400">
                  Nov. 2026 – Sept. 2027
                </span>
              </p>

              <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl lg:text-[3.5rem] [text-wrap:balance]">
                {profile.fullName}
              </h1>

              <p className="mt-4 font-display text-base font-medium leading-snug text-cyan-300 sm:text-lg [text-wrap:balance]">
                {profile.headline}
              </p>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300">
                {profile.subHeadline}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onDownloadCv}
                aria-label="Télécharger mon CV"
                className="inline-flex min-h-[44px] items-center gap-2.5 rounded-lg border border-cyan-400/60 bg-cyan-500/15 px-5 py-2.5 font-mono text-sm font-medium text-cyan-100 transition-[background-color,border-color,box-shadow,transform] duration-150 hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-cyan-500/25 hover:shadow-[0_0_24px_-4px_rgba(34,211,238,0.45)] active:translate-y-0 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
              >
                {cvDownloaded ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                    <span className="text-emerald-300">CV téléchargé (PDF)</span>
                  </>
                ) : (
                  <>
                    <span className="text-emerald-400" aria-hidden="true">&gt;</span>
                    <span>./download_cv.sh</span>
                    <Download className="h-4 w-4 text-cyan-300" aria-hidden="true" />
                  </>
                )}
              </button>

              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil LinkedIn de Sami Djeffal"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-slate-700/80 bg-[#0b1222]/80 px-5 py-2.5 text-sm font-medium text-slate-200 backdrop-blur-sm transition-[border-color,background-color,color,transform] duration-150 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-[#101930] hover:text-cyan-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-cyan-400" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right column: High-tech HUD profile panel with gradient perimeter and orbital portrait */}
          <div className="lg:col-span-5">
            <div className="relative h-full rounded-2xl bg-gradient-to-br from-cyan-400/35 via-slate-800/75 to-violet-500/30 p-[1px] shadow-[0_18px_50px_-18px_rgba(6,182,212,0.3)]">
              <div className="relative flex h-full flex-col justify-between rounded-[15px] bg-[#0a1120]/70 p-6 backdrop-blur-md sm:p-7">
                {/* Tactical corner brackets */}
                <span aria-hidden="true" className="pointer-events-none absolute top-2.5 left-2.5 h-2.5 w-2.5 border-t border-l border-cyan-400/60 rounded-tl-xs" />
                <span aria-hidden="true" className="pointer-events-none absolute top-2.5 right-2.5 h-2.5 w-2.5 border-t border-r border-cyan-400/60 rounded-tr-xs" />
                <span aria-hidden="true" className="pointer-events-none absolute bottom-2.5 left-2.5 h-2.5 w-2.5 border-b border-l border-emerald-400/50 rounded-bl-xs" />
                <span aria-hidden="true" className="pointer-events-none absolute bottom-2.5 right-2.5 h-2.5 w-2.5 border-b border-r border-violet-400/50 rounded-br-xs" />
                <div>
                  <div className="flex items-center gap-4 border-b border-slate-800/80 pb-5">
                    <div className="relative h-21 w-21 shrink-0 rounded-full bg-gradient-to-br from-cyan-400 via-emerald-400 to-violet-500 p-[2px] shadow-[0_0_24px_-6px_rgba(34,211,238,0.55)]">
                      <div className="h-full w-full overflow-hidden rounded-full bg-slate-900">
                        {!imgError ? (
                          <img
                            src={profile.photoUrl}
                            alt={`Portrait de ${profile.fullName}`}
                            width={80}
                            height={80}
                            referrerPolicy="no-referrer"
                            decoding="async"
                            fetchPriority="high"
                            onError={() => setImgError(true)}
                            className="h-full w-full scale-[1.04] object-cover object-center"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center font-display text-lg font-semibold text-cyan-200">
                            SD
                          </div>
                        )}
                      </div>
                    </div>
                  <div className="min-w-0">
                    <h2 className="font-display text-base font-semibold tracking-tight text-slate-100">
                      Synthèse du profil
                    </h2>
                    <p className="mt-0.5 text-xs text-slate-400">
                      {profile.fullName} · EPSI Lyon
                    </p>
                  </div>
                </div>

                <dl className="mt-3 divide-y divide-slate-800/80">
                  {profile.about.facts.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex flex-col gap-1 py-3 last:pb-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                    >
                      <dt className="text-xs font-medium text-slate-400 shrink-0">
                        {fact.label}
                      </dt>
                      <dd className="text-sm font-medium text-slate-100 sm:text-right">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-slate-800/80 pt-4 text-xs text-slate-400">
                <span>Accès direct</span>
                <div className="flex items-center gap-4">
                  <a
                    href="#projets"
                    className="font-medium text-slate-200 transition-colors hover:text-cyan-300 hover:underline hover:underline-offset-4 whitespace-nowrap"
                  >
                    Voir les projets
                  </a>
                  <span aria-hidden="true">·</span>
                  <a
                    href="#contact"
                    className="font-medium text-slate-200 transition-colors hover:text-cyan-300 hover:underline hover:underline-offset-4 whitespace-nowrap"
                  >
                    Me contacter
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-column summary strip below hero split */}
        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-cyan-500/20 bg-slate-800/60 backdrop-blur-sm sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-[#080e1c]/85 px-4 py-4">
            <p className="flex items-center gap-1.5 text-xs text-slate-400">
              <Terminal className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
              <span>Environnement principal</span>
            </p>
            <p className="mt-1 font-mono text-xs font-medium text-slate-100">
              Linux / Ubuntu · Bash · VPS
            </p>
          </div>
          <div className="bg-[#080e1c]/85 px-4 py-4">
            <p className="flex items-center gap-1.5 text-xs text-slate-400">
              <Container className="h-3.5 w-3.5 text-cyan-400" aria-hidden="true" />
              <span>Conteneurs &amp; Cloud</span>
            </p>
            <p className="mt-1 font-mono text-xs font-medium text-slate-100">
              Docker · Terraform · AWS · Azure
            </p>
          </div>
          <div className="bg-[#080e1c]/85 px-4 py-4">
            <p className="flex items-center gap-1.5 text-xs text-slate-400">
              <Workflow className="h-3.5 w-3.5 text-violet-400" aria-hidden="true" />
              <span>Automatisation &amp; CI/CD</span>
            </p>
            <p className="mt-1 font-mono text-xs font-medium text-slate-100">
              GitLab CI · GitHub Actions
            </p>
          </div>
          <div className="bg-[#080e1c]/85 px-4 py-4">
            <p className="flex items-center gap-1.5 text-xs text-slate-400">
              <MapPin className="h-3.5 w-3.5 text-cyan-400" aria-hidden="true" />
              <span>Mobilité stage</span>
            </p>
            <p className="mt-1 font-mono text-xs font-medium text-slate-100 tabular-nums">
              Lyon (69) et métropole
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
