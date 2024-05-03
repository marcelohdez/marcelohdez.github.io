/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    fontFamily: {
      sans: ["Fira Sans", "sans-serif"],
      mono: ["Fira Code", "monospace"],
    },
    extend: {
      animation: {
        fadein: "fadein 1s ease-in-out",
      },
      keyframes: {
        fadein: {
          from: { transform: "translateY(2rem)", opacity: 0 },
          to: { transform: "translateY(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
