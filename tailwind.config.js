/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"], // adjust based on your file locations
  theme: {
    extend: {
      colors: {
        "daily-dev-tips": "#F89283",
      },
      screens: {
        mobile: "440px", // 2 cards per row
        ipad: "834px", // 3 cards per row
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.02em",
      },
      lineHeight: {
        custom: "38.4px",
        "lh-span": "30.8px",
      },
      fontSize: {
        custom: "24px",
        "span-size": "10px",
      },
    },
  },
  plugins: [],
};
