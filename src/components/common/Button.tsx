import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  icon,
  iconPosition = 'right',
  target,
  rel,
  ariaLabel,
}) => {
  const baseStyles =
    'relative inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020408] cursor-pointer select-none active:scale-[0.98] active:translate-y-0';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-sky-500 via-cyan-400 to-sky-400 text-slate-950 font-semibold shadow-[0_0_20px_-3px_rgba(56,189,248,0.45)] hover:shadow-[0_0_30px_2px_rgba(56,189,248,0.6)] hover:brightness-110 hover:-translate-y-0.5 border border-sky-300/40 active:translate-y-0',
    secondary:
      'bg-[#070d18]/80 text-sky-100 hover:text-white border border-sky-500/20 hover:border-cyan-400/60 hover:bg-[#0b162c] hover:-translate-y-0.5 shadow-[0_0_15px_-4px_rgba(56,189,248,0.15)] hover:shadow-[0_0_24px_-2px_rgba(56,189,248,0.35)] backdrop-blur-md active:translate-y-0',
    ghost:
      'bg-transparent text-slate-300 hover:text-cyan-300 hover:bg-sky-500/10 hover:border-sky-500/30 border border-transparent',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={combinedClasses}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
};
