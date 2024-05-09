/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "rgb(16 7 0)",
        secondary: "rgb(243 213 201)",
        tertiary: "rgb(59 22 0)",
        "black-100": "rgb(65 34 20)",
        "black-200": "rgb(50 15 0)",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #35211e",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
