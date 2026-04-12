import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const useGlowDrawerAnimation = (isOpen: boolean, containerRef: React.RefObject<HTMLElement | null>) => {
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initialize hidden state
      gsap.set('.glow-sidemenu-panel', { xPercent: 100, autoAlpha: 0 });
      gsap.set('.glow-sidemenu-overlay', { autoAlpha: 0 });
      gsap.set('.glow-sidemenu-item', { y: 20, autoAlpha: 0 });

      // Create timeline
      timelineRef.current = gsap
        .timeline({ paused: true })
        .to('.glow-sidemenu-overlay', {
          autoAlpha: 1,
          duration: 0.45,
          ease: 'power2.out',
        })
        .to(
          '.glow-sidemenu-panel',
          {
            xPercent: 0,
            autoAlpha: 1,
            duration: 0.6,
            ease: 'power3.out',
          },
          '-=0.3',
        )
        .to(
          '.glow-sidemenu-item',
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.45,
            stagger: 0.075,
            ease: 'back.out(1.2)',
          },
          '-=0.45',
        );
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef]);

  useEffect(() => {
    if (timelineRef.current) {
      if (isOpen) {
        timelineRef.current.play();
      } else {
        timelineRef.current.reverse();
      }
    }
  }, [isOpen]);

  return timelineRef;
};
