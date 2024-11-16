/** @type {import('tailwindcss').Config} */
export default {
  mode:'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
          'custom-gray': '#2E2E2E',
          'custom-red':'#D01C28',
      }
    },
  },
  plugins: [],
}

