import React from 'react';

const Logo = ({ className = "w-10 h-10" }) => {
  return (
    <div className={`flex items-center gap-2 group cursor-pointer ${className}`}>
      <div className="relative w-10 h-10 flex items-center justify-center">
        {/* Background Hexagon/Shape */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full fill-emerald-500/10 dark:fill-emerald-500/20 group-hover:fill-emerald-500/20 transition-colors">
          <path d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z" />
        </svg>
        
        {/* Stylized 'P' Mark */}
        <svg viewBox="0 0 100 100" className="relative w-7 h-7 fill-none stroke-emerald-600 dark:stroke-emerald-500 stroke-[8] stroke-round">
          {/* The Vertical Stem (Cursor-like) */}
          <line x1="35" y1="25" x2="35" y2="75" />
          {/* The Loop (Bracket-like) */}
          <path d="M35 25 C65 25, 75 35, 75 50 C75 65, 65 75, 35 75" className="group-hover:stroke-blue-500 transition-colors duration-500" />
          {/* A small terminal dot */}
          <circle cx="75" cy="50" r="4" className="fill-emerald-600 dark:fill-emerald-500 group-hover:fill-blue-500 transition-colors" />
        </svg>
      </div>
      <span className="text-xl font-bold text-zinc-900 dark:text-white tracking-tighter">
        PRITOM<span className="text-emerald-600 group-hover:text-blue-500 transition-colors">.</span>
      </span>
    </div>
  );
};

export default Logo;
