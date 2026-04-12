import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GlowDrawerToggleProps {
  onClick: () => void;
  className?: string;
  label?: string;
  color?: string;
}

export function GlowDrawerToggle({
  onClick,
  className = '',
  label = "MENU",
  color = '#fff'
}: GlowDrawerToggleProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md p-1 transition-opacity hover:opacity-80",
        className
      )}
      aria-label={`ACCEDER AL CENTRO DE MANDO`}
      style={{ color }}
    >
      <span className="font-semibold uppercase tracking-wider text-sm hidden sm:block">{label}</span>
      <Menu size={32} />
    </button>
  );
}

export default GlowDrawerToggle;
