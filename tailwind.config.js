/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
      },
    },
    colors: {
      black: "black",
      white: "white",
      blue: "#1B9CFC",
      darkGray: "#2C3A47",
    },
    fontFamily: {
      sans: "Gelo, sans-serif",
    },
    boxShadow: {
      box: "4px 4px 0 0 #000",
    },
    extend: {},
  },
  plugins: [],
};
