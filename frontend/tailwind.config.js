 import tailwindScrollbarHide from "tailwind-scrollbar-hide"
 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./index.html","./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [tailwindScrollbarHide],
}