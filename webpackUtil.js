const path = require("path");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

function createWebPGenerator({
  presetName,
  quality,
  resizeOptions,
  fileNames = [],
}) {
  return {
    preset: presetName,
    filename: "wp-[name][ext]",
    implementation: ImageMinimizerPlugin.imageminGenerate,
    filter: (_, sourcePath) => {
      if (fileNames.length !== 0) {
        return fileNames.includes(path.basename(sourcePath));
      }
      return true;
    },
    options: {
      plugins: [
        [
          "imagemin-webp",
          {
            quality: quality,
            ...(resizeOptions && {
              resize: { width: 300, height: 600 },
            }),
          },
        ],
      ],
    },
  };
}

module.exports = { createWebPGenerator };
