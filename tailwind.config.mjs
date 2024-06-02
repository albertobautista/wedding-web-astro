/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        atomic: ["Dancing Script Variable", "cursive"],
      },
      colors: {
        primary: "#654b2e",
        secondary: "#FFA500",
        tertiary: "#FF6347",
        quaternary: "#FF4500",
        quinary: "#FF0000",
      },
    },
  },
  plugins: [],
};
