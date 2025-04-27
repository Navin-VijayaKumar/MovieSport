const { act } = require('react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
      extend: {
        colors: {
          primary: "#030014",
          secondary: "#F15131",  // (you had an extra '2' at the end - I fixed it)
          accent: "#AB88FF",
          light: {
            100: "#D6C6FF",
            200: "#A8B5DB",
            300: "#9CA4AB",
          },
          dark: {
            100: "#221F3D",
            200: "#0F0D23",
          },
        },
      },
    },
    plugins: [],
  };