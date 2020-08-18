module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        "blue-800": "#0046AA",
        "blue-700": "#1E5AB1",
        "gray-300": "#f1f5f8",
      },
      spacing: {
        "140": "140px",
        "200": "200px",
        "222": "222px",
        "280": "280px",
      },
      margin: {
        "64": "20rem",
      },
      inset: {
        "-3": "-0.75rem;",
        "-80": "-80px;",
      },
      zIndex: {
        "75": 75,
      },
    },
  },
  plugins: [require("@tailwindcss/ui")],
};
