/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor : {
        'dark': '#282828',
      },
    },
  },
  plugins: [],
}

