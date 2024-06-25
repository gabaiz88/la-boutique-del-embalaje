/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '128': '32rem',
        '150': '42rem',
      },
      height: {
        '128': '32rem',
        '150': '42rem',
      },
      colors: {
        'ecru': '#5A5441',
        'vainilla': '#e9d8a6',
        'hookers_green': '#76c893',
        'orange_card': '#E75340',
        'red_mision': '#FE4A49',
        'red_mision_light': '#FE6E51',
        'blue_nav': '#0D1663',
      },
      dropShadow: {
        'custom': '2 2 0.75rem crimson',
      },
      inset: {
        '3px': '3px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
