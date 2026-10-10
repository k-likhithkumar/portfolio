import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../constants/portfolio';

interface NavbarProps {
  activeSection?: string;
}

const SECTION_IDS = [
  'hero',
  'about',
  'skills',
  'projects',
  'experience',
  'education',
  'achievements',
  'github-activity',
  'coding-profiles',
  'resume',
  'contact',
];

const SECTION_TO_NAV_MAP: Record<string, string> = {
  hero: 'hero',
  about: 'about',
  skills: 'skills',
  projects: 'projects',
  experience: 'experience',
  education: 'education',
  achievements: 'achievements',
  'github-activity': 'achievements',
  'coding-profiles': 'achievements',
  resume: 'resume',
  contact: 'contact',
};

export const Navbar: React.FC<NavbarProps> = ({ activeSection = '' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState(() => {
    if (activeSection) return activeSection;
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.replace('#', '');
      return SECTION_TO_NAV_MAP[hash] || hash;
    }
    return 'hero';
  });

  const isManualClickRef = useRef(false);
  const clickTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Background blur and top/bottom boundary detection on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (isManualClickRef.current) return;

      // When at the very top, activate hero
      if (window.scrollY < 80) {
        setActiveItem('hero');
        return;
      }

      // When at the bottom of the page, activate contact
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60
      ) {
        setActiveItem('contact');
        return;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for dynamic visible section detection
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;

    const intersectingEntries = new Map<string, IntersectionObserverEntry>();

    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualClickRef.current) return;

        // Skip observer when at the very top or bottom
        if (window.scrollY < 80) {
          setActiveItem('hero');
          return;
        }

        if (
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 60
        ) {
          setActiveItem('contact');
          return;
        }

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intersectingEntries.set(entry.target.id, entry);
          } else {
            intersectingEntries.delete(entry.target.id);
          }
        });

        if (intersectingEntries.size === 0) return;

        // Sort currently intersecting sections by their DOM appearance order
        const intersectingIds = Array.from(intersectingEntries.keys()).sort(
          (a, b) => SECTION_IDS.indexOf(a) - SECTION_IDS.indexOf(b)
        );

        // Pick the primary section (furthest down that has crossed the navbar threshold)
        let candidateId = intersectingIds[0];
        for (const id of intersectingIds) {
          const entry = intersectingEntries.get(id);
          if (entry && entry.boundingClientRect.top <= 200) {
            candidateId = id;
          }
        }

        const navId = SECTION_TO_NAV_MAP[candidateId] || candidateId;
        setActiveItem(navId);
      },
      {
        root: null,
        // Top -80px accounts for the fixed navbar height (~65-75px)
        // Bottom -40% ensures a section becomes active when in the primary reading viewport
        rootMargin: '-80px 0px -40% 0px',
        threshold: [0, 0.1, 0.25],
      }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Update active item from URL hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const currentHash = window.location.hash.replace('#', '');
      if (currentHash) {
        const mapped = SECTION_TO_NAV_MAP[currentHash] || currentHash;
        setActiveItem(mapped);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  // Clean up click timeout on unmount
  useEffect(() => {
    return () => {
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }
    };
  }, []);

  const handleNavClick = (id: string) => {
    setActiveItem(id);
    setMobileMenuOpen(false);
    isManualClickRef.current = true;

    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
    }
    // Lock manual click for 800ms to allow smooth scroll without flicker
    clickTimeoutRef.current = setTimeout(() => {
      isManualClickRef.current = false;
    }, 800);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#020408]/85 backdrop-blur-md border-b border-sky-500/15 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.8)] py-3.5'
          : 'bg-transparent py-5 sm:py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Main Navigation">
          {/* Brand: k_lk */}
          <a
            href="#hero"
            onClick={() => handleNavClick('hero')}
            className="group inline-flex items-center font-mono text-xl sm:text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-sky-400 to-cyan-300 hover:from-white hover:to-cyan-200 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-md py-1"
            aria-label="k_lk - Back to top"
          >
            {PORTFOLIO_DATA.brandLogo}
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-[#070d18]/60 border border-sky-500/15 backdrop-blur-md">
            {PORTFOLIO_DATA.navItems.map((item) => {
              const isActive = activeItem === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-2.5 lg:px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 flex items-center gap-1 ${
                      isActive
                        ? 'text-sky-300 bg-sky-500/15 shadow-[0_0_12px_-2px_rgba(56,189,248,0.3)]'
                        : 'text-slate-400 hover:text-sky-200 hover:bg-sky-500/10'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                    )}
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              onClick={() => handleNavClick('contact')}
              className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wide rounded-xl transition-all duration-300 ${
                activeItem === 'contact'
                  ? 'text-white bg-sky-900/60 border border-sky-400/50 shadow-[0_0_20px_0_rgba(56,189,248,0.35)]'
                  : 'text-slate-200 hover:text-white bg-sky-950/40 hover:bg-sky-900/50 border border-sky-400/30 hover:border-sky-300/60 shadow-[0_0_15px_-4px_rgba(56,189,248,0.2)] hover:shadow-[0_0_20px_0_rgba(56,189,248,0.35)]'
              }`}
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#070d18] border border-sky-500/20 text-slate-300 hover:text-white hover:border-sky-400/50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-sky-300" />
              ) : (
                <Menu className="w-5 h-5 text-sky-300" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Drawer / Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="fixed inset-0 top-[65px] z-40 md:hidden bg-[#020408]/95 backdrop-blur-xl border-t border-sky-500/15 flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-sky-500/10">
              <span className="text-xs font-mono tracking-wider text-sky-400 uppercase">
                Navigation
              </span>
              <span className="text-[11px] font-mono text-slate-500">
                {PORTFOLIO_DATA.degree}
              </span>
            </div>

            <ul className="space-y-2">
              {PORTFOLIO_DATA.navItems.map((item) => {
                const isActive = activeItem === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={() => handleNavClick(item.id)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                        isActive
                          ? 'text-sky-200 bg-sky-500/15 border border-sky-400/30'
                          : 'text-slate-300 hover:text-white hover:bg-sky-500/10'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            isActive ? 'bg-cyan-400 shadow-[0_0_8px_#22d3ee]' : 'bg-slate-700'
                          }`}
                        />
                        {item.label}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-slate-500" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="pt-6 border-t border-sky-500/15 space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>{PORTFOLIO_DATA.college}</span>
              <span className="font-mono text-sky-400">Graduation: {PORTFOLIO_DATA.graduationYear}</span>
            </div>

            <a
              href="#contact"
              onClick={() => handleNavClick('contact')}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-sm bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 shadow-[0_0_20px_-3px_rgba(56,189,248,0.4)]"
            >
              <span>Contact Me</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
