/***
 * This is a config file for webpack v 1.14.0, as described in package.json
 * See that some dependencies require older package
 */

const path = require('path');

const config = {
  entry: "./client/main",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'just-webpack.bundle.js'
  },
  resolve: {
    modulesDirectories: ['node_modules'],    
    extensions: ['', '.ts', '.tsx', '.js'] // we are using webpack 1 and need a '' in the array as well
  },
  resolveLoader: {
    root: path.join(__dirname, "node_modules")
  },
  target: 'web',
  module: {
    loaders: [
      {
        extensions: [ 'js' ],
        test: /\.(js)(\?.*)?$/,
        loaders: [ 'babel-loader' ],
        include: path.join(__dirname, "..", "client")
      },
      {
        extensions: [ 'ts', 'tsx' ],
        test: /\.(ts|tsx)(\?.*)?$/,
        loaders: [ 'ts-loader' ] 
      },
      {
        test: /\.(css)(\?.*)?$/,
        extensions: [ 'css' ],
        loader: 'style-loader!css-loader' 
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
        loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'file'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      }
    ]
  },
  // context: __dirname
};

module.exports = config;