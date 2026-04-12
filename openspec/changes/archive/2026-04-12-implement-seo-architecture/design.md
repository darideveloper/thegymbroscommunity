# Design: SEO Architecture

## System Architecture

The SEO system follows a "Slot-and-Injection" pattern, where the `Layout` provides a named slot (`seo`) in the `<head>`, and pages inject their SEO metadata using a dedicated `BaseSEO` component.

### 1. Base Layout (`src/layouts/Layout.astro`)
The layout manages global headers and preloads.

```astro
---
// src/layouts/Layout.astro
import '../styles/global.css'
import Header from '../components/organisms/Header.astro'

interface Props {
  preloadImage?: string;
}
const { preloadImage } = Astro.props;
---
<!doctype html>
<html lang='es'>
  <head>
    <meta charset='UTF-8' />
    <meta name='viewport' content='width=device-width' />
    <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
    <link rel='icon' href='/favicon.ico' />
    <meta name='generator' content={Astro.generator} />

    <!-- SEO Injection Point -->
    <slot name='seo' />

    <!-- LCP Optimization -->
    {preloadImage && <link rel='preload' as='image' href={preloadImage} fetchpriority='high' />}
  </head>
  <body class='relative min-h-screen bg-transparent'>
    <div class="fixed inset-0 z-[-20] bg-[#060010]" aria-hidden="true"></div>
    <Header />
    <slot />
  </body>
</html>
```

### 2. SEO Engine (`BaseSEO.astro`)
The core "brain" that resolves metadata and generates social tags and comprehensive `@graph` JSON-LD for an digital-first store.

```astro
---
// src/components/utils/base/BaseSEO.astro
import { BUSINESS_DATA, SITE_TITLE, SITE_DESCRIPTION } from '../../../lib/constants';

interface ProductItem {
  name: string;
  image: string;
  url?: string;
  price?: string;
  availability?: string;
}

interface Props {
  title?: string;
  description?: string;
  jsonType?: "OnlineStore" | "WebPage" | "BlogPosting";
  extraJson?: Record<string, any>;
  useTagLine?: boolean;
  productList?: ProductItem[];
}

const { 
  title, 
  description: propDescription, 
  jsonType = "WebPage", 
  extraJson = {},
  useTagLine = true,
  productList = []
} = Astro.props;

const canonicalUrl = new URL(Astro.url.pathname, Astro.site);

const resolvedTitle = title || SITE_TITLE;
const resolvedDescription = propDescription || SITE_DESCRIPTION;

let pageTitle = resolvedTitle;
if (useTagLine && resolvedTitle !== BUSINESS_DATA.name) {
  if (!resolvedTitle.includes(BUSINESS_DATA.name)) {
    pageTitle = `${resolvedTitle} | ${BUSINESS_DATA.name}`;
  }
}

// Structured Data (@graph approach)
const sameAs = [
  BUSINESS_DATA.social.instagram,
  BUSINESS_DATA.social.facebook,
  BUSINESS_DATA.social.twitter
].filter(Boolean);

const organizationJson = {
  "@type": "OnlineStore",
  "@id": `${BUSINESS_DATA.url}#organization`,
  name: BUSINESS_DATA.name,
  url: BUSINESS_DATA.url,
  logo: {
    "@type": "ImageObject",
    "url": `${BUSINESS_DATA.url}${BUSINESS_DATA.logo}`,
    "width": "600",
    "height": "600"
  },
  image: `${BUSINESS_DATA.url}${BUSINESS_DATA.logo}`,
  description: SITE_DESCRIPTION,
  telephone: BUSINESS_DATA.contact.telephone,
  email: BUSINESS_DATA.contact.email,
  priceRange: BUSINESS_DATA.priceRange,
  sameAs: sameAs,
};

const websiteJson = {
  "@type": "WebSite",
  "@id": `${BUSINESS_DATA.url}#website`,
  url: BUSINESS_DATA.url,
  name: BUSINESS_DATA.name,
  publisher: { "@id": `${BUSINESS_DATA.url}#organization` },
  potentialAction: {
    "@type": "SearchAction",
    "target": `${BUSINESS_DATA.url}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
};

const webpageJson = {
  "@type": "WebPage",
  "@id": `${canonicalUrl.href}#webpage`,
  url: canonicalUrl.href,
  name: pageTitle,
  description: resolvedDescription,
  isPartOf: { "@id": `${BUSINESS_DATA.url}#website` },
  about: { "@id": `${BUSINESS_DATA.url}#organization` },
  inLanguage: "es",
};

// If it's an OnlineStore type and we have products, add ItemList
if (jsonType === "OnlineStore" && productList.length > 0) {
  (webpageJson as any).mainEntity = {
    "@type": "ItemList",
    "name": "Featured Collection",
    "numberOfItems": productList.length,
    "itemListElement": productList.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.name,
        "image": `${BUSINESS_DATA.url}${product.image}`,
        "url": product.url || canonicalUrl.href,
        "brand": { "@type": "Brand", "name": BUSINESS_DATA.name },
        "offers": {
          "@type": "Offer",
          "price": product.price || "0.00",
          "priceCurrency": "EUR",
          "availability": product.availability || "https://schema.org/PreOrder"
        }
      }
    }))
  };
}

const graph = [
  organizationJson,
  websiteJson,
  webpageJson,
  ... (jsonType === "BlogPosting" ? [{ ...extraJson, "@type": "BlogPosting" }] : [])
];

const jsonLd = { 
  "@context": "https://schema.org",
  "@graph": graph 
};
---
<title>{pageTitle}</title>
<meta name="description" content={resolvedDescription} />
<link rel="canonical" href={canonicalUrl.href} />

<!-- Open Graph / Social Media -->
<meta property="og:title" content={pageTitle} />
<meta property="og:description" content={resolvedDescription} />
<meta property="og:url" content={canonicalUrl.href} />
<meta property="og:type" content="website" />
<meta property="og:image" content={`${BUSINESS_DATA.url}${BUSINESS_DATA.logo}`} />
<meta property="og:site_name" content={BUSINESS_DATA.name} />
<meta property="og:image:alt" content={pageTitle} />

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={pageTitle} />
<meta name="twitter:description" content={resolvedDescription} />
<meta name="twitter:image" content={`${BUSINESS_DATA.url}${BUSINESS_DATA.logo}`} />

<!-- JSON-LD -->
<script type="application/ld+json" set:html={JSON.stringify(jsonLd)} />
```

### 3. Core Data & Constants
Centralized metadata for the site.

```typescript
// src/lib/constants.ts
export const SITE_TITLE = "The Gym Bros Community | Tienda de Ropa Fitness Online";
export const SITE_DESCRIPTION = "Descubre la mejor ropa fitness de élite y únete a nuestra comunidad. Calidad superior para tus entrenamientos.";
export const BUSINESS_DATA = {
  name: "The Gym Bros Community",
  url: "https://thegymbroscommunity.com",
  logo: "/assets/logo.webp",
  contact: {
    email: "contact@thegymbroscommunity.com",
    telephone: "+34600000000",
  },
  social: {
    instagram: "https://instagram.com/thegymbroscommunity",
    facebook: "https://facebook.com/thegymbroscommunity",
    twitter: "https://twitter.com/thegymbros",
  },
  priceRange: "$$",
};
```

### 4. Blog SEO Component (`BlogPostSEO.astro`)
Specialized component for dynamic content.

```astro
---
// src/components/utils/BlogPostSEO.astro
import BaseSEO from './base/BaseSEO.astro';

interface Props {
  postTitle: string;
  postExcerpt: string;
  postAuthor: string;
  postDate: string;
}

const { postTitle, postExcerpt, postAuthor, postDate } = Astro.props;
---
<BaseSEO
  title={postTitle}
  description={postExcerpt}
  jsonType="BlogPosting"
  extraJson={{
    headline: postTitle,
    author: { "@type": "Person", name: postAuthor },
    datePublished: postDate,
  }}
  useTagLine={false}
/>
```

### 5. Robots and Sitemap
Dynamically generated `robots.txt` and integrated `sitemap-index.xml`.

```typescript
// src/pages/robots.txt.ts
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL('sitemap-index.xml', site as URL);
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemapURL.href}`);
};
```

### 6. Astro Configuration (`astro.config.mjs`)
Integrating SEO tools.

```typescript
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://thegymbroscommunity.com',
  integrations: [
    react(),
    sitemap(),
    showTailwindcssBreakpoint()
  ],
});
```
