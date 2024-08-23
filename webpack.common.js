const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const dotenv = require("dotenv");
const {
  input,
} = require("@testing-library/user-event/dist/cjs/event/input.js");

module.exports = (env) => {
  const { DEV } = env;
  if (DEV) {
    dotenv.config({ path: "./.env.dev" });
  } else {
    dotenv.config({ path: "./.env.prod" });
  }

  return {
    entry: "./src/client/index.tsx",
    output: {
      filename: "bundle.js",
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
            {
              preset: "webp",
              filename: "wp-[name][ext]",
              implementation: ImageMinimizerPlugin.imageminGenerate,
              filter: (source, sourcePath) => {
                return true;
              },
              options: {
                plugins: [
                  [
                    "imagemin-webp",
                    {
                      quality: 75,
                    },
                  ],
                ],
              },
            },
            {
              preset: "webp-high",
              filename: "wp-[name][ext]",
              implementation: ImageMinimizerPlugin.imageminGenerate,
              filter: (source, sourcePath) => {
                return (
                  path.basename(sourcePath) === "OutsideInfo.png" ||
                  path.basename(sourcePath) === "e1Gift.png"
                );
              },
              options: {
                plugins: [
                  [
                    "imagemin-webp",
                    {
                      quality: 50,
                      resize: {
                        width: 200,
                        height: 400,
                      },
                    },
                  ],
                ],
              },
            },
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
        "process.env.API_URL": JSON.stringify(process.env.API_URL),
      }),
      new MiniCssExtractPlugin({
        filename: "style.css",
      }),
    ],
  };
};
