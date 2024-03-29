/** @type {import('tailwindcss').Config} */


const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'selector',
  content: [
    './app/**/*.php',
    './config/**/*.php',
    './resources/**/*.{php,js,css}',
    './storage/framework/views/*.php',
  ],
  theme: {
    extend: {
    colors: {
      primary: '#0072FF',
      secondary: 'cyan'
    }
    },
  },
  plugins: [],
}
