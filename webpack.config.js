const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const extend = require('extend');
const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production';

var webpack = require('webpack');
var fs = require('fs');

const nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function (module) {
      return ['.bin'].indexOf(module) === -1;
    })
    .forEach(function (module) {
      nodeModules[module] = 'commonjs ' + module;
    });

const config = {
  devtool: isProduction ? 'eval' : 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        loader: 'tslint-loader'
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.scss']
  }
};

const clientConfig = extend(true, {}, config, {
  target: 'web',
  entry: {
    app: ['./src/client/app/index.tsx']
  },
  output: {
    path: path.resolve(__dirname, 'dist/public'),
    filename: 'app/bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/client/index.ejs'})
  ]
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