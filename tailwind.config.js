/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#06a4ed',
        primary: "#06b6d4",
        secondary: '#F6FAFB',
        accent: '#F37F15',
        black: '#040F15',
        light: '#45f3ff'
      },
    },
  },
  plugins: [],
}