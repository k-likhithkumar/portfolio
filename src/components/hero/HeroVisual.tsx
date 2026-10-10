import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles, Terminal, Cpu } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../constants/portfolio';

const PROFILE_IMAGE = '/images/profile.jpg';
const FULL_NAME = 'K LIKHITH KUMAR';
const FULL_HANDLE = 'k_lk';

export const HeroVisual: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [nameText, setNameText] = React.useState(() => (shouldReduceMotion ? FULL_NAME : ''));
  const [handleText, setHandleText] = React.useState(() => (shouldReduceMotion ? FULL_HANDLE : ''));
  const [isNameComplete, setIsNameComplete] = React.useState(() => Boolean(shouldReduceMotion));

  // Sequential terminal-style typing animation on initial page load:
  // 1. Type "K LIKHITH KUMAR" with blinking cursor
  // 2. Move to next line and type "> k_lk"
  // 3. Keep both visible with persistent blinking cursor at end of k_lk
  React.useEffect(() => {
    if (shouldReduceMotion) {
      setNameText(FULL_NAME);
      setHandleText(FULL_HANDLE);
      setIsNameComplete(true);
      return;
    }

    let nameIdx = 0;
    let handleInterval: ReturnType<typeof setInterval> | null = null;
    let handlePauseTimer: ReturnType<typeof setTimeout> | null = null;

    const startTimer = setTimeout(() => {
      const nameInterval = setInterval(() => {
        nameIdx += 1;
        if (nameIdx <= FULL_NAME.length) {
          setNameText(FULL_NAME.slice(0, nameIdx));
        } else {
          clearInterval(nameInterval);
          setIsNameComplete(true);

          handlePauseTimer = setTimeout(() => {
            let handleIdx = 0;
            handleInterval = setInterval(() => {
              handleIdx += 1;
              if (handleIdx <= FULL_HANDLE.length) {
                setHandleText(FULL_HANDLE.slice(0, handleIdx));
              } else {
                if (handleInterval) clearInterval(handleInterval);
              }
            }, 120);
          }, 200);
        }
      }, 65);

      return () => {
        clearInterval(nameInterval);
        if (handlePauseTimer) clearTimeout(handlePauseTimer);
        if (handleInterval) clearInterval(handleInterval);
      };
    }, 250);

    return () => {
      clearTimeout(startTimer);
      if (handlePauseTimer) clearTimeout(handlePauseTimer);
      if (handleInterval) clearInterval(handleInterval);
    };
  }, [shouldReduceMotion]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.8,
        ease: 'easeOut' as const,
        staggerChildren: 0.15,
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative w-full max-w-md mx-auto lg:max-w-none flex items-center justify-center py-6"
    >
      {/* Ambient frozen backlight glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 max-w-[420px] max-h-[420px] m-auto rounded-3xl bg-gradient-to-tr from-sky-600/20 via-cyan-500/15 to-transparent blur-3xl -z-10 pointer-events-none"
      />

      {/* Main Crystalline Geometry Frame */}
      <div className="relative w-full max-w-[320px] xs:max-w-[350px] sm:max-w-[400px] aspect-[4/5.1] rounded-3xl p-1 bg-gradient-to-b from-sky-400/30 via-sky-600/10 to-cyan-500/20 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8),0_0_30px_-5px_rgba(56,189,248,0.2)]">
        {/* Inner Card Container */}
        <div className="relative w-full h-full rounded-[22px] bg-[#060c18]/90 backdrop-blur-xl border border-sky-400/20 overflow-hidden flex flex-col justify-between p-4 xs:p-5 sm:p-6">
          
          {/* Top card header with terminal bar / crystalline tech accents */}
          <div className="flex items-center justify-between border-b border-sky-500/15 pb-3 sm:pb-3.5">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
              <span className="w-2 h-2 rounded-full bg-sky-500/60" />
              <span className="w-2 h-2 rounded-full bg-sky-700/40" />
              <span className="ml-1 text-[10px] sm:text-[11px] font-mono text-sky-300 tracking-wider">
                ID // {PORTFOLIO_DATA.brandLogo}
              </span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-sky-950/60 border border-sky-500/20 text-[10px] font-mono text-cyan-300">
              <Terminal className="w-3 h-3 text-cyan-400" />
              <span>STUDENT_DEV</span>
            </div>
          </div>

          {/* Center: Profile Visual Block (Picture + Name + Terminal Handle) */}
          <div className="relative my-auto flex flex-col items-center justify-center py-2 sm:py-3 z-10">
            {/* Crystalline SVG geometric background pattern */}
            <svg
              className="absolute inset-0 w-full h-full opacity-15 stroke-sky-400 pointer-events-none"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Geometric Ice Crystal Facets */}
              <polygon points="100,20 170,60 170,140 100,180 30,140 30,60" fill="none" strokeWidth="0.75" />
              <polygon points="100,45 150,75 150,125 100,155 50,125 50,75" fill="none" strokeWidth="0.75" strokeDasharray="3 3" />
              <line x1="100" y1="20" x2="100" y2="180" strokeWidth="0.5" strokeDasharray="2 4" />
              <line x1="30" y1="60" x2="170" y2="140" strokeWidth="0.5" strokeDasharray="2 4" />
              <line x1="30" y1="140" x2="170" y2="60" strokeWidth="0.5" strokeDasharray="2 4" />
            </svg>

            {/* 1. Enlarged Profile Avatar Frame (~1.3x current size, primary visual element) */}
            <div className="relative group flex items-center justify-center w-40 h-40 xs:w-44 xs:h-44 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-2xl bg-gradient-to-b from-[#0a1428] to-[#040812] border-2 border-sky-400/35 hover:border-cyan-300/70 shadow-[0_0_30px_-5px_rgba(56,189,248,0.3)] hover:shadow-[0_0_42px_2px_rgba(34,211,238,0.38)] overflow-hidden transition-all duration-500 ease-out cursor-pointer">
              {/* Corner crystalline brackets */}
              <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t-2 border-l-2 border-cyan-400 z-10 pointer-events-none transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t-2 border-r-2 border-cyan-400 z-10 pointer-events-none transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b-2 border-l-2 border-cyan-400 z-10 pointer-events-none transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b-2 border-r-2 border-cyan-400 z-10 pointer-events-none transition-transform duration-300 group-hover:scale-110" />

              {/* Actual profile photo with smooth scale & subtle brightness on hover */}
              <img
                src={PROFILE_IMAGE}
                alt="K Likhith Kumar"
                className="w-full h-full object-cover object-top transition-all duration-500 ease-out group-hover:scale-[1.05] group-hover:brightness-[1.06]"
                loading="eager"
                decoding="async"
              />
            </div>

            {/* 2 & 3. Terminal-Style Typography & Sequential Typing Block */}
            <div className="mt-3 sm:mt-3.5 flex flex-col items-center justify-center text-center select-none w-full">
              {/* Line 1: Terminal-Style Name */}
              <div
                className="flex items-center justify-center font-mono text-sm xs:text-base sm:text-lg font-bold tracking-wider text-slate-100 uppercase"
                aria-label="Name: K LIKHITH KUMAR"
              >
                <span>{nameText}</span>
                {!isNameComplete && (
                  <span
                    className="inline-block w-1.5 sm:w-2 h-3.5 sm:h-4 bg-cyan-400 rounded-[1px] animate-pulse ml-1 align-middle"
                    aria-hidden="true"
                  />
                )}
              </div>

              {/* Line 2: Terminal-Style Prompt & Brand Handle (> k_lk) */}
              <div
                className="mt-1 sm:mt-1.5 min-h-[1.25rem] sm:min-h-[1.5rem] flex items-center justify-center font-mono text-xs sm:text-sm"
                aria-label="Developer alias: k_lk"
              >
                {isNameComplete && (
                  <>
                    <span className="text-cyan-400 font-bold select-none mr-1.5 text-xs sm:text-sm">
                      &gt;
                    </span>
                    <span className="text-cyan-300 font-semibold tracking-wider">
                      {handleText}
                    </span>
                    <span
                      className="inline-block w-1.5 sm:w-2 h-3.5 sm:h-4 bg-cyan-400 rounded-[1px] animate-pulse ml-1 align-middle"
                      aria-hidden="true"
                    />
                  </>
                )}
              </div>
            </div>

          </div>

          {/* Bottom Card Footer */}
          <div className="border-t border-sky-500/15 pt-2.5 sm:pt-3 flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5 sm:gap-2 text-slate-300">
              <Cpu className="w-3.5 h-3.5 text-sky-400" />
              <span className="font-mono text-[10px] sm:text-[11px]">B.Tech CSE (AI-ML)</span>
            </div>
            <span className="font-mono text-[10px] sm:text-[11px] text-cyan-300 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/20">
              {PORTFOLIO_DATA.college}
            </span>
          </div>
        </div>
      </div>

      {/* Floating Interactive Glass Badges for technical depth */}
      {/* Floating Badge 1: Top Right */}
      <motion.div
        variants={badgeVariants}
        className="absolute -top-3 right-1 sm:-right-4 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-[#091325]/95 border border-sky-400/30 backdrop-blur-md shadow-[0_8px_20px_-4px_rgba(0,0,0,0.6),0_0_15px_-3px_rgba(56,189,248,0.25)] flex items-center gap-2 text-xs z-20"
      >
        <div className="p-1 rounded-lg bg-sky-500/20 text-cyan-300">
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
        </div>
        <div>
          <div className="text-[9px] sm:text-[10px] font-mono text-slate-400 uppercase">Focus Area</div>
          <div className="font-semibold text-slate-100 text-[11px] sm:text-xs">AI & ML</div>
        </div>
      </motion.div>
    </motion.div>
  );
};
