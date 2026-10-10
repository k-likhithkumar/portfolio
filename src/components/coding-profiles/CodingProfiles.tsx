import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import {
  LeetCodeIcon,
  HackerRankIcon,
  CodeChefIcon,
  CodeforcesIcon,
} from '../common/Icons';
import { PORTFOLIO_DATA } from '../../constants/portfolio';

export const CodingProfiles: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const { codingProfiles } = PORTFOLIO_DATA;

  const renderIcon = (type: string) => {
    switch (type) {
      case 'leetcode':
        return <LeetCodeIcon className="w-5 h-5 text-amber-400/90 group-hover:text-cyan-300 transition-colors" />;
      case 'hackerrank':
        return <HackerRankIcon className="w-5 h-5 text-emerald-400/90 group-hover:text-cyan-300 transition-colors" />;
      case 'codechef':
        return <CodeChefIcon className="w-5 h-5 text-amber-500/90 group-hover:text-cyan-300 transition-colors" />;
      case 'codeforces':
        return <CodeforcesIcon className="w-5 h-5 text-sky-400 group-hover:text-cyan-300 transition-colors" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section
      id="coding-profiles"
      className="relative py-12 sm:py-16 scroll-mt-20 border-t border-sky-500/10"
      aria-label="Coding Profiles and Practice"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: 'easeOut' }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Section Header */}
          <div className="max-w-2xl text-left space-y-4">
            <div className="flex items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#081224]/80 border border-sky-400/20 text-xs font-mono tracking-widest text-sky-300 uppercase shadow-[0_0_10px_-4px_rgba(56,189,248,0.2)]">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>{codingProfiles.eyebrow}</span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              {codingProfiles.heading}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {codingProfiles.description}
            </p>
          </div>

          {/* Four Compact Profile Items in a Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {codingProfiles.profiles.map((profile) => (
              <a
                key={profile.id}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col justify-between p-4 sm:p-5 rounded-xl bg-[#060c18]/70 border border-sky-500/15 hover:border-sky-400/30 hover:bg-[#081224]/70 transition-all duration-200 text-left min-h-[124px] sm:min-h-[132px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                aria-label={`Visit ${profile.name} profile (${profile.handle}) - opens in new tab`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 sm:p-2.5 rounded-lg bg-sky-950/80 border border-sky-500/20 group-hover:border-sky-400/40 transition-colors shrink-0">
                      {renderIcon(profile.iconType)}
                    </div>
                    <span className="font-mono text-[11px] text-slate-500 group-hover:text-cyan-400/80 transition-colors">
                      @{profile.handle}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-semibold text-slate-100 group-hover:text-white transition-colors">
                    {profile.name}
                  </h3>
                </div>

                <div className="pt-3 border-t border-sky-500/10 flex items-center justify-between mt-3">
                  <span className="text-xs font-mono font-medium text-sky-400/90 group-hover:text-cyan-300 transition-colors">
                    Visit Profile
                  </span>
                  <ArrowUpRight
                    className="w-3.5 h-3.5 text-sky-400 group-hover:text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    aria-hidden="true"
                  />
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
