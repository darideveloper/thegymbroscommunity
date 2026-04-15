# Proposal: Reduce Countdown Size

## Goal
Reduce the visual footprint of the Hero section's "Classic Digital Clock" countdown by approximately 30%. This will make the Hero section more balanced and less overwhelming, while maintaining its professional and immersive aesthetic.

## Key Changes
- **Scale Down Typography:** Reduce the `font-size` of the countdown digits by ~30% across all breakpoints.
- **Adjust Padding & Rounding:** Scale down the container padding and border-radius to maintain visual proportions.
- **Refine Spacing:** Decrease gaps and unit separation to ensure the "Digital Screen" remains cohesive at a smaller scale.
- **Responsive Optimization:** Maintain the centered, full-width layout but with a more compact vertical and horizontal profile.

## Affected Components
- `src/components/molecules/Countdown.jsx`: Core redesign of the typography, padding, and layout classes.

## Impact
- **UX:** Better balance between the Hero content and the countdown timer.
- **Aesthetic:** More elegant and refined "digital clock" presentation.
- **Accessibility:** Continues to support Spanish localization and ARIA standards with readable (though smaller) font sizes.
