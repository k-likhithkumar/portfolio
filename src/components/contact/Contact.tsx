import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles, Mail, Send, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { PORTFOLIO_DATA } from '../../constants/portfolio';

export const Contact: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const { contact } = PORTFOLIO_DATA;

  return (
    <section
      id="contact"
      className="relative py-12 sm:py-16 scroll-mt-20 border-t border-sky-500/10"
      aria-label="Contact and Social Links"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: 'easeOut' }}
          className="max-w-2xl text-left space-y-6 sm:space-y-8"
        >
          {/* Eyebrow Label */}
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#081224]/80 border border-sky-400/20 text-xs font-mono tracking-widest text-sky-300 uppercase shadow-[0_0_10px_-4px_rgba(56,189,248,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>{contact.eyebrow}</span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {contact.heading}
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {contact.description}
          </p>

          {/* Clean, Minimal Contact Container */}
          <div className="p-5 sm:p-6 rounded-xl bg-[#060c18]/70 border border-sky-500/15 space-y-5 text-left">
            {/* Direct Email Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="p-2.5 rounded-lg bg-sky-950/80 border border-sky-500/20 text-sky-400 shrink-0">
                  <Mail className="w-5 h-5 text-sky-400" aria-hidden="true" />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    Email
                  </span>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-sm sm:text-base font-semibold text-slate-100 hover:text-cyan-300 transition-colors truncate block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              {/* Send Me an Email CTA */}
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-sky-500/15 hover:bg-sky-500/25 border border-sky-400/30 hover:border-sky-300/50 text-xs sm:text-sm font-medium text-sky-200 hover:text-white transition-all shadow-[0_0_12px_-3px_rgba(56,189,248,0.2)] hover:shadow-[0_0_16px_0_rgba(56,189,248,0.3)] shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                aria-label={`Send an email to ${contact.email}`}
              >
                <Send className="w-4 h-4 text-sky-400" aria-hidden="true" />
                <span>Send Me an Email</span>
              </a>
            </div>

            {/* Compact Social Connections: GitHub & LinkedIn */}
            <div className="pt-4 border-t border-sky-500/10 flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono text-slate-400">
                Connect online:
              </span>

              <a
                href={contact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#070d18] border border-sky-500/20 hover:border-sky-400/40 text-xs font-medium text-slate-300 hover:text-white transition-all hover:bg-sky-950/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                aria-label="Visit Likhith Kumar's GitHub profile (opens in new tab)"
              >
                <GithubIcon className="w-3.5 h-3.5 text-sky-400" aria-hidden="true" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500" aria-hidden="true" />
              </a>

              <a
                href={contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#070d18] border border-sky-500/20 hover:border-sky-400/40 text-xs font-medium text-slate-300 hover:text-white transition-all hover:bg-sky-950/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                aria-label="Connect with Likhith Kumar on LinkedIn (opens in new tab)"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-sky-400" aria-hidden="true" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500" aria-hidden="true" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
