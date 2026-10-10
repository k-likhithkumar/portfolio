import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles, Download, Eye, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../constants/portfolio';

export const Resume: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const { resume } = PORTFOLIO_DATA;
  const hasResume = Boolean(resume.fileUrl);

  return (
    <section
      id="resume"
      className="relative py-12 sm:py-16 scroll-mt-20 border-t border-sky-500/10"
      aria-label="Resume"
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
              <span>{resume.eyebrow}</span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {resume.heading}
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {resume.description}
          </p>

          {/* Compact, Professional Resume Container */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-5 rounded-xl bg-[#060c18]/70 border border-sky-500/15 text-left">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="p-2.5 rounded-lg bg-sky-950/80 border border-sky-500/20 text-sky-400 shrink-0">
                <FileText className="w-5 h-5 text-sky-400" aria-hidden="true" />
              </div>
              <div className="space-y-0.5 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm sm:text-base font-semibold text-slate-100">
                    Curriculum Vitae
                  </span>
                  <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-sky-950/50 border border-sky-500/20 text-slate-400">
                    PDF
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-mono">
                  {hasResume ? 'Verified PDF • Ready to review' : resume.placeholderMessage}
                </p>
              </div>
            </div>

            {/* Action Buttons: Button 1 = View Resume, Button 2 = Download Resume */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
              {hasResume && resume.fileUrl ? (
                <>
                  {/* Button 1: View Resume (Opens in new tab) */}
                  <a
                    href={resume.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 via-cyan-400 to-sky-400 text-slate-950 font-semibold text-xs sm:text-sm shadow-[0_0_20px_-3px_rgba(56,189,248,0.45)] hover:shadow-[0_0_28px_0_rgba(56,189,248,0.65)] hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 select-none cursor-pointer"
                    aria-label="View Resume in a new browser tab"
                  >
                    <Eye className="w-4 h-4 text-slate-950 shrink-0" aria-hidden="true" />
                    <span>View Resume</span>
                  </a>

                  {/* Button 2: Download Resume */}
                  <a
                    href={resume.fileUrl}
                    download="K_Likhith_Kumar_Resume.pdf"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#070d18]/80 text-sky-100 hover:text-white border border-sky-500/20 hover:border-cyan-400/60 hover:bg-[#0b162c] hover:-translate-y-0.5 shadow-[0_0_15px_-4px_rgba(56,189,248,0.15)] hover:shadow-[0_0_22px_-2px_rgba(56,189,248,0.35)] backdrop-blur-md text-xs sm:text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 select-none cursor-pointer"
                    aria-label="Download Resume as PDF (K_Likhith_Kumar_Resume.pdf)"
                  >
                    <Download className="w-4 h-4 text-sky-400 shrink-0" aria-hidden="true" />
                    <span>Download Resume</span>
                  </a>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#060c18] border border-sky-500/10 text-xs sm:text-sm font-medium text-slate-500 cursor-not-allowed opacity-60"
                    title="Resume will be available once uploaded"
                  >
                    <Eye className="w-4 h-4 text-slate-600 shrink-0" aria-hidden="true" />
                    <span>View Resume</span>
                  </button>
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#060c18] border border-sky-500/10 text-xs sm:text-sm font-medium text-slate-500 cursor-not-allowed opacity-60"
                    title="Resume will be available once uploaded"
                  >
                    <Download className="w-4 h-4 text-slate-600 shrink-0" aria-hidden="true" />
                    <span>Download Resume</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
