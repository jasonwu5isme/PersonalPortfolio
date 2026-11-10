import React from 'react';
import { RESUME_DATA } from '../data/portfolioData';
import { GraduationCap, Briefcase, FolderGit2, Sparkles, ExternalLink, Mail, Github } from 'lucide-react';

interface ResumeViewProps {
  onOpenProjectCaseStudy?: (projectId: string) => void;
}

export const ResumeView: React.FC<ResumeViewProps> = ({ onOpenProjectCaseStudy }) => {
  return (
    <div className="py-20 md:py-28 max-w-5xl mx-auto px-6">
      {/* Resume Top Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-neutral-200/80 dark:border-neutral-800/80 mb-14">
        <div>
          <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">
            个人履历
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            {RESUME_DATA.name}
            <span className="text-xl sm:text-2xl font-normal text-neutral-400 dark:text-neutral-500 ml-3">
              {RESUME_DATA.englishName}
            </span>
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 mt-2 max-w-2xl leading-relaxed">
            商业信息系统硕士（2027届）· 市场营销本科。关注需求分析、UML系统建模与AI辅助交互原型设计。
          </p>

          {/* Target Roles */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-500 dark:text-neutral-400 mt-4">
            <span className="font-semibold text-neutral-700 dark:text-neutral-300">求职意向：</span>
            {RESUME_DATA.targetRoles.map((role, idx) => (
              <React.Fragment key={role}>
                {idx > 0 && <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">·</span>}
                <span className="text-neutral-800 dark:text-neutral-200">{role}</span>
              </React.Fragment>
            ))}
          </div>

          {/* Public Contact Channels */}
          <div className="flex flex-wrap items-center gap-5 text-xs text-neutral-500 dark:text-neutral-400 mt-3 font-mono">
            <a
              href={`mailto:${RESUME_DATA.email}`}
              className="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-neutral-400" />
              <span>{RESUME_DATA.email}</span>
            </a>
            <a
              href={RESUME_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-neutral-400" />
              <span>github.com/{RESUME_DATA.githubUsername}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="space-y-16">
        {/* Section A: 教育经历 */}
        <section>
          <div className="flex items-center gap-2.5 text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-6">
            <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>教育经历</span>
          </div>

          <div className="space-y-6">
            {RESUME_DATA.education.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-[#111215] border border-neutral-200/80 dark:border-neutral-800/80 shadow-2xs hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                      {edu.institution}
                      <span className="text-xs font-normal text-neutral-400 ml-2 font-mono">
                        {edu.englishInstitution}
                      </span>
                    </h3>
                    <div className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mt-0.5">
                      {edu.degree}
                    </div>
                  </div>
                  <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400 sm:text-right shrink-0">
                    <div>{edu.period}</div>
                    <div className="text-blue-600 dark:text-blue-400 font-sans mt-0.5">{edu.status}</div>
                  </div>
                </div>

                {edu.note && (
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-900/60 p-3 rounded-lg border border-neutral-100 dark:border-neutral-800/60 mt-3 leading-relaxed">
                    说明：{edu.note}
                  </p>
                )}

                <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800/60 flex flex-wrap items-center gap-1.5 text-xs">
                  <span className="text-neutral-400 mr-1">核心方向：</span>
                  {edu.focus.map((item, fIdx) => (
                    <span
                      key={fIdx}
                      className="px-2.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section B: 实习经历 */}
        <section>
          <div className="flex items-center gap-2.5 text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-6">
            <Briefcase className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span>实习经历</span>
          </div>

          <div className="space-y-6">
            {RESUME_DATA.internships.map((job, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-[#111215] border border-neutral-200/80 dark:border-neutral-800/80 shadow-2xs hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4 pb-3 border-b border-neutral-100 dark:border-neutral-800/60">
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                      {job.company}
                    </h3>
                    <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                      {job.role}
                    </div>
                  </div>
                  <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400 sm:text-right shrink-0">
                    {job.period}
                  </div>
                </div>

                <div className="space-y-2">
                  {job.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600 shrink-0 mt-2" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section C: 项目与研究经历 */}
        <section>
          <div className="flex items-center gap-2.5 text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-6">
            <FolderGit2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>项目与研究经历</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {RESUME_DATA.projectExperienceSummaries.map((proj, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-[#111215] border border-neutral-200/80 dark:border-neutral-800/80 flex flex-col justify-between hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-neutral-400 mb-2">
                    <span className="font-mono">{proj.period}</span>
                    <span className="text-neutral-500 dark:text-neutral-400">{proj.role}</span>
                  </div>
                  <h4 className="text-sm font-bold text-neutral-900 dark:text-white mb-2 leading-snug">
                    {proj.title}
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
                    {proj.summary}
                  </p>
                </div>

                {proj.linkToProjectId && (
                  <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800/60">
                    <button
                      onClick={() => onOpenProjectCaseStudy?.(proj.linkToProjectId!)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                    >
                      <span>查看详细作品案例</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Section D: 专业技能 */}
        <section>
          <div className="flex items-center gap-2.5 text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-6">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>专业技能与工具储备</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RESUME_DATA.skills.map((skillGroup, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-[#111215] border border-neutral-200/80 dark:border-neutral-800/80"
              >
                <h4 className="text-sm font-bold text-neutral-900 dark:text-white mb-3 pb-2 border-b border-neutral-100 dark:border-neutral-800/60">
                  {skillGroup.category}
                </h4>
                <div className="space-y-2">
                  {skillGroup.items.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2 rounded-lg bg-neutral-50 dark:bg-neutral-900/50 text-xs text-neutral-700 dark:text-neutral-300 border border-neutral-100 dark:border-neutral-800/60"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
