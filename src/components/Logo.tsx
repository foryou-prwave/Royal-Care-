import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  showText = true,
  size = 'md'
}) => {
  const iconDimensions = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20'
  }[size];

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* SVG Icon matching the Royal Care emblem */}
      <div className={`relative flex-shrink-0 ${iconDimensions} rounded-full bg-white/80 p-1.5 shadow-sm border border-[#C99726]/30 flex items-center justify-center`}>
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background gentle aura */}
          <circle cx="50" cy="50" r="46" fill="#FAF6EE" stroke="#E2D7C5" strokeWidth="1" />
          
          {/* Green/Teal Head of person */}
          <circle cx="50" cy="22" r="6" fill="#1B7A6E" />
          
          {/* Green/Teal stylized human body curving into heart */}
          <path 
            d="M50 30 C40 30 32 38 32 48 C32 60 48 72 50 74 C50.5 73.5 53 71 56 67 C54 65 52 62 52 58 C52 46 62 40 62 40 C60 33 55 30 50 30 Z" 
            fill="#1B7A6E" 
          />
          
          {/* Purple/Violet caring cradling hand */}
          <path 
            d="M68 45 C64 45 61 48 59 52 C57 56 57 60 59 64 C61 68 66 73 66 73 C66 73 48 78 40 70 C35 65 37 57 37 57 C33 63 35 73 42 78 C48 82 58 82 66 78 C72 75 75 68 76 60 C77 52 73 45 68 45 Z" 
            fill="#7E3E91" 
          />
          
          {/* Golden supportive star/sparkle */}
          <path d="M50 7 L51.5 12 L56 12.5 L52 15.5 L53.5 20 L50 17 L46.5 20 L48 15.5 L44 12.5 L48.5 12 Z" fill="#C99726" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="font-['Playfair_Display',serif] text-xl md:text-2xl font-bold tracking-wider text-[#1B7A6E] leading-tight">
            ROYAL <span className="text-[#C99726]">CARE</span>
          </span>
          <span className="text-xs md:text-sm font-semibold tracking-wide text-[#7E3E91] font-sans">
            მოხუცთა პანსიონატი
          </span>
        </div>
      )}
    </div>
  );
};
