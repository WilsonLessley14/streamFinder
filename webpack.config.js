const path = require("path");
// future utility for page load optimization
// const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  entry: "./client/Index.jsx",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  devtool: "inline-source-map",
  mode: "development",
  optimization: {
    usedExports: true,
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules\/(?!(dom7|swiper)\/).*/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  // plugins: [new CompressionPlugin()],
};