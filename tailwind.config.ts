import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        secondary: {
          100: 'var(--secondary-100)',
          900: '#FFA800',
        },
        grey: {
          100: '#BEBEBE',
          200: '#E9E9E9',
          300: '#f6f6f6',
          400: '#ECECEC',
          500: '#EBEBEB',
          600: '#EDEDED',
        },
        primary: '#34967C',
      },
      borderRadius: {
        30: '30px',
        50: '50px',
        60: '60px',
        70: '70px',
      },
      padding: {
        21: '21px',
        60: '60px',
      },
      backgroundImage: {
        hero: 'url("/assets/images/hero.webp")',
      },
      fontFamily: {
        'quick-sand': ['var(--quick-sand)'],
        'source-sans': ['var(--source-sans)'],
      },
      fontSize: {
        22: '22px',
        39: '39px',
        50: '50px',
      },
    },
  },
  plugins: [],
} satisfies Config;
