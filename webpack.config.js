const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  entry: '/src/js/index.js',
  output: {
    filename: 'main.js',
    // path: path.resolve(__dirname, 'dist'),
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader', // Injects CSS into the DOM
          'css-loader',   // Translates CSS into CommonJS
          'sass-loader',    // Compiles Sass to CSS
          'source-map-loader' // Loads a source map file for easier debugging
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|JPG)$/i,
        // type: 'asset/resource',
        type: 'asset/resource',
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]',
            }
          }
        ]
      },
      {
        test: /\.mp4$/i,
        // type: 'asset/resource',
        type: 'asset/resource',
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'videos/[name].[ext]',
            }
          }
        ]
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "src/images", to: "./images" },
        { from: "src/videos", to: "./videos" },
      ]
    })
  ]
};