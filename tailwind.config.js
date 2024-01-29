/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f1faeb",
          100: "#e0f4d3",
          200: "#c4eaac",
          300: "#9fda7c",
          DEFAULT: "#7ac74f",
          500: "#5ead35",
          600: "#478a26",
          700: "#376a21",
          800: "#2f551f",
          900: "#2a481f",
          950: "#13270c",
        },
        background: {
          50: "#f6f6f8",
          100: "#e6e6ea",
          200: "#dcdce1",
          300: "#c3c4cd",
          400: "#a6a6b4",
          500: "#9190a1",
          600: "#817f91",
          700: "#757283",
          800: "#63606d",
          900: "#504f59",
          950: "#343338",
        },
        text: {
          50: "#f6f7f6",
          100: "#e1e7e0",
          200: "#c2cdc2",
          300: "#9bad9b",
          400: "#768b77",
          500: "#5b715b",
          600: "#48594a",
          700: "#3c493d",
          800: "#333c34",
          900: "#2d342e",
          DEFAULT: "#212922",
        },
      },
    },
  },
  plugins: [],
};
