/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    minHeight: {
      '1/2' : '50vh'
    },
    extend: {
      height:{
        'screen/93': '93vh',
        '1/2vh': '50vh',
        'portfolioCard': '50vh'
      },
      width:{
        'screen/90': '90vw',
      }
    },
  },
  plugins: [],
}

