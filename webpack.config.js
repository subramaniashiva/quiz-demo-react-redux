const PATH = require('path');
const WEBPACK = require('webpack');
const HTML_WEBPACK_PLUGIN = require('html-webpack-plugin');

const HTML_PLUGIN_CONFIG = new HTML_WEBPACK_PLUGIN({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

const ENV = process.env.NODE_ENV || 'development';
let configObj = {
	context: PATH.resolve('app'),
	entry: [
    'babel-polyfill',
		'./index.js'
	],
  output: {
    filename: 'bundle.js',
    path: PATH.resolve('dist')
  },
  resolve: {
    extensions: ['.js'],
    modules: [PATH.resolve(__dirname, 'app'), PATH.resolve(__dirname, 'node_modules')]
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
    }, {
      test: /\.js$/,
      exclude: '/node_modules/',
      use: ['babel-loader']
    }, {
      test: /\.scss$/,
      use: [{
          loader: 'style-loader' // creates style nodes from JS strings 
      }, {
          loader: 'css-loader' // translates CSS into CommonJS 
      }, {
          loader: 'sass-loader' // compiles Sass to CSS 
      }]
  }]
  },
  plugins: [
    HTML_PLUGIN_CONFIG,
    
    new WEBPACK.NoEmitOnErrorsPlugin(),
    // do not emit compiled assets that include errors
  ]
}
if(ENV === 'development') {
  configObj.devServer = {
    hot: true,
    // enable HMR on the server
    historyApiFallback: true,
    // respond to 404s with index.html
    contentBase: PATH.resolve(__dirname, 'dist'),
    // match the output path
    publicPath: '/'
    // match the output `publicPath`
  };
  configObj.plugins = configObj.plugins.concat([
    new WEBPACK.HotModuleReplacementPlugin(),
    // enable HMR globally
    new WEBPACK.NamedModulesPlugin()
    // prints more readable module names in the browser console on HMR updates]])
  ]);
} else {
  configObj.plugins = configObj.plugins.concat([
    new WEBPACK.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]);
}

module.exports = configObj;
