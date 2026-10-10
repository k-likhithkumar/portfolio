import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

export const GithubIcon: React.FC<IconProps> = ({ className = 'w-4 h-4', size = 16, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const LinkedinIcon: React.FC<IconProps> = ({ className = 'w-4 h-4', size = 16, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const LeetCodeIcon: React.FC<IconProps> = ({ className = 'w-4 h-4', size = 16, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.818 3.868 6.138 6.138 0 0 0 1.25.045 5.98 5.98 0 0 0 2.25-.668l4.475-2.736a1.376 1.376 0 0 0 .68-1.185 1.378 1.378 0 0 0-.68-1.185l-4.475-2.736a3.226 3.226 0 0 1-1.21-.36 3.197 3.197 0 0 1-2.593-2.083 3.064 3.064 0 0 1-.033-1.272 2.973 2.973 0 0 1 .65-1.134l3.854-4.126 5.406-5.788A1.375 1.375 0 0 0 13.483 0z" />
    <path d="M16.152 7.788a1.378 1.378 0 0 0-.68 1.185 1.376 1.376 0 0 0 .68 1.185l4.475 2.736a3.226 3.226 0 0 1 1.21.36 3.197 3.197 0 0 1 2.593 2.083 3.064 3.064 0 0 1 .033 1.272 2.973 2.973 0 0 1-.65 1.134l-3.854 4.126-5.406 5.788a1.375 1.375 0 0 0 1.922 1.968l5.406-5.788 3.854-4.126a5.266 5.266 0 0 0 1.209-2.104 5.35 5.35 0 0 0 .125-.513 5.527 5.527 0 0 0-.062-2.362 5.83 5.83 0 0 0-.349-1.017 5.938 5.938 0 0 0-4.818-3.868 6.138 6.138 0 0 0-1.25-.045 5.98 5.98 0 0 0-2.25.668z" />
  </svg>
);

export const HackerRankIcon: React.FC<IconProps> = ({ className = 'w-4 h-4', size = 16, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.87 15h-2.1v-2.1h-3.54V15h-2.1V9h2.1v2.1h3.54V9h2.1z" />
  </svg>
);

export const CodeChefIcon: React.FC<IconProps> = ({ className = 'w-4 h-4', size = 16, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path d="M11.696 2.02a5.972 5.972 0 0 0-4.07 1.639 6.002 6.002 0 0 0-3.612 5.534c0 .415.045.823.13 1.222A6.004 6.004 0 0 0 7.96 16.27l1.042 3.714a1 1 0 0 0 .963.73h4.07a1 1 0 0 0 .963-.73l1.042-3.714a6.004 6.004 0 0 0 3.816-5.855 6.002 6.002 0 0 0-3.612-5.534 5.972 5.972 0 0 0-4.548-2.861zm-1.898 5.98a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm4.404 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
  </svg>
);

export const CodeforcesIcon: React.FC<IconProps> = ({ className = 'w-4 h-4', size = 16, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <rect x="2.5" y="10" width="4.5" height="11.5" rx="1.5" />
    <rect x="9.75" y="3" width="4.5" height="18.5" rx="1.5" />
    <rect x="17" y="14" width="4.5" height="7.5" rx="1.5" />
  </svg>
);
