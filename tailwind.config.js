/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  safelist: [
    'animate-float',
    'animate-float-delay',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
