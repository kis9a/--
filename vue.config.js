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
  },
  chainWebpack(config) {
    config.plugin("ImageminWebp").use(ImageminWebp, [
      {
        test: /\.(jpg|png)$/i,
        option: {
          quality: 95,
        },
      },
    ]);

    config.plugin("ImageminPlugin").use(ImageminPlugin, [
      {
        test: /\.(jpg|png)$/i,
        disable: process.env.NODE_ENV !== "production",
        pngquant: {
          quality: "95",
        },
        plugins: [
          new BundleAnalyzerPlugin(),
          ImageminMozJpeg({
            quality: 95,
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
