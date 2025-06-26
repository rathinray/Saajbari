/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D4AF37',
        secondary: '#F8F3E6',
        accent: '#E8C4C4',
        dark: '#1A1A1A',
      },
    },
  },
  plugins: [],
} 