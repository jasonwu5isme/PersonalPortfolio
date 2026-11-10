import React from 'react';
import { Project, NavTab } from '../types';
import { ProjectPreviewFrame } from './ProjectPreviewFrame';
import { ExternalLink, FileText, ArrowRight, Info } from 'lucide-react';

interface HomeFeaturedProps {
  projects: Project[];
  onOpenDetails: (project: Project) => void;
  onNavigateTab: (tab: NavTab) => void;
}

export const HomeFeatured: React.FC<HomeFeaturedProps> = ({
  projects,
  onOpenDetails,
  onNavigateTab,
}) => {
  const featured = projects.filter((p) => p.projectGroup === 'featured');

  return (
    <section className="py-16 md:py-24 border-t border-neutral-200/80 dark:border-neutral-800/80">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">
              精选代表作品
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
              精选项目与交互原型
            </h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
              从业务问题到交互方案，查看项目思路与实际交付。
            </p>
          </div>

          <button
            onClick={() => onNavigateTab('projects')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors whitespace-nowrap cursor-pointer"
          >
            <span>进入全部项目作品</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 3 Compact Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {featured.map((project, idx) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-white dark:bg-[#111215] border border-neutral-200/80 dark:border-neutral-800/80 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-md"
            >
              <div>
                {/* Visual Screenshot Frame */}
                <div className="aspect-[16/10] w-full mb-4 overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900">
                  <ProjectPreviewFrame project={project} />
                </div>

                {/* Metadata */}
                <div className="flex items-center justify-between text-xs text-neutral-400 dark:text-neutral-500 mb-1.5 font-mono">
                  <span>0{idx + 1} · {project.category}</span>
                  <span>{project.badgeText}</span>
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-bold tracking-tight text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <div className="text-xs text-neutral-400 dark:text-neutral-500 mb-3">
                  {project.subtitle}
                  {project.authors && <span className="ml-1.5">({project.authors})</span>}
                </div>

                {/* Capability Tags */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-neutral-500 dark:text-neutral-400 mb-6">
                  {project.tags.map((tag, tIdx) => (
                    <React.Fragment key={tag}>
                      {tIdx > 0 && <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">·</span>}
                      <span className="text-neutral-700 dark:text-neutral-300 text-[11px]">{tag}</span>
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Action Buttons Zone */}
              <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800/60 flex items-center justify-between gap-2">
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors whitespace-nowrap cursor-pointer shadow-2xs"
                  >
                    <span>在线体验原型</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : project.pdfPath ? (
                  <a
                    href={project.pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors whitespace-nowrap cursor-pointer shadow-2xs"
                  >
                    <FileText className="w-3 h-3" />
                    <span>打开 PDF 报告</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                ) : (
                  <button
                    onClick={() => onOpenDetails(project)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-900/60 rounded-lg hover:bg-amber-100 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <FileText className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                    <span>查看分析方案</span>
                  </button>
                )}

                <button
                  onClick={() => onOpenDetails(project)}
                  className="inline-flex items-center gap-1 text-xs font-medium text-neutral-500 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400 transition-colors py-1 cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>案例详情</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
