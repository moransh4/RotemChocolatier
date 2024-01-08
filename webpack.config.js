const path = require("path");
// const glob = require('glob');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const shell = require('shelljs');
const glob = require('glob');



module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, "/dist"), // the bundle output path
    filename: "bundle.js", // the name of the bundle
    //publicPath: '/', // Adjust this based on your project structure

  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html", // to import index.html file inside index.js
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/components/**/images/*',
          to: 'public/images',
          flatten: true,
          noErrorOnMissing: true,
        },
      ],
    }),
    function () {
      this.hooks.done.tap('FlattenDirectoryStructure', () => {
        shell.exec('cd public/images && mv !(images) .. && rmdir images');
      });
    },
    new ShellPlugin({
      onBuildEnd: ['node sitemap-generator.js'],
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    port: 3030, // Set the port to your preferred value
    open: true, // Open the browser window automatically
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/, // to import images and fonts
        loader: "url-loader",
        options: { limit: false },
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },
    ],
  },
};

