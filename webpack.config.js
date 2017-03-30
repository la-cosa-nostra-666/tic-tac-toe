const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
    filename: "css/[name].[contenthash].css",
    disable: process.env.NODE_ENV !== "production"
});
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'www'),
    filename: 'js/[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env'],
              plugins: [require('babel-plugin-transform-class-properties')]
            }
          },
          {
            loader: 'eslint-loader',
            options: {
              emitWarning: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: 'resolve-url-loader'
          }, {
            loader: "sass-loader?sourceMap"
          }],
          // use style-loader in development
          fallback: "style-loader"
        })
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader?name=./font/[name].[hash].[ext]'
      },
      {
        test: /\.(png|gif|jp(e)?g)$/,
        loader: 'url-loader?limit=8192&name=./img/[name].[hash].[ext]'
      }
    ]
  },
  plugins: [
    extractSass,
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html'
    }),
    new CopyWebpackPlugin([
      // { from: './src/res', to: 'res' },
      // { from: './src/config.xml', to: 'config.xml' },
      // { from: './src/icon.png', to: 'icon.png' }
    ])
  ]
}
