var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
  devServer: {
    outputPath: path.join(__dirname, 'dist'),
    colors: false
  },
  devtool: "source-map",
  entry: {
    app: ['./client/app/app.ts']
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
    new CopyWebpackPlugin([
        {
          from: 'client/index.html'
        }
        ]
    )],
  resolve: {
    extensions: ['.ts']
  }
};