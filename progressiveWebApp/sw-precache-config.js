module.exports = {
  staticFileGlobs: [
    'dist/*',
    'dist/assets/*',
    'dist/assets/icon/*'
  ],
  root: 'dist',
  stripPrefix: 'dist/',
  navigateFallback: '/index.html'
};
