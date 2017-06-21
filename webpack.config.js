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

const webpack = require('webpack');
const fs = require('fs');

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
          fallback: "style-loader"
        })
      },
      {
        test: /\.png$/,
        loader: 'url-loader?limit=100000&name=assets/images/[name].[ext]'
      },
      {
        test: /\.gif/,
        loader: 'url-loader?limit=100000&name=assets/images/[name].[ext]'
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader?name=assets/images/[name].[ext]'
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=assets/fonts/[name].[ext]'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=assets/fonts/[name].[ext]'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?name=assets/fonts/[name].[ext]'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml&name=assets/images/[name].[ext]'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.scss']
  }
};

const adminConfig = extend(true, {}, config, {
  target: 'web',
  entry: {
    app: ['./src/admin/app/index.tsx']
  },
  output: {
    path: path.resolve(__dirname, 'dist/admin'),
    filename: 'bundle.[hash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({template: 'src/admin/index.ejs'}),
    extractSass,
    new CopyWebpackPlugin([
      {
        from: 'src/admin/favicon.ico',
        to: '.'
      }
    ])
  ]
});

const mainConfig = extend(true, {}, config, {
  target: 'web',
  entry: {
    app: ['./src/main/index.tsx']
  },
  output: {
    path: path.resolve(__dirname, 'dist/main'),
    filename: 'bundle.[hash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({template: 'src/main/index.ejs'}),
    extractSass,
    new CopyWebpackPlugin([
      {
        from: 'src/admin/favicon.ico',
        to: '.'
      }
    ])
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
        to: '..'
      },
      {
        from: 'Procfile',
        to: '..'
      }
    ])
  ]
});

module.exports = [mainConfig, adminConfig, serverConfig];