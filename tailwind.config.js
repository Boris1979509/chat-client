const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ["Roboto"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      red: colors.red,
      blue: colors.blue,
      green: colors.green,
    },
    extend: {
      colors: {
        // brown: {
        //   50: "#fdf8f6",
        // },
      },
      letterSpacing: {
        //wide: ".020em",
      },
      transformOrigin: {
        0: "0%",
      },
      zIndex: {
        "-1": "-1",
      },
      margin: {
        "-1": "-1px",
      },
    },
    container: {
      center: true,
      padding: ".9375rem",
    },
  },
  plugins: [],
};
