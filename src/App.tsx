import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HomeFeatured } from './components/HomeFeatured';
import { ProjectsView } from './components/ProjectsView';
import { AboutSection } from './components/AboutSection';
import { ResumeView } from './components/ResumeView';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { PROJECTS } from './data/portfolioData';
import { Project, NavTab } from './types';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('shijie_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [activeTab, setActiveTab] = useState<NavTab>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '') as NavTab;
      if (['home', 'projects', 'about', 'resume', 'contact'].includes(hash)) {
        return hash;
      }
    }
    return 'home';
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Sync theme with HTML root element
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('shijie_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('shijie_theme', 'light');
    }
  }, [isDarkMode]);

  // Sync tab with URL hash and listen to browser navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as NavTab;
      if (['home', 'projects', 'about', 'resume', 'contact'].includes(hash)) {
        setActiveTab(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectTab = (tab: NavTab) => {
    setActiveTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCaseStudyFromResume = (projectId: string) => {
    const found = PROJECTS.find((p) => p.id === projectId);
    if (found) {
      setSelectedProject(found);
    } else {
      handleSelectTab('projects');
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0c] text-neutral-900 dark:text-neutral-100 transition-colors duration-200 flex flex-col justify-between">
      {/* Top Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />

      {/* Main Content Areas based on Active Tab */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            <Hero onNavigateTab={handleSelectTab} />
            <HomeFeatured
              projects={PROJECTS}
              onOpenDetails={(p) => setSelectedProject(p)}
              onNavigateTab={handleSelectTab}
            />
          </>
        )}

        {activeTab === 'projects' && (
          <ProjectsView
            onOpenDetails={(p) => setSelectedProject(p)}
          />
        )}

        {activeTab === 'about' && (
          <AboutSection />
        )}

        {activeTab === 'resume' && (
          <ResumeView
            onOpenProjectCaseStudy={handleOpenCaseStudyFromResume}
          />
        )}

        {activeTab === 'contact' && (
          <ContactSection />
        )}
      </main>

      {/* Footer */}
      <Footer onSelectTab={handleSelectTab} />

      {/* 6-Part Comprehensive Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
