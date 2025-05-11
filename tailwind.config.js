// tailwind.config.js
const scrollbar = require("tailwind-scrollbar");
const scrollbarHide = require("tailwind-scrollbar-hide"); // keeps code tidy
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sfpro: ['"SF Pro Display"', "sans-serif"],
        sans: [
          '"SF Pro Display"',
          '"SF Pro Text"',
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Helvetica Neue"',
          "sans-serif",
        ],
      },
    },
  },
  plugins: [scrollbar({ nocompatible: true }), scrollbarHide],
};
