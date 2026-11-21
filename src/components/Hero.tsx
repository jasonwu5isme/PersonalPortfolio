import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowDown, ArrowUpRight, FileText } from 'lucide-react';
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

        {/* Three Primary Action Entries */}
        <div className="flex flex-wrap items-center gap-3.5">
          {/* Entry 1: 查看精选作品 */}
          <button
            onClick={() => onNavigateTab('projects')}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-full transition-all shadow-xs hover:shadow-md cursor-pointer whitespace-nowrap"
          >
            <span>查看精选作品</span>
            <ArrowDown className="w-4 h-4" />
          </button>

          {/* Entry 2: 查看个人履历 */}
          <button
            onClick={() => onNavigateTab('resume')}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200/80 dark:hover:bg-neutral-700/80 rounded-full transition-all cursor-pointer whitespace-nowrap"
          >
            <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>查看个人履历</span>
          </button>

          {/* Entry 3: 联系我 */}
          <button
            onClick={() => onNavigateTab('contact')}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-850 rounded-full transition-all cursor-pointer whitespace-nowrap"
          >
            <span>联系我</span>
            <ArrowUpRight className="w-4 h-4 text-neutral-400" />
          </button>
        </div>

      </div>
    </section>
  );
};
