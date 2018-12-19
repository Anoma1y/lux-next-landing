const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = require('./base.config')({
  mode: 'development',
  entry: [
    // 'eventsource-polyfill',
    'webpack-hot-middleware/client?reload=true',
    path.join(process.cwd(), 'src/js/index.js'),
    path.join(process.cwd(), 'src/scss/style.scss')
  ],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html',
    }),
  ],
  devtool: 'eval-source-map',
  devServer: {
    hot: true,
    inline: true,
    overlay: false,
    quiet: false,
    historyApiFallback: true,
    contentBase: path.resolve(process.cwd() + '/src/'),
    publicPath: '/src/',
    watchContentBase: true
  },
  performance: {
    hints: false
  }
});
