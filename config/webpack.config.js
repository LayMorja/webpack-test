import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import * as nodePath from 'path';

const appFolder = nodePath.resolve(__dirname, 'app');
const distFolder = nodePath.resolve(__dirname, 'public');
const rootFolder = nodePath.basename(nodePath.resolve(__dirname));

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
    new HtmlWebpackPlugin({
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
    ],
  },
};
