/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,ts,jsx,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screen/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        purpe : '#E6E5F9'
      },
      fontFamily:{
        pligth:["Poppins-Light","sans-serif"],
        pregular:["Poppins-Regular","sans-serif"],
        pmedium:["Poppins-Medium","sans-serif"],
        psemibold:["Poppins-Semibold","sans-serif"],
        pbold:["Poppins-Bold","sans-serif"],
        pblack:["Poppins-Black","sans-serif"],
      }
    },
  },
  plugins: [],
}

