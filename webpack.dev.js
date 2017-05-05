const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: process.env.NODE_ENV === 'production' ? 'eval'  : 'cheap-source-map',
  entry: path.join(__dirname, 'client/Index.js'),
  output: {
    path: path.resolve(__dirname, 'build/bundle/'),
    filename: 'bundle.js',
    publicPath: '/bundle/'
  },
  devServer: {
      historyApiFallback: {
          index: '/index.html'
      },
      contentBase: path.resolve(__dirname, 'build'),
      stats: true,
      inline: true,
      port:8000
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["env", "react"],
            plugins: ["transform-object-rest-spread"]
          },
        
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|gif|svg)$/i,
        use: [{
          loader: 'file-loader',
          options: {
              name: '[name].[ext]',
              outputPath: 'img/'
          }
        }]
      },
      {
        test: /\.png$/i,
        use: [{
          loader: 'file-loader',
          options: {
              name: '[name].[ext]',
              outputPath: 'icons/'
          }
        }]
      },
    ]
  }
}