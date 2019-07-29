const path = require('path');

const isDevMode = true;

module.exports = {
  mode: isDevMode ? 'development' : 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build'),
  },
};
