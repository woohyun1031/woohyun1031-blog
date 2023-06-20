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
    },
  },
};
