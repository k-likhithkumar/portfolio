import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mouseX = useRef(-100);
  const mouseY = useRef(-100);
  const ringX = useRef(-100);
  const ringY = useRef(-100);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on desktop with fine pointer & no reduced motion preference
    if (typeof window === 'undefined') return;
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!hasFinePointer || prefersReducedMotion) {
      return;
    }

    setIsEnabled(true);
    document.documentElement.classList.add('custom-cursor-enabled');

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;

      if (!isVisible) setIsVisible(true);

      // Direct, zero-lag update for the central dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check if hovering over an interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        // Retain native text cursor on inputs and textareas
        const isTextInput = Boolean(target.closest('input, textarea, [contenteditable="true"]'));
        if (isTextInput) {
          setIsVisible(false);
          return;
        } else if (!isVisible) {
          setIsVisible(true);
        }

        const interactive = Boolean(
          target.closest('a, button, [role="button"], select, [tabindex]:not([tabindex="-1"]), .cursor-pointer')
        );
        setIsHovered(interactive);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Smooth lerp animation for the outer ring (subtle, fluid trailing)
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const animateRing = () => {
      ringX.current = lerp(ringX.current, mouseX.current, 0.22);
      ringY.current = lerp(ringY.current, mouseY.current, 0.22);

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX.current}px, ${ringY.current}px, 0)`;
      }

      rafId.current = requestAnimationFrame(animateRing);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    rafId.current = requestAnimationFrame(animateRing);

    return () => {
      document.documentElement.classList.remove('custom-cursor-enabled');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isVisible]);

  if (!isEnabled) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Outer circular ring with smooth lag and interactive expansion */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full border pointer-events-none will-change-transform transition-[width,height,margin,border-color,background-color,box-shadow] duration-200 ease-out ${
          isHovered
            ? 'w-9 h-9 -ml-[18px] -mt-[18px] border-cyan-300 bg-cyan-400/15 shadow-[0_0_16px_rgba(34,211,238,0.45)]'
            : 'w-6 h-6 -ml-3 -mt-3 border-sky-400/50 bg-sky-500/5 shadow-[0_0_10px_rgba(56,189,248,0.25)]'
        }`}
      />

      {/* Tiny central dot with zero lag */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none will-change-transform transition-[width,height,margin,background-color,box-shadow] duration-150 ease-out ${
          isHovered
            ? 'w-2 h-2 -ml-1 -mt-1 bg-white shadow-[0_0_8px_#22d3ee]'
            : 'w-1.5 h-1.5 -ml-[3px] -mt-[3px] bg-cyan-400 shadow-[0_0_6px_#38bdf8]'
        }`}
      />
    </div>
  );
};
