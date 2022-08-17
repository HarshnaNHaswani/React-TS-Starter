const webpack = require("webpack")
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    static: "../build",
    hot: true,
    open: true,
  },
  plugins: [new ReactRefreshWebpackPlugin(), new webpack.DefinePlugin({})],
}
