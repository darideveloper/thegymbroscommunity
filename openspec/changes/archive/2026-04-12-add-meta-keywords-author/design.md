# Design: Meta Keywords and Author

## Architecture Enrichment

We will add two new meta tags: `keywords` and `author` to the `BaseSEO` engine. These will follow the existing fallback pattern.

### 1. Enhanced `BaseSEO.astro` Component

```astro
---
// src/components/utils/base/BaseSEO.astro
import { BUSINESS_DATA, SITE_TITLE, SITE_DESCRIPTION, SITE_KEYWORDS } from '../../../lib/constants';

interface Props {
  // ... existing props
  keywords?: string;
  author?: string;
}

const { 
  // ... existing props
  keywords: propKeywords,
  author: propAuthor,
} = Astro.props;

// Meta Resolution
const resolvedKeywords = propKeywords || SITE_KEYWORDS;
const resolvedAuthor = propAuthor || BUSINESS_DATA.author || BUSINESS_DATA.name;

// ... other resolution logic
---
<title>{pageTitle}</title>
<meta name="description" content={resolvedDescription} />
<meta name="keywords" content={resolvedKeywords} />
<meta name="author" content={resolvedAuthor} />
<!-- ... other tags -->
```

### 2. Constants Update

```typescript
// src/lib/constants.ts
export const SITE_KEYWORDS = "ropa fitness, gymwear, the gym bros, comunidad fitness, ropa deportiva, entrenamiento, pesas, culturismo";

export const BUSINESS_DATA = {
  // ... existing data
  author: "The Gym Bros Community", // Default author
};
```
