const webpack = require('webpack')
const path = require('path')
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: ''
  },
  devServer: {
    port: 3000,
    contentBase: path.resolve(__dirname, 'public'),
    historyApiFallback: true,
    inline: true,
    stats: {
      modules: false,
      chunks: false,
      children: false,
      chunkModules: false,
      hash: false,
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: ['src', 'node_modules'],
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loaders: ['babel-loader', 'ts-loader'], include: path.resolve('src') },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'], include: path.resolve('src') }
    ]
  },
  plugins: [
    new OpenBrowserPlugin({ url: 'http://localhost:3000' })
  ]
}
