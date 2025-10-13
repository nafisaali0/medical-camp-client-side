import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // borderColour: "#dbdbde",
      primaryDarkTale: "#0A1931",
      primaryDark: "#87A8D0",
      primarySemiDark: "#B9CEEB",
      primarylight: "#DEECFC",
      textDark: "#0A1931",
      black: "#000",
      btnColor:"#404f68",
    },
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"],
  },
};
