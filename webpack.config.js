const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  devServer: {
    watchFiles: "./client/style.css",
    static: {
      directory: path.join(__dirname, "dist"),
      publicPath: "/"
    },
    compress: true,
    port: 9000,
    historyApiFallback: true //navigation
    // proxy: [
    //   {
    //     context: () => true,
    //     target: "http://localhost:3000",
    //     secure: false
    //   }
    // ]
  },

  devtool: "eval-cheap-source-map",
  performance: {
    maxEntrypointSize: 10000,
    maxAssetSize: 10000,
    hints: false
  },

  entry: {
    index: "./client/index.js" //entry point
  },

  output: {
    path: path.resolve(__dirname, "dist"), //output
    filename: "bundle.js",
    chunkFilename: "[id][hash].js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: "css-loader",

            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
          options: {
            minimize: true
          }
        }
      },
      {
        test: /\.(png|jpg|gif|jpeg|ttf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "James's House of Bundles",
      template: __dirname + "/client/index.html", //create index.html with js script
      inject: "body",
      filename: "index.html"
    }),
    new MiniCssExtractPlugin({
      //minify that css
      filename: "[name]-[hash].css",
      chunkFilename: "[id][hash].css"
    })
  ],
  mode: "production"
};
