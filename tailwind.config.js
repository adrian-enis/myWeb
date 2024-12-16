/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "negro-espacial": "#2F2F2F",
        "azul-cosmico": "#003366",
        "morado-galactico": "#4B0082",
        "plateado-nebulosa": "#e9ecef",
      },
    },
  },
  plugins: [],
};
