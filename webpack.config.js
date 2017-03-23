const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
    filename: "css/[name].[contenthash].css",
    disable: process.env.NODE_ENV !== "production"
});
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'www'),
    filename: 'js/[name].[hash].js'
  },
  module: {
    rules: [{
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
      test: /\.(png|gif|jp(e)?g)$/,
      loader: 'url-loader?limit=8192&name=./img/[name].[hash].[ext]'
    }]
  },
  plugins: [
    extractSass,
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html'
    }),
    new CopyWebpackPlugin([
      { from: './src/res', to: 'res'}
    ])
  ]
}
