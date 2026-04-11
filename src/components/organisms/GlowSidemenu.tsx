import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { X } from 'lucide-react'

interface MenuItem {
  label: string
  link: string
  ariaLabel?: string
}

interface SocialItem {
  label: string
  link: string
}

interface GlowSidemenuProps {
  isOpen: boolean
  onClose: () => void
  items: MenuItem[]
  socialItems?: SocialItem[]
  logoUrl?: string
}

export const GlowSidemenu: React.FC<GlowSidemenuProps> = ({
  isOpen,
  onClose,
  items,
  socialItems = [],
  logoUrl = '/assets/logo.webp',
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<gsap.core.Timeline | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initialize hidden state
      gsap.set('.glow-sidemenu-panel', { xPercent: 100, autoAlpha: 0 })
      gsap.set('.glow-sidemenu-overlay', { autoAlpha: 0 })
      gsap.set('.glow-sidemenu-item', { y: 20, autoAlpha: 0 })

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
        )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (timelineRef.current) {
      if (isOpen) {
        timelineRef.current.play()
      } else {
        timelineRef.current.reverse()
      }
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  return (
    <div ref={containerRef}>
      <div
        className='glow-sidemenu-overlay fixed inset-0 bg-black/70 backdrop-blur-sm z-90 opacity-0 invisible'
        onClick={onClose}
        aria-hidden='true'
      />
      <aside
        className='glow-sidemenu-panel fixed top-0 right-0 w-full sm:max-w-[450px] h-screen bg-black z-100 flex flex-col p-8 shadow-[-10px_0_30px_rgba(0,0,0,0.5)] invisible will-change-transform'
        aria-label='Side Navigation'
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

        <nav className='glow-sidemenu-nav'>
          <ul
            className='glow-sidemenu-list list-none p-0 m-0 flex flex-col gap-8'
            role='list'
          >
            {items.map((item, index) => (
              <li
                key={index}
                className='glow-sidemenu-item will-change-transform will-change-opacity'
              >
                <a
                  href={item.link}
                  className='glow-sidemenu-link font-sans text-[2rem] sm:text-[2.5rem] font-extrabold text-white no-underline uppercase tracking-[2px] transition-[color,text-shadow,transform] duration-300 ease-in-out inline-block shadow-glow hover:shadow-glow-strong hover:translate-x-[10px]'
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
          <div className='glow-sidemenu-socials mt-auto flex gap-6 pb-8'>
            {socialItems.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target='_blank'
                rel='noopener noreferrer'
                className='glow-sidemenu-social-link text-gray-500 no-underline text-base transition-colors duration-300 ease-in-out hover:text-white'
              >
                {social.label}
              </a>
            ))}
          </div>
        )}
      </aside>
    </div>
  )
}

export default GlowSidemenu
