const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
  filename: "bundle.[contenthash].css"
});
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
        test: /\.css$/,
          use: [{
            loader: "css-loader"
          }]
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }],
          // use style-loader in development
          fallback: "style-loader"
        })
      },
      {
        test: /\.png$/,
        loader: "url-loader?limit=100000"
      },
      {
        test: /\.jpg$/,
        loader: "file-loader"
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
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
    filename: 'app/bundle.[hash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/client/index.ejs'}),
    extractSass
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