const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      primary: '#fff6ef',
      'h-1': '#ff7503',
      black: colors.black,
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
        darkbrown: '#2a1300',
        'graybrown-900': '#261e18',
        'graybrown-800': '#322720',
        background: '#170a00',
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
