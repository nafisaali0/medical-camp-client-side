import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      borderColour: "#dbdbde",
      grayLight: "#ffffffE6",
      grayText: "#6B6B6B",
      primaryDark: "#87A8D0",
      primarySemiDark: "#B9CEEB",
      primarylight: "#DEECFC",
      textDark: "#0A1931",
      btnColor: "#404f68",
      black: "#000",
      white: "#ffff",
    },
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"],
  },
};
