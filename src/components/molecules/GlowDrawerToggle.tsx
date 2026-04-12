import React from 'react';
import { Menu } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GlowDrawerToggleProps {
  onClick: () => void;
  className?: string;
  label?: string;
  color?: string;
}

export const GlowDrawerToggle: React.FC<GlowDrawerToggleProps> = ({
  onClick,
  className = '',
  label = "Menu",
  color = '#fff'
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md p-1 transition-opacity hover:opacity-80",
        className
      )}
      aria-label={`Open ${label}`}
      style={{ color }}
    >
      <span className="font-semibold uppercase tracking-wider text-sm hidden sm:block">{label}</span>
      <Menu size={32} />
    </button>
  );
};

export default GlowDrawerToggle;
