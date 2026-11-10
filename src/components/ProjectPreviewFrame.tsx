import React, { useState } from 'react';
import { Project } from '../types';
import { Monitor, FileText, Laptop } from 'lucide-react';

interface ProjectPreviewFrameProps {
  project: Project;
}

export const ProjectPreviewFrame: React.FC<ProjectPreviewFrameProps> = ({ project }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Dynamic aesthetic frame background matching project visual tone
  const getFrameBg = () => {
    if (project.id === 'traderemix-ai') return 'bg-[#070f20]';
    if (project.id === 'zeekr-flow') return 'bg-black';
    if (project.id === 'idle-fish-analysis') return 'bg-[#f5f7fa] dark:bg-[#121316]';
    return 'bg-neutral-100 dark:bg-neutral-900';
  };

  const getImageStyle = () => {
    if (project.id === 'traderemix-ai') return 'object-contain p-1.5 sm:p-2';
    if (project.id === 'zeekr-flow') return 'object-contain';
    if (project.id === 'idle-fish-analysis') return 'object-cover object-top';
    return 'object-cover object-top';
  };

  return (
    <div className={`relative w-full h-full ${getFrameBg()} overflow-hidden rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 flex items-center justify-center`}>
      {/* Real Image Attempt (loads if user provides the file in assets/projects/) */}
      {!imageError && (
        <img
          src={project.imagePath}
          alt={`${project.title} 界面预览`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          className={`w-full h-full ${getImageStyle()} transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}

      {/* Clean, editorial placeholder without showing internal file paths or upload tutorials */}
      {(imageError || !imageLoaded) && (
        <div className="absolute inset-0 flex flex-col justify-between p-5 bg-gradient-to-b from-neutral-50 to-neutral-100/90 dark:from-neutral-900 dark:to-[#0f1013] text-neutral-600 dark:text-neutral-300">
          {/* Top header */}
          <div className="flex items-center justify-between text-xs pb-2 border-b border-neutral-200/70 dark:border-neutral-800/70">
            <div className="flex items-center gap-1.5 font-medium text-neutral-700 dark:text-neutral-300">
              <Laptop className="w-3.5 h-3.5 text-neutral-400" />
              <span>{project.englishTitle}</span>
            </div>
            <span className="text-[11px] font-mono text-neutral-400">
              {project.badgeText}
            </span>
          </div>

          {/* Center Graphic & Info */}
          <div className="text-center py-3 px-2 my-auto">
            <div className="w-10 h-10 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center mx-auto mb-2 text-neutral-500 shadow-2xs">
              {project.type === 'live-demo' ? (
                <Monitor className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              ) : (
                <FileText className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              )}
            </div>
            <div className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">
              {project.title}
            </div>
            <div className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-1 line-clamp-1">
              {project.subtitle}
            </div>
          </div>

          {/* Bottom Nature Notice */}
          <div className="pt-2 border-t border-neutral-200/70 dark:border-neutral-800/70 flex items-center justify-between text-[11px] text-neutral-400 dark:text-neutral-500">
            <span className="truncate">{project.category}</span>
            {project.demoUrl ? (
              <span className="text-blue-600 dark:text-blue-400 font-medium shrink-0">
                支持在线体验 →
              </span>
            ) : (
              <span className="text-amber-600 dark:text-amber-400 font-medium shrink-0">
                查看案例解析 →
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
