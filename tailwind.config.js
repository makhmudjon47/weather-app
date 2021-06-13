module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: '#849098',
        'primary-1': '#c3ccd1',
        'primary-3': '#b3bbbe'
      },
      gridTemplateColumns: {
        custom: '2fr 1.2fr'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
