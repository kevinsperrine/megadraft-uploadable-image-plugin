/*
 * Copyright (c) 2018, Kevin S. Perrine <kperrine@gmail.com>
 *
 * License: MIT
 */
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: ["./demo/main.js"],
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "demo/bundle.js"
  },
  devtool: "source-map",
  devServer: {
    inline: true,
    contentBase: __dirname
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  },
  plugins: [new Dotenv()]
};
