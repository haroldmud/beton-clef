/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue:"#1d263b",
        yellow: "#f5ec4e",
      },
      fontSize:{
        "8s":"8px",
      },
      width:{
        fit:"fit-content",
      },
      height:{
        fit:"fit-content",
      },
    },
  },
  plugins: [],
}
