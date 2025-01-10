const path = require('path');
// const CircularDependencyPlugin = require('circular-dependency-plugin');
// const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
// const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

module.exports = {
//   context: path.resolve(__dirname, 'public'),
//   mode: 'development',
  entry: './src/main.js',
//   {
//     main: './src/main.js',
//     // vendor: './src/vendor.js',
//   },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  devtool: isDev ? 'source-map' : false,
//   optimization: {
//     minimize: !isDev,
//   },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: ['babel-loader'],
        // loader: 'babel-loader',
        // options: {
        //   presets: ['@babel/preset-env'],
        // },
      }
    ],
  },
  plugins: [
    // new CleanWebpackPlugin(),
    // new DuplicatePackageCheckerPlugin(),
    // new CircularDependencyPlugin(),
    new CopyPlugin({
        patterns: [
          { from: "public" },
        ],
      }),
  ],
};