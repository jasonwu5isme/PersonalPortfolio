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
        {/* Identity Kicker */}
        <div className="inline-flex items-center gap-2 text-xs md:text-sm font-medium tracking-wide text-neutral-500 dark:text-neutral-400 mb-6">
          <span className="text-neutral-900 dark:text-neutral-100 font-semibold">{PERSONAL_INFO.name} ({PERSONAL_INFO.englishName})</span>
          <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">·</span>
          <span>{PERSONAL_INFO.role}</span>
        </div>

        {/* Primary Chinese Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.12] mb-6 max-w-4xl [text-wrap:balance]">
          {PERSONAL_INFO.mainHeadline}
        </h1>

        {/* English Complementary Headline */}
        <p className="text-xl sm:text-2xl md:text-3xl font-light tracking-tight text-neutral-400 dark:text-neutral-500 mb-8 [text-wrap:balance]">
          {PERSONAL_INFO.subHeadline}
        </p>

        {/* Bio Paragraph */}
        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl mb-10">
          {PERSONAL_INFO.shortBio}
        </p>

        {/* Three Primary Action Entries */}
        <div className="flex flex-wrap items-center gap-3.5 mb-16">
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

        {/* 30秒快速了解 */}
        <div className="pt-8 border-t border-neutral-200/80 dark:border-neutral-800/80">
          <div className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-4">
            30秒快速了解
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            <div className="p-4 rounded-xl bg-neutral-50/70 dark:bg-neutral-900/40 border border-neutral-200/60 dark:border-neutral-800/60">
              <div className="text-xs font-semibold text-neutral-500 mb-1">
                1. 我是谁？
              </div>
              <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                悉尼大学 2027 届硕士在读
              </div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 leading-relaxed">
                商业信息系统硕士 · 市场营销本科（暨大2+2/中留服认证）
              </div>
            </div>

            <div className="p-4 rounded-xl bg-neutral-50/70 dark:bg-neutral-900/40 border border-neutral-200/60 dark:border-neutral-800/60">
              <div className="text-xs font-semibold text-neutral-500 mb-1">
                2. 我擅长什么？
              </div>
              <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                需求分析 · UML系统建模 · 原型验证
              </div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 leading-relaxed">
                聚焦AI/互联网产品经理、商业分析与企业数字化岗位
              </div>
            </div>

            <div className="p-4 rounded-xl bg-neutral-50/70 dark:bg-neutral-900/40 border border-neutral-200/60 dark:border-neutral-800/60">
              <div className="text-xs font-semibold text-neutral-500 mb-1">
                3. 在哪查看作品？
              </div>
              <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                精选代表作品 · 在线原型
              </div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 leading-relaxed">
                TradeRemix AI · ZEEKR Flow · 闲鱼 · Together Pass
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
