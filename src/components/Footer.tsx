import type { ProfileData } from '../data/portfolio';

interface FooterProps {
  profile: ProfileData;
}

export function Footer({ profile }: FooterProps) {
  return (
    <footer className="border-t border-slate-800/80 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © 2026 {profile.fullName} · {profile.contact.location}
        </p>
        <div className="flex items-center gap-6">
          <a
            href="#top"
            className="transition-colors hover:text-cyan-300 whitespace-nowrap"
          >
            Haut de page
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Profil LinkedIn de Sami Djeffal"
            className="inline-flex items-center gap-1 rounded-md border border-slate-800 bg-[#0b1222] px-3 py-1.5 text-slate-200 transition-colors hover:border-cyan-400/50 hover:text-cyan-300 whitespace-nowrap"
          >
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
