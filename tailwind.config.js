/** @type {import('tailwindcss').Config} */
export default {
  // content: [],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3734A9",
        secondary: "#F85A47",
        heading: "#121113",
        body: "#30343F",
        divider: "#EAEFF3",
        white: "#FFFFFF",
      },
      fontFamily: {
        heebo: ["Heebo", "sans"],
      },
    },
    extend: {
      transitionDelay: {
        20: "20ms",
        30: "30ms",
        40: "40ms",
      },
      transitionDelay: {
        350: "350ms",
      },
    },
  },
  plugins: [],
};
