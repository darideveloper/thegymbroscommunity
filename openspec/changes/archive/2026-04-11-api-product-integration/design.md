# Design: API Product Integration

## Service Layer
`src/lib/api/products.ts` will use `import.meta.glob` to dynamically discover images.

```typescript
const images = import.meta.glob<{ default: { src: string } }>('/src/assets/products/*.{jpeg,jpg,png}', { eager: true });

export async function getProducts() {
  return Object.entries(images).map(([path, resolver]) => ({
    image: resolver.default.src, // Accessing .src for the URL
    text: path.split('/').pop()?.split('.')[0] || 'Product',
  }));
}
```

## Slider Integration
`CircularGallery.jsx` will be modified to accept an `items` prop. The `index.astro` page will await `getProducts()` and pass the resulting array to the component.

## Error Handling
- The component will handle image loading errors gracefully using an `onerror` handler in the `Media` class to ensure the gallery remains functional.
- The `import` pattern will be updated to `/*.{jpeg,jpg,png,JPEG,JPG,PNG}` to ensure all image formats in `src/assets/products/` are covered.
