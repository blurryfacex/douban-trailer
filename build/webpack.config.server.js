const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const baseconfig = require('./webpack.base')
const HTMLPlugin = require('html-webpack-plugin')


const isDev = process.env.NODE_ENV === 'development'

const config = webpackMerge(baseconfig, {
  entry: {
    app: path.join(__dirname, '../src/assets/index.js')
  },
  output: {
    filename: '[name].[hash].js'
  },
  plugins: [
    new HTMLPlugin({
      template: path.join(__dirname, '../src/assets/index.html')
    })
  ]
})

module.exports = config