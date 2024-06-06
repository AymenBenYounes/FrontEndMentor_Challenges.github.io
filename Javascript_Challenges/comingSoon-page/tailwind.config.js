/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Libre Franklin','sans-serif'],
      },
      width:{
        'footer': '70%',
        'container': '80%',
        'image': '90%',
        'half': '45%',
        'morehalf': '65%',
        'lesshalf': '30%',
      },
      colors:{
        'Blue': 'hsl(223, 87%, 63%)',
        'hBlue':'hsl(223, 87%, 63%,0.8)',
        'Pale-Blue': 'hsl(223, 100%, 88%)',
        'Light-Red': 'hsl(354, 100%, 66%)',
        'Gray': 'hsl(0, 0%, 59%)',
        'Very-DBlue': 'hsl(209, 33%, 12%)',
      },
      fontSize:{
        'big': '1.4rem',
      }
    },
  },
  plugins: [],
}

