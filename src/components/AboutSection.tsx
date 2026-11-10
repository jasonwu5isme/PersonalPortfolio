import React from 'react';
import { EDUCATION_HISTORY, SKILL_CATEGORIES } from '../data/portfolioData';
import { GraduationCap, Layers, LineChart, Cpu, Users2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <LineChart className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 1:
        return <Cpu className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      default:
        return <Users2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  return (
    <div className="py-20 md:py-28 max-w-5xl mx-auto px-6">
      {/* Section Header */}
      <div className="mb-14">
        <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">
          关于我
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white [text-wrap:balance]">
          商业理解 × 产品设计 × AI工具
        </h1>
        <p className="text-base text-neutral-500 dark:text-neutral-400 mt-2">
          理解业务问题 · 构想数字化方案 · 借助AI工具加速落地验证
        </p>
      </div>

      {/* Narrative & Positioning Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        <div className="lg:col-span-7 space-y-4 text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
          <p>
            我的学术背景横跨<strong className="text-neutral-900 dark:text-neutral-100 font-semibold">市场营销</strong>与<strong className="text-neutral-900 dark:text-neutral-100 font-semibold">商业信息系统</strong>。通过商业研究、产品设计和系统分析项目，我逐渐形成了从业务问题出发、理解用户需求并设计数字化解决方案的工作方式。
          </p>
          <p>
            目前重点关注<strong className="text-neutral-900 dark:text-neutral-100 font-semibold">AI应用产品、企业数字化及业务分析</strong>，希望将商业理解与AI工具结合，探索能够实际解决具体业务问题的产品方案。
          </p>
          <p>
            在过往实践中，我专注于通过需求分析、UML系统建模和业务流程梳理厘清产品逻辑，并借助提示词工程与前端工具协同，搭建可点击体验的网页原型。
          </p>
        </div>

        <div className="lg:col-span-5 bg-neutral-50/80 dark:bg-neutral-900/40 p-6 rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 space-y-4">
          <div className="text-xs font-bold text-neutral-400 dark:text-neutral-500">
            工作理念
          </div>
          <div className="space-y-3 text-xs sm:text-sm">
            <div className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                1
              </span>
              <div>
                <div className="font-semibold text-neutral-900 dark:text-neutral-100">从真实业务痛点出发</div>
                <div className="text-neutral-500 dark:text-neutral-400 mt-0.5">明确用户真实诉求与业务目标，避免脱离实际场景的空泛设计。</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                2
              </span>
              <div>
                <div className="font-semibold text-neutral-900 dark:text-neutral-100">用系统建模理清复杂逻辑</div>
                <div className="text-neutral-500 dark:text-neutral-400 mt-0.5">运用活动图、用例图与状态机规范定义各角色权责与状态变迁。</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                3
              </span>
              <div>
                <div className="font-semibold text-neutral-900 dark:text-neutral-100">通过可交互原型加速验证</div>
                <div className="text-neutral-500 dark:text-neutral-400 mt-0.5">借助现代开发工具搭建可操作的页面，帮助团队直观感受产品体验。</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Capability Structure */}
      <section className="mb-16">
        <div className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-6 flex items-center gap-2">
          <Layers className="w-4 h-4 text-neutral-500" />
          <span>专业能力结构</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-[#111215] border border-neutral-200/80 dark:border-neutral-800/80 flex flex-col justify-between hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800/80">
                    {getIcon(idx)}
                  </div>
                  <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-1">
                  {category.title}
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6">
                  {category.description}
                </p>

                {/* Skill Item List */}
                <div className="space-y-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2.5 rounded-xl bg-neutral-50/70 dark:bg-neutral-900/60 border border-neutral-100 dark:border-neutral-800/60"
                    >
                      <div className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">
                        {skill.name}
                      </div>
                      <div className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5 leading-snug">
                        {skill.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Timeline */}
      <section>
        <div className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-6 flex items-center gap-2">
          <GraduationCap className="w-4 h-4 text-neutral-500" />
          <span>教育经历</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATION_HISTORY.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-[#111215] border border-neutral-200/80 dark:border-neutral-800/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-2">
                  <span className="font-mono">{edu.period}</span>
                  <span className="font-medium text-blue-600 dark:text-blue-400">{edu.status}</span>
                </div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                  {edu.institution}
                </h3>
                <div className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-3 font-mono">
                  {edu.englishInstitution}
                </div>
                <div className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-3">
                  {edu.degree}
                </div>
                {edu.note && (
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-900/60 p-2.5 rounded-lg border border-neutral-100 dark:border-neutral-800/60 mb-4 leading-relaxed">
                    说明：{edu.note}
                  </p>
                )}
              </div>

              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80">
                <div className="text-xs text-neutral-400 mb-2">核心方向：</div>
                <div className="flex flex-wrap gap-1.5">
                  {edu.focus.map((item, fIdx) => (
                    <span
                      key={fIdx}
                      className="text-xs px-2.5 py-1 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
