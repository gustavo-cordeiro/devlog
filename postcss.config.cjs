module.exports = {
  plugins: [
    require('autoprefixer'),
    require('cssnano'),
    require('postcss-import'),
    require('tailwindcss/nesting'),
  ],
};