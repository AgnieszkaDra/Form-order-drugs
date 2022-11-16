const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        port: 4000,
      
        client: {
            overlay: true,
            
          },
      },

    plugins: [
    new HtmlWebpackPlugin({
        template: 'index.html'
    })
],
};