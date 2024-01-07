/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customOrange: '#f99f1c',
        customGray: '#eeeff0',
        customWhite: '#fefefe',
        customBlack: '#221314',
        customTextBlack: '#1b2938',
        customTextLightGray: '#6b7785',
        customBtn: '#fd6011',
        customHero: '#fd9460',
        // Example custom color
        // Add more custom colors as needed
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Example custom font
        // Add more custom fonts as needed
      },
    },
  },
  plugins: [],
};
