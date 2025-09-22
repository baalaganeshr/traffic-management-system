
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '', title }) => {
  return (
    <div className={`
      bg-navy-800/70 backdrop-blur-sm rounded-xl shadow-lg
      p-4 sm:p-6
      relative overflow-hidden
      border border-navy-700
      ${className}
    `}>
      <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-white/5 to-transparent"></div>
      <div className="relative z-10">
        {title && <h3 className="text-lg font-semibold text-white mb-4 border-b border-navy-700 pb-2">{title}</h3>}
        {children}
      </div>
    </div>
  );
};

export default Card;