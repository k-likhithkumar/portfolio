import React from 'react';
import { useReducedMotion } from 'framer-motion';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { PORTFOLIO_DATA } from '../../constants/portfolio';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const quickNavLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/k-likhithkumar',
      icon: <GithubIcon className="w-4 h-4 text-sky-400 group-hover:text-cyan-300 transition-colors" />,
      ariaLabel: "Visit Likhith Kumar's GitHub profile (opens in new tab)",
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/likhith-kumar-keshamshetty-720065439/',
      icon: <LinkedinIcon className="w-4 h-4 text-sky-400 group-hover:text-cyan-300 transition-colors" />,
      ariaLabel: "Connect with Likhith Kumar on LinkedIn (opens in new tab)",
    },
    {
      name: 'Email',
      url: 'mailto:lkeshamshetty@gmail.com',
      icon: <Mail className="w-4 h-4 text-sky-400 group-hover:text-cyan-300 transition-colors" />,
      ariaLabel: 'Send an email to Likhith Kumar',
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <footer
      className="relative z-10 border-t border-sky-500/15 bg-[#020408]/90 backdrop-blur-md pt-12 pb-8 sm:pt-14 sm:pb-10"
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Brand & Identity Column */}
          <div className="md:col-span-5 space-y-3.5 text-left">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="group inline-flex items-center font-mono text-xl sm:text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-sky-400 to-cyan-300 hover:from-white hover:to-cyan-200 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-md py-1"
              aria-label="k_lk - Back to top"
            >
              {PORTFOLIO_DATA.brandLogo}
            </a>

            <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed max-w-sm">
              Building, learning, and improving — one project at a time.
            </p>
          </div>

          {/* Quick Navigation Column */}
          <div className="md:col-span-4 space-y-3 text-left">
            <span className="text-xs font-mono tracking-widest text-sky-400 uppercase font-semibold">
              Quick Navigation
            </span>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 pt-1">
              {quickNavLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-slate-400 hover:text-cyan-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-400 rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links Column */}
          <div className="md:col-span-3 space-y-3 text-left">
            <span className="text-xs font-mono tracking-widest text-sky-400 uppercase font-semibold">
              Connect
            </span>
            <ul className="space-y-2 pt-1">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target={social.url.startsWith('mailto:') ? undefined : '_blank'}
                    rel={social.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    className="group inline-flex items-center gap-2.5 text-xs sm:text-sm text-slate-400 hover:text-slate-200 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-400 rounded py-0.5"
                    aria-label={social.ariaLabel}
                  >
                    <span className="p-1.5 rounded-md bg-[#070d18] border border-sky-500/20 group-hover:border-sky-400/50 transition-colors">
                      {social.icon}
                    </span>
                    <span>{social.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Line & Back to Top */}
        <div className="pt-6 border-t border-sky-500/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="font-normal text-center sm:text-left">
            © {CURRENT_YEAR} Likhith Kumar. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#070d18] border border-sky-500/20 hover:border-sky-400/50 text-xs font-mono text-slate-400 hover:text-sky-300 transition-all shadow-[0_0_10px_-4px_rgba(56,189,248,0.2)] hover:shadow-[0_0_14px_-2px_rgba(56,189,248,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            aria-label="Scroll back to top of the page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-sky-400" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
};
