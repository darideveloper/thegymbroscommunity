import { useState } from 'react';
import GlowDrawer from './GlowDrawer';
import GlowDrawerToggle from '../molecules/GlowDrawerToggle';
import { cn } from '@/lib/utils';
import type { MenuItem, SocialItem } from '../../types/navigation';

interface GlowNavigationDrawerProps {
  items: MenuItem[];
  socialItems?: SocialItem[];
  className?: string;
}

export function GlowNavigationDrawer({
  items,
  socialItems = [],
  className = ""
}: GlowNavigationDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={cn(className)}>
        <GlowDrawerToggle onClick={() => setIsOpen(true)} />
      </div>
      <GlowDrawer 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
      >
        <nav className='glow-sidemenu-nav'>
          <ul
            className='glow-sidemenu-list list-none p-0 m-0 flex flex-col gap-8'
            role='list'
          >
            {items.map((item, index) => (
              <li
                key={index}
                className='glow-sidemenu-item will-change-transform'
              >
                <a
                  href={item.link}
                  className='glow-sidemenu-link font-sans text-[2rem] sm:text-[2.5rem] font-extrabold text-white no-underline uppercase tracking-[2px] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] inline-block shadow-glow hover:shadow-glow-strong hover:translate-x-3 hover:scale-105'
                  aria-label={item.ariaLabel}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {socialItems.length > 0 && (
          <div className='glow-sidemenu-socials mt-auto flex gap-6 pb-8'>
            {socialItems.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target='_blank'
                rel='noopener noreferrer'
                className='glow-sidemenu-social-item glow-sidemenu-social-link text-gray-500 no-underline text-base transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-white hover:scale-110 hover:-translate-y-1'
              >
                {social.label}
              </a>
            ))}
          </div>
        )}
      </GlowDrawer>
    </>
  );
}

export default GlowNavigationDrawer;
