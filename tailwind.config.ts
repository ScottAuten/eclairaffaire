import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          950: '#0A2825',
          900: '#0F3D38',
          800: '#195A52',
          700: '#23786E',
          600: '#2D9688',
          500: '#3AACA0',
          400: '#55C4B8',
          300: '#88D8D0',
          200: '#BEEAE6',
          100: '#DAF2EF',
          50: '#EEF9F8',
        },
        plum: {
          950: '#1A0520',
          900: '#2D0B3F',
          800: '#3E1255',
          700: '#5B1F4D',
          600: '#7B2D6A',
          500: '#9B3D8A',
          400: '#BA58A8',
          300: '#D48EC8',
          200: '#EAC4E0',
          100: '#F5E2F0',
          50: '#FAF0F8',
        },
        blush: {
          900: '#7A1040',
          700: '#B83868',
          500: '#D4608A',
          400: '#E888A8',
          300: '#F4B0C8',
          200: '#F9D0E0',
          100: '#FDE8EE',
          50: '#FEF5F8',
        },
        gold: {
          800: '#6A5010',
          700: '#8A6820',
          600: '#A07828',
          500: '#C8982E',
          400: '#D4AF5A',
          300: '#E8CE90',
          100: '#FAF0D0',
        },
        cream: {
          50: '#FEFCF8',
          100: '#FAF6EE',
          200: '#F3EAD8',
          300: '#E8D8BE',
        },
        navy: {
          900: '#0D1B3E',
          800: '#162050',
          700: '#1E2A66',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
