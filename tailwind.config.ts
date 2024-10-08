import type { Config } from 'tailwindcss';

const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
 content: [
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
 ],
 theme: {
  screens: {
   mobile: '400px',
   ...defaultTheme.screens,
  },
  extend: {
   backgroundImage: {
    'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    'gradient-conic':
     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
   },
  },
 },
 plugins: [require('@tailwindcss/forms')],
};
export default config;
