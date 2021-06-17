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
        'custom-md': '1fr 1fr',
        'custom-xl': '2fr 1.2fr',
        'custom-lg': '2fr 1.5fr'
      },
      borderColor: {
        'inherit': 'inherit'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
