import React, { useState } from 'react';
import GlowSidemenu from './GlowSidemenu';
import GlowSidemenuToggle from './GlowSidemenuToggle';

interface MenuItem {
  label: string;
  link: string;
  ariaLabel?: string;
}

interface SocialItem {
  label: string;
  link: string;
}

interface GlowSidemenuWrapperProps {
  items: MenuItem[];
  socialItems?: SocialItem[];
}

export const GlowSidemenuWrapper: React.FC<GlowSidemenuWrapperProps> = ({
  items,
  socialItems
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed top-8 right-8 z-50">
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

export default GlowSidemenuWrapper;
