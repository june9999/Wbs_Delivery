// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,jsx,tsx}"],
  darkMode: "class",

  theme: {
    extend: {
      variants: {
        extend: {},
      },
      backgroundImage: {
        // 'cat': "url('./src/assets/runningCat.jpg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
      theme: {
        extend: {
          backgroundColor: {
            primary: "#CCFBF1",
          },
        },
      },
      colors: {
        primary: {
          50: "#F1DEC9",
          100: "#C8B6A6",
          200: "#BBBFCA",
          300: "#85586F",
        },
      },
      fontFamily: {
        body: [
          "Roboto",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        sans: [
          "Roboto",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },

  plugins: [],
};
