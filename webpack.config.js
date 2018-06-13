/**
 * webpack.config.js
 * author: Ranjay Zheng
 */
const path = require('path')
// 编译.vue文件
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// 注入HTML
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 提取CSS
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 清除冗余文件
const CleanWebpackPlugin = require('clean-webpack-plugin')
// webpack4无法自动压缩.css文件，需要下面的插件支持
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, './src/client/app.js'),
  output: {
    path: path.join(__dirname, './dist/assets'),
    publicPath: '/',
    filename: 'scripts/[name].bundle.js'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  resolve: {
    extensions: [".js", ".css", ".vue"]
  },
  module: {
    rules: [{
      // vue-loader
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      // babel-loader (ES6)
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: file => (
        /node_modules/.test(file) &&
        !/\.vue\.js/.test(file)
      )
    }, {
      // css-loader
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: {
            modules: false
          }
        },
        'postcss-loader'
      ]
    }, {
      // eslint-loader
      enforce: 'pre',
      test: /\.(js|vue)$/,
      loader: 'eslint-loader',
      exclude: /node_modules/
    }, {
      // file-loader 自动copy引用的文件
      test: /\.(png|jpg|gif)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: 'images/[name]-[hash:5].[ext]'
        }
      }]
    }]
  },
  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/client/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name]-[hash:5].css',
      chunkFilename: "[id].css"
    }),
    new CleanWebpackPlugin('dist/assets/*', {
      root: __dirname,
      verbose: true,
      dry: false
    }),
  ]
}