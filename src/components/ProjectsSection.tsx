import { useState } from 'react';
import { ArrowUpRight, Box } from 'lucide-react';
import type { ProjectItem } from '../data/portfolio';
import { ProjectModal } from './ProjectModal';
import { TechIcon } from './TechIcon';

interface ProjectsSectionProps {
  projects: ProjectItem[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projets" className="scroll-mt-24 border-b border-slate-800/80 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p aria-hidden="true" className="font-mono text-xs font-medium text-cyan-400/90">
              03 // RÉALISATIONS
            </p>
            <h2 className="mt-1.5 font-display text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Projets
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Architecture en conteneurs isolés, déploiements Linux et applications web
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group relative rounded-2xl bg-slate-800/90 p-[1px] transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:scale-[1.02] focus-within:-translate-y-0.5 focus-within:scale-[1.02]"
            >
              {/* Soft outer neon bloom */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-cyan-400/55 via-emerald-400/40 to-violet-500/55 opacity-0 blur-md transition-opacity duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-focus-within:opacity-100"
              />
              {/* Crisp 1px gradient neon border */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400 via-emerald-400 to-violet-500 opacity-0 transition-opacity duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-focus-within:opacity-100"
              />

              <div className="relative flex h-full flex-col justify-between rounded-[15px] bg-[#0b1222]/65 p-6 backdrop-blur-sm">
                <div>
                  {/* Isolated container header bar */}
                  <div className="flex items-center justify-between gap-3 border-b border-slate-800/80 pb-3 text-xs">
                    <span className="inline-flex items-center gap-1.5 font-mono text-cyan-300">
                      <Box className="h-3.5 w-3.5 text-cyan-400" aria-hidden="true" />
                      <span>{project.context}</span>
                    </span>
                    <span className="font-mono tabular-nums text-slate-500">
                      #{String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-slate-100 [text-wrap:balance]">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {project.shortDescription}
                  </p>
                </div>

                <div className="mt-6 border-t border-slate-800/80 pt-4">
                  <ul className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="inline-flex items-center gap-1.5 rounded-md border border-slate-800 bg-[#060a15] px-2.5 py-1 font-mono text-[11px] text-slate-300 transition-colors duration-150 group-hover:border-slate-700"
                      >
                        <TechIcon name={tech} className="h-3.5 w-3.5 shrink-0" />
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="mt-4 inline-flex min-h-[40px] items-center gap-1.5 font-mono text-xs font-medium text-cyan-300 transition-colors hover:text-cyan-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 rounded-sm"
                  >
                    <span>Inspecter le conteneur</span>
                    <ArrowUpRight
                      className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
