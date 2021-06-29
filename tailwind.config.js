module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'bground':'#FBF5F3',
        'oxford-blue':'#000022',
        'yellow-tint':'#F5F0E1'
      },
      fontFamily :{
        head : ['Kaushan Script']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
