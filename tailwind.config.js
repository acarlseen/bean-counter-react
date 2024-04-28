/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      height:{
        'screen/93': '93vh',
      },
      width:{
        'screen/90': '90vw',
      }
    },
  },
  plugins: [],
}

