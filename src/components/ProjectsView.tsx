import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectCard } from './ProjectCard';

interface ProjectsViewProps {
  onOpenDetails: (project: Project) => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({ onOpenDetails }) => {
  const [selectedFilter, setSelectedFilter] = useState<'全部' | 'AI Applications' | 'Product Design' | 'Business Analysis'>('全部');

  // Featured projects
  const featuredProjects = PROJECTS.filter((p) => p.projectGroup === 'featured');

  // Filtered featured projects
  const filteredFeatured = selectedFilter === '全部'
    ? featuredProjects
    : featuredProjects.filter((p) => p.typeCategory === selectedFilter);

  // Completed projects in "More Projects" (e.g. Prezzee)
  const moreCompletedProjects = PROJECTS.filter(
    (p) => p.projectGroup === 'more' && p.isCompleted
  );

  const filteredMore = selectedFilter === '全部'
    ? moreCompletedProjects
    : moreCompletedProjects.filter((p) => p.typeCategory === selectedFilter);

  return (
    <div className="py-20 md:py-28 max-w-6xl mx-auto px-6">
      {/* Page Header */}
      <div className="max-w-3xl mb-12">
        <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">
          项目作品
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white [text-wrap:balance]">
          项目作品与案例分析
        </h1>
        <p className="text-base sm:text-lg text-neutral-500 dark:text-neutral-400 mt-3 leading-relaxed [text-wrap:balance]">
          围绕AI应用设计、协同产品机制及业务系统建模的代表性作品。每个案例均包含问题定义、个人工作、推导过程、交付成果与反思复盘。
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-1.5 mt-8 p-1.5 bg-neutral-100 dark:bg-neutral-900 rounded-xl max-w-fit border border-neutral-200/60 dark:border-neutral-800/60">
          {[
            { id: '全部', label: '全部项目' },
            { id: 'AI Applications', label: 'AI应用' },
            { id: 'Product Design', label: '产品设计' },
            { id: 'Business Analysis', label: '商业分析' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedFilter(cat.id as any)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                selectedFilter === cat.id
                  ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-2xs font-semibold'
                  : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Section A: Featured Projects (精选作品) */}
      <section className="mb-20">
        <div className="flex items-center justify-between pb-4 mb-8 border-b border-neutral-200/80 dark:border-neutral-800/80">
          <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white flex items-center gap-2">
            <span>精选代表作品</span>
            <span className="text-xs font-normal text-neutral-400">
              ({filteredFeatured.length} 个)
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredFeatured.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={onOpenDetails}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Section B: More Projects (更多项目 - Prezzee及未来实践) */}
      {filteredMore.length > 0 && (
        <section>
          <div className="flex items-center justify-between pb-4 mb-8 border-b border-neutral-200/80 dark:border-neutral-800/80">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
                更多项目实践
              </h2>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                校企合作商业增长与产品分析案例
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredMore.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenDetails={onOpenDetails}
                index={index + 3}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
