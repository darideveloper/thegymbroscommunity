const images = import.meta.glob<{ default: { src: string } }>('/src/assets/products/*.{jpeg,jpg,png,JPEG,JPG,PNG}', { eager: true });

const TITLE_MAP: Record<string, string> = {
  '1-product': 'Coming Soon',
  '2-product': 'Coming Soon',
  '3-product': 'Coming Soon',
  '4-product': 'Coming Soon',
  '5-product': 'Coming Soon',
  '6-product': 'Coming Soon',
  '7-product': 'Coming Soon',
  '8-product': 'Coming Soon',
  '9-product': 'Coming Soon',
  '10-product': 'Coming Soon',
  '11-product': 'Coming Soon',
  '12-product': 'Coming Soon',
};

export async function getProducts() {
  return Object.entries(images).map(([path, resolver]) => {
    const filename = path.split('/').pop()?.split('.')[0] || '';
    return {
      image: resolver.default.src,
      text: TITLE_MAP[filename] || 'Premium Gear',
    };
  });
}
