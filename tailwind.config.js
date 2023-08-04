/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [ nextui({
    themes: {
      mytheme: {
        // custom theme
        extend: "dark",
        colors: {
          background:'red',
          foreground2:'yellow',
          primary: {
            DEFAULT: "#BEF264",
            50: "#BEF264",
            100: "#BEF264",
            200: "#BEF264",
            300: "#BEF264",
            400: "#BEF264",
            500: "#BEF264",
            600: "#BEF264",
            700: "#BEF264",
            800: "#BEF264",
            900: "#BEF264",
            DEFAULT: "#BEF264",
          },
          focus: "#BEF264",
        },
      },
      // ... custom themes
    },
  })]
}

