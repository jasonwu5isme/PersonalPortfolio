import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';
import { NavTab } from '../types';

interface HeroProps {
  onNavigateTab: (tab: NavTab) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateTab }) => {
  return (
    <section id="top" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Subtle ambient light gradient, strictly neutral with faint Apple blue hue */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[340px] bg-gradient-to-b from-blue-500/5 via-blue-500/0 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-6 relative">
        <p className="mb-4 text-sm font-medium tracking-wide text-neutral-500 dark:text-neutral-400">{PERSONAL_INFO.englishName}</p>
        <h1 className="mb-4 text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-6xl">
          {PERSONAL_INFO.name}
        </h1>
        <p className="mb-7 text-xl text-neutral-700 dark:text-neutral-300 sm:text-2xl">商业分析与数字化实践</p>

        {/* Bio Paragraph */}
        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl mb-10">
          {PERSONAL_INFO.shortBio}
        </p>

        <button
          onClick={() => onNavigateTab('projects')}
          className="inline-flex items-center gap-2 border-b border-current pb-1 text-sm font-medium text-neutral-900 hover:text-blue-700 dark:text-neutral-100 dark:hover:text-blue-400"
        >
          浏览项目
          <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </button>

      </div>
    </section>
  );
};
