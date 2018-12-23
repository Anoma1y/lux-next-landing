const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dirApp = path.join(__dirname, 'src');
const dirAssets = path.join(__dirname, 'assets');

module.exports = require('./base.config')({
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(process.cwd(), 'src/index.js'),
  ],
  resolve: {
    modules: [
      dirApp,
      dirAssets
    ]
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'index.html',
    }),
  ],
  devtool: 'eval-source-map',
  devServer: {
    hot: true,
    inline: true,
    overlay: false,
    quiet: false,
    historyApiFallback: true,
    contentBase: path.resolve(process.cwd() + '/public'),
    watchContentBase: true
  },
  performance: {
    hints: false
  }
});
