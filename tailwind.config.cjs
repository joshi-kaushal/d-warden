/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        a400: "auto minmax(auto, 400px)",
      },
    },
  },
  plugins: [],
};
