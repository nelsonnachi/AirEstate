/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      sans: ['Inter, sans-serif;'],
    },
    extend: {
      colors: {
        'black-air' : '#181f1a',
        'black-2' : '#484d49',
        'light-gray' : '#f4f4f4',
        'sea-green' : '#f7fcf9',
        'white-air' : '#e5e5e5',
        'white-light-gray' : '#c0c2c1',
        'red-air' : '#ff0808 ',
        'Almond-Green': '#078939;',

      },
      backgroundImage: {
        'hero-bg': "url('./images/hero-img.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}

