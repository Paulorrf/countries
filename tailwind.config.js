/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      lightText: "hsl(200, 15%, 8%)",
      lightBg: "hsl(0, 0%, 96%)",

      darkText: "hsl(0, 0%, 100%)",
      darkBg: "hsl(207, 26%, 17%)",
      darkElements: "hsl(209, 23%, 22%)",

      commomElements: "hsl(0, 0%, 100%)",
    },
  },
  plugins: [
    //to add style to all child
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
