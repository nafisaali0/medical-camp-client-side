import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // borderColour: "#dbdbde",
      primaryDark: "#87A8D0",
      primarySemiDark: "#B9CEEB",
      primarylight: "#DEECFC",
      black: "#000",
    },
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"],
  },
};
