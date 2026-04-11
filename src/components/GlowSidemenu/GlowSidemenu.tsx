import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { X } from 'lucide-react';
import './GlowSidemenu.css';

interface MenuItem {
  label: string;
  link: string;
  ariaLabel?: string;
}

interface SocialItem {
  label: string;
  link: string;
}

interface GlowSidemenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: MenuItem[];
  socialItems?: SocialItem[];
  logoUrl?: string;
}

export const GlowSidemenu: React.FC<GlowSidemenuProps> = ({
  isOpen,
  onClose,
  items,
  socialItems = [],
  logoUrl = '/assets/logo.webp'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initialize hidden state
      gsap.set('.glow-sidemenu-panel', { xPercent: 100, autoAlpha: 0 });
      gsap.set('.glow-sidemenu-overlay', { autoAlpha: 0 });
      gsap.set('.glow-sidemenu-item', { y: 20, opacity: 0 });

      // Create timeline
      timelineRef.current = gsap.timeline({ paused: true })
        .to('.glow-sidemenu-overlay', {
          autoAlpha: 1,
          duration: 0.4,
          ease: 'power2.out'
        })
        .to('.glow-sidemenu-panel', {
          xPercent: 0,
          autoAlpha: 1,
          duration: 0.6,
          ease: 'power3.out'
        }, '-=0.2')
        .to('.glow-sidemenu-item', {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'back.out(1.7)'
        }, '-=0.3');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (timelineRef.current) {
      if (isOpen) {
        timelineRef.current.play();
        document.body.style.overflow = 'hidden';
      } else {
        timelineRef.current.reverse();
        document.body.style.overflow = 'auto';
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <div ref={containerRef}>
      <div 
        className="glow-sidemenu-overlay" 
        onClick={onClose}
        aria-hidden="true"
      />
      <aside 
        className="glow-sidemenu-panel" 
        aria-label="Side Navigation"
        aria-hidden={!isOpen}
      >
        <header className="glow-sidemenu-header">
          <img 
            src={logoUrl} 
            alt="Logo" 
            className="glow-sidemenu-logo"
            draggable={false}
          />
          <button 
            className="glow-sidemenu-close" 
            onClick={onClose}
            aria-label="Close Menu"
          >
            <X size={32} />
          </button>
        </header>

        <nav className="glow-sidemenu-nav">
          <ul className="glow-sidemenu-list" role="list">
            {items.map((item, index) => (
              <li 
                key={index} 
                className="glow-sidemenu-item"
              >
                <a 
                  href={item.link} 
                  className="glow-sidemenu-link"
                  aria-label={item.ariaLabel}
                  onClick={onClose}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {socialItems.length > 0 && (
          <div className="glow-sidemenu-socials">
            {socialItems.map((social, index) => (
              <a 
                key={index} 
                href={social.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="glow-sidemenu-social-link"
              >
                {social.label}
              </a>
            ))}
          </div>
        )}
      </aside>
    </div>
  );
};

export default GlowSidemenu;
