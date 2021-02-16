const ImageminPlugin = require("imagemin-webpack-plugin").default;
const ImageminWebp = require("imagemin-webp-webpack-plugin");
const ImageminMozJpeg = require("imagemin-mozjpeg");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  pwa: {
    workboxOptions: {
      skipWaiting: true,
    },
    pwa: {
      iconPaths: {
        favicon32: "favicon.ico",
      },
    },
  },
  chainWebpack(config) {
    if (process.env.NODE_ENV === "production") {
      config.plugin("ImageminWebp").use(ImageminWebp, [
        {
          test: /\.(jpg|png)$/i,
          option: {
            quality: 85,
          },
        },
      ]);
    }
    config.plugin("ImageminPlugin").use(ImageminPlugin, [
      {
        test: /\.(jpg|png)$/i,
        disable: process.env.NODE_ENV !== "production",
        pngquant: {
          quality: "85",
        },
        plugins: [
          new BundleAnalyzerPlugin(),
          ImageminMozJpeg({
            quality: 85,
            progressive: true,
          }),
        ],
      },
    ]);
  },
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false,
    },
  },
};
