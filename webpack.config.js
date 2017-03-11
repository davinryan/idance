const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, 'dist/public')
  },
  devtool: "source-map",
  entry: {
    app: ['./src/client/app/app.ts']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      {
        enforce: 'pre',
        test: /\.ts$/,
        loader: 'tslint-loader'
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist/public'),
    filename: 'app/bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/client/index.ejs'})
  ],
  resolve: {
    extensions: ['.ts']
  }
};