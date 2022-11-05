/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  darkMode: "class",
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
      },
    },
    colors: {
      primary: "#71A5DE",
      black: "black",
      white: "white",
      "center-light": "#FFFFFF",
      "side-light": "#F5F5F5",
      "border-light": "rgba(24, 24, 27, 0.05)",
      "center-dark": "#18181B",
      "side-dark": "#000000",
      "border-dark": "rgba(63, 63, 70, 0.40)",
    },
    fontFamily: {
      main: "zeitung-micro, sans-serif",
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
