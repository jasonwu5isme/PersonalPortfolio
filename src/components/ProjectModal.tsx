import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { X, ExternalLink, CheckCircle2, RotateCcw, FileText } from 'lucide-react';
import { ProjectPreviewFrame } from './ProjectPreviewFrame';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'problem' | 'contribution' | 'process' | 'deliverables' | 'reflection'>('overview');
  const [isPdfAvailable, setIsPdfAvailable] = useState<boolean | null>(null);

  // Reset tab and check PDF availability whenever project changes
  useEffect(() => {
    if (project) {
      setActiveTab('overview');
      if (project.pdfPath) {
        fetch(project.pdfPath, { method: 'HEAD' })
          .then((res) => {
            setIsPdfAvailable(res.ok && res.status !== 404);
          })
          .catch(() => {
            setIsPdfAvailable(false);
          });
      } else {
        setIsPdfAvailable(false);
      }
    }
  }, [project]);

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  const tabs: { id: typeof activeTab; label: string }[] = [
    { id: 'overview', label: '项目概览' },
    { id: 'problem', label: '解决什么问题' },
    { id: 'contribution', label: '我的工作' },
    { id: 'process', label: '设计过程' },
    { id: 'deliverables', label: '项目成果' },
    { id: 'reflection', label: '局限与改进' },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#121316] rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-2xl flex flex-col overflow-hidden text-neutral-900 dark:text-neutral-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="flex items-start justify-between p-5 sm:p-7 border-b border-neutral-100 dark:border-neutral-800">
          <div className="pr-4">
            <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 mb-1.5">
              <span className="font-semibold text-blue-600 dark:text-blue-400">{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>{project.nature}</span>
            </div>
            <h2 id="modal-title" className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
              {project.title}
            </h2>
            <div className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
              {project.subtitle}
              {project.authors && (
                <span className="ml-2 font-medium text-neutral-600 dark:text-neutral-300">
                  (署名：{project.authors})
                </span>
              )}
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="关闭详情弹窗"
            className="p-2 text-neutral-400 hover:text-neutral-900 dark:hover:text-white rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors shrink-0 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 6 Tab Buttons as specified: 项目概览、解决什么问题、我的工作、设计过程、项目成果、局限与改进 */}
        <div className="flex items-center gap-2 px-5 sm:px-7 border-b border-neutral-100 dark:border-neutral-800 text-xs sm:text-sm font-medium overflow-x-auto py-2 bg-neutral-50/50 dark:bg-neutral-900/30">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white font-semibold shadow-2xs'
                  : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 hover:bg-neutral-200/50 dark:hover:bg-neutral-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6 flex-1 text-sm leading-relaxed">
          {/* Tab 1: 项目概览 */}
          {activeTab === 'overview' && (
            <div className="space-y-4">
              {project.imagePath && (
                <div className="aspect-[16/9] sm:aspect-[16/8.5] w-full overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80">
                  <ProjectPreviewFrame project={project} />
                </div>
              )}

              <div className="p-4 sm:p-5 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/70 dark:border-neutral-800/70 space-y-3">
                <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  项目基本信息
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div>
                    <span className="text-neutral-400">研究背景：</span>
                    <span className="text-neutral-700 dark:text-neutral-300 font-medium ml-1">
                      {caseStudy.overview.background}
                    </span>
                  </div>
                  <div>
                    <span className="text-neutral-400">面向对象：</span>
                    <span className="text-neutral-700 dark:text-neutral-300 font-medium ml-1">
                      {caseStudy.overview.target}
                    </span>
                  </div>
                  <div>
                    <span className="text-neutral-400">项目性质：</span>
                    <span className="text-neutral-700 dark:text-neutral-300 font-medium ml-1">
                      {caseStudy.overview.nature}
                    </span>
                  </div>
                  <div>
                    <span className="text-neutral-400">项目时间：</span>
                    <span className="text-neutral-700 dark:text-neutral-300 font-mono font-medium ml-1">
                      {caseStudy.overview.period}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-neutral-200/60 dark:border-neutral-800/60 text-xs sm:text-sm">
                  <span className="text-neutral-400">职责概括：</span>
                  <span className="text-neutral-800 dark:text-neutral-200 font-medium ml-1">
                    {caseStudy.overview.myRole}
                  </span>
                </div>
              </div>

              {project.natureNote && (
                <div className="text-xs text-neutral-500 dark:text-neutral-400 p-3 rounded-lg bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200/50 dark:border-neutral-800/50">
                  说明：{project.natureNote}
                </div>
              )}
            </div>
          )}

          {/* Tab 2: 解决什么问题 */}
          {activeTab === 'problem' && (
            <div className="space-y-4">
              <div className="p-4 sm:p-5 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/70 dark:border-neutral-800/70">
                <div className="text-xs font-semibold text-neutral-500 mb-2">
                  核心问题定义
                </div>
                <p className="text-neutral-700 dark:text-neutral-300 text-xs sm:text-sm leading-relaxed">
                  {caseStudy.problem.statement}
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-blue-50/40 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/40">
                <div className="text-xs font-semibold text-blue-700 dark:text-blue-400 mb-2">
                  为什么值得解决
                </div>
                <p className="text-neutral-700 dark:text-neutral-300 text-xs sm:text-sm leading-relaxed">
                  {caseStudy.problem.whyItMatters}
                </p>
              </div>
            </div>
          )}

          {/* Tab 3: 我的工作 */}
          {activeTab === 'contribution' && (
            <div className="space-y-3">
              <div className="text-xs font-semibold text-neutral-500 mb-2">
                具体负责的工作内容
              </div>
              {caseStudy.myContribution.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/70 dark:border-neutral-800/70 flex items-start gap-3 text-xs sm:text-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-neutral-700 dark:text-neutral-300 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tab 4: 设计过程 */}
          {activeTab === 'process' && (
            <div className="space-y-4">
              <div className="text-xs font-semibold text-neutral-500 mb-1">
                分析与设计推导步骤
              </div>

              <div className="space-y-3.5">
                {caseStudy.designProcess.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/70 dark:border-neutral-800/70"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
                        {step.step}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white">
                        {step.title}
                      </h4>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed ml-7">
                      {step.description}
                    </p>

                    {step.keyDecisions && step.keyDecisions.length > 0 && (
                      <div className="mt-2.5 ml-7 pt-2 border-t border-neutral-200/60 dark:border-neutral-800/60 text-xs">
                        <div className="text-[11px] font-semibold text-neutral-500 mb-1">
                          关键决策：
                        </div>
                        <div className="space-y-1 text-neutral-700 dark:text-neutral-300">
                          {step.keyDecisions.map((dec, dIdx) => (
                            <div key={dIdx} className="flex items-start gap-1">
                              <span className="text-blue-600 dark:text-blue-400">·</span>
                              <span>{dec}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 5: 项目成果 */}
          {activeTab === 'deliverables' && (
            <div className="space-y-3">
              <div className="text-xs font-semibold text-neutral-500 mb-2">
                实际完成交付物
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {caseStudy.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-900/70 border border-neutral-200/60 dark:border-neutral-800/60 text-xs text-neutral-700 dark:text-neutral-300 flex items-center gap-2.5"
                  >
                    <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {isPdfAvailable && project.pdfPath && (
                <div className="pt-3">
                  <a
                    href={project.pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium transition-colors"
                  >
                    <span>在新标签页打开 PDF 报告</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          )}

          {/* Tab 6: 局限与改进 */}
          {activeTab === 'reflection' && (
            <div className="p-4 sm:p-5 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/70 dark:border-neutral-800/70 space-y-4">
              <div className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 flex items-center gap-1.5">
                <RotateCcw className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>局限说明与改进设想</span>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <div className="font-semibold text-neutral-800 dark:text-neutral-200 mb-1.5">
                    模拟与待验证内容：
                  </div>
                  <ul className="space-y-1 text-neutral-600 dark:text-neutral-400 list-disc list-inside leading-relaxed">
                    {caseStudy.limitationsAndReflection.simulatedOrUnverified.map((lim, lIdx) => (
                      <li key={lIdx}>{lim}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-neutral-200/60 dark:border-neutral-800/60">
                  <div className="font-semibold text-neutral-800 dark:text-neutral-200 mb-1.5">
                    后续改进方向：
                  </div>
                  <ul className="space-y-1 text-neutral-600 dark:text-neutral-400 list-disc list-inside leading-relaxed">
                    {caseStudy.limitationsAndReflection.futureImprovements.map((imp, iIdx) => (
                      <li key={iIdx}>{imp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Footer Actions */}
        <div className="p-4 sm:p-6 bg-neutral-50 dark:bg-neutral-900/60 border-t border-neutral-100 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-neutral-400">
            按 ESC 键或点击外部可关闭
          </div>

          <div className="flex items-center gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-lg transition-colors shadow-2xs whitespace-nowrap cursor-pointer"
              >
                <span>打开在线原型</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {isPdfAvailable && project.pdfPath && (
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
            )}

            <button
              onClick={onClose}
              className="px-3.5 py-2 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200/60 dark:hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer"
            >
              关闭
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
