/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],

      },
      padding: {
        // '19': '76px',
      },
      colors: {
        customGold: '#BA8C2A',
        foundationDarker: '#41310F',
        foundationGreyDarkActive: '#1F1F1F',
        foundationGreyDarker: '#181818',
        foundationGreyLight: '#ECECEC',
        foundationGreyLightHover: '#E3E3E3',
        foundationGreyLightActive: '#C5C5C5',
        foundationGreyNormal: '#454545',
        foundationGoldNormal: '#BA8C2A',
        foundationGoldDarker: '#41310F',
        foundationGoldLightActive: '#EADBBD',
        lineStrokeDark: '#004729',
      },
    },
  },
  plugins: [],
}

