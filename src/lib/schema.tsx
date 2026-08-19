import { ALL_ITEMS, CITIES, CITY_KEYS, FAQ } from '@/data/site';

const SITE = 'https://hoppao.id';

/** schema.org/Restaurant + empat LocalBusiness (satu per outlet). */
export function restaurantSchema() {
  const locations = CITY_KEYS.flatMap((k) =>
    CITIES[k].outlets.map((o) => ({
      '@type': 'LocalBusiness',
      name: `HOPPAO: ${o.name}`,
      image: `${SITE}/assets/pao-1.png`,
      telephone: `+${CITIES[k].whatsappIntl}`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: o.address,
        addressLocality: CITIES[k].label,
        addressCountry: 'ID',
      },
      servesCuisine: 'Bakpao',
      priceRange: 'Rp',
    })),
  );

  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'HOPPAO',
    slogan: 'Crafted with love, steamed to perfection',
    description:
      'Bakpao kukus premium yang dilipat tangan dan dikukus setiap pagi di Yogyakarta & Surabaya. No pork, no lard.',
    url: SITE,
    image: `${SITE}/assets/pao-1.png`,
    servesCuisine: 'Bakpao',
    priceRange: 'Rp',
    department: locations,
  };
}

export function faqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function productSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: ALL_ITEMS.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Product',
        name: `HOPPAO ${item.name}`,
        description: item.desc,
        image: `${SITE}${item.image}`,
        brand: { '@type': 'Brand', name: 'HOPPAO' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'IDR',
          price: item.price, // PLACEHOLDER: harga belum final
          availability: 'https://schema.org/InStock',
        },
      },
    })),
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
