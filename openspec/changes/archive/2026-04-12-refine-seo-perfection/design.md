# Design: Refined SEO Architecture

## Architecture Refinement

The current system relies on string concatenation (e.g., `${BUSINESS_DATA.url}${BUSINESS_DATA.logo}`) which is fragile. We will migrate to the `URL` constructor and normalize trailing slashes for canonical URLs.

### 1. Enhanced `BaseSEO.astro` Logic

```astro
---
// src/components/utils/base/BaseSEO.astro
import { BUSINESS_DATA, SITE_TITLE, SITE_DESCRIPTION } from '../../../lib/constants';

// ... interface Props

const { 
  // ... props
} = Astro.props;

// Canonical URL Normalization
// Ensures consistency: always has a trailing slash, absolute URL
const normalizeCanonical = (path: string) => {
  const url = new URL(path, BUSINESS_DATA.url);
  return url.href.endsWith('/') ? url.href : `${url.href}/`;
};

const canonicalUrl = normalizeCanonical(Astro.url.pathname);
const absoluteLogoUrl = new URL(BUSINESS_DATA.logo, BUSINESS_DATA.url).href;

// ... Title and Description Resolution

// JSON-LD Absolute Image Paths
const organizationJson = {
  // ...
  logo: {
    "@type": "ImageObject",
    "url": absoluteLogoUrl,
    // ...
  },
  image: absoluteLogoUrl,
  // ...
};

// ... ItemList Logic (Product Images)
if (jsonType === "OnlineStore" && productList.length > 0) {
  (webpageJson as any).mainEntity = {
    // ...
    "itemListElement": productList.map((product, index) => ({
      // ...
      "item": {
        // ...
        "image": new URL(product.image, BUSINESS_DATA.url).href,
        // ...
      }
    }))
  };
}
---
<title>{pageTitle}</title>
<meta name="description" content={resolvedDescription} />
<link rel="canonical" href={canonicalUrl} />
<meta name="robots" content="index, follow" />
<meta name="theme-color" content="#060010" />

<!-- Social Media using absolute URLs -->
<meta property="og:url" content={canonicalUrl} />
<meta property="og:image" content={absoluteLogoUrl} />
<meta name="twitter:image" content={absoluteLogoUrl} />
<!-- ... rest of social tags -->
```

### 2. Constants Update

```typescript
// src/lib/constants.ts
export const BUSINESS_DATA = {
  name: "The Gym Bros Community",
  url: "https://thegymbroscommunity.com/", // Add trailing slash for safety
  // ...
};
```
