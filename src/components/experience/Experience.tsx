import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles, Briefcase } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../constants/portfolio';

export const Experience: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const { experience } = PORTFOLIO_DATA;

  return (
    <section
      id="experience"
      className="relative py-12 sm:py-16 scroll-mt-20 border-t border-sky-500/10"
      aria-label="Professional Experience"
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
              <span>{experience.eyebrow}</span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {experience.heading}
          </h2>

          {/* Short Description */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {experience.description}
          </p>

          {/* Single Compact, Elegant Empty-State Element */}
          <div className="flex items-start sm:items-center gap-3.5 p-4 rounded-xl bg-[#060c18]/70 border border-sky-500/15 text-left">
            <div className="p-2 rounded-lg bg-sky-950/80 border border-sky-500/20 text-sky-400 shrink-0">
              <Briefcase className="w-4 h-4 text-sky-400" aria-hidden="true" />
            </div>
            <div className="space-y-0.5 min-w-0">
              <h3 className="text-xs sm:text-sm font-semibold text-slate-200">
                {experience.emptyState.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {experience.emptyState.description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
