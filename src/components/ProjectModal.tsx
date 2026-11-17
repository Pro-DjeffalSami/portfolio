import { useEffect } from 'react';
import { X } from 'lucide-react';
import type { ProjectItem } from '../data/portfolio';
import { TechIcon } from './TechIcon';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#03050a]/80 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-xl rounded-2xl border border-cyan-500/30 bg-[#0b1222]/95 p-6 shadow-[0_0_48px_-12px_rgba(34,211,238,0.3)] backdrop-blur-md sm:p-8"
      >
        <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <p className="font-mono text-xs font-medium text-cyan-300">
              {project.context} · {project.environment}
            </p>
            <h3
              id="project-modal-title"
              className="mt-1.5 font-display text-xl font-semibold text-slate-50 sm:text-2xl [text-wrap:balance]"
            >
              {project.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer les détails du projet"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-[#060913] text-slate-400 transition-colors hover:border-cyan-400/50 hover:text-cyan-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-5">
          <p className="text-sm font-medium text-slate-200">
            {project.shortDescription}
          </p>

          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-300">
            {project.details.map((detail, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="pt-0.5 font-mono text-xs tabular-nums text-emerald-400 shrink-0">
                  {String(idx + 1).padStart(2, '0')}.
                </span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t border-slate-800 pt-4">
            <p className="text-xs text-slate-400">Technologies mobilisées</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="inline-flex items-center gap-1.5 rounded-md border border-slate-800 bg-[#060a15] px-2.5 py-1 font-mono text-xs text-cyan-200"
                >
                  <TechIcon name={tech} className="h-3.5 w-3.5 shrink-0" />
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
