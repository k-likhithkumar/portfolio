import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Mail, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../constants/portfolio';
import { Button } from '../common/Button';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { HeroVisual } from './HeroVisual';

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const heroRef = React.useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [isInside, setIsInside] = React.useState(false);
  const targetPos = React.useRef({ x: 0, y: 0 });
  const currentPos = React.useRef({ x: 0, y: 0 });
  const animFrameId = React.useRef<number | null>(null);

  // Smooth ambient cursor glow tracking for hero section
  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch || shouldReduceMotion) return;

    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const updateGlow = () => {
      currentPos.current.x = lerp(currentPos.current.x, targetPos.current.x, 0.12);
      currentPos.current.y = lerp(currentPos.current.y, targetPos.current.y, 0.12);

      setMousePos({ x: currentPos.current.x, y: currentPos.current.y });
      animFrameId.current = requestAnimationFrame(updateGlow);
    };

    animFrameId.current = requestAnimationFrame(updateGlow);

    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [shouldReduceMotion]);

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType === 'touch') return;
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    targetPos.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    if (!isInside) setIsInside(true);
  };

  const handlePointerLeave = () => {
    setIsInside(false);
  };

  // Motion variants for clean, restrained entrance
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        delay: shouldReduceMotion ? 0 : custom * 0.12,
        ease: 'easeOut' as const,
      },
    }),
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative min-h-screen flex items-center pt-24 pb-16 lg:pt-28 lg:pb-20 overflow-hidden"
      aria-label="Introduction & Profile Overview"
    >
      {/* Icy-Blue Ambient Cursor Glow (Limited to Hero) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-700 ease-out"
        style={{
          opacity: isInside ? 1 : 0,
          background: `radial-gradient(700px circle at ${mousePos.x}px ${mousePos.y}px, rgba(34, 211, 238, 0.085), rgba(56, 189, 248, 0.03) 40%, transparent 70%)`,
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content & Typography (7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6 sm:space-y-7">
            
            {/* Small Introductory Label */}
            <motion.div
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="flex items-center gap-2"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#081224]/80 border border-sky-400/25 shadow-[0_0_15px_-4px_rgba(56,189,248,0.25)] backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
                </span>
                <span className="font-mono text-xs font-semibold tracking-widest text-sky-300 uppercase">
                  HELLO, I'M
                </span>
              </div>

              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/40 border border-slate-700/40 text-[11px] font-mono text-slate-400">
                <MapPin className="w-3 h-3 text-sky-400" />
                <span>Hyderabad, India</span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="space-y-1"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                K. LIKHITH <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-sky-400 to-cyan-300">KUMAR</span>
              </h1>
            </motion.div>

            {/* Headline */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="space-y-1"
            >
              <p className="text-base sm:text-xl lg:text-[22px] font-medium tracking-tight text-slate-300 leading-snug">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-sky-400 to-cyan-300 font-semibold">
                  AI-ML Engineering Student
                </span>{' '}
                <span className="text-slate-500 font-light mx-1">|</span>{' '}
                <span className="text-slate-300 font-normal">
                  Software Developer
                </span>{' '}
                <span className="text-slate-500 font-light mx-1">|</span>{' '}
                <span className="text-slate-300 font-normal">
                  Problem Solver
                </span>
              </p>
            </motion.div>

            {/* Professional Introduction Bio */}
            <motion.p
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal"
            >
              {PORTFOLIO_DATA.bio}
            </motion.p>

            {/* Academic Credential pill */}
            <motion.div
              custom={4.5}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="flex flex-wrap items-center gap-2.5 pt-1 text-xs sm:text-sm font-mono text-slate-300"
            >
              <span className="px-3 py-1 rounded-lg bg-sky-950/40 border border-sky-500/20 text-sky-200">
                {PORTFOLIO_DATA.degree}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300">
                {PORTFOLIO_DATA.college}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400">
                Expected {PORTFOLIO_DATA.graduationYear}
              </span>
            </motion.div>

            {/* Call To Action Buttons */}
            <motion.div
              custom={5}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Button
                variant="primary"
                size="lg"
                href="#projects"
                icon={<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
                iconPosition="right"
                ariaLabel="Navigate to projects section"
              >
                View Projects
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href="#contact"
                icon={<Mail className="w-4 h-4 text-sky-400" />}
                iconPosition="left"
                ariaLabel="Navigate to contact section"
              >
                Contact Me
              </Button>
            </motion.div>

            {/* Social Links & Connectivity */}
            <motion.div
              custom={6}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="pt-4 border-t border-sky-500/15 flex items-center gap-4"
            >
              <span className="text-xs font-mono tracking-wider text-slate-400 uppercase">
                Connect:
              </span>

              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/k-likhithkumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#070d18] border border-sky-500/20 hover:border-sky-400/60 text-slate-300 hover:text-white transition-all duration-300 shadow-[0_0_12px_-3px_rgba(56,189,248,0.15)] hover:shadow-[0_0_20px_0_rgba(56,189,248,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  aria-label="GitHub Profile - Keshamshetty Likhith Kumar"
                >
                  <GithubIcon className="w-4 h-4 text-sky-400 group-hover:text-cyan-300 transition-colors" />
                  <span className="text-xs font-medium">GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/likhith-kumar-keshamshetty-720065439/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#070d18] border border-sky-500/20 hover:border-sky-400/60 text-slate-300 hover:text-white transition-all duration-300 shadow-[0_0_12px_-3px_rgba(56,189,248,0.15)] hover:shadow-[0_0_20px_0_rgba(56,189,248,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  aria-label="LinkedIn Profile - Likhith Kumar Keshamshetty"
                >
                  <LinkedinIcon className="w-4 h-4 text-sky-400 group-hover:text-cyan-300 transition-colors" />
                  <span className="text-xs font-medium">LinkedIn</span>
                </a>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Hero Visual Element (5 cols on desktop) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <HeroVisual />
          </div>

        </div>
      </div>
    </section>
  );
};
