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
        },
        primary: '#34967C',
      },
      borderRadius: {
        50: '50px',
        60: '60px',
        70: '70px',
      },
    },
  },
  plugins: [],
} satisfies Config;
