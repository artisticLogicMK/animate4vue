/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'mic': '281px',
      'xs': '540px',
      'sm': '640px',
      'md': '768px',
      'mdb': '900px',
      'lg': '1024px',
      'lgb': '1150px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}
