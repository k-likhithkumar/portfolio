import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../common/Icons';
import { PORTFOLIO_DATA } from '../../constants/portfolio';

export const GithubActivity: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const { githubActivity } = PORTFOLIO_DATA;

  return (
    <section
      id="github-activity"
      className="relative py-12 sm:py-16 scroll-mt-20 border-t border-sky-500/10"
      aria-label="Activity and Contributions"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: 'easeOut' }}
          className="max-w-2xl text-left space-y-5 sm:space-y-6"
        >
          {/* Eyebrow Label */}
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#081224]/80 border border-sky-400/20 text-xs font-mono tracking-widest text-sky-300 uppercase shadow-[0_0_10px_-4px_rgba(56,189,248,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>{githubActivity.eyebrow}</span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {githubActivity.heading}
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {githubActivity.description}
          </p>

          {/* Compact, Minimal GitHub Profile Card */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-5 rounded-xl bg-[#060c18]/70 border border-sky-500/15 text-left">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="p-2.5 rounded-lg bg-sky-950/80 border border-sky-500/20 text-sky-400 shrink-0">
                <GithubIcon className="w-5 h-5 text-sky-400" aria-hidden="true" />
              </div>
              <div className="space-y-0.5 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm sm:text-base font-semibold text-slate-100">
                    {githubActivity.username}
                  </span>
                  <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300">
                    GitHub
                  </span>
                </div>
                <p className="text-xs text-slate-400 truncate">
                  github.com/{githubActivity.username}
                </p>
              </div>
            </div>

            <a
              href={githubActivity.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-sky-500/15 hover:bg-sky-500/25 border border-sky-400/30 hover:border-sky-300/50 text-xs sm:text-sm font-medium text-sky-200 hover:text-white transition-all duration-200 shadow-[0_0_12px_-3px_rgba(56,189,248,0.2)] hover:shadow-[0_0_16px_0_rgba(56,189,248,0.3)] shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              aria-label="View Likhith Kumar's GitHub Profile (opens in new tab)"
            >
              <span>View GitHub Profile</span>
              <ArrowUpRight className="w-4 h-4 text-sky-400" aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
