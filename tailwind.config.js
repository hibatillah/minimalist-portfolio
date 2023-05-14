/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1F1F1F",
        profile: "#DBDBDB",
        grey: "#7C7C7C",
      },
    },
  },
  plugins: [],
};
