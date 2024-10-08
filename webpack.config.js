const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  const { DEV } = env;
  if (DEV === "true") {
    dotenv.config({ path: "./.env.dev" });
  } else if (DEV === "false") {
    dotenv.config({ path: "./.env.prod" });
    console.log("process.env.RANDOM_URL");
  }
  return {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
      port: 9000,
      historyApiFallback: true,
      open: true,
    },
    entry: "./src/admin/index.tsx",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "adminBuild"),
      publicPath: "/",
      clean: true,
    },
    module: {
      rules: [
        { test: /\.tsx?/, use: ["babel-loader"] },
        {
          test: /\.(js|jsx)$/,
          exclude: "/node_modules",
          use: ["babel-loader"],
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: { minimize: true },
            },
          ],
        },
        {
          test: /\.css?$/,
          exclude: [],
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        {
          test: /\.svg$/,
          use: {
            loader: "@svgr/webpack",
          },
        },
        {
          test: /\.(png|jpe?g|gif|mp4)$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[path][name].[ext]",
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"], // 확장자 목록에 .jsx 추가
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./public/index.html", // public/index.html 파일을 읽는다.
        filename: "index.html", // output으로 출력할 파일은 index.html 이다.
      }),
      new webpack.DefinePlugin({
        "process.env.RANDOM_URL": JSON.stringify(process.env.RANDOM_URL),
        "process.env.FCFS_URL": JSON.stringify(process.env.FCFS_URL),
      }),
    ],
  };
};
