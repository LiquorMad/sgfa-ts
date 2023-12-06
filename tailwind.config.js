/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      'first-car': '#6490AC',
      'second-car': '#3D6E89',
      'third-car': '#21485D',
    },
  },
  plugins: [],
}

