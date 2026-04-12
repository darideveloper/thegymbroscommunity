# Design: OnlineStore Schema Fix

## Schema Correction

We will remove the `priceRange` property from all `OnlineStore` related logic to align with the `Organization` schema requirements.

### 1. SEO Engine Correction (`BaseSEO.astro`)

```astro
---
// src/components/utils/base/BaseSEO.astro

// ... existing logic

const organizationJson = {
  "@type": "OnlineStore",
  "@id": `${BUSINESS_DATA.url}#organization`,
  name: BUSINESS_DATA.name,
  url: BUSINESS_DATA.url,
  logo: {
    "@type": "ImageObject",
    "url": absoluteLogoUrl,
    "width": "600",
    "height": "600"
  },
  image: absoluteLogoUrl,
  description: SITE_DESCRIPTION,
  email: BUSINESS_DATA.contact.email,
  telephone: BUSINESS_DATA.contact.telephone,
  // REMOVED: priceRange: BUSINESS_DATA.priceRange,
  sameAs: sameAs,
};

// ... existing logic
---
```

### 2. Constants Cleanup (`constants.ts`)

```typescript
// src/lib/constants.ts
export const BUSINESS_DATA = {
  // ...
  // REMOVED: priceRange: "$$",
};
```
