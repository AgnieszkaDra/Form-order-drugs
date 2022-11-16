const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        port: 5000,
      
        client: {
            overlay: true,
            
          },
      },
      performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 51200
      },

    plugins: [
    new HtmlWebpackPlugin({
        template: 'index.html'
    }),
    new CopyPlugin({
        patterns: [
            { from: "./CSS", to: "./CSS" },
        ]
    }),
],
};