import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Github, Check, Copy, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-20 md:py-28 max-w-4xl mx-auto px-6">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
          Get In Touch · 联系方式
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white mb-4 [text-wrap:balance]">
          期待与您交流产品思考与职业机会
        </h1>
        <p className="text-base text-neutral-500 dark:text-neutral-400 leading-relaxed [text-wrap:balance]">
          我正在寻找 2027 届校招及相关实习的 <strong className="text-neutral-800 dark:text-neutral-200">AI产品经理、互联网产品经理、商业分析（BA）</strong> 或企业数字化岗位。欢迎通过邮件或 GitHub 与我取得联系。
        </p>
      </div>

      {/* Contact Action Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
        {/* Email Card */}
        <div className="p-6 rounded-2xl bg-white dark:bg-[#111215] border border-neutral-200/80 dark:border-neutral-800/80 flex flex-col justify-between shadow-2xs">
          <div>
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
              <Mail className="w-5 h-5" />
            </div>
            <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
              电子邮箱 (Direct Email)
            </div>
            <div className="text-base font-bold text-neutral-900 dark:text-white font-mono break-all mb-2">
              {PERSONAL_INFO.email}
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400">
              欢迎随时来信，沟通项目细节或校招机会
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center gap-2">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex-1 py-2 px-3 text-xs font-semibold text-center rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors cursor-pointer"
            >
              直接发信
            </a>
            <button
              onClick={handleCopyEmail}
              className="py-2 px-3 text-xs font-medium rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 transition-colors flex items-center gap-1.5 cursor-pointer"
              title="复制邮箱地址"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span>已复制</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-neutral-400" />
                  <span>复制</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* GitHub Card */}
        <div className="p-6 rounded-2xl bg-white dark:bg-[#111215] border border-neutral-200/80 dark:border-neutral-800/80 flex flex-col justify-between shadow-2xs">
          <div>
            <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white flex items-center justify-center mb-4">
              <Github className="w-5 h-5" />
            </div>
            <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
              GitHub 个人主页
            </div>
            <div className="text-base font-bold text-neutral-900 dark:text-white font-mono mb-2">
              @{PERSONAL_INFO.githubUsername}
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400">
              公开托管项目作品、在线原型与源码仓库
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800/80">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 text-xs font-semibold text-center rounded-lg bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:hover:bg-white text-white dark:text-neutral-900 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>访问 GitHub 主页</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
