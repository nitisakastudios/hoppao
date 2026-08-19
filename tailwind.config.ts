import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        saffron: '#FFC907',
        amber: { deep: '#E8A800' },
        cocoa: '#3D2418',
        cream: '#FFF8EC',
        dough: '#F2E9DA',
        leaf: '#7BA05B',
        chili: '#D64545',
        custard: '#9CC7DE', // "biru muda" — dot Custard Telur Asin
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      borderRadius: { card: '20px', row: '12px' },
      boxShadow: {
        warm: '0 12px 32px rgba(61, 36, 24, 0.10)',
        'warm-lg': '0 24px 60px rgba(61, 36, 24, 0.18)',
      },
      transitionTimingFunction: { brand: 'cubic-bezier(.16, 1, .3, 1)' },
      maxWidth: { shell: '1240px' },
    },
  },
  plugins: [],
};
export default config;
