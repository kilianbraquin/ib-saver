import { Config } from "tailwindcss";
import { tailwindColors } from "./src/lib/tailwind/config";

const config: Config = {
  content: ["./src/**/*.tsx"],
  darkMode: "class",
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
      },
    },
    colors: tailwindColors,
    fontFamily: {
      main: "zeitung-micro, sans-serif",
    },
    boxShadow: {
      button: "2px 2px 0 0 #000",
      box: "4px 4px 0 0 #000",
    },
    extend: {},
  },
  plugins: [],
};

export default config;
