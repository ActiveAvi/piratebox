const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      primary: '#fff6ef',
      'h-1': '#FFD700',
      black: colors.black,
      'reel-500': '#ec0024',
      'reel-400': '#ff1438',
    },
    extend: {
      height: {
        '95h': '95vh',
      },
      width: {
        '32r': '32rem',
      },
      screens: {
        msm: { max: '640px' },
      },
      colors: {
        yellow: colors.amber,
        brightyellow: '#FFD700',
        darkbrown: '#271417',
        'graybrown-900': '#271417',
        'graybrown-800': '#271417',
        'reel-500': 'ec0024',
        background: '#140003',
        black: colors.black,
      },
      boxShadow: {
        innerBrown: 'inset 0px 0px 26px 1px #170a00',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
