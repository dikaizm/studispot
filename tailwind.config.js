/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'spotBlue': '#0078D9',
        'spotDarkBlue': '#1B3370',
        'spotOrange': '#FA772F',
        'spotPurple': '#937FDD',
        'spotYellow': '#F2B52F',
      },
      fontFamily: {
        sans: ["Inter", "sans-serif", "system-ui"]
      },
      fontSize: {
        '4.5xl': '2.5rem'
      },
      borderRadius: {
        '8xl': '2rem'
      }
    },
  },
  plugins: [],
}