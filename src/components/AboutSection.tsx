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
          从市场营销到商业信息系统
        </h1>
      </div>

      {/* Narrative & Positioning Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        <div className="lg:col-span-7 space-y-4 text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
          <p>
            在海外业务实习期间，我整理过中东和南美市场资料，也参与编写英文产品手册。读商学硕士后，我开始更关心业务在组织内部怎样运转。
          </p>
          <p>
            Together Pass 是一个例子。团队希望帮助居民参加社区活动，我负责比较三种资助方式。把报名协助、现场接待等成本按同一口径算进去，才看得清礼品卡比直接入场贵在哪里，以及试点要验证什么。
          </p>
          <p>
            在另外一些项目里，我用流程图说明谁负责下一步，用交互原型演示信息不全时还有哪些选择。
          </p>
        </div>

        <div className="lg:col-span-5 bg-neutral-50/80 dark:bg-neutral-900/40 p-6 rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 space-y-4">
          <div className="text-xs font-bold text-neutral-400 dark:text-neutral-500">
            案例中的三个判断
          </div>
          <div className="space-y-3 text-xs sm:text-sm">
            <div className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                1
              </span>
              <div>
                <div className="font-semibold text-neutral-900 dark:text-neutral-100">资助方式值多少钱？</div>
                <div className="text-neutral-500 dark:text-neutral-400 mt-0.5">Together Pass 的 30 人试点预算中，礼品卡比直接入场多 A$500。</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                2
              </span>
              <div>
                <div className="font-semibold text-neutral-900 dark:text-neutral-100">车主登记后意味着什么？</div>
                <div className="text-neutral-500 dark:text-neutral-400 mt-0.5">ZEEKR Flow 记录预计到达时间。车位仍按现场情况使用。</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                3
              </span>
              <div>
                <div className="font-semibold text-neutral-900 dark:text-neutral-100">素材缺失时能交付什么？</div>
                <div className="text-neutral-500 dark:text-neutral-400 mt-0.5">TradeRemix 保留待核实的信息，让运营选择调整脚本或安排补拍。</div>
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
