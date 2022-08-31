const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const toml = require("toml")
const yaml = require("yamljs")
const json5 = require("json5")
const package = require("../package.json")
const CopyPlugin = require("copy-webpack-plugin")
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const highlight = require('highlight.js');

module.exports = (env) => ({
  entry: path.resolve(__dirname, "..", "./src/index.tsx"),
  resolve: {
    plugins: [new TsconfigPathsPlugin()],

    extensions: [".tsx", ".ts", ".jsx", ".js", ".mjs", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(js)x?$/,
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            exclude: [
              // \\ for Windows, \/ for Mac OS and Linux
              /node_modules[\\\/]core-js/,
              /node_modules[\\\/]webpack[\\\/]buildin/,
              /(node_modules|bower_components)/,
            ],
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(ts)x?$/,
        enforce: "pre",
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: "html-loader",
          },
          {
            loader: "markdown-loader",
            options: {
              // Pass options to marked
              highlight: (code, lang) => {
                if (!lang || ['text', 'literal', 'nohighlight'].includes(lang)) {
                  return `<pre class="hljs">${code}</pre>`;
                }
                const html = highlight.highlight(lang, code).value;
                return `<div class="hljs">${html}</div>`;
              }
              // See https://marked.js.org/using_advanced#options
            },
          },
        ],
      },
      // {
      //   test: /\.(png|jpg|gif)$/i,
      //   dependency: { not: ["url"] },
      //   use: [
      //     {
      //       loader: "url-loader",
      //       options: {
      //         limit: 8192,
      //       },
      //     },
      //   ],
      //   type: "javascript/auto",
      // },
      {
        test: /\.(pdf|txt)$/,
        include: path.resolve(__dirname, "src"),
        type: "asset",
        parser: {
          // max 4kb txt files
          dataUrlCondition: {
            maxSize: 4 * 1024,
          },
          generator: {
            filename: "assets/[name][ext]",
          },
        },
      },
      // {
      //   test: /\.(?:png|jpg|jpeg|webp)$/i,
      //   type: 'javascript/auto',
      //   use: [
      //     {
      //       loader: "responsive-loader",
      //       options: {
      //         adapter: require("responsive-loader/sharp"),
      //         sizes: [256, 512, 1024],
      //         placeholder: true,
      //         placeholderSize: 20,
      //         //uncomment to disable in dev mode
      //         // disabled: env === "dev",
      //         esModule: true,
      //         name: "[hash]-[width].[ext]",
      //         outputPath: 'assets/images',
      //         //for more options see:https://www.npmjs.com/package/responsive-loader
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.(?:png|jpg|jpeg|webp)$/i,
        type:"asset/resource"
      },
      {
        test: /\.(?:ico|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ["csv-loader"],
      },
      {
        test: /\.xml$/i,
        use: ["xml-loader"],
      },
    {
        test: /\.toml$/i,
        type: "json",
        parser: {
          parse: toml.parse,
        },
      },
      {
        test: /\.yaml$/i,
        type: "json",
        parser: {
          parse: yaml.parse,
        },
      },
      {
        test: /\.json5$/i,
        type: "json",
        parser: {
          parse: json5.parse,
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "..","build"),
    filename: "[name].[contenthash].bundle.js",
    clean: true,
    assetModuleFilename: "assets/[hash][ext][query]",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: package.name,
      template: path.resolve(__dirname, "..", "./src/index.html"),
      // hash: true,
      meta: {
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=yes",
        decription: package.description,
        author: package.author,
        keyword: package.keywords,
      },
    }),
    new CopyPlugin({
    patterns: [
      {from: "src/assets", to: "assets"}
    ]
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: package.analyze ? "server" : "disabled",
      openAnalyzer: package.analyze ? true : false,
      generateStatsFile: package.analyze ? true : false,
      excludeAssets: null,
    }),
  ],
  stats: "errors-only",
  optimization: {
    moduleIds: "deterministic",
    minimize: false,
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: "vendors",
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          priority: 1,
        },
      },
    },
  },
  devServer:{
    historyApiFallback: true
  }
})