const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
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
