import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../../constants/portfolio';

export const Achievements: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const { achievements } = PORTFOLIO_DATA;

  return (
    <section
      id="achievements"
      className="relative py-12 sm:py-16 scroll-mt-20 border-t border-sky-500/10"
      aria-label="Achievements"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: 'easeOut' }}
          className="space-y-8 sm:space-y-10"
        >
          {/* Centered Eyebrow, Heading, and Subtitle */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#081224]/80 border border-sky-400/20 text-xs font-mono tracking-widest text-sky-300 uppercase shadow-[0_0_10px_-4px_rgba(56,189,248,0.2)]">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]" />
              <span>{achievements.eyebrow}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              {achievements.heading}
            </h2>

            <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
              {achievements.subtitle}
            </p>
          </div>

          {/* Five Compact Cards in a Single Row on Desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {achievements.categories.map((category) => (
              <div
                key={category.id}
                className="group relative flex flex-col justify-between p-4 sm:p-5 rounded-xl bg-[#060c18]/70 border border-sky-500/15 hover:border-sky-400/30 hover:bg-[#081224]/70 transition-all duration-200 text-left min-h-[120px] sm:min-h-[130px]"
              >
                {/* Numbered Label */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-cyan-400 tracking-wider">
                    {category.number}
                  </span>
                </div>

                {/* Category Title */}
                <div className="my-2.5">
                  <h3 className="text-sm sm:text-base font-semibold text-slate-100 group-hover:text-white transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Subtle Status */}
                <div className="pt-2 border-t border-sky-500/10">
                  <span className="font-mono text-[11px] tracking-wider text-slate-500 font-medium">
                    {category.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
