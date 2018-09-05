const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  // devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: "awesome-typescript-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // {
      //   enforce: "pre",
      //   test: /\.js$/,
      //   use: "source-map-loader",
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "public/index.html",
    }),
  ],
  // externals: {
  //   react: "React",
  //   "react-dom": "ReactDOM",
  // },
};
