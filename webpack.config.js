const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const extend = require('extend');
var webpack = require('webpack');
var fs = require('fs');

const config = {
  devtool: "source-map",
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
  resolve: {
    extensions: ['.ts', '.js']
  }
};

const clientConfig = extend(true, {}, config, {
  target: 'web',
  entry: {
    app: ['./src/client/app/index.ts']
  },
  output: {
    path: path.resolve(__dirname, 'dist/public'),
    filename: 'app/bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/client/index.ejs'})
  ]
});

const nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function (module) {
      return ['.bin'].indexOf(module) === -1;
    })
    .forEach(function (module) {
      nodeModules[module] = 'commonjs ' + module;
    });

const serverConfig = extend(true, {}, config, {
  target: 'node',
  node: {
    console: false,
    global: true,
    process: true,
    Buffer: true,
    __filename: false,
    __dirname: false,
    setImmediate: true
  },
  entry: {
    app: ['./src/server/index.ts']
  },
  output: {
    path: path.resolve(__dirname, 'dist/server'),
    filename: 'index.js'
  },
  externals: nodeModules,
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'src/server/package.json',
        to: '../'
      }
    ])
  ]
});

module.exports = [clientConfig, serverConfig];