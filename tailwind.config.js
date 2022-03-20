module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
}
