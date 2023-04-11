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
        innerContainer: '700px',
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
