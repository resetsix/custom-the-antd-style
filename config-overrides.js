const webpack = require("webpack");

module.exports = (config, env) => {
  config.resolve.fallback = Object.assign(config.resolve.fallback || {}, {
    stream: require.resolve("stream-browserify"),
  });

  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
      stream: require.resolve("stream-browserify"),
    }),
  ]);
  return config;
};
