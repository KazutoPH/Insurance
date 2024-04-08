/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00473c",
        secondary: "#01b30e",
        customColor: "#efeee7",
      },
    },
  },
  plugins: [],
};
