const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isEnvDev = process.env.NODE_ENV === 'development';
const isEnvProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isEnvProd ? 'production' : isEnvDev && 'development',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000,
  },
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: '[name].[chunkhash:8].bundle.js',
    path: path.resolve(__dirname, isEnvProd ? 'build' : 'dev_build'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public/index.html'),
    }),
  ],
};
