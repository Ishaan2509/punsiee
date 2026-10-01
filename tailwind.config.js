/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        blush: '#F7DDE3',
        rose: '#D8A3AE',
        dustyrose: '#C48A96',
        burgundy: '#6E2A38',
        plum: '#3D1926',
        cream: '#FBF3EA',
        ink: '#3A2530',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        script: ['"Caveat"', '"Segoe Script"', 'cursive'],
        body: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(62, 25, 38, 0.35)',
        paper: '0 6px 18px rgba(62, 25, 38, 0.18), 0 1px 2px rgba(62,25,38,0.12)',
      },
      keyframes: {
        drift: {
          '0%': { transform: 'translateY(0) translateX(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) translateX(6px) rotate(4deg)' },
          '100%': { transform: 'translateY(0) translateX(0) rotate(0deg)' },
        },
        smoke: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0.5' },
          '100%': { transform: 'translateY(-120px) scale(1.8)', opacity: '0' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
        },
      },
      animation: {
        drift: 'drift 6s ease-in-out infinite',
        smoke: 'smoke 4s ease-in infinite',
        twinkle: 'twinkle 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
