import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles, GraduationCap } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../constants/portfolio';

export const Education: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const { education } = PORTFOLIO_DATA;

  return (
    <section
      id="education"
      className="relative py-12 sm:py-16 scroll-mt-20 border-t border-sky-500/10"
      aria-label="Education"
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
              <span>{education.eyebrow}</span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {education.heading}
          </h2>

          {/* Single Compact Education Entry */}
          <div className="flex items-start gap-3.5 sm:gap-4 p-4 sm:p-5 rounded-xl bg-[#060c18]/70 border border-sky-500/15 text-left">
            <div className="p-2 sm:p-2.5 rounded-lg bg-sky-950/80 border border-sky-500/20 text-sky-400 shrink-0 mt-0.5">
              <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400" aria-hidden="true" />
            </div>
            <div className="space-y-1.5 min-w-0 flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-3">
                <h3 className="text-sm sm:text-base font-semibold text-slate-100">
                  {education.item.degree}
                </h3>
                <span className="text-xs font-mono text-cyan-400 shrink-0">
                  Expected Graduation: {education.item.expectedGraduation}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-sky-300 font-medium">
                {education.item.field}
              </p>
              <p className="text-xs sm:text-sm text-slate-400">
                {education.item.institution}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
