/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      "deep-blue": "#170550",
      purple: {
        10: "#cda4f5",
        100: "#c286fc",
        200: "#9752d9",
        300: "#8039c4",
        400: "#6825a8",
        500: "#4b0f85",
        600: "#3e0970",
        700: "#31065A",
        800: "#20043b",
        900: "#120221",
      },
      "light-purple": "#461959",
      "light-violet": "#43366A",
      orange: "#F86F03",
    },
    fontFamily: {
      exo: "Exo",
    },
  },
  plugins: [],
};
