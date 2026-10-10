import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../constants/portfolio';

export const About: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const { about } = PORTFOLIO_DATA;

  // Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.55,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section
      id="about"
      className="relative py-20 lg:py-28 scroll-mt-20 border-t border-sky-500/10"
      aria-label="About Me Section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center"
        >
          {/* Left Column: Heading, Subheading & Bio Content (7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
            {/* Section Tag */}
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#081224]/80 border border-sky-400/20 text-xs font-mono tracking-widest text-sky-300 uppercase">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>ABOUT ME</span>
              </div>
            </motion.div>

            {/* Heading & Subheading */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                About{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-sky-400 to-cyan-300">
                  Me
                </span>
              </h2>
              <p className="text-lg sm:text-xl font-medium text-sky-300/90 tracking-wide font-sans">
                {about.subheading}
              </p>
            </motion.div>

            {/* Professional Content Paragraphs */}
            <motion.div
              variants={itemVariants}
              className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
            >
              {about.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-slate-300/95">
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* Academic Credential Summary Chips */}
            <motion.div
              variants={itemVariants}
              className="pt-2 flex flex-wrap items-center gap-2.5 text-xs font-mono text-slate-300"
            >
              <div className="px-3 py-1.5 rounded-lg bg-[#070d18] border border-sky-500/20 text-sky-200 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>{PORTFOLIO_DATA.degree}</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-[#070d18] border border-sky-500/20 text-slate-300">
                {PORTFOLIO_DATA.college}
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-[#070d18] border border-sky-500/20 text-slate-400">
                Graduation: {PORTFOLIO_DATA.graduationYear}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Academics & Interests Boxes (5 cols on desktop) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 w-full flex flex-col items-center lg:items-end gap-4 sm:gap-5"
          >
            {/* Box 1: Academics */}
            <div className="relative w-full max-w-md rounded-2xl bg-[#060c18]/90 border border-sky-400/20 backdrop-blur-xl p-5 sm:p-6 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.7),0_0_25px_-5px_rgba(56,189,248,0.12)]">
              {/* Subtle Ambient Card Glow */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-500/10 via-cyan-400/5 to-transparent pointer-events-none"
              />

              {/* Card Header */}
              <div className="relative pb-3.5 border-b border-sky-500/15 mb-3.5">
                <h3 className="text-xs font-mono font-semibold tracking-wider text-slate-200 uppercase">
                  ACADEMICS
                </h3>
              </div>

              {/* Academic Details List */}
              <div className="relative space-y-2.5">
                <div className="flex items-center justify-between text-xs sm:text-sm py-1 border-b border-sky-500/10">
                  <span className="font-mono text-slate-400">College</span>
                  <span className="font-medium text-slate-200">VNR VJIET</span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm py-1 border-b border-sky-500/10">
                  <span className="font-mono text-slate-400">Course</span>
                  <span className="font-medium text-slate-200">B.Tech – AIML</span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm py-1">
                  <span className="font-mono text-slate-400">Year</span>
                  <span className="font-medium text-slate-200">Sophomore</span>
                </div>
              </div>
            </div>

            {/* Box 2: Interests */}
            <div className="relative w-full max-w-md rounded-2xl bg-[#060c18]/90 border border-sky-400/20 backdrop-blur-xl p-5 sm:p-6 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.7),0_0_25px_-5px_rgba(56,189,248,0.12)]">
              {/* Subtle Ambient Card Glow */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-500/10 via-cyan-400/5 to-transparent pointer-events-none"
              />

              {/* Card Header */}
              <div className="relative pb-4 border-b border-sky-500/15 mb-4">
                <h3 className="text-xs font-mono font-semibold tracking-wider text-slate-200 uppercase">
                  INTERESTS
                </h3>
              </div>

              {/* Simple Vertical List of Four Interests */}
              <ul className="relative space-y-3" role="list">
                {about.interests.map((interest) => (
                  <li
                    key={interest}
                    className="flex items-center gap-3 text-sm sm:text-base font-medium text-slate-200 hover:text-white transition-colors"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] shrink-0"
                      aria-hidden="true"
                    />
                    <span className="tracking-wide">{interest}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
