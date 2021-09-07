module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bms: {
          50: '#edf1fc',
          100: '#d3d4e1',
          200: '#b6b8c9',
          300: '#989bb2',
          400: '#7c7f9b',
          500: '#636582',
          600: '#4c4f66',
          700: '#363849',
          800: '#21222e',
          900: '#0a0a16',
        },
        navbtn: {
          50: '#ffe4ed',
          100: '#fbb9c9',
          200: '#f28da5',
          300: '#ec6081',
          400: '#e5345e',
          500: '#cb1a44',
          600: '#9f1235',
          700: '#730b25',
          800: '#470416',
          900: '#1e0007',
        },
        prem:
            {
              100: 'rgb(43, 49, 72)',
          200: 'rgba(34, 34, 34, 0.6)',
              300:'#ebebeb',
            }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}