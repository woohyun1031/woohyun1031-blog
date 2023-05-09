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
      colors: {
        grey: {
          100: '#F5F7FA',
          1000: '#1F2933',
        },
      },
      fontFamily: {
        sansB: ['var(--noto-sans_KR-bold)'],
        sansM: ['var(--noto-sans_KR-medium)'],
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
      borderWidth: {
        1: '1px',
        5: '5px',
        6: '6px',
      },
      typography: (theme) => ({
        dark: {
          css: {
            color: theme('colors.gray.300'),
            '[class~="lead"]': { color: theme('colors.gray.400') },
            a: { color: theme('colors.gray.100') },
            strong: { color: theme('colors.gray.100') },
            'ul > li::before': { backgroundColor: theme('colors.gray.700') },
            hr: { borderColor: theme('colors.gray.800') },
            blockquote: {
              fontWeight: theme('font-bold'),
              color: theme('colors.gray.100'),
              borderLeftColor: theme('colors.gray.800'),
            },
            h1: { color: theme('colors.gray.100') },
            h2: { color: theme('colors.gray.100') },
            h3: { color: theme('colors.gray.100') },
            h4: { color: theme('colors.gray.100') },
            code: {
              color: theme('colors.gray.100'),
              backgroundColor: theme('colors.gray.700'),
            },
            'a code': { color: theme('colors.gray.100') },
            pre: {
              color: theme('colors.gray.100'),
              backgroundColor: theme('colors.gray.800'),
            },
            'pre code': {
              color: theme('#DD1144'),
              backgroundColor: theme('colors.gray.800'),
              content: '""',
              'padding-left': 'unset',
            },
            thead: {
              color: theme('colors.gray.100'),
              borderBottomColor: theme('colors.gray.700'),
            },
            'tbody tr': { borderBottomColor: theme('colors.gray.800') },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
