const images = import.meta.glob<{ default: { src: string } }>('/src/assets/products/*.{jpeg,jpg,png,JPEG,JPG,PNG}', { eager: true });

export async function getProducts() {
  return Object.entries(images).map(([path, resolver]) => ({
    image: resolver.default.src,
    text: path.split('/').pop()?.split('.')[0] || 'Product',
  }));
}
