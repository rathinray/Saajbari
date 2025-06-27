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
      animation: {
        'fall': 'fall 8s linear infinite',
      },
      keyframes: {
        fall: {
          '0%': { transform: 'translateY(-100px) translateX(0) rotate(0deg)', opacity: 1 },
          '100%': { transform: 'translateY(100vh) translateX(50px) rotate(360deg)', opacity: 0 },
        },
      },
    },
  },
  plugins: [],
} 