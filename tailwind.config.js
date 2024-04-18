/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      flex: {
        bookmark: '4 1 180px',
      },
      colors: {
        grey: {
          100: '#F5F7FA',
          1000: '#1F2933',
        },
      },
      fontFamily: {
        sansB: ['var(--font-bold)'],
        sansM: ['var(--font-medium)'],
        sansT: ['var(--font-thin)'],
      },
      backgroundColor: {
        nav: '#1890FF',
      },
      maxWidth: {
        container: '1140px',
        header: '1300px',
        innerContainer: '700px',
        70: '70%',
      },
      minWidth: {
        500: '500px',
      },
      width: {
        500: '500px',
      },
      borderWidth: {
        1: '1px',
        5: '5px',
        6: '6px',
      },

      boxShadow: {
        custom: '0 20px 80px 0 rgba(0,0,0,0.2)',
      },
      animation: {
        sway_animation: 'sway 0.3s ease-in-out forwards',
        not_sway_animation: 'not_sway 0.3s ease-in-out forwards',
        purse_animation: 'purse .5s ease-in-out forwards',
        not_purse_animation: 'not_purse .5s ease-in-out forwards',
      },
      keyframes: {
        sway: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(10deg)' },
        },
        not_sway: {
          '0%': { transform: 'rotate(10deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        purse: {
          '0%': { opacity: '0' },
          '10%': { opacity: '.03' },
          '20%': { opacity: '0' },
          '30%': { opacity: '0.03' },
          '40%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        not_purse: {
          '0%': { opacity: '1' },
          '10%': { opacity: '.9' },
          '20%': { opacity: '1' },
          '30%': { opacity: '0.9' },
          '40%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
};
