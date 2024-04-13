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
        primary: "#7ac74f",
        "primary-content": "#0a1106",
        "primary-dark": "#61ac37",
        "primary-light": "#97d376",

        // secondary: "#4f62c7",
        // "secondary-content": "#ffffff",
        // "secondary-dark": "#3749ac",
        // "secondary-light": "#7684d3",

        background: "#f0f0ef",
        foreground: "#fbfbfb",
        border: "#dfe0de",

        copy: "#262725",
        "copy-light": "#656963",
        "copy-lighter": "#8b8f89",

        success: "#4fc74f",
        warning: "#c7c74f",
        error: "#c74f4f",
        love: "#E94959",

        "success-content": "#061106",
        "warning-content": "#111106",
        "error-content": "#ffffff",
      },
    },
  },
  plugins: [],
};
