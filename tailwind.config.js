/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      spacing:{
        7:'7px',
      },
      fontFamily:{
        Karla: ['Karla', 'sans-serif']
      },
      colors: {
        "light-coffee": "#C89F94",
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        fadeIn: {
          'from': {opacity: 0},
          'to': {opacity: 1},
          '0%': { transform: 'translate(-50%, 50%)' },
          '100%': { transform: 'translate(-50%, 0)' },
        }
      },
      animation: {
        slideDown: 'slideDown 0.4s ease-in-out',
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
};
