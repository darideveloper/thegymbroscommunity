# Design: Refactor GlowDrawer for DRY, Reusability, and DX

## Architecture
The refactoring follows a modular pattern, separating logic, types, and presentation.

### 1. Centralized Types
Moved to `src/types/navigation.ts`.

```typescript
export interface MenuItem {
  label: string;
  link: string;
  ariaLabel?: string;
}

export interface SocialItem {
  label: string;
  link: string;
}
```

### 2. Logic Separation (GSAP Hook)
Extracted to `src/hooks/useGlowDrawerAnimation.ts`.

### 3. Scroll Locking
Implemented in `src/hooks/useScrollLock.ts`.

### 4. Component Redesign

#### Molecule: `GlowDrawerToggle`
Uses `cn` (clsx + tailwind-merge) for customization.

#### Organism: `GlowDrawer`
A "dumb" container using `createPortal` and `children`.

#### Controller: `GlowNavigationDrawer`
Orchestrates navigation items and applies premium hover animations:
- **Easing:** `cubic-bezier(0.22, 1, 0.36, 1)`
- **Effects:** `translate-x-3`, `scale-105`, and `shadow-glow-strong`.

```tsx
<a
  href={item.link}
  className='transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-x-3 hover:scale-105'
>
  {item.label}
</a>
```
