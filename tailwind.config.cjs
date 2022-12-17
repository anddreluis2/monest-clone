/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      gray: {
        bg: '#F3F5F7',
        disabled: '#D5DBDD',
        low: '#BCC1C3',
        medium: '#7A8186',
        high: '#444648',
      },
      purple: {
        high: '#6600CC',
        light: '#EFE5F9',
      },
      white: '#FFFFFF',
    },
    extend: {
      boxShadow: {
        inactive: '0px 2px 4px 2px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}