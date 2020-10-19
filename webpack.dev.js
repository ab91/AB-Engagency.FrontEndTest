const common = require("./webpack.common.js");
const path = require("path");

const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "dev.js",
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    writeToDisk: true,
    port: 8000,
  },
});

