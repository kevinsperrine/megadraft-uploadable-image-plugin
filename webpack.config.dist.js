/*
 * Copyright (c) 2018, Kevin S. Perrine <kperrine@gmail.com>
 *
 * License: MIT
 */

module.exports = {
  entry: ["."],
  output: {
    path: __dirname + "/dist",
    publicPath: "/dist/",
    filename: "megadraft-uploadable-image-plugin.js",
    library: "megadraft-uploadable-image-plugin",
    libraryTarget: "umd"
  },
  externals: {
    megadraft: "Megadraft",
    react: "React",
    "react-dom": "ReactDOM"
  },
  devtool: "source-map",
  devServer: {
    inline: true,
    contentBase: "./"
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
  }
};
