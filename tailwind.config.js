module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["Roboto"],
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
  variants: {
    extend: {
      opacity: ["disabled"],
    },
    borderColor: ["responsive", "hover", "focus", "focus-within"],
  },
  plugins: [],
};
