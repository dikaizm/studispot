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
        'spotDarkBlue': '#0D1E88',
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif", "system-ui"]
      },
      fontSize: {
        '4.5xl': '2.5rem'
      }
    },
  },
  plugins: [],
}