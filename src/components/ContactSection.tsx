import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Download, Mail, MapPin, Phone } from 'lucide-react';
import type { ProfileData } from '../data/portfolio';

interface ContactSectionProps {
  profile: ProfileData;
  onDownloadCv: () => void;
  cvDownloaded: boolean;
}

export function ContactSection({
  profile,
  onDownloadCv,
  cvDownloaded,
}: ContactSectionProps) {
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);

  const handleCopy = async (field: 'email' | 'phone', value: string) => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
      }
    } catch {
      // Fallback safely ignored in restricted contexts
    }
    setCopiedField(field);
    setTimeout(() => {
      setCopiedField((current) => (current === field ? null : current));
    }, 2000);
  };

  return (
    <section id="contact" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-2xl border border-slate-800/90 bg-[#0a1120]/70 p-6 backdrop-blur-sm sm:p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/45 to-transparent"
          />
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <p aria-hidden="true" className="font-mono text-xs font-medium text-cyan-400/90">
                05 // CONNEXION
              </p>
              <h2 className="mt-1.5 font-display text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                Contact
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-300">
                Disponible immédiatement pour un stage conventionné de 2 à 6 mois à{' '}
                {profile.contact.location} (novembre 2026 – septembre 2027).
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={onDownloadCv}
                  aria-label="Télécharger mon CV"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-cyan-400/50 bg-cyan-500/15 px-4 py-2.5 font-mono text-xs font-medium text-cyan-100 transition-[background-color,border-color,box-shadow] duration-150 hover:border-cyan-300 hover:bg-cyan-500/25 hover:shadow-[0_0_20px_-4px_rgba(34,211,238,0.4)] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                >
                  {cvDownloaded ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                      <span className="text-emerald-300">CV téléchargé</span>
                    </>
                  ) : (
                    <>
                      <span className="text-emerald-400" aria-hidden="true">&gt;</span>
                      <span>./download_cv.sh</span>
                      <Download className="h-3.5 w-3.5 text-cyan-300" aria-hidden="true" />
                    </>
                  )}
                </button>

                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-slate-700/80 bg-[#060a15] px-4 py-2.5 text-sm font-medium text-slate-200 transition-colors duration-150 hover:border-cyan-400/50 hover:text-cyan-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="h-4 w-4 text-cyan-400" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="divide-y divide-slate-800/80 border-t border-slate-800/80 lg:col-span-7 lg:border-t-0 lg:border-l lg:border-slate-800/80 lg:pl-10">
              {/* Email row */}
              <div className="flex flex-col gap-3 py-4 first:pt-0 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-cyan-400 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-slate-400">E-mail</p>
                    <a
                      href={`mailto:${profile.contact.email}`}
                      className="text-sm font-medium text-slate-100 transition-colors hover:text-cyan-300"
                    >
                      {profile.contact.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy('email', profile.contact.email)}
                  aria-label="Copier l'adresse e-mail"
                  className="inline-flex min-h-[38px] items-center gap-1.5 self-start rounded-lg border border-slate-800 bg-[#060a15] px-3 py-1.5 font-mono text-xs font-medium text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-200 sm:self-auto whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                >
                  {copiedField === 'email' ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                      <span className="text-emerald-300">E-mail copié</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Copier</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone row */}
              <div className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-cyan-400 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-slate-400">Téléphone</p>
                    <a
                      href={profile.contact.phoneHref}
                      className="font-mono text-sm font-medium tabular-nums text-slate-100 transition-colors hover:text-cyan-300"
                    >
                      {profile.contact.phone}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy('phone', profile.contact.phone)}
                  aria-label="Copier le numéro de téléphone"
                  className="inline-flex min-h-[38px] items-center gap-1.5 self-start rounded-lg border border-slate-800 bg-[#060a15] px-3 py-1.5 font-mono text-xs font-medium text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-200 sm:self-auto whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                >
                  {copiedField === 'phone' ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                      <span className="text-emerald-300">Numéro copié</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Copier</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location row */}
              <div className="flex items-center gap-3 py-4 last:pb-0">
                <MapPin className="h-4 w-4 text-cyan-400 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-xs text-slate-400">Localisation</p>
                  <p className="text-sm font-medium text-slate-100">
                    {profile.contact.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
