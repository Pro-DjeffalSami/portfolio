import { useState } from 'react';
import type { SkillCategory } from '../data/portfolio';
import { filterSkillsByCategory, type SkillFilterId } from '../utils/portfolioLogic';
import { SkillCategoryIcon, TechIcon } from './TechIcon';

interface SkillsSectionProps {
  categories: SkillCategory[];
}

export function SkillsSection({ categories }: SkillsSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState<SkillFilterId>('all');
  const visibleCategories = filterSkillsByCategory(categories, selectedFilter);

  const filterOptions: Array<{ id: SkillFilterId; label: string }> = [
    { id: 'all', label: 'Toutes' },
    ...categories.map((cat) => ({ id: cat.id, label: cat.label })),
  ];

  return (
    <section id="competences" className="scroll-mt-24 border-b border-slate-800/80 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <p aria-hidden="true" className="font-mono text-xs font-medium text-cyan-400/90">
              02 // STACK TECHNIQUE
            </p>
            <h2 className="mt-1.5 font-display text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Compétences
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Administration Linux, conteneurisation, cloud, développement et CI/CD
            </p>
          </div>

          {/* Interactive category filter controls */}
          <div
            role="group"
            aria-label="Filtrer les compétences par domaine"
            className="flex flex-wrap items-center gap-1 self-start rounded-xl border border-slate-800/90 bg-[#0b1222]/85 p-1 xl:self-auto shrink-0"
          >
            {filterOptions.map((option) => {
              const isActive = selectedFilter === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setSelectedFilter(option.id)}
                  className={`min-h-[36px] rounded-lg px-3 py-1.5 font-mono text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-400/50'
                      : 'text-slate-400 border border-transparent hover:bg-slate-800/70 hover:text-slate-100'
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        <div
          data-testid="skills-grid"
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {visibleCategories.map((category) => {
            const isWideDevCard =
              selectedFilter === 'all' && category.id === 'developpement';
            return (
              <article
                key={category.id}
                className={`flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-[#0b1222]/65 p-6 backdrop-blur-sm transition-[border-color,box-shadow] duration-150 hover:border-cyan-400/35 ${
                  isWideDevCard ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-cyan-500/25 bg-[#060a15]">
                        <SkillCategoryIcon categoryId={category.id} className="h-4 w-4 text-cyan-300" />
                      </span>
                      <h3 className="font-display text-lg font-semibold text-slate-100">
                        {category.label}
                      </h3>
                    </div>
                    <span className="font-mono text-xs tabular-nums text-cyan-400">
                      {String(category.items.length).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-slate-400">
                    {category.summary}
                  </p>

                  {/* Code-tag styled technology badges with crisp tool icons */}
                  <ul className="mt-5 flex flex-wrap gap-2.5">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="group/chip inline-flex items-center gap-2 rounded-lg border border-slate-700/80 bg-[#060a15]/95 px-3 py-1.5 font-mono text-xs font-medium text-slate-200 transition-all duration-150 hover:-translate-y-0.5 hover:border-cyan-400/55 hover:bg-slate-900/90 hover:text-cyan-100 hover:shadow-[0_0_16px_-6px_rgba(34,211,238,0.45)]"
                      >
                        <TechIcon
                          name={item}
                          className="h-4 w-4 shrink-0 transition-transform duration-150 group-hover/chip:scale-110"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
