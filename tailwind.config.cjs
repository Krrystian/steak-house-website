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
      },
      animation: {
        colorChange : 'colorTransition .5s ease-in-out forwards',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({nocompatible:true})],
}