import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // borderColour: "#dbdbde",
      // bodyColor: "#f3f3f3",
      // primaryHover: "#302ba7",
      // primaryColor: "#6a61d1",
      // primaryLightColor: "#c6c2ec",
      // black: "#000000",
      // white: " #ffff",
      // textSmallGray: "#6B6B6B",
      // mainTheme: "#ffffffE6",
      // iconRed: "#F40009",
    },
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"],
  },
};
