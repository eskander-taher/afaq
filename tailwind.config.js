/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'royal-blue': '#1B365D',
        'gold': '#C5A572',
        'gold-hover': '#D4B98C',
        'charcoal': '#2C2C2C',
        'light-gray': '#F5F5F5',
        'medium-gray': '#E0E0E0',
        'dark-gray': '#707070',
      },
      fontFamily: {
        'almarai': ['Almarai', 'sans-serif'],
        'bukra': ['Bukra', 'Almarai', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/st-basils-cathedral.jpg')",
        'moscow-pattern': "url('/src/assets/images/moscow-city.jpg')",
        'winter-palace-pattern': "url('/src/assets/images/winter-palace.jpg')",
      },
      boxShadow: {
        'card': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 10px 15px rgba(0, 0, 0, 0.1)',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};