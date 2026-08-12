export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Manrope', 'Noto Sans Devanagari', 'sans-serif'],
      },
      colors: {
        primary: '#087f59',
        accent: '#f16f61',
        light: '#f5f1e9',
        dark: '#102d2a',
      },
    },
  },
  plugins: [],
}
