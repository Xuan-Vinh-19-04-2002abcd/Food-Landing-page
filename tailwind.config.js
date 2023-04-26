/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      spacing: {
        "35":'35px',
        "sm": '0.8rem',
      "base": '1rem',
        "custom" :'620px',
        "40-c":'40rem'

      }
    },
  },
  plugins: [],
}
