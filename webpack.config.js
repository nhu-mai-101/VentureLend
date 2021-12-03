var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  mode: 'development',
  entry: `${SRC_DIR}/index.tsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },

  // module: {
  //   rules: [
  //     {
  //       test: /\.(ts|tsx)?/,
  //       exclude: /node_modules/,
  //       use: {
  //         loader: "babel-loader",
  //         options: {
  //           presets: [
  //             "@babel/preset-env",
  //             "@babel/preset-react"
  //           ],
  //           plugins: [
  //             ["@babel/plugin-transform-runtime",
  //               {
  //                 "regenerator": true
  //               }
  //             ]
  //           ]
  //         }
  //       }
  //     }
  //   ]
  // },
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ["babel-loader"],
        },
        {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: ["ts-loader"],
        },
        {
            test: /\.(css|scss)$/,
            use: ["style-loader", "css-loader"],
        },
        {
            test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
            use: ["file-loader"],
        },
    ],
  },
  // plugins: [
  //     new HtmlWebpackPlugin({
  //         template: path.join(__dirname, "src", "index.html"),
  //     }),
  // ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      '@mui/styled-engine': '@mui/styled-engine-sc'
    },
  },
};