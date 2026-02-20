/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This tells Tailwind to look at your React files
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}