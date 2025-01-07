const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devServer: {
    static: './dist', // Serve files from the 'dist' directory
    port: 8080,       // The port number for the server (default is 8080)
    open: true,       // Automatically open the app in the default browser
    hot: true,        // Enable Hot Module Replacement (HMR) for live updates
  },
};
