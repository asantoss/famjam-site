const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors:{
      ...colors,
      jam: "#d6ed17"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
