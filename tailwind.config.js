/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        "1%": "1%",
        "2%": "2%",
        "3%": "3%",
        "6%": "6%",
        "12%": "12%",
      },
    },
  },
  plugins: [],
};
