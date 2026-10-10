import React from 'react';

export const BackgroundIce: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Primary deep atmospheric glows */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[500px] rounded-full opacity-20 blur-[130px]"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.45) 0%, rgba(6, 182, 212, 0.15) 50%, transparent 70%)',
        }}
      />
      
      <div
        className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full opacity-15 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.35) 0%, transparent 65%)',
        }}
      />

      <div
        className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full opacity-10 blur-[140px]"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.3) 0%, transparent 70%)',
        }}
      />

      {/* Subtle crystalline grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(125, 211, 252, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(125, 211, 252, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 85%)',
        }}
      />

      {/* Very faint geometric crystalline light rays / diagonal facets */}
      <svg
        className="absolute top-0 right-0 w-full h-full opacity-[0.04] stroke-cyan-300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="20%" y1="0" x2="80%" y2="100%" strokeWidth="1" strokeDasharray="4 8" />
        <line x1="80%" y1="0" x2="20%" y2="100%" strokeWidth="1" strokeDasharray="4 8" />
        <line x1="0" y1="30%" x2="100%" y2="70%" strokeWidth="1" strokeDasharray="6 12" />
      </svg>
    </div>
  );
};
