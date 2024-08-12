/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1440px',
        '2xl': '1536px',
        // Add custom screen sizes if needed
        '3xl': '1600px',
        '4xl': '1920px',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],

      },
      spacing: {
        'header-margin': '165px',
      },
      padding: {
        // '19': '76px',1
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

