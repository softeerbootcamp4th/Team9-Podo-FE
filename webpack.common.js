const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const dotenv = require("dotenv");
const {
  input,
} = require("@testing-library/user-event/dist/cjs/event/input.js");
const { createWebPGenerator } = require("./webpackUtil");

module.exports = (env) => {
  const { DEV } = env;
  if (DEV === "true") {
    dotenv.config({ path: "./.env.dev" });
  } else if (DEV === "false") {
    dotenv.config({ path: "./.env.prod" });
    console.log("process.env.RANDOM_URL");
  }

  return {
    entry: "./src/client/index.tsx",
    output: {
      filename: "[name]-bundle.js",
      path: path.resolve(__dirname, "build"),
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
          test: /\.(png|jpe?g|gif|mp4|webp)$/i,
          type: "asset/resource",
          generator: {
            filename: "assets/[name][ext]",
          },
        },
      ],
    },
    optimization: {
      minimizer: [
        new ImageMinimizerPlugin({
          minimizer: {
            implementation: ImageMinimizerPlugin.sharpMinify,
            options: {
              encodeOptions: {
                webp: {},
                png: {},
              },
            },
          },
          generator: [
            createWebPGenerator({ presetName: "webp", quality: 75 }),
            createWebPGenerator({
              presetName: "webp-high",
              quality: 50,
              fileNames: ["OutsideInfo.png"],
            }),
            createWebPGenerator({
              presetName: "webp-smallh",
              quality: 100,
              fileNames: [
                "e1Gift.png",
                "Drive1.png",
                "Drive2.png",
                "Drive3.png",
                "Drive4.png",
                "Drive5.png",
                "Drive6.png",
                "whiteRight.png",
              ],
              resizeOptions: {
                width: 600,
                height: 340,
              },
            }),
            createWebPGenerator({
              presetName: "webp-smallw",
              quality: 75,
              fileNames: ["e1Gift.png"],
              resizeOptions: {
                width: 300,
                height: 500,
              },
            }),
            createWebPGenerator({
              presetName: "webp-blur",
              quality: 40,
              fileNames: [
                "random0.png",
                "random1.png",
                "random2.png",
                "random3.png",
              ],
            }),
          ],
        }),
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
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
        "process.env.RANDOM_URL": JSON.stringify(process.env.RANDOM_URL),
        "process.env.FCFS_URL": JSON.stringify(process.env.FCFS_URL),
      }),
      new MiniCssExtractPlugin({
        filename: "style.css",
      }),
    ],
  };
};
