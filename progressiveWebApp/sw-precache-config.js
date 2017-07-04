module.exports = {
  staticFileGlobs: [
    'dist/*',
    'dist/assets/*',
    'dist/assets/icons/*'
  ],
  root: 'dist',
  stripPrefix: 'dist/',
  navigateFallback: '/index.html'
};
