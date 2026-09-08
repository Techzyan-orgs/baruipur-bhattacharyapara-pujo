/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        festive: {
          dark: '#0a0a12',
          card: '#131326',
          crimson: '#d9272e',
          amber: '#e67e22',
          gold: '#f39c12',
          yellow: '#f1c40f',
          cream: '#fff8e7',
          glow: '#ff8c00'
        }
      },
      fontFamily: {
        bengali: ['"Hind Siliguri"', 'sans-serif'],
        display: ['"Cinzel"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'festive-gradient': 'radial-gradient(ellipse at top, #2b0b1a 0%, #0a0a12 70%)',
        'gold-gradient': 'linear-gradient(135deg, #f39c12 0%, #d35400 100%)',
        'crimson-gradient': 'linear-gradient(135deg, #e74c3c 0%, #900c3f 100%)',
      },
      boxShadow: {
        'glow-gold': '0 0 25px rgba(243, 156, 18, 0.25)',
        'glow-crimson': '0 0 25px rgba(217, 39, 46, 0.3)',
      }
    },
  },
  plugins: [],
}
