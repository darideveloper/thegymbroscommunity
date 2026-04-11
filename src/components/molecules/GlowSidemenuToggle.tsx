import React from 'react';
import { Menu } from 'lucide-react';

interface GlowSidemenuToggleProps {
  onClick: () => void;
  className?: string;
  color?: string;
}

export const GlowSidemenuToggle: React.FC<GlowSidemenuToggleProps> = ({
  onClick,
  className = '',
  color = '#fff'
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md p-1 transition-opacity hover:opacity-80 ${className}`}
      aria-label="Open Menu"
      style={{ color }}
    >
      <span className="font-semibold uppercase tracking-wider text-sm hidden sm:block">Menu</span>
      <Menu size={32} />
    </button>
  );
};

export default GlowSidemenuToggle;
