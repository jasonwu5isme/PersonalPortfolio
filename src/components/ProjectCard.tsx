import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { ExternalLink, FileText, Info } from 'lucide-react';
import { ProjectPreviewFrame } from './ProjectPreviewFrame';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onOpenDetails,
  index,
}) => {
  const [isPdfAvailable, setIsPdfAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    if (project.pdfPath) {
      fetch(project.pdfPath, { method: 'HEAD' })
        .then((res) => {
          setIsPdfAvailable(res.ok && res.status !== 404);
        })
        .catch(() => {
          setIsPdfAvailable(false);
        });
    }
  }, [project.pdfPath]);

  return (
    <div className="group rounded-2xl bg-white dark:bg-[#111215] border border-neutral-200/80 dark:border-neutral-800/80 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-lg">
      <div>
        {/* Top Unboxed Metadata Header */}
        <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 mb-3">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-blue-600 dark:text-blue-400">{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>0{index + 1}</span>
          </div>
          <span className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500">
            {project.badgeText}
          </span>
        </div>

        {/* Title */}
        <div className="mb-3">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <div className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1 line-clamp-1">
            {project.subtitle}
          </div>
        </div>

        {/* Concise Project Nature & Attribution */}
        <div className="text-xs text-neutral-500 dark:text-neutral-400 mb-4 pb-3 border-b border-neutral-100 dark:border-neutral-800/60 leading-relaxed">
          <span>{project.nature}</span>
          {project.authors && (
            <span className="block text-neutral-600 dark:text-neutral-300 font-medium mt-0.5">
              署名：{project.authors}
            </span>
          )}
        </div>

        {/* Visual Mockup Container (16:10 aspect ratio) */}
        <div className="aspect-[16/10] w-full mb-6 overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900 transition-transform duration-300 group-hover:scale-[1.01]">
          <ProjectPreviewFrame project={project} />
        </div>

        {/* Description */}
        <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Capabilities / Tags */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-neutral-500 dark:text-neutral-400 mb-6">
          <span className="text-neutral-400 dark:text-neutral-500 font-mono text-[11px]">专业标签:</span>
          {project.tags.map((tag, i) => (
            <React.Fragment key={tag}>
              {i > 0 && <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">/</span>}
              <span className="text-neutral-700 dark:text-neutral-300">{tag}</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Action Buttons Zone */}
      <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/60 flex flex-wrap items-center justify-between gap-3">
        {/* Direct Demo / PDF / Case Action */}
        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-lg transition-colors shadow-2xs whitespace-nowrap cursor-pointer"
          >
            <span>在线体验 Demo</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        ) : isPdfAvailable && project.pdfPath ? (
          <a
            href={project.pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-2xs whitespace-nowrap cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>打开 PDF 报告</span>
            <ExternalLink className="w-3 h-3 ml-0.5" />
          </a>
        ) : (
          <button
            onClick={() => onOpenDetails(project)}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-blue-800 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-900/60 rounded-lg transition-colors hover:bg-blue-100 dark:hover:bg-blue-900/40 whitespace-nowrap cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>查看分析方案</span>
          </button>
        )}

        {/* Detailed Modal Trigger */}
        <button
          onClick={() => onOpenDetails(project)}
          className="inline-flex items-center gap-1 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 px-1 cursor-pointer whitespace-nowrap"
        >
          <Info className="w-3.5 h-3.5" />
          <span>案例详情</span>
        </button>
      </div>
    </div>
  );
};
