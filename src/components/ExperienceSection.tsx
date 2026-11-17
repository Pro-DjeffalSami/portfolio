import type { ExperienceItem } from '../data/portfolio';

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="experiences" className="scroll-mt-24 border-b border-slate-800/80 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p aria-hidden="true" className="font-mono text-xs font-medium text-cyan-400/90">
              04 // PARCOURS
            </p>
            <h2 className="mt-1.5 font-display text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Expériences professionnelles
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Stages en administration réseau et télécommunications
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="relative divide-y divide-slate-800/80 overflow-hidden rounded-2xl border border-slate-800/85 bg-[#0a1120]/65 backdrop-blur-sm">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
              />
              {experiences.map((exp) => (
                <article key={exp.id} className="p-6 sm:p-8">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="font-display text-xl font-semibold text-slate-100">
                      {exp.company} · {exp.location}
                    </h3>
                    <span className="font-mono text-xs font-medium tabular-nums text-cyan-300 shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  <p className="mt-1.5 font-mono text-xs font-medium text-emerald-400">
                    {exp.role} · {exp.description}
                  </p>

                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-300">
                    {exp.highlights.map((item, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span aria-hidden="true" className="text-slate-600">
                          —
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
