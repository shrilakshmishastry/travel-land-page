module.exports = {
  important:true,
  purge: ['./src/**/*.{js,jsx,ts,tsx}','./public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primaryVar: '#c25127',
        primary: "#FF7424",
        secondary: '#b6bac2',
        dark: '#1b1211',
        light: '#ebe4e8',
        coffee: '#593b34',
        sandColor: '#a38a71',
        primaryLight: '#F6DBD1',
      },
      fontFamily:{
        body:['Roboto'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
