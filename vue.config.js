'use strict'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
module.exports = {
  // ...
  chainWebpack: config => {
    // ...
    config.module
      .rule('pdfjs-dist')
      .test({
        test: /\.js$/,
        include: path.join(__dirname, 'node_modules/pdfjs-dist')
      })
      .use('babel-loader')
      .loader('babel-loader')
      .options({
        presets: ['@babel/preset-env'],
        plugins: ['@babel/plugin-proposal-optional-chaining']
      })
  }
}
