const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval",
  devServer: {
    port: 8000,
    historyApiFallback: true,
    open: true,
    proxy: [
      {
        context: ["/v1"],
        target: "http://3.38.151.69:8080",
      },
    ],
  },
});
