/** @type {import('tailwindcss').Config} */
module.exports = {
  /*con lo de abajo le decimos que cargue todos los contenido de mis componentes
  que componentes tiene que ver para que cargue los estilos y los transforme
  */
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
