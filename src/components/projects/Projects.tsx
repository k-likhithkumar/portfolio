import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Sparkles,
  Clock,
  Calendar,
  ListTodo,
  Bell,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../../constants/portfolio';
import { GithubIcon } from '../common/Icons';

export const Projects: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const { projects } = PORTFOLIO_DATA;

  // Feature icon mapping helper
  const getFeatureIcon = (feature: string) => {
    if (feature.toLowerCase().includes('notification')) {
      return <Bell className="w-4 h-4 text-cyan-300" aria-hidden="true" />;
    }
    if (feature.toLowerCase().includes('weekly') || feature.toLowerCase().includes('timeline') || feature.toLowerCase().includes('event')) {
      return <Calendar className="w-4 h-4 text-sky-400" aria-hidden="true" />;
    }
    if (feature.toLowerCase().includes('to-do')) {
      return <ListTodo className="w-4 h-4 text-sky-300" aria-hidden="true" />;
    }
    return <Clock className="w-4 h-4 text-cyan-400" aria-hidden="true" />;
  };

  return (
    <section
      id="projects"
      className="relative py-14 sm:py-18 lg:py-22 scroll-mt-20 border-t border-sky-500/10"
      aria-label="Selected Projects and Work"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl text-left mb-8 sm:mb-10">
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#081224]/80 border border-sky-400/20 text-xs font-mono tracking-widest text-sky-300 uppercase shadow-[0_0_10px_-4px_rgba(56,189,248,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>{projects.eyebrow}</span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {projects.heading}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {projects.description}
          </p>
        </div>

        {/* Featured Project Presentation */}
        <div className="space-y-8">
          {projects.items.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: 'easeOut' }}
              className="relative rounded-3xl bg-[#050b16]/85 border border-sky-500/20 hover:border-sky-400/40 backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.8),0_0_30px_-8px_rgba(56,189,248,0.12)] hover:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.9),0_0_35px_-5px_rgba(56,189,248,0.22)] transition-all duration-300 ease-out overflow-hidden"
            >
              {/* Subtle ambient cyan glow overlay */}
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-sky-500/10 via-cyan-400/5 to-transparent rounded-full blur-3xl pointer-events-none"
              />

              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                
                {/* Left Column: Project Details */}
                <div className="lg:col-span-6 space-y-6 text-left">
                  
                  {/* Top Metadata Badges */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-sky-950/70 border border-sky-400/30 text-cyan-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]" />
                      Featured Project
                    </span>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono bg-[#070d18] border border-sky-500/20 text-slate-300">
                      Independent Build
                    </span>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono bg-emerald-950/40 border border-emerald-500/30 text-emerald-300">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      {project.status}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1.5">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                      {project.title}
                    </h3>
                    {project.tagline && (
                      <p className="text-sm sm:text-base font-mono text-sky-300/90">
                        {project.tagline}
                      </p>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Implemented Features Grid */}
                  <div className="space-y-2.5 pt-1">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-cyan-400" />
                      Implemented Capabilities
                    </h4>
                    
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2.5 p-2 rounded-xl bg-[#071022]/70 border border-sky-500/15 text-slate-200"
                        >
                          <span className="p-1 rounded-md bg-sky-950/80 border border-sky-400/20 shrink-0">
                            {getFeatureIcon(feature)}
                          </span>
                          <span className="text-xs font-medium text-slate-200">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Used */}
                  <div className="space-y-2 pt-1">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Confirmed Technologies
                    </h4>
                    <div className="flex flex-wrap items-center gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg text-xs font-mono bg-[#081224] border border-sky-400/25 text-sky-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links / Action Area */}
                  {(project.liveUrl || project.githubUrl) ? (
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 text-xs font-semibold shadow-[0_0_15px_-3px_rgba(56,189,248,0.4)] hover:shadow-[0_0_20px_0_rgba(56,189,248,0.55)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                          aria-label={`View live demo of ${project.title} (opens in a new tab)`}
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#081224] border border-sky-400/30 text-xs font-medium text-slate-200 hover:text-white hover:border-sky-400/60 hover:bg-sky-950/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                          aria-label={`View ${project.title} GitHub repository (opens in a new tab)`}
                        >
                          <GithubIcon className="w-4 h-4 text-sky-400" />
                          <span>GitHub Repository</span>
                        </a>
                      )}
                    </div>
                  ) : (
                    <div className="pt-2 flex items-center gap-2 text-xs font-mono text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>Completed personal application</span>
                    </div>
                  )}

                </div>

                {/* Right Column: Application Screenshot */}
                <div className="lg:col-span-6">
                  <div className="group w-full overflow-hidden rounded-2xl border border-sky-400/25 bg-[#040812] shadow-[0_12px_35px_-10px_rgba(0,0,0,0.8),0_0_20px_-4px_rgba(56,189,248,0.15)] transition-shadow duration-300 hover:border-sky-400/40 hover:shadow-[0_16px_40px_-10px_rgba(0,0,0,0.75),0_0_26px_-4px_rgba(56,189,248,0.22)]">
                    <div className="flex items-center gap-1.5 border-b border-sky-500/15 px-4 py-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-cyan-400/80" aria-hidden="true" />
                      <span className="h-2 w-2 rounded-full bg-sky-500/50" aria-hidden="true" />
                      <span className="h-2 w-2 rounded-full bg-sky-700/40" aria-hidden="true" />
                      <span className="ml-2 text-[10px] font-mono text-sky-300">
                        RemindMe // Workspace
                      </span>
                    </div>
                    <img
                      src="/images/remindme-dashboard.png"
                      alt="Screenshot of the RemindMe dashboard showing its daily schedule, tasks, events, and to-do workspace"
                      className="block h-auto w-full transition-transform duration-300 group-hover:scale-[1.01]"
                    />
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
