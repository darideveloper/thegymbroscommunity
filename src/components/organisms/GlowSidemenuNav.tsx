import React, { useState } from 'react';
import GlowSidemenu from './GlowSidemenu';
import GlowSidemenuToggle from '../molecules/GlowSidemenuToggle';

interface MenuItem {
  label: string;
  link: string;
  ariaLabel?: string;
}

interface SocialItem {
  label: string;
  link: string;
}

interface GlowSidemenuNavProps {
  items: MenuItem[];
  socialItems?: SocialItem[];
  className?: string;
}

export const GlowSidemenuNav: React.FC<GlowSidemenuNavProps> = ({
  items,
  socialItems,
  className = ""
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={className}>
        <GlowSidemenuToggle onClick={() => setIsOpen(true)} />
      </div>
      <GlowSidemenu 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        items={items}
        socialItems={socialItems}
      />
    </>
  );
};

export default GlowSidemenuNav;
