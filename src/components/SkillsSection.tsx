import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { CheckCircle2, Cpu, LineChart, Users2 } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <LineChart className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 1:
        return <Cpu className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      default:
        return <Users2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-neutral-200/80 dark:border-neutral-800/80">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            Section 03 · Skills & Methodologies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white [text-wrap:balance]">
            专业能力与工具体系
          </h2>
          <p className="text-base text-neutral-500 dark:text-neutral-400 mt-2">
            拒绝虚假的百分比评分条，聚焦具体应用场景与落地方案
          </p>
        </div>

        {/* 3 Skill Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-[#111215] border border-neutral-200/80 dark:border-neutral-800/80 flex flex-col justify-between hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800/80">
                    {getIcon(idx)}
                  </div>
                  <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-1">
                  {category.title}
                </h3>
                <div className="text-xs font-medium text-neutral-400 dark:text-neutral-500 mb-3">
                  {category.englishTitle}
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6">
                  {category.description}
                </p>

                {/* Skill Item List */}
                <div className="space-y-3">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-neutral-50/70 dark:bg-neutral-900/60 border border-neutral-100 dark:border-neutral-800/60"
                    >
                      <div className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 flex items-center justify-between">
                        <span>{skill.name}</span>
                      </div>
                      <div className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-1 leading-snug">
                        {skill.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800/60 text-[11px] text-neutral-400 font-mono">
                Practical Application Focus
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
