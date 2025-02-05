/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,css}"],
  theme: {
    extend: {
      colors: {
        primary: "#e21",
        "primary-dark": "#900",
        subtitle: "rgba(0, 0, 0, 0.2)",
      },
      backgroundImage: {
        "onda-clara": "url('./img/onda-clara.svg')",
        "onda-escura": "url('./img/onda-escura.svg')",
      },
      backgroundPosition: {
        "bottom-right": "right bottom",
      },
      backgroundSize: {
        "contain-custom": "contain",
      },
    },
  },
  darkMode: "media",
  plugins: [],
};
