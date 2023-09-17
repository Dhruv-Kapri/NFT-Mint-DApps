/* config-overrides.js */
const webpack = require("webpack");
module.exports = function override(config, env) {
  //do stuff with the webpack config...

  config.resolve.fallback = {
    path: require.resolve("path-browserify"),
    crypto: require.resolve("crypto-browserify"),
    os: require.resolve("os-browserify/browser"),
    buffer: require.resolve("buffer"),
    stream: require.resolve("stream-browserify"),
    process: require.resolve("process/browser"),
  };
  config.plugins.push(
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    })
  );

  return config;
};
