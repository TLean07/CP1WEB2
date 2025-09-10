/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0a0a0a',
        'dark-card': '#1a1a1a',
        'dark-border': '#333333',
        'dark-lighter': '#2a2a2a',
        'accent-purple': '#8b5cf6',
        'accent-yellow': '#facc15',
        'accent-red': '#ef4444',
        'accent-green': '#22c55e',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Bebas Neue', 'sans-serif'],
      },
      boxShadow: {
        'glow-purple': '0 0 15px rgba(139, 92, 246, 0.7)',
        'glow-yellow': '0 0 15px rgba(250, 204, 21, 0.7)',
        'card-hover': '0 10px 30px rgba(0,0,0,0.5)',
      },
      backgroundImage: {
        'gotham-city': "url('/imgs/gotham-bg.jpg')",
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { transform: 'translateY(20px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
        bounceIn: {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '70%': { transform: 'scale(1.1)', opacity: '1' },
          '100%': { transform: 'scale(1)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0px rgba(139, 92, 246, 0.4)' },
          '50%': { boxShadow: '0 0 15px rgba(139, 92, 246, 0.8)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'bounce-in': 'bounceIn 0.5s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s infinite ease-in-out',
      },
    },
  },
  plugins: [],
}