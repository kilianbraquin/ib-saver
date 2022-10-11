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
      blue: "#16a085",
      darkGray: "#2C3A47",
    },
    fontFamily: {
      sans: "zeitung-micro, sans-serif",
      logo: "bungee, sans-serif",
    },
    boxShadow: {
      button: "2px 2px 0 0 #000",
      box: "4px 4px 0 0 #000",
    },
    extend: {},
  },
  plugins: [],
};
