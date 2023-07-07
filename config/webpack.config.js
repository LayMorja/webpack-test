// import path from 'path';
// import * as path from 'path';
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const appFolder = path.resolve(__dirname, 'app');
const distFolder = path.resolve(__dirname, 'dist');
const rootFolder = path.basename(path.resolve(__dirname));

module.exports = {
  entry: {
    main: `${appFolder}/index.js`,
    analytics: `${appFolder}/analytics.js`,
  },
  output: {
    clean: true,
    filename: '[name].[contenthash].js',
    path: `${distFolder}`,
  },
  devServer: {
    port: 4200,
  },
  context: appFolder,
  plugins: [
    new HTMLWebpackPlugin({
      template: `${appFolder}/index.html`,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpeg|jpg|gif)$/,
        // use: ['file-loader']
        type: 'asset/resource',
      },
    ],
  },
};
