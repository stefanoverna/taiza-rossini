const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      accent: 'rgb(var(--color-accent) / <alpha-value>)',
      highlight: 'rgb(var(--color-highlight) / <alpha-value>)',
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      red: colors.red,
      stone: colors.stone,
      gray: colors.stone['600'],
      black: colors.stone['900'],
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--font-playfair-display)', ...defaultTheme.fontFamily.serif],
      },
      typography: {
        DEFAULT: {
          css: {
            blockquote: {
              p: {
                'margin': '0.9em 0'
              },
              footer: {
                color: colors.stone['400'],
              }
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
