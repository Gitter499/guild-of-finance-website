const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: true, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      color_scheme: {
        100: '#14080E',
        200: "#26532B",
        300: "#5ABCB9",
        400: "#63E2C6",
        500: "#6EF9F5"
      },
      secondary_scheme: colors.red,
      tertiary_scheme: colors.green,

    },
    fontFamily: {

    },
    borderRadius: {
      'none': '0',
      'sm': '.125rem',
      DEFAULT: '.25rem',
      'lg': '.5rem',
      'full': '9999px',
    },
    extend: {


  },
  variants: {
    extend: {},
  },
  plugins: [],
  }
}