const webpack = require("webpack")

module.exports = {
  mode: "production",
  devtool: "source-map",
  plugins: [new webpack.DefinePlugin({})], 
  // if you need to add any env variables, mention inside {}
}
