import React, { useState } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Layers,
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Coffee,
  Globe,
  Palette,
  FileCode,
  Atom,
  Cpu,
  GitBranch,
  Terminal,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../../constants/portfolio';
import { GithubIcon } from '../common/Icons';
import type { SkillCategory, ProficiencyLevel, SkillItem } from '../../types/portfolio';

export const Skills: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const { skills } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>('All');

  // Category Icon helper
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming Languages':
        return <Code2 className="w-3.5 h-3.5" aria-hidden="true" />;
      case 'Frontend Development':
        return <Layout className="w-3.5 h-3.5" aria-hidden="true" />;
      case 'Backend Development':
        return <Server className="w-3.5 h-3.5" aria-hidden="true" />;
      case 'Databases':
        return <Database className="w-3.5 h-3.5" aria-hidden="true" />;
      case 'Development Tools':
        return <Wrench className="w-3.5 h-3.5" aria-hidden="true" />;
      default:
        return <Layers className="w-3.5 h-3.5" aria-hidden="true" />;
    }
  };

  // Tech-specific icon helper for compact tiles
  const getTechIcon = (skillId: string) => {
    switch (skillId) {
      case 'c':
        return <Code2 className="w-4 h-4 text-sky-300" aria-hidden="true" />;
      case 'cpp':
        return <Code2 className="w-4 h-4 text-cyan-300" aria-hidden="true" />;
      case 'java':
        return <Coffee className="w-4 h-4 text-amber-300" aria-hidden="true" />;
      case 'python':
        return <Terminal className="w-4 h-4 text-emerald-300" aria-hidden="true" />;
      case 'html':
        return <Globe className="w-4 h-4 text-orange-400" aria-hidden="true" />;
      case 'css':
        return <Palette className="w-4 h-4 text-sky-400" aria-hidden="true" />;
      case 'javascript':
        return <FileCode className="w-4 h-4 text-yellow-300" aria-hidden="true" />;
      case 'react':
        return <Atom className="w-4 h-4 text-cyan-300" aria-hidden="true" />;
      case 'nodejs':
        return <Server className="w-4 h-4 text-emerald-400" aria-hidden="true" />;
      case 'express':
        return <Cpu className="w-4 h-4 text-sky-300" aria-hidden="true" />;
      case 'mysql':
        return <Database className="w-4 h-4 text-blue-400" aria-hidden="true" />;
      case 'supabase':
        return <Database className="w-4 h-4 text-emerald-300" aria-hidden="true" />;
      case 'git':
        return <GitBranch className="w-4 h-4 text-orange-400" aria-hidden="true" />;
      case 'github':
        return <GithubIcon className="w-4 h-4 text-slate-200" aria-hidden="true" />;
      default:
        return <Code2 className="w-4 h-4 text-sky-300" aria-hidden="true" />;
    }
  };

  // Subtle proficiency pill styling
  const getProficiencyBadge = (proficiency: ProficiencyLevel) => {
    switch (proficiency) {
      case 'Comfortable':
        return {
          pill: 'bg-cyan-950/60 text-cyan-300 border-cyan-400/30',
          dot: 'bg-cyan-400 shadow-[0_0_5px_#22d3ee]',
        };
      case 'Working With':
        return {
          pill: 'bg-sky-950/60 text-sky-300 border-sky-400/30',
          dot: 'bg-sky-400',
        };
      case 'Exploring':
        return {
          pill: 'bg-slate-900/80 text-slate-400 border-slate-700/50',
          dot: 'bg-slate-500',
        };
    }
  };

  // Category groups to render
  const categoryGroups: Exclude<SkillCategory, 'All'>[] = [
    'Programming Languages',
    'Frontend Development',
    'Backend Development',
    'Databases',
    'Development Tools',
  ];

  const visibleGroups =
    selectedCategory === 'All'
      ? categoryGroups
      : categoryGroups.filter((cat) => cat === selectedCategory);

  return (
    <section
      id="skills"
      className="relative py-14 sm:py-18 lg:py-22 scroll-mt-20 border-t border-sky-500/10"
      aria-label="Technologies and Skills"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with compact spacing */}
        <div className="space-y-3 max-w-2xl text-left mb-7 sm:mb-8">
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#081224]/80 border border-sky-400/20 text-xs font-mono tracking-widest text-sky-300 uppercase shadow-[0_0_10px_-4px_rgba(56,189,248,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>{skills.eyebrow}</span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Technologies I{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-sky-400 to-cyan-300">
              Work With
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {skills.description}
          </p>
        </div>

        {/* Compact Category Filter Bar */}
        <div
          role="tablist"
          aria-label="Filter skills by technology category"
          className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-8 pb-1"
        >
          {skills.categories.map((category) => {
            const isSelected = selectedCategory === category;

            return (
              <button
                key={category}
                role="tab"
                type="button"
                aria-selected={isSelected}
                aria-controls="skills-container"
                onClick={() => setSelectedCategory(category)}
                className={`relative inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-xl border transition-all duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                  isSelected
                    ? 'bg-sky-500/15 text-sky-200 border-sky-400/40 shadow-[0_0_12px_-3px_rgba(56,189,248,0.3)]'
                    : 'bg-[#070d18]/70 text-slate-400 border-sky-500/10 hover:border-sky-400/30 hover:text-slate-200 hover:bg-[#0a1426]/70'
                }`}
              >
                <span className={isSelected ? 'text-cyan-400' : 'text-slate-400'}>
                  {getCategoryIcon(category)}
                </span>
                <span>{category}</span>
              </button>
            );
          })}
        </div>

        {/* Clearly Separated Category Groups with Compact Tiles */}
        <div id="skills-container" role="tabpanel" className="space-y-6 sm:space-y-7">
          <AnimatePresence mode="popLayout">
            {visibleGroups.map((groupCategory) => {
              const groupItems = skills.items.filter((item) => item.category === groupCategory);
              if (groupItems.length === 0) return null;

              return (
                <motion.div
                  key={groupCategory}
                  layout={!shouldReduceMotion}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: 'easeOut' }}
                  className="p-4 sm:p-5 rounded-2xl bg-[#050b16]/75 border border-sky-500/15 backdrop-blur-md shadow-[0_4px_24px_-10px_rgba(0,0,0,0.6)]"
                >
                  {/* Compact Group Header */}
                  <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-sky-500/10">
                    <div className="flex items-center gap-2">
                      <span className="p-1 rounded-md bg-sky-950/80 border border-sky-400/20 text-cyan-400">
                        {getCategoryIcon(groupCategory)}
                      </span>
                      <h3 className="text-xs sm:text-sm font-semibold tracking-wide text-slate-200 uppercase font-mono">
                        {groupCategory}
                      </h3>
                    </div>
                  </div>

                  {/* High-Density Responsive Grid of Compact Tiles */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3">
                    {groupItems.map((skill: SkillItem) => {
                      const badge = getProficiencyBadge(skill.proficiency);

                      return (
                        <div
                          key={skill.id}
                          className="group relative flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl bg-[#070f20]/80 border border-sky-500/15 hover:border-sky-400/45 hover:bg-[#0b1730] transition-all duration-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.4)] hover:shadow-[0_0_15px_-3px_rgba(56,189,248,0.2)]"
                        >
                          {/* Left: Icon & Technology Name */}
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className="w-7 h-7 rounded-lg bg-sky-950/80 border border-sky-500/20 group-hover:border-sky-400/40 flex items-center justify-center shrink-0 transition-colors">
                              {getTechIcon(skill.id)}
                            </div>
                            <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white transition-colors truncate">
                              {skill.name}
                            </span>
                          </div>

                          {/* Right: Subtle Proficiency Badge & Review Indicator */}
                          <div className="flex items-center gap-1.5 shrink-0">
                            <span
                              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono border ${badge.pill}`}
                            >
                              <span className={`w-1 h-1 rounded-full ${badge.dot}`} />
                              <span>{skill.proficiency}</span>
                            </span>

                            {skill.needsReview && (
                              <span
                                title="Pending confirmation"
                                className="w-1.5 h-1.5 rounded-full bg-amber-400/80"
                                aria-label="Pending confirmation"
                              />
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Minimal Single-Line Proficiency Legend */}
        <div className="mt-8 pt-4 border-t border-sky-500/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-slate-300">Proficiency Labels:</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[11px]">
            <span className="flex items-center gap-1.5 text-cyan-300">
              <span className="w-1 h-1 rounded-full bg-cyan-400" />
              <span>Comfortable</span>
              <span className="text-slate-400 font-sans">(Daily fundamentals)</span>
            </span>
            <span className="flex items-center gap-1.5 text-sky-300">
              <span className="w-1 h-1 rounded-full bg-sky-400" />
              <span>Working With</span>
              <span className="text-slate-400 font-sans">(Active practice)</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-1 h-1 rounded-full bg-slate-500" />
              <span>Exploring</span>
              <span className="text-slate-400 font-sans">(Foundational learning)</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
