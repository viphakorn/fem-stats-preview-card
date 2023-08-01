/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          900: "hsl(233, 47%, 7%)",
          700: "hsl(244, 38%, 16%)",
          500: "hsl(277, 64%, 61%)",
        },
        neutral: {
          100: "hsl(0, 0%, 100%)",
          200: "hsla(0, 0%, 100%, 0.75)",
          300: "hsla(0, 0%, 100%, 0.6)",
        },
      },
      fontFamily: {
        inter: "Inter,sans-serif",
        "lexend-deca": "Lexend Deca,sans-serif",
      },
    },
  },
  plugins: [],
}
