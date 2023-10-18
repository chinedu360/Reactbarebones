/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // "./public/index.html", "./src/**/*.{html,js}"
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   inter: [
      //     "Inter",
      //     "system-ui",
      //     "Avenir",
      //     "Helvetica",
      //     "Arial",
      //     "sans-serif",
      //   ],
      // },
    },
  },
  plugins: [],
};
