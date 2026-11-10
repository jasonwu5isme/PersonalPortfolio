import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Sun, Moon, ArrowUpRight, Menu, X } from 'lucide-react';
import { NavTab } from '../types';

interface NavbarProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  isDarkMode,
  toggleDarkMode,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: NavTab; label: string }[] = [
    { id: 'home', label: '首页' },
    { id: 'projects', label: '项目作品' },
    { id: 'about', label: '关于我' },
    { id: 'resume', label: '个人履历' },
    { id: 'contact', label: '联系方式' },
  ];

  const handleNavClick = (tabId: NavTab) => {
    onSelectTab(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 dark:bg-[#0a0a0c]/85 backdrop-blur-md border-b border-neutral-200/80 dark:border-neutral-800/80 py-3 shadow-xs'
          : 'bg-white/40 dark:bg-[#0a0a0c]/40 backdrop-blur-xs py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-6">
        {/* Zone 1: Brand wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="group flex items-center gap-2 text-base font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 whitespace-nowrap shrink-0 cursor-pointer text-left"
        >
          <span>{PERSONAL_INFO.brandTitle}</span>
          <span className="text-xs font-normal text-neutral-400 dark:text-neutral-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            / 作品集
          </span>
        </button>

        {/* Zone 2: Five 1st-level Navigation Tabs (Simplified Chinese as instructed) */}
        <nav className="hidden md:flex items-center gap-1.5 text-sm font-medium">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeTab === item.id
                  ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white font-semibold shadow-2xs'
                  : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-850'
              }`}
            >
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Zone 3: Utilities & Contact CTA */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Theme Switcher */}
          <button
            onClick={toggleDarkMode}
            aria-label="切换浅色与深色模式"
            className="p-2 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Quick Contact Button */}
          <button
            onClick={() => handleNavClick('contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 rounded-full hover:bg-neutral-800 dark:hover:bg-white transition-all shadow-xs hover:shadow whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>取得联系</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg"
            aria-label="打开菜单"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-[#0a0a0c]/95 backdrop-blur-md px-6 py-4 flex flex-col gap-2 text-sm font-medium">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-left py-2 px-3 rounded-lg flex items-center justify-between text-xs ${
                activeTab === item.id
                  ? 'bg-neutral-100 dark:bg-neutral-800 font-semibold text-neutral-900 dark:text-white'
                  : 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-850'
              }`}
            >
              <span>{item.label}</span>
            </button>
          ))}
          <button
            onClick={() => handleNavClick('contact')}
            className="mt-3 text-center py-2 text-xs font-semibold text-white bg-blue-600 rounded-full"
          >
            取得联系
          </button>
        </div>
      )}
    </header>
  );
};
