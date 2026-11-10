import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Github, Mail } from 'lucide-react';
import { NavTab } from '../types';

interface FooterProps {
  onSelectTab: (tab: NavTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-[#0d0e11]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Copyright */}
          <div className="text-center md:text-left">
            <div className="text-sm font-bold text-neutral-900 dark:text-white">
              {PERSONAL_INFO.brandTitle}
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
              © 2026 Shijie Wu. Personal Portfolio.
            </div>
          </div>

          {/* 5-Tab Navigation Links in Footer */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-500 dark:text-neutral-400">
            <button
              onClick={() => onSelectTab('home')}
              className="hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              首页
            </button>
            <button
              onClick={() => onSelectTab('projects')}
              className="hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              项目作品
            </button>
            <button
              onClick={() => onSelectTab('about')}
              className="hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              关于我
            </button>
            <button
              onClick={() => onSelectTab('resume')}
              className="hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              个人履历
            </button>
            <button
              onClick={() => onSelectTab('contact')}
              className="hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              联系方式
            </button>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              {PERSONAL_INFO.email}
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 dark:hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="返回顶部"
            className="p-2.5 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-500 hover:text-neutral-900 dark:hover:text-white shadow-2xs hover:shadow-xs transition-all cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
