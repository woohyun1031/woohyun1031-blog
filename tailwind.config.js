/** @type {import('tailwindcss').Config} */

var disabledCss = {
  'code::before': false,
  'code::after': false,
  'blockquote p:first-of-type::before': false,
  'blockquote p:last-of-type::after': false,
  pre: false,
  code: false,
  'pre code': false,
  'code::before': false,
  'code::after': false,
};

module.exports = {
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
        innerContainer: '644px',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            pre: {
              color: theme('colors.grey.1000'),
              backgroundColor: theme('colors.grey.100'),
            },
            'pre code::before': {
              content: '""',
              'padding-left': 'unset',
            },
            'pre code::after': {
              content: '""',
              'padding-right': 'unset',
            },
            code: {
              backgroundColor: theme('colors.grey.100'),
              color: '#DD1144',
              fontWeight: '400',
              'border-radius': '0.25rem',
            },
            'code::before': {
              content: '""',
              'padding-left': '0.25rem',
            },
            'code::after': {
              content: '""',
              'padding-right': '0.25rem',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
