/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'codepro' : ['Source Code Pro', 'monospac']
      },
      backgroundColor:{
        'transparent' : 'rgba(0,0,0,0.54)'
      },
      keyframes: {
          colorTransition:
          { 
            '100%': { color: '#fc6203'}
          },
          positionTransition: 
          {
            '0%': { top: '100%'},
            '100%': {top: '50%'}
          },
          sizeTransition:
          {
            '0%': {'font-size':'2.25rem'},
            '100%': {'font-size':'1.5rem' }
          }

      },
      animation: {
        colorChange : 'colorTransition .5s ease-in-out forwards',
        positionChange : 'positionTransition .5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}