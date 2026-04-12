const images = import.meta.glob<{ default: { src: string } }>('/src/assets/products/*.{jpeg,jpg,png,JPEG,JPG,PNG}', { eager: true });

const TITLE_MAP: Record<string, string> = {
  '1-product': 'Elite Tech Tee',
  '2-product': 'Performance Shorts',
  '3-product': 'Compression Leggings',
  '4-product': 'Training Tank Top',
  '5-product': 'Oversized Hoodie',
  '6-product': 'Heavyweight Joggers',
  '7-product': 'Seamless Sports Bra',
  '8-product': 'Athletic Crew Socks',
  '9-product': 'Gym Bro Windbreaker',
  '10-product': 'Pro Wrist Wraps',
  '11-product': 'Padded Lifting Belt',
  '12-product': 'Gym Duffle Bag',
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
