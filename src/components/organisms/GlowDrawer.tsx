import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { useGlowDrawerAnimation } from '../../hooks/useGlowDrawerAnimation';
import { useScrollLock } from '../../hooks/useScrollLock';

interface GlowDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  logoUrl?: string;
  title?: string;
}

export const GlowDrawer: React.FC<GlowDrawerProps> = ({
  isOpen,
  onClose,
  children,
  logoUrl = '/assets/logo.webp',
  title = "Side Navigation"
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useGlowDrawerAnimation(isOpen, containerRef);
  useScrollLock(isOpen);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <div ref={containerRef} className="relative z-100">
      <div
        className='glow-sidemenu-overlay fixed inset-0 bg-black/70 backdrop-blur-sm z-90 opacity-0 invisible'
        onClick={onClose}
        aria-hidden='true'
      />
      <aside
        className='glow-sidemenu-panel fixed top-0 right-0 w-full sm:max-w-[450px] h-screen bg-black z-100 flex flex-col p-8 shadow-[-10px_0_30px_rgba(0,0,0,0.5)] invisible will-change-transform'
        aria-label={title}
        aria-hidden={!isOpen}
      >
        <header className='glow-sidemenu-header flex justify-between items-center mb-16'>
          <div className="flex items-center gap-4">
            <img
              src={logoUrl}
              alt='Logo'
              className='glow-sidemenu-logo h-16 w-auto transition-transform duration-300'
              draggable={false}
            />
          </div>
          <button
            className='glow-sidemenu-close bg-transparent border-none text-white cursor-pointer p-2 flex items-center justify-center transition-transform duration-200 ease-out hover:scale-110'
            onClick={onClose}
            aria-label='Close Menu'
          >
            <X size={32} />
          </button>
        </header>

        {children}
      </aside>
    </div>,
    document.body
  );
};

export default GlowDrawer;
