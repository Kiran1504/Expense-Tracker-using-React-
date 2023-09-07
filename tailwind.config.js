/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.jsx", "./src/*.js","./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      maxHeight: {
        '128': '66.66%',
      },
      fontFamily: {
          "lato": ['Lato', 'sans-serif'],
          "Ubuntu": ['Ubuntu', 'sans-serif']
      }
  },
  },
  plugins: [],
}

